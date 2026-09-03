'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type HeaderProps = {
  ctaLabel?: string;
  ctaHref?: string;
  variant?: 'network' | 'expo' | 'summit';
  activePage?: 'network' | 'expo' | 'summit' | 'insights' | 'partners' | 'contact';
};

export default function Header({ ctaLabel = 'Join the Network', ctaHref = '/#join', variant = 'network', activePage }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header site-header-${variant} ${scrolled ? 'site-header-scrolled' : ''}`}>
      <a className="brand" href="/" aria-label="Banking CEE Network home">
        <Image src="/images/banking-cee-logo-white.png" alt="Banking CEE Network" width={230} height={70} priority />
      </a>
      <nav className="nav" aria-label="Primary navigation">
        <a href="/" className={activePage === 'network' ? 'active' : ''}>Network</a>
        <a href="/expo" className={activePage === 'expo' ? 'active' : ''}>Expo</a>
        <a href="/summit" className={activePage === 'summit' ? 'active' : ''}>Summit</a>
        <a href="/insights" className={activePage === 'insights' ? 'active' : ''}>Insights</a>
        <a href="/partners" className={activePage === 'partners' ? 'active' : ''}>Partners</a>
        <a href="/contact" className={activePage === 'contact' ? 'active' : ''}>Contact</a>
      </nav>
      <a className="header-cta" href={ctaHref}>{ctaLabel}</a>
    </header>
  );
}