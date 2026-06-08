import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Impact', href: '#impact' },
    { label: 'Events', href: '#events' },
    { label: 'Join Us', href: '#join' },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink/95 backdrop-blur-sm shadow-lg'
          : 'bg-ink'
      }`}
      style={{ padding: scrolled ? '10px 0' : '16px 0' }}
    >
      <div
        className="flex justify-between items-center mx-auto"
        style={{
          maxWidth: '1200px',
          padding: '0 clamp(24px, 6vw, 80px)',
        }}
      >
        {/* Logo */}
        <a href="#" className="font-display text-xl text-chalk no-underline tracking-wide">
          In<span className="text-saffron">Amigos</span>{' '}
          <span className="font-light opacity-70">Foundation</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-7 list-none">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-dust hover:text-saffron transition-colors duration-200 text-sm font-body font-medium no-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Donate CTA (desktop) */}
        <a
          href="https://rzp.io/l/kWQ87HP"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex btn-primary"
          style={{ height: '40px', padding: '0 20px', fontSize: '0.85rem' }}
          id="nav-donate-btn"
        >
          Donate
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          id="mobile-menu-btn"
        >
          <span className={`block w-6 h-0.5 bg-chalk transition-transform duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-chalk transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-chalk transition-transform duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <ul
              className="flex flex-col gap-4 list-none mx-auto"
              style={{
                maxWidth: '1200px',
                padding: '20px clamp(24px, 6vw, 80px) 16px',
              }}
            >
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-chalk/70 hover:text-saffron text-base font-body no-underline transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://rzp.io/l/kWQ87HP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex mt-2"
                  style={{ height: '40px', padding: '0 20px', fontSize: '0.85rem' }}
                >
                  Donate Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
