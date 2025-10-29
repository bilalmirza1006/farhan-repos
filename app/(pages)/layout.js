'use client';

import { Header } from '../(components)/layout/Header';
import { Footer } from '../(components)/layout/Footer';

/**
 * Main Site Layout
 * Used for all pages EXCEPT home-2
 * Includes Header and Footer
 */
export default function MainSiteLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
