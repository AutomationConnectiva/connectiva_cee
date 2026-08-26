import Header from '../../components/Header';
import RequestAttendanceForm from '../../components/RequestAttendanceForm';

export default function RequestAttendancePage({ searchParams }: { searchParams: Promise<{ event?: string }> }) {
  return <RequestPage searchParams={searchParams} />;
}

async function RequestPage({ searchParams }: { searchParams: Promise<{ event?: string }> }) {
  const params = await searchParams;
  const event = params.event === 'summit-2027' ? 'summit-2027' : 'expo-2026';
  const isSummit = event === 'summit-2027';
  return <main className="inner-page request-page">
    <section className={`request-page-hero ${isSummit ? 'request-page-summit' : 'request-page-expo'}`}>
      <Header variant={isSummit ? 'summit' : 'expo'} ctaLabel="Contact" ctaHref="/contact" />
      <div className="shell request-page-heading"><p className="eyebrow">Request Attendance</p><h1>Join the Banking CEE Community.</h1><p>Complimentary attendance is available to qualifying representatives of banks, financial institutions, regulators and banking associations.</p></div>
    </section>
    <section className="section-white"><div className="shell request-layout">
      <div><p className="eyebrow dark">{isSummit ? 'Digital Banking CEE Summit 2027' : 'Banking CEE Expo 2026'}</p><h2>Tell Us About You.</h2><p className="request-intro">Keep the first step simple. Once submitted, your profile is reviewed by Connectiva. If approved, you receive a private personal registration link.</p><div className="request-process"><div><strong>01</strong><span>Request Attendance</span></div><div><strong>02</strong><span>Connectiva Review</span></div><div><strong>03</strong><span>Private Registration</span></div></div></div>
      <RequestAttendanceForm event={event} variant={isSummit ? 'summit' : 'expo'} />
    </div></section>
  </main>;
}
