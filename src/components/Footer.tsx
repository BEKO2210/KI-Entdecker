import { Link } from 'react-router-dom';
import { Sparkles, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'Der Kurs', href: '/kurs' },
    { name: 'Materialien', href: '/materialien' },
    { name: 'Wochenplan', href: '/wochenplan' },
    { name: 'Für Eltern', href: '/eltern' },
    { name: 'Impressum', href: '/impressum' },
    { name: 'Datenschutz', href: '/datenschutz' },
  ];

  return (
    <footer className="bg-white border-t border-neutral-light" role="contentinfo">
      <div className="section-padding">
        <div className="container-wide py-8">
          {/* Top: Logo + Links */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-6">
            <Link
              to="/"
              className="flex items-center gap-2"
              aria-label="Zur Startseite"
            >
              <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-primary-purple to-primary-teal rounded-lg">
                <Sparkles className="w-4 h-4 text-white" aria-hidden="true" />
              </div>
              <span className="font-outfit font-bold text-lg text-neutral-dark">
                KI-Entdecker
              </span>
            </Link>

            <nav aria-label="Footer-Navigation" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm text-neutral-gray hover:text-primary-purple transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Bottom: Copyright + Heart */}
          <div className="border-t border-neutral-light pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-neutral-gray">
              © {currentYear} KI-Entdecker. Alle Rechte vorbehalten.
            </p>
            <p className="text-xs text-neutral-gray flex items-center gap-1">
              Gemacht mit{' '}
              <Heart className="w-3.5 h-3.5 text-accent-pink fill-accent-pink animate-pulse" aria-hidden="true" />{' '}
              für junge Entdecker
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
