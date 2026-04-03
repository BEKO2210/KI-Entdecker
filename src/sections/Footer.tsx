import { Sparkles, Heart, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    course: [
      { name: 'Der Kurs', href: '#course' },
      { name: '5 Tage Übersicht', href: '#course' },
      { name: 'Materialien', href: '#materials' },
      { name: 'Wochenplan', href: '#schedule' },
    ],
    info: [
      { name: 'Für Eltern', href: '#parents' },
      { name: 'Häufige Fragen', href: '#parents' },
      { name: 'Sicherheit', href: '#' },
      { name: 'Datenschutz', href: '#' },
    ],
    resources: [
      { name: 'Arbeitsblätter', href: '#materials' },
      { name: 'Prompt-Guide', href: '#' },
      { name: 'KI-Tools', href: '#' },
      { name: 'Blog', href: '#' },
    ],
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative bg-white pt-16 pb-8">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full">
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <a
                href="#"
                className="flex items-center gap-2 mb-4"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-primary-purple to-primary-teal rounded-xl">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="font-outfit font-bold text-xl text-neutral-dark">
                  KI-Entdecker
                </span>
              </a>
              <p className="text-neutral-gray text-sm mb-6 max-w-xs">
                Ein interaktiver Kurs für junge Entdecker. 
                Entdecke die Welt der Künstlichen Intelligenz – 
                spielerisch, verständlich und mit echten Projekten.
              </p>
              <a
                href="mailto:hello@ki-entdecker.de"
                className="inline-flex items-center gap-2 text-sm text-primary-purple hover:text-primary-purple/80 transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                hello@ki-entdecker.de
              </a>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="font-outfit font-bold text-neutral-dark mb-4">
                Der Kurs
              </h4>
              <ul className="space-y-3">
                {footerLinks.course.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-neutral-gray hover:text-primary-purple transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-outfit font-bold text-neutral-dark mb-4">
                Informationen
              </h4>
              <ul className="space-y-3">
                {footerLinks.info.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-neutral-gray hover:text-primary-purple transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-outfit font-bold text-neutral-dark mb-4">
                Ressourcen
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-neutral-gray hover:text-primary-purple transition-colors duration-300 flex items-center gap-1"
                    >
                      {link.name}
                      {!link.href.startsWith('#') && (
                        <ExternalLink className="w-3 h-3" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
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
                <Heart className="w-4 h-4 text-accent-pink fill-accent-pink animate-pulse" />{' '}
                für junge Entdecker
              </p>

              {/* Legal Links */}
              <div className="flex items-center gap-4">
                <button className="text-sm text-neutral-gray hover:text-primary-purple transition-colors duration-300">
                  Impressum
                </button>
                <button className="text-sm text-neutral-gray hover:text-primary-purple transition-colors duration-300">
                  Datenschutz
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
