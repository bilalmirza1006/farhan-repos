import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ClickEffect from './(components)/animation/clickeffect/ClickEffect';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});
export const metadata = {
  title: 'Get2Uni',
  icons: {
    icon: '/home/logo.png',
  },
};
/**
 * Root Layout - Minimal setup
 * Only provides global styles and fonts
 * Each route group has its own layout
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <ClickEffect />
      </body>
    </html>
  );
}
