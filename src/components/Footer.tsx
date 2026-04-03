import { Link, useLocation } from 'react-router-dom';
import { Heart, ExternalLink } from 'lucide-react';
import { buildAssetUrl } from '@/lib/paths';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { pathname } = useLocation();

  // Hide footer on active course day pages
  if (/^\/kurs\/tag-\d+$/.test(pathname)) return null;

  const tools = [
    { name: 'ChatGPT', href: 'https://chat.openai.com' },
    { name: 'Claude', href: 'https://claude.ai', fav: true },
    { name: 'Copilot', href: 'https://copilot.microsoft.com' },
    { name: 'Duck.ai', href: 'https://duck.ai' },
    { name: 'Canva', href: 'https://www.canva.com' },
    { name: 'Perplexity', href: 'https://www.perplexity.ai' },
  ];

  return (
    <footer className="bg-white border-t border-neutral-light" role="contentinfo">
      <div className="section-padding">
        <div className="container-wide py-5">
          {/* Row 1: Logo + Nav + Tools */}
          <div className="flex flex-col gap-4 items-center mb-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full justify-between">
              <Link to="/" className="flex items-center gap-2" aria-label="Zur Startseite">
                <img src={buildAssetUrl('images/robot-hero.png')} alt="" className="w-7 h-7 rounded-md object-contain" />
                <span className="font-outfit font-bold text-neutral-dark">KI-Entdecker</span>
              </Link>
              <nav aria-label="Footer-Navigation" className="flex flex-wrap justify-center gap-x-5 gap-y-1">
                <Link to="/kurs" className="text-xs text-neutral-gray hover:text-primary-purple transition-colors">Der Kurs</Link>
                <Link to="/materialien" className="text-xs text-neutral-gray hover:text-primary-purple transition-colors">Materialien</Link>
                <Link to="/wochenplan" className="text-xs text-neutral-gray hover:text-primary-purple transition-colors">Wochenplan</Link>
                <Link to="/eltern" className="text-xs text-neutral-gray hover:text-primary-purple transition-colors">Für Eltern</Link>
              </nav>
            </div>

            {/* Tools row */}
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] text-neutral-gray/80">
              <span className="font-medium text-neutral-gray">KI-Tools:</span>
              {tools.map((tool) => (
                <a
                  key={tool.name}
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-0.5 hover:text-primary-purple transition-colors ${tool.fav ? 'font-medium text-primary-purple/70' : ''}`}
                >
                  {tool.name}
                  <ExternalLink className="w-2 h-2 opacity-30" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Legal + Copyright */}
          <div className="border-t border-neutral-light pt-3 flex flex-col items-center gap-2">
            <p className="text-[10px] text-neutral-gray/50 text-center max-w-xl leading-relaxed">
              Externe KI-Tools sind Angebote von Drittanbietern (ab 13 J., nur unter Aufsicht). Es gelten deren{' '}
              <Link to="/datenschutz" className="underline underline-offset-2 hover:text-neutral-gray transition-colors">Datenschutzbestimmungen</Link>.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] text-neutral-gray/60">
              <span>© {currentYear} KI-Entdecker</span>
              <Link to="/impressum" className="hover:text-primary-purple transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="hover:text-primary-purple transition-colors">Datenschutz</Link>
              <span className="flex items-center gap-1">
                mit{' '}
                <Heart className="w-3 h-3 text-accent-pink fill-accent-pink animate-pulse" aria-hidden="true" />{' '}
                für junge Entdecker
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
