import Image from 'next/image';
import Header from '../components/Header';
import TestimonialSlider from '../components/TestimonialSlider';

const stats = [
  ['15+', 'Events'],
  ['20+', 'CEE Countries'],
  ['2,500+', 'Attendees'],
  ['100+', 'Technology Partners'],
];

const advisory = [
  ['Sébastien de Brouwer', 'Deputy CEO', 'European Banking Federation', '/images/advisory-sebastien-uniform.jpg'],
  ['Giuseppe Castelbuono', 'Chief Information Officer', 'ING Italia', '/images/advisory-giuseppe-uniform.jpg'],
  ['Danijela Vuksanovic', 'Board Member, CMO', 'Addiko Bank', '/images/advisory-danijela-uniform.jpg'],
  ['Davorin Okorn', 'Director Strategic Risk and Reporting', 'OTP Banka', '/images/advisory-davorin-uniform.jpg'],
  ['Daniela Bobocea', 'Head of Governance and Project Management', 'Exim Banca Românească', '/images/advisory-daniela-uniform.jpg'],
];

const logoGroups = [
  ['Banks & Financial Institutions', ['66.png','67.png','68.png','69.png','70.png','75.png','76.png','78.png'], 'banks'],
  ['Regulators & Banking Associations', ['44.png','46.png','47.png','48.png','49.png','51.png','52.png','53.png'], 'associations'],
  ['Technology Partners', ['2.png','7.png','9.png','12.png','33.png','temenos.png','comarch.png','tieto.png'], 'technology'],
];

const testimonials: [string, string, string][] = [
  ['From vendors and bankers to speakers and panelists, the level of expertise throughout the event is truly premium. Combined with a high standard of organization, it delivers a consistently top-quality experience.', 'Danijela Vuksanović', 'Addiko Bank'],
  ['After four years with Banking CEE, what stands out most is the evolution. This year’s event was excellent, with highly relevant topics.', 'Lyubomir Tankishev', 'Evrotrust'],
  ['An outstanding event in every aspect — from organization and venue to accommodation, networking and speakers. A truly well-rounded, high-quality experience.', 'Daniela Bobocea', 'Exim Banca Românească'],
  ['It was very positive. I could see that many of the people had attended multiple Banking CEE events. There’s a small community of people who are actually friends these days.', 'Donal Greene', 'Authologic'],
];

export default function Home() {
  return (
    <main id="top">
      <section className="hero">
        <Header />
        <div className="hero-media" aria-hidden="true">
          <Image src="/images/summit-networking.jpg" alt="" fill priority className="cover" />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content shell">
          <p className="eyebrow">Banking CEE Network</p>
          <h1>Connecting the Banking Community Across Central &amp; Eastern Europe</h1>
          <p className="hero-copy">Bringing together banks, financial institutions, regulators, banking associations and technology partners from across CEE to exchange knowledge, build meaningful relationships and move the industry forward.</p>
          <div className="actions">
            <a className="btn btn-primary" href="#join">Join the Network</a>
            <a className="btn btn-ghost" href="#events">Explore Our Events</a>
          </div>
          <div className="city-line">Prague · Bucharest · Budapest · Sofia · CEE</div>
        </div>
      </section>

      <section id="network" className="numbers section-light">
        <div className="shell">
          <p className="eyebrow dark">Network in Numbers</p>
          <h2>Built Across CEE. Built Over Time.</h2>
          <div className="stat-grid">
            {stats.map(([number, label]) => <div className="stat" key={label}><strong>{number}</strong><span>{label}</span></div>)}
          </div>
        </div>
      </section>

      <section className="community section-white">
        <div className="shell split-head">
          <div><p className="eyebrow dark">Shaped by the Community</p><h2>Industry Experience at the Heart of Banking CEE.</h2></div>
          <p>Our Advisory Board brings together 18+ senior industry leaders from 10+ countries, with more than 250 years of combined experience. Representing perspectives from across the banking ecosystem, the Board provides insight into the priorities, challenges and opportunities shaping the industry.</p>
        </div>
        <div className="shell advisory-grid">
          {advisory.map(([name, title, org, photo]) => (
            <article className="advisor" key={name}>
              <div className="advisor-photo"><Image src={photo} alt={name} fill className="cover" /></div>
              <div className="advisor-copy"><h3>{name}</h3><p>{title}</p><strong>{org}</strong></div>
            </article>
          ))}
        </div>
        <div className="shell inline-link"><a href="#">View the Full Advisory Board →</a></div>
      </section>

      <section className="journey section-navy">
          <div className="shell">
              <div className="journey-heading">
               <p className="eyebrow">Our Journey</p>
               <h2>From Online Beginnings to a Banking Community Across CEE.</h2>
          </div>
          <div className="journey-grid">
         <p>Banking CEE began during COVID, bringing the industry together online through dedicated summits focused on payments, lending and customer experience. In 2022, those communities came together in person for the first Banking CEE Expo in Prague — beginning a journey that has since taken us to Bucharest, Budapest and Sofia.</p>
          <div className="map-card">
          <Image src="/images/cee-map.png" alt="Map of Central and Eastern Europe highlighting the Banking CEE footprint" fill className="map-image" />
          </div>
  </div>
</div>
      </section>

      <section className="ecosystem section-light">
        <div className="shell">
          <p className="eyebrow dark">Across the Network</p><h2>Bringing the Banking Ecosystem Together.</h2>
          <div className="ecosystem-logo-groups">
            {logoGroups.map(([title, files, folder]) => <div className="logo-group" key={title as string}><h3>{title as string}</h3><div className="logo-grid">{(files as string[]).map(file => <div className="logo-cell" key={file}><Image src={`/images/logos/${folder}/${file}`} alt="" width={180} height={80} className="logo-img" /></div>)}</div></div>)}
          </div>
        </div>
      </section>

      <section id="events" className="events section-white">
        <div className="shell"><p className="eyebrow dark">Our Events</p><h2>One Network. Two Distinct Experiences.</h2></div>
        <div className="shell event-grid">
          <article className="event-card expo-card">
            <Image src="/images/expo-stage.jpg" alt="Banking CEE Expo audience and stage" fill className="cover" />
            <div className="event-shade"/><div className="event-content"><span>Banking CEE Expo — Breadth</span><h3>Banking CEE Expo</h3><p>Scale, breadth and business interaction across multiple stages, networking formats and partner activations.</p><div className="event-stats"><b>250+ <small>Attendees</small></b><b>3 <small>Stages</small></b><b>18+ <small>Hours of Content</small></b></div><a href="/expo">Explore Expo →</a></div>
          </article>
          <article className="event-card summit-card">
            <Image src="/images/summit-community.jpg" alt="Digital Banking CEE Summit community" fill className="cover" />
            <div className="event-shade"/><div className="event-content"><span>Digital Banking CEE Summit — Depth</span><h3>Digital Banking CEE Summit</h3><p>A more intimate, senior-level environment for focused digital banking conversations and closer executive networking.</p><div className="event-stats"><b>100+ <small>Attendees</small></b><b>1 <small>Main Stage</small></b><b>75%+ <small>C-Level, Directors & Heads</small></b></div><a href="/summit">Explore Summit →</a></div>
          </article>
        </div>
        <div className="shell participation"><strong>Participation by Design</strong><p>Banks, financial institutions, regulators and banking associations attend on a complimentary, qualification-based basis, while technology and solution providers participate exclusively through sponsorship. We don’t sell delegate tickets — helping us protect the audience balance at the heart of Banking CEE.</p></div>
      </section>

      <section className="balance section-navy">
        <div className="shell balance-grid"><div><p className="eyebrow">Built Differently</p><h2>Because Who&apos;s in the Room Changes the Conversation.</h2><p>Banking CEE is built around a carefully balanced audience — designed to create the right environment for relevant conversations, different perspectives and meaningful relationships.</p></div><div className="ratio"><div className="ratio-main"><strong>~70%</strong><span>Banking institutions, regulators &amp; associations</span></div><div className="ratio-side"><strong>~30%</strong><span>Technology &amp; solution providers</span></div></div></div>
      </section>

      <section className="experience section-white">
        <div className="shell"><p className="eyebrow dark">The Banking CEE Experience</p><h2>See What Banking CEE Feels Like.</h2></div>
        <div className="shell photo-grid">
          <div className="photo photo-lg"><Image src="/images/expo-audience.jpg" alt="Banking CEE audience" fill className="cover" /></div>
          <div className="photo"><Image src="/images/summit-networking.jpg" alt="Banking CEE networking" fill className="cover" /></div>
          <div className="photo"><Image src="/images/expo-sponsor.jpg" alt="Banking CEE sponsor activation" fill className="cover" /></div>
          <div className="photo photo-wide"><Image src="/images/summit-panel.jpg" alt="Digital Banking CEE Summit panel" fill className="cover" /></div>
        </div>
        <div className="shell testimonial-wrap">
          <p className="eyebrow dark">In Their Words</p>
          <TestimonialSlider items={testimonials} />
        </div>
      </section>

      <section id="insights" className="insights section-light"><div className="shell split-head"><div><p className="eyebrow dark">Beyond the Events</p><h2>The Conversations Continue.</h2></div><div><p>Insights, perspectives and conversations from the people shaping banking across CEE.</p><a className="text-link" href="#">Explore All Insights →</a></div></div><div className="shell insight-feature"><div className="insight-visual"><Image src="/images/summit-panel.jpg" alt="Banking CEE insight discussion" fill className="cover" /></div><div className="insight-copy"><span>Featured Conversation</span><h3>What banking leaders across CEE are prioritising next</h3><p>Executive perspectives drawn from the conversations shaping the Banking CEE community.</p><a href="#">Watch the Interview →</a></div></div></section>

      <section id="join" className="join section-navy"><div className="shell"><p className="eyebrow">Join Banking CEE</p><h2>Be Part of What Comes Next.</h2><p className="join-intro">Whether you&apos;re looking to exchange ideas with peers, contribute your expertise or build relationships across the banking ecosystem, there&apos;s a place for you within Banking CEE.</p><div className="join-grid"><div><span>Attend</span><h3>Banks, Financial Institutions, Regulators &amp; Associations</h3><p>Join the Banking CEE community on a complimentary, qualification-based basis.</p><a href="/request-attendance">Request Attendance →</a></div><div><span>Contribute</span><h3>Banking Leaders &amp; Industry Experts</h3><p>Share your experience, contribute to the conversation and explore speaker or Advisory Board opportunities.</p><a href="#">Get Involved →</a></div><div id="partners"><span>Partner</span><h3>Technology &amp; Solution Providers</h3><p>Build meaningful relationships with banking leaders across CEE through Banking CEE partnership opportunities.</p><a href="#">Explore Partnerships →</a></div></div></div></section>

      <footer id="contact" className="footer"><div className="shell footer-main"><div className="footer-brand"><Image src="/images/banking-cee-logo-white.png" alt="Banking CEE Network" width={210} height={65}/><p>Connecting the banking community across Central &amp; Eastern Europe.</p></div><div><strong>Explore</strong><a href="/">Network</a><a href="/expo">Banking CEE Expo</a><a href="/summit">Digital Banking CEE Summit</a><a href="/insights">Insights</a><a href="/partners">Partners</a><a href="/contact">Contact</a></div><div><strong>Participate</strong><a href="/request-attendance">Attend</a><a href="/contact?interest=speaking">Speak</a><a href="#">Advisory Board</a><a href="/partners">Partner</a></div><div><strong>Our Events</strong><p><b>Banking CEE Expo</b><br/>Prague</p><a href="/expo">Explore Expo →</a><p><b>Digital Banking CEE Summit</b><br/>May 2027</p><a href="/summit">Explore Summit →</a></div><div><strong>Connect</strong><a href="mailto:info@bancee.eu">info@bancee.eu</a><a href="#">LinkedIn</a><a href="#">YouTube</a></div></div><div className="shell footer-bottom"><span>© 2026 Connectiva Conferences &amp; Events. All rights reserved.</span><span><a href="/privacy-policy">Privacy Policy</a> · <a href="/terms-and-conditions">Terms &amp; Conditions</a> · #BANCEE · A Connectiva Network</span></div></footer>
    </main>
  );
}
