import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, Award } from 'lucide-react';
import type { useProgress } from '../hooks/useProgress';

interface NavigationProps {
  progress: ReturnType<typeof useProgress>;
}

const Navigation = ({ progress }: NavigationProps) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(location.pathname);
  const unlockedCount = progress.getUnlockedBadgesCount();

  // Close mobile menu on route change (render-time reset, no effect needed)
  if (location.pathname !== prevPathname) {
    setPrevPathname(location.pathname);
    setIsMobileMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Der Kurs', href: '/kurs' },
    { name: 'Materialien', href: '/materialien' },
    { name: 'Für Eltern', href: '/eltern' },
    { name: 'Wochenplan', href: '/wochenplan' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3 backdrop-blur-xl bg-white/90 shadow-lg'
            : 'py-5 bg-transparent'
        }`}
        role="navigation"
        aria-label="Hauptnavigation"
      >
        <div className="section-padding">
          <div className="container-wide flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 group"
              aria-label="Zur Startseite"
            >
              <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-primary-purple to-primary-teal rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <Sparkles className="w-5 h-5 text-white" aria-hidden="true" />
                <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="font-outfit font-bold text-xl text-neutral-dark">
                KI-Entdecker
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 underline-animation ${
                    isActive(link.href)
                      ? 'text-primary-purple'
                      : 'text-neutral-gray hover:text-primary-purple'
                  }`}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                >
                  {link.name}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary-purple rounded-full" aria-hidden="true" />
                  )}
                </Link>
              ))}
            </div>

            {/* Progress Badge */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/kurs"
                className="flex items-center gap-2 px-3 py-1.5 bg-primary-purple/10 rounded-full hover:bg-primary-purple/20 transition-colors duration-300"
                aria-label={`${unlockedCount} von 5 Badges freigeschaltet`}
              >
                <Award className="w-4 h-4 text-primary-purple" aria-hidden="true" />
                <span className="text-sm font-medium text-primary-purple">
                  {unlockedCount}/5
                </span>
              </Link>
              <Link
                to="/kurs"
                className="btn-primary text-sm"
                aria-label="Kurs starten"
              >
                Kurs starten
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-neutral-light hover:bg-neutral-light/80 transition-colors duration-300"
              aria-label={isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="relative w-5 h-5">
                <Menu
                  className={`absolute inset-0 w-5 h-5 text-neutral-dark transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                  }`}
                  aria-hidden="true"
                />
                <X
                  className={`absolute inset-0 w-5 h-5 text-neutral-dark transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                  }`}
                  aria-hidden="true"
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl p-6 transition-all duration-500 ${
            isMobileMenuOpen
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 -translate-y-4 scale-95'
          }`}
        >
          {/* Progress in Mobile Menu */}
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-neutral-light">
            <span className="text-sm text-neutral-gray">Dein Fortschritt</span>
            <Link
              to="/kurs"
              className="flex items-center gap-2 px-3 py-1.5 bg-primary-purple/10 rounded-full"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label={`${unlockedCount} von 5 Badges freigeschaltet`}
            >
              <Award className="w-4 h-4 text-primary-purple" aria-hidden="true" />
              <span className="text-sm font-medium text-primary-purple">
                {unlockedCount}/5 Badges
              </span>
            </Link>
          </div>

          <div className="flex flex-col gap-2" role="menu">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                className={`w-full text-left px-4 py-3 font-medium rounded-xl transition-colors duration-300 ${
                  isActive(link.href)
                    ? 'bg-primary-purple/10 text-primary-purple'
                    : 'hover:bg-neutral-light text-neutral-dark'
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                }}
                role="menuitem"
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-neutral-light">
              <Link
                to="/kurs"
                className="w-full btn-primary text-center block"
                role="menuitem"
                aria-label="Kurs starten"
              >
                Kurs starten
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
