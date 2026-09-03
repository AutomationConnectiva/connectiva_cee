import Header from '../../components/Header';
import Footer from '../../components/Footer';
import InsightsExplorer from '../../components/InsightsExplorer';

export default function Insights(){return <main className="inner-page insights-page">
  <section className="insights-hero">
    <Header activePage="insights"/><div className="shell insights-hero-content"><p className="eyebrow">Banking CEE Insights</p><h1>Perspectives From Across the CEE Banking Community.</h1><p>Interviews, discussions and insights from the banking leaders and industry experts shaping financial services across Central &amp; Eastern Europe.</p></div></section>
  <section className="section-white insights-explore"><div className="shell"><p className="eyebrow dark">Latest Insights</p><h2>Explore the Conversations Shaping Banking Across CEE.</h2><InsightsExplorer/></div></section>
  <section className="insights-newsletter" id="newsletter"><div className="shell newsletter-layout"><div><p className="eyebrow dark">Stay Connected</p><h2>Banking CEE Insights, Direct to Your Inbox.</h2><p>Stay connected with the latest perspectives, conversations and updates from across the Banking CEE community.</p></div><form className="newsletter-form"><div><input type="email" placeholder="YOUR EMAIL ADDRESS" aria-label="Your email address"/><button type="button">SUBSCRIBE →</button></div><small>By subscribing, you agree to receive Banking CEE communications. You can unsubscribe at any time.</small></form></div></section>
  <Footer/>
</main>}
