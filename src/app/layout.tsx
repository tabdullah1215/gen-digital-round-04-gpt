import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'Harbor Digital', template: '%s | Harbor Digital' },
  description: 'Security and privacy subscriptions for your connected life.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-white font-sans text-stone-900 antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:block focus:p-3">Skip to content</a>
        <header className="border-b border-stone-200">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
            <Link href="/" className="text-xl font-semibold tracking-tight">Harbor Digital</Link>
            <span className="text-sm text-stone-500">Protection for everyday life</span>
          </div>
        </header>
        <main id="main" className="mx-auto max-w-6xl px-6 py-10">{children}</main>
        <footer className="mt-10 border-t border-stone-200 px-6 py-8 text-center text-sm text-stone-500">
          Harbor Secure &amp; Cedar Privacy · All prices in USD, before tax
        </footer>
      </body>
    </html>
  );
}
