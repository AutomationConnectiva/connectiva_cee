'use client';

import { ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { agendaConfig } from '../data/agendaConfig';
import { agendaDays, sponsorAssets, type AgendaSession } from '../data/agendaData';
import styles from './agenda.module.css';

const labels: Record<AgendaSession['type'], string> = {
  keynote: 'KEYNOTE',
  sponsored: 'SPONSORED SESSION',
  panel: 'PANEL DISCUSSION',
  break: 'BREAK',
  other: '',
};

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`${styles.reveal} ${visible ? styles.revealVisible : ''} ${className}`}>{children}</div>;
}

function Session({ session }: { session: AgendaSession }) {
  const [open, setOpen] = useState(false);
  const isBreak = session.type === 'break' || session.type === 'other';

  if (isBreak) {
    return (
      <div className={session.type === 'break' ? styles.breakRow : styles.simpleRow}>
        <span className={styles.time}>{session.time}</span>
        <span>{session.title}</span>
      </div>
    );
  }

  return (
    <div className={styles.session}>
      <div className={styles.time}>{session.time}</div>
      <div className={styles.sessionBody}>
        <span className={`${styles.typeTag} ${styles[session.type]}`}>{labels[session.type]}</span>
        <h4>{session.title}</h4>
        {session.discussionPoints?.length ? (
          <>
            <button className={styles.discussionToggle} onClick={() => setOpen((v) => !v)} aria-expanded={open}>
              {open ? 'Hide discussion points -' : 'View discussion points +'}
            </button>
            <div className={`${styles.pointsWrap} ${open ? styles.pointsOpen : ''}`}>
              <ul className={styles.points}>
                {session.discussionPoints.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </div>
          </>
        ) : null}
        {/* Future speaker layer: populate session.moderator / session.speakers in agendaData.ts and render here. */}
      </div>
    </div>
  );
}

export default function AgendaPage() {
  const [dayId, setDayId] = useState<string>('day1');
  const day = agendaDays.find((d) => d.id === dayId)!;
  const defaultStage = day.stages[0].id;
  const [stageByDay, setStageByDay] = useState<Record<string, string>>({ day1: 'main', day2: 'digital' });
  const stageId = stageByDay[dayId] || defaultStage;
  const stage = useMemo(() => day.stages.find((s) => s.id === stageId) || day.stages[0], [day, stageId]);

  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroGlowA} />
        <div className={styles.heroGlowB} />
        <div className={styles.heroInner}>
          <div className={styles.heroBrandRow}>
            <img src="/brand/banking-cee-network-white.png" alt="Banking CEE Network" className={styles.logo} />
            <span className={styles.editionPill}>5TH ANNIVERSARY EDITION</span>
          </div>
          <div className={styles.eyebrow}>BANKING CEE EXPO 2026</div>
          <h1>{agendaConfig.pageTitle}</h1>
          <div className={styles.meta}>{agendaConfig.date} <span>·</span> {agendaConfig.location}</div>
          <p className={styles.heroDescription}>Two days of strategic discussions, practical case studies and peer-level exchange bringing together banking leaders, regulators and technology partners from across Central &amp; Eastern Europe.</p>
          <div className={styles.heroStats} aria-label="Event highlights">
            <div><strong>250+</strong><span>Attendees</span></div>
            <div><strong>50+</strong><span>Speakers</span></div>
            <div><strong>3</strong><span>Stages</span></div>
            <div><strong>18+</strong><span>Hours of Content</span></div>
            <div><strong>20+</strong><span>CEE Countries</span></div>
          </div>
          <div className={styles.heroActions}>
            <a className={styles.heroPrimary} href={agendaConfig.links.attendance}>Request Complimentary Attendance -&gt;</a>
            <a className={styles.heroSecondary} href={agendaConfig.links.expo}>Explore the Expo -&gt;</a>
          </div>
          <div className={styles.attendanceNote}>Complimentary attendance is available for qualifying representatives of banks, financial institutions and regulatory authorities.</div>
        </div>
      </header>

      <section className={styles.agendaShell}>
        <div className={styles.stickyNav}>
          <div className={styles.dayTabs} role="tablist" aria-label="Agenda days">
            {agendaDays.map((d) => (
              <button key={d.id} onClick={() => setDayId(d.id)} className={d.id === dayId ? styles.activeDay : ''}>
                <strong>{d.label}</strong><span>{d.date}</span>
              </button>
            ))}
          </div>

          <div className={styles.stageTabs} role="tablist" aria-label="Agenda stages">
            {day.stages.map((s) => (
              <button key={s.id} onClick={() => setStageByDay((v) => ({ ...v, [dayId]: s.id }))} className={s.id === stage.id ? styles.activeStage : ''}>
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <Reveal>
          <div className={styles.stageHeader}>
            <div>
              <span>{day.label} · {day.date}</span>
              <h2>{stage.label}</h2>
            </div>
            {stage.intro && <p>{stage.intro}</p>}
          </div>
        </Reveal>

        {stage.opening?.map((session) => <Session key={`${session.time}-${session.title}`} session={session} />)}

        <div className={styles.modules}>
          {stage.modules.map((module, index) => {
             const sponsor = module.sponsor ? sponsorAssets[module.sponsor as keyof typeof sponsorAssets] : null;            return (
              <Reveal key={module.id}>
                <article className={styles.module}>
                  <div className={styles.moduleHeader}>
                    <div>
                      <span className={styles.moduleIndex}>THEMATIC MODULE {String(index + 1).padStart(2, '0')}</span>
                      <h3>{module.title}</h3>
                    </div>
                    {sponsor && (
                      <div className={styles.sponsorBox}>
                        <span>Thematic Module Partner</span>
                        <img src={sponsor.logo} alt={sponsor.name} />
                      </div>
                    )}
                  </div>
                  <div className={styles.sessions}>
                    {module.sessions.map((session) => <Session key={`${module.id}-${session.time}-${session.title}`} session={session} />)}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {stage.closing?.map((session) => <Session key={`${session.time}-${session.title}`} session={session} />)}

        {dayId === 'day1' && (
          <Reveal>
            <div className={styles.midCta}>
              <div>
                <span>JOIN THE CONVERSATION IN PRAGUE</span>
                <strong>Complimentary attendance is available for qualifying banking professionals and regulators.</strong>
              </div>
              <a href={agendaConfig.links.attendance}>REQUEST ATTENDANCE -&gt;</a>
            </div>
          </Reveal>
        )}
      </section>

      <section className={styles.discover}>
        <Reveal>
          <div className={styles.sectionHead}>
            <span>DISCOVER BANKING CEE EXPO 2026</span>
            <h2>Meet the community behind the programme.</h2>
            <p>Continue exploring the people and organisations shaping Banking CEE Expo 2026.</p>
          </div>
        </Reveal>
        <div className={styles.discoverGrid}>
          <Reveal><a href={agendaConfig.links.speakers}><em>WHO WILL I MEET?</em><strong>Speakers</strong><span>Meet the banking leaders and industry experts joining the programme.</span><b>VIEW SPEAKERS -&gt;</b></a></Reveal>
          <Reveal><a href={agendaConfig.links.advisoryBoard}><em>WHO SHAPES THE PROGRAMME?</em><strong>Advisory Board</strong><span>Meet the executives helping shape the Banking CEE community and programme.</span><b>MEET THE ADVISORY BOARD -&gt;</b></a></Reveal>
          <Reveal><a href={agendaConfig.links.partners}><em>WHO IS INVOLVED?</em><strong>Partners</strong><span>Discover the technology and institutional partners supporting the Expo.</span><b>VIEW PARTNERS -&gt;</b></a></Reveal>
        </div>
      </section>

      <section className={styles.conversionSection}>
        <Reveal>
          <div className={styles.sectionHeadDark}>
            <span>YOUR NEXT STEP</span>
            <h2>Interested in Banking CEE Expo 2026?</h2>
            <p>Choose the route that best fits how you want to engage with the Banking CEE community.</p>
          </div>
        </Reveal>
        <div className={styles.conversionGrid}>
          <Reveal>
            <a className={styles.conversionCard} href={agendaConfig.links.expo}>
              <span className={styles.cardNumber}>01</span>
              <h3>Explore the Expo</h3>
              <p>Discover the event experience, community and what to expect in Prague.</p>
              <b>EXPLORE THE EXPO -&gt;</b>
            </a>
          </Reveal>
          <Reveal>
            <a className={`${styles.conversionCard} ${styles.conversionPrimary}`} href={agendaConfig.links.attendance}>
              <span className={styles.cardNumber}>02</span>
              <h3>Attend the Expo</h3>
              <p>Represent a bank, financial institution or regulatory authority? Complimentary attendance is available for qualifying professionals.</p>
              <b>REQUEST COMPLIMENTARY ATTENDANCE -&gt;</b>
            </a>
          </Reveal>
          <Reveal>
            <a className={styles.conversionCard} href={agendaConfig.links.partnerships}>
              <span className={styles.cardNumber}>03</span>
              <h3>Partner With Us</h3>
              <p>Represent a technology or solution provider? Explore opportunities to engage with banking decision-makers across CEE.</p>
              <b>EXPLORE PARTNERSHIPS -&gt;</b>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Replace this fallback footer with the live website's shared SiteFooter component during integration. */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <img src="/brand/banking-cee-network-white.png" alt="Banking CEE Network" />
            <p>Connecting the banking community across Central &amp; Eastern Europe.</p>
          </div>
          <div className={styles.footerColumn}>
            <strong>EXPLORE</strong>
            <a href={agendaConfig.links.network}>Network</a>
            <a href={agendaConfig.links.expo}>Banking CEE Expo</a>
            <a href={agendaConfig.links.summit}>Digital Banking CEE Summit</a>
            <a href={agendaConfig.links.insights}>Insights</a>
            <a href={agendaConfig.links.partnersPage}>Partners</a>
            <a href={agendaConfig.links.contact}>Contact</a>
          </div>
          <div className={styles.footerColumn}>
            <strong>PARTICIPATE</strong>
            <a href={agendaConfig.links.attendance}>Attend</a>
            <a href={agendaConfig.links.speaking}>Speak</a>
            <a href={agendaConfig.links.advisoryBoard}>Advisory Board</a>
            <a href={agendaConfig.links.partnerships}>Partner</a>
          </div>
          <div className={styles.footerColumn}>
            <strong>OUR EVENTS</strong>
            <a href={agendaConfig.links.expo}>Banking CEE Expo — Prague</a>
            <a href={agendaConfig.links.summit}>Digital Banking CEE Summit — May 2027</a>
          </div>
          <div className={styles.footerColumn}>
            <strong>CONNECT</strong>
            <a href="mailto:info@bancee.eu">info@bancee.eu</a>
            <a href={agendaConfig.links.linkedin}>LinkedIn</a>
            <a href={agendaConfig.links.youtube}>YouTube</a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span>© 2026 Connectiva Conferences &amp; Events. All rights reserved.</span>
          <div><a href={agendaConfig.links.privacy}>Privacy Policy</a><span>·</span><a href={agendaConfig.links.terms}>Terms &amp; Conditions</a><span>·</span><span>#BANCEE</span><span>·</span><span>A Connectiva Network</span></div>
        </div>
      </footer>
    </main>
  );
}