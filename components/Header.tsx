'use client';

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[var(--card)] shadow-md border-b border-[var(--border)] text-[var(--foreground)]">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-3xl font-bold text-[var(--accent)]">
          Soflake
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-lg transition">
          <Link href="/products" className="hover:text-[var(--accent)] py-2">Products</Link>
          <Link href="/solutions" className="hover:text-[var(--accent)] py-2">Solutions</Link>
          <Link href="/pricing" className="hover:text-[var(--accent)] py-2">Pricing</Link>
          <Link href="/contact-sales" className="hover:text-[var(--accent)] py-2">Contact Sales</Link>
          <Link
            href="/signin"
            className="bg-[var(--accent)] hover:opacity-90 text-white px-4 py-2 rounded transition"
          >
            Sign In
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <svg className="w-8 h-8 text-[var(--foreground)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-[var(--card)] px-6 pb-4 text-lg space-y-2">
          <Link href="/products" onClick={() => setIsOpen(false)} className="hover:text-[var(--accent)] transition">Products</Link>
          <Link href="/solutions" onClick={() => setIsOpen(false)} className="hover:text-[var(--accent)] transition">Solutions</Link>
          <Link href="/pricing" onClick={() => setIsOpen(false)} className="hover:text-[var(--accent)] transition">Pricing</Link>
          <Link href="/contact-sales" onClick={() => setIsOpen(false)} className="hover:text-[var(--accent)] transition">Contact Sales</Link>
          <Link
            href="/signin"
            onClick={() => setIsOpen(false)}
            className="bg-[var(--accent)] hover:opacity-90 text-white px-4 py-2 rounded transition"
          >
            Sign In
          </Link>
        </div>
      )}
    </header>
  );
}
