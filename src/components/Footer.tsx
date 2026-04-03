import { Link } from 'react-router-dom';
import { Heart, ExternalLink } from 'lucide-react';
import { buildAssetUrl, buildDownloadUrl } from '@/lib/paths';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const tools = [
    { name: 'ChatGPT', href: 'https://chat.openai.com' },
    { name: 'Copilot', href: 'https://copilot.microsoft.com' },
    { name: 'Duck.ai', href: 'https://duck.ai' },
    { name: 'Canva', href: 'https://www.canva.com' },
    { name: 'Perplexity', href: 'https://www.perplexity.ai' },
  ];

  return (
    <footer className="bg-white border-t border-neutral-light" role="contentinfo">
      <div className="section-padding">
        <div className="container-wide py-8">
          {/* Top: Logo + Site Links */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-6">
            <Link
              to="/"
              className="flex items-center gap-2"
              aria-label="Zur Startseite"
            >
              <img
                src={buildAssetUrl('images/robot-hero.png')}
                alt=""
                className="w-8 h-8 rounded-lg object-contain"
              />
              <span className="font-outfit font-bold text-lg text-neutral-dark">
                KI-Entdecker
              </span>
            </Link>

            <nav aria-label="Footer-Navigation" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link to="/kurs" className="text-sm text-neutral-gray hover:text-primary-purple transition-colors">Der Kurs</Link>
              <Link to="/materialien" className="text-sm text-neutral-gray hover:text-primary-purple transition-colors">Materialien</Link>
              <Link to="/wochenplan" className="text-sm text-neutral-gray hover:text-primary-purple transition-colors">Wochenplan</Link>
              <Link to="/eltern" className="text-sm text-neutral-gray hover:text-primary-purple transition-colors">Für Eltern</Link>
            </nav>
          </div>

          {/* KI-Tools - external links */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-6 py-4 border-t border-b border-neutral-light/80">
            <span className="text-xs font-medium text-neutral-dark">Empfohlene KI-Tools:</span>
            {tools.map((tool) => (
              <a
                key={tool.name}
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-neutral-gray hover:text-primary-purple transition-colors"
              >
                {tool.name}
                <ExternalLink className="w-2.5 h-2.5 opacity-40" aria-hidden="true" />
              </a>
            ))}
            <button
              onClick={() => window.open(buildDownloadUrl('ki-tools-uebersicht.html'), '_blank')}
              className="text-xs text-primary-purple hover:text-primary-purple/70 transition-colors font-medium"
            >
              Alle Tools anzeigen
            </button>
          </div>

          {/* Legal note + links */}
          <div className="text-center mb-5">
            <p className="text-[11px] text-neutral-gray/70 max-w-2xl mx-auto leading-relaxed">
              Die oben verlinkten KI-Tools sind externe Angebote von Drittanbietern.
              KI-Entdecker hat keinen Einfluss auf deren Inhalte, Datenschutz oder Verfügbarkeit.
              Die meisten Tools erfordern ein Mindestalter von 13 Jahren – Kinder sollten sie
              nur unter Aufsicht der Eltern nutzen. Es gelten die jeweiligen Nutzungsbedingungen
              und Datenschutzrichtlinien der Anbieter. Weitere Hinweise finden Sie in
              unserer{' '}
              <Link to="/datenschutz" className="underline underline-offset-2 hover:text-primary-purple transition-colors">
                Datenschutzerklärung
              </Link>
              {' '}und im{' '}
              <Link to="/eltern" className="underline underline-offset-2 hover:text-primary-purple transition-colors">
                Eltern-Guide
              </Link>.
            </p>
          </div>

          {/* Bottom: Copyright + Legal + Heart */}
          <div className="border-t border-neutral-light pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-neutral-gray">
              © {currentYear} KI-Entdecker. Alle Rechte vorbehalten.
            </p>

            <nav aria-label="Rechtliche Links" className="flex items-center gap-4 text-xs text-neutral-gray">
              <Link to="/impressum" className="hover:text-primary-purple transition-colors">Impressum</Link>
              <span className="text-neutral-light">|</span>
              <Link to="/datenschutz" className="hover:text-primary-purple transition-colors">Datenschutz</Link>
            </nav>

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
