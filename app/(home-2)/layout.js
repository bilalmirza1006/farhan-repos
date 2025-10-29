'use client';

import React from 'react';
import Home2Header from '../(components)/layout/Home2Header';

/**
 * Home-2 Layout - Completely Isolated
 * This layout is independent from the main site
 * Has its own custom header, no footer
 */
export default function Home2Layout({ children }) {
  return (
    <div className="home-2-container">
      <Home2Header />
      <main>{children}</main>
    </div>
  );
}

