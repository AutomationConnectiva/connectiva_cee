'use client';
import { FormEvent, useState } from 'react';

type Props = { event?: 'expo-2026' | 'summit-2027'; compact?: boolean; variant?: 'network' | 'expo' | 'summit' };

export default function RequestAttendanceForm({ event = 'expo-2026', compact = false, variant = 'network' }: Props) {
  const [state, setState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('sending'); setMessage('');
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    const res = await fetch('/api/attendance/request', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    const data = await res.json();
    if (res.ok) { setState('success'); setMessage(data.message); form.reset(); }
    else { setState('error'); setMessage(data.error || 'Something went wrong. Please try again.'); }
  }

  if (state === 'success') return <div className={`request-success request-success-${variant}`}><strong>Thank you for your interest.</strong><p>{message}</p></div>;

  return <form className={`${compact ? 'request-mini-form' : 'request-full-form'} request-form-${variant}`} onSubmit={submit}>
    <input type="hidden" name="event" value={event} />
    <input type="hidden" name="source" value={compact ? `${variant}-page` : 'request-attendance-page'} />
    <label><span>First Name*</span><input name="firstName" required autoComplete="given-name" /></label>
    <label><span>Last Name*</span><input name="lastName" required autoComplete="family-name" /></label>
    <label><span>Job Title*</span><input name="jobTitle" required autoComplete="organization-title" /></label>
    <label><span>Company / Organisation*</span><input name="organisation" required autoComplete="organization" /></label>
    <label><span>Business Email*</span><input name="email" type="email" required autoComplete="email" /></label>
    <label><span>Country*</span><input name="country" required autoComplete="country-name" /></label>
    {!compact && <label><span>LinkedIn Profile</span><input name="linkedin" type="url" placeholder="https://www.linkedin.com/in/..." /></label>}
    {!compact && <label className="form-wide"><span>Anything you&apos;d like us to know?</span><textarea name="message" rows={4} /></label>}
    {!compact && <label className="form-wide consent-line"><input name="privacy" value="accepted" type="checkbox" required /><span>I acknowledge the Privacy Policy and understand that Connectiva will process my information to review and respond to my attendance request.</span></label>}
    <button disabled={state === 'sending'} type="submit">{state === 'sending' ? 'Submitting…' : 'Request Attendance'}</button>
    {state === 'error' && <p className="form-error">{message}</p>}
  </form>;
}
