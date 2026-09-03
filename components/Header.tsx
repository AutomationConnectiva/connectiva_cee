'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type HeaderProps = {
  ctaLabel?: string;
  ctaHref?: string;
  variant?: 'network' | 'expo' | 'summit';
};

export default function Header({ ctaLabel = 'Join the Network', ctaHref = '/#join', variant = 'network' }: HeaderProps) {
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
        <a href="/">Network</a>
        <a href="/expo">Expo</a>
        <a href="/summit">Summit</a>
        <a href="/insights">Insights</a>
        <a href="/partners">Partners</a>
        <a href="/contact">Contact</a>
      </nav>
      <a className="header-cta" href={ctaHref}>{ctaLabel}</a>
    </header>
  );
}