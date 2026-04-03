import { Link } from 'react-router-dom';
import { Sparkles, Heart, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    course: [
      { name: 'Der Kurs', href: '/kurs' },
      { name: '5 Tage Übersicht', href: '/kurs' },
      { name: 'Materialien', href: '/materialien' },
      { name: 'Wochenplan', href: '/wochenplan' },
    ],
    info: [
      { name: 'Für Eltern', href: '/eltern' },
      { name: 'Häufige Fragen', href: '/eltern' },
    ],
    legal: [
      { name: 'Impressum', href: '/impressum' },
      { name: 'Datenschutz', href: '/datenschutz' },
    ],
  };

  return (
    <footer className="relative bg-white pt-16 pb-8" role="contentinfo">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full" aria-hidden="true">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 32.5C840 35 960 40 1080 42.5C1200 45 1320 45 1380 45L1440 45V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V60Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="section-padding">
        <div className="container-wide">
          {/* Main Footer Content */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link
                to="/"
                className="flex items-center gap-2 mb-4"
                aria-label="Zur Startseite"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-primary-purple to-primary-teal rounded-xl">
                  <Sparkles className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <span className="font-outfit font-bold text-xl text-neutral-dark">
                  KI-Entdecker
                </span>
              </Link>
              <p className="text-neutral-gray text-sm mb-6">
                Ein interaktiver Kurs für junge Entdecker. 
                Entdecke die Welt der Künstlichen Intelligenz – 
                spielerisch, verständlich und mit echten Projekten.
              </p>
              <a
                href="mailto:belkis.aslani@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-primary-purple hover:text-primary-purple/80 transition-colors duration-300"
                aria-label="E-Mail an belkis.aslani@gmail.com senden"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                belkis.aslani@gmail.com
              </a>
            </div>

            {/* Links Columns */}
            <nav aria-label="Kurs-Navigation">
              <h4 className="font-outfit font-bold text-neutral-dark mb-4">
                Der Kurs
              </h4>
              <ul className="space-y-3">
                {footerLinks.course.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-neutral-gray hover:text-primary-purple transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Informations-Navigation">
              <h4 className="font-outfit font-bold text-neutral-dark mb-4">
                Informationen
              </h4>
              <ul className="space-y-3">
                {footerLinks.info.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-neutral-gray hover:text-primary-purple transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Rechtliche Navigation">
              <h4 className="font-outfit font-bold text-neutral-dark mb-4">
                Rechtliches
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-neutral-gray hover:text-primary-purple transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Divider */}
          <div className="border-t border-neutral-light pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <p className="text-sm text-neutral-gray text-center sm:text-left">
                © {currentYear} KI-Entdecker. Alle Rechte vorbehalten.
              </p>

              {/* Made with Love */}
              <p className="text-sm text-neutral-gray flex items-center gap-1">
                Gemacht mit{' '}
                <Heart className="w-4 h-4 text-accent-pink fill-accent-pink animate-pulse" aria-hidden="true" />{' '}
                für junge Entdecker
              </p>

              {/* Legal Links */}
              <nav aria-label="Footer-Legal-Navigation" className="flex items-center gap-4">
                <Link
                  to="/impressum"
                  className="text-sm text-neutral-gray hover:text-primary-purple transition-colors duration-300"
                >
                  Impressum
                </Link>
                <Link
                  to="/datenschutz"
                  className="text-sm text-neutral-gray hover:text-primary-purple transition-colors duration-300"
                >
                  Datenschutz
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
