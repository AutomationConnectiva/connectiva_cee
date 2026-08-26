import { NextResponse } from 'next/server';
import { createRegistrationToken, eventLabel, readRequests, sendEmail, verifyDecisionToken, writeRequests } from '../../../../lib/attendance';
export const runtime = 'nodejs';

function page(title: string, message: string) {
  return new Response(`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${title}</title><style>body{font-family:Arial,sans-serif;background:#071b35;color:white;margin:0;padding:60px}.box{max-width:680px;margin:8vh auto;background:white;color:#0d1726;padding:42px}h1{font-size:36px}.mark{color:#1f9d78;font-weight:700}</style></head><body><div class="box"><div class="mark">Banking CEE Network</div><h1>${title}</h1><p>${message}</p></div></body></html>`, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
}

export async function GET(req: Request) {
  const url = new URL(req.url); const id = url.searchParams.get('id'); const action = url.searchParams.get('action') as 'approve'|'decline'|null; const token = url.searchParams.get('token'); const expires = Number(url.searchParams.get('expires'));
  if (!id || !action || !token || !expires || !['approve','decline'].includes(action)) return page('Invalid review link', 'This attendance review link is incomplete.');
  if (!verifyDecisionToken(id, action, expires, token)) return page('Review link expired or invalid', 'Please open the latest attendance request email or review the applicant in the admin system.');
  const all = await readRequests(); const index = all.findIndex(x => x.id === id); if (index < 0) return page('Request not found', 'The attendance request could not be found.');
  const item = all[index];
  if (item.status !== 'under_review') return page('Request already reviewed', `${item.firstName} ${item.lastName} is already marked as ${item.status.replace('_',' ')}.`);
  item.reviewedAt = new Date().toISOString();
  if (action === 'decline') { item.status = 'declined'; all[index] = item; await writeRequests(all); return page('Attendance request declined', `${item.firstName} ${item.lastName} has been marked as not qualified / declined. No automatic decline email has been sent.`); }
  item.status = 'approved'; item.registrationToken = createRegistrationToken(); all[index] = item; await writeRequests(all);
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'; const registrationUrl = `${base}/register/delegate/${item.registrationToken}`;
  await sendEmail(item.email, `Your attendance has been approved — ${eventLabel(item.event)}`, `<p>Hi ${item.firstName},</p><p>We’re pleased to confirm that your attendance request for <strong>${eventLabel(item.event)}</strong> has been approved.</p><p>Please complete your registration using your personal link below:</p><p><a href="${registrationUrl}" style="padding:13px 20px;background:#53ef7a;color:#071b35;text-decoration:none;font-weight:700">COMPLETE YOUR REGISTRATION</a></p><p>This registration link is personal to you and should not be shared.</p><p>Banking CEE Network</p>`);
  return page('Participation approved', `${item.firstName} ${item.lastName} has been approved. A private personal registration link has been generated and the registration invitation has been sent automatically.`);
}
