import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Banking CEE Network | Connecting Banking Leaders Across CEE',
  description: 'Banking CEE Network connects banks, regulators, associations and technology partners across Central & Eastern Europe.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
