import { Calendar, FileText, Download, CheckCircle, FileDown, ExternalLink, Lock, Award } from 'lucide-react';
import { buildDownloadUrl, buildAssetUrl } from '@/lib/paths';
import type { useProgress } from '../hooks/useProgress';

interface MaterialienProps {
  progress: ReturnType<typeof useProgress>;
}

const Materialien = ({ progress }: MaterialienProps) => {
  const isVisible = true;
  const allCompleted = progress.getCompletedDaysCount() === 5;

  const openDownload = (path: string) => {
    window.open(buildDownloadUrl(path), '_blank');
  };

  const materials = [
    {
      id: 1,
      title: 'Wochenplan',
      description: 'Die komplette Übersicht aller 5 Kurstage mit Zeitplan, Lernzielen und benötigten Materialien.',
      icon: Calendar,
      features: [
        'Alle 15 Lektionen mit Zeitangaben',
        'Lernziele pro Kurstag',
        'Farbcodierte Lektionstypen (Lesen, Mitmachen, Übung, Projekt)',
        'Benötigte Materialien pro Tag',
        'Platz für eigene Notizen',
      ],
      color: 'text-primary-purple',
      bgColor: 'bg-primary-purple/10',
      buttonColor: 'bg-primary-purple hover:bg-primary-purple/90',
      action: 'Wochenplan öffnen',
      file: 'wochenplan.html',
    },
    {
      id: 2,
      title: 'Arbeitsblätter',
      description: 'Vier interaktive Arbeitsblätter zum Ausdrucken oder Ausfüllen am Bildschirm. Mit Lösungen für Eltern.',
      icon: FileText,
      features: [
        '4 interaktive Übungen',
        'Quiz-Fragen zum Wissen testen',
        'Kreativ-Aufgaben zum Mitmachen',
        'Lösungsblätter für Eltern',
        'Druckfreundliches Format',
      ],
      color: 'text-primary-teal',
      bgColor: 'bg-primary-teal/10',
      buttonColor: 'bg-primary-teal hover:bg-primary-teal/90',
      action: 'Arbeitsblätter öffnen',
      file: 'arbeitsblaetter.html',
    },
  ];

  const additionalResources = [
    { name: 'Prompt-Cheat-Sheet', description: 'Das 5-Sterne-Rezept und Profi-Tricks auf einen Blick', file: 'prompt-cheat-sheet.html' },
    { name: 'KI-Tools-Übersicht', description: 'Kostenlose und kindersichere KI-Tools', file: 'ki-tools-uebersicht.html' },
    { name: 'Eltern-Guide', description: 'Ausführlicher Guide mit Tipps, Regeln und Gesprächsanregungen', file: 'eltern-guide.html' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Banner */}
      <section className="relative py-16 bg-gradient-to-br from-primary-teal to-cyan-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }} />
        </div>
        
        <div className="section-padding relative z-10">
          <div className="container-wide text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-bold text-white mb-4">
              Materialien
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Arbeitsblätter, Wochenplan und zusätzliche Ressourcen für dein KI-Abenteuer.
              Alles kostenlos zum Download.
            </p>
          </div>
        </div>
      </section>

      {/* Main Materials */}
      <section className="py-16 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-8">
              {materials.map((material, index) => (
                <div
                  key={material.id}
                  className={`group transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${200 + index * 150}ms` }}
                >
                  <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-neutral-light">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 ${material.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                    >
                      <material.icon className={`w-8 h-8 ${material.color}`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-outfit font-bold text-neutral-dark mb-3">
                      {material.title}
                    </h3>
                    <p className="text-neutral-gray mb-6">
                      {material.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3 mb-8">
                      {material.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3 text-sm text-neutral-dark"
                        >
                          <CheckCircle className={`w-5 h-5 ${material.color} flex-shrink-0 mt-0.5`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Action Button */}
                    <button
                      onClick={() => openDownload(material.file)}
                      className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-medium text-white transition-all duration-300 ${material.buttonColor}`}
                      aria-label={`${material.title} öffnen`}
                    >
                      <Download className="w-5 h-5" />
                      {material.action}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-neutral-light/50">
        <div className="section-padding">
          <div className="container-wide">
            <h2 className="text-2xl font-outfit font-bold text-neutral-dark text-center mb-12">
              Zusätzliche Ressourcen
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalResources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-accent-yellow/10 rounded-xl flex items-center justify-center">
                      <FileDown className="w-5 h-5 text-accent-yellow" />
                    </div>
                  </div>
                  <h3 className="font-outfit font-bold text-neutral-dark mb-2">
                    {resource.name}
                  </h3>
                  <p className="text-sm text-neutral-gray mb-4">
                    {resource.description}
                  </p>
                  <button
                    onClick={() => openDownload(resource.file)}
                    className="flex items-center gap-2 text-sm text-primary-purple hover:text-primary-purple/80 transition-colors"
                    aria-label={`${resource.name} öffnen`}
                  >
                    <Download className="w-4 h-4" />
                    Öffnen
                  </button>
                </div>
              ))}

              {/* Zertifikat - locked until all days completed */}
              <div className={`bg-white rounded-2xl p-6 shadow-md transition-all duration-300 ${allCompleted ? 'hover:shadow-lg hover:-translate-y-1' : 'opacity-70'}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${allCompleted ? 'bg-green-100' : 'bg-neutral-light'}`}>
                    {allCompleted ? <Award className="w-5 h-5 text-green-600" /> : <Lock className="w-5 h-5 text-neutral-gray" />}
                  </div>
                </div>
                <h3 className="font-outfit font-bold text-neutral-dark mb-2">Zertifikat</h3>
                <p className="text-sm text-neutral-gray mb-4">
                  {allCompleted
                    ? 'Herzlichen Glückwunsch! Dein Zertifikat ist bereit.'
                    : `Schließe alle 5 Kurstage ab, um dein Zertifikat freizuschalten (${progress.getCompletedDaysCount()}/5).`
                  }
                </p>
                {allCompleted ? (
                  <button
                    onClick={() => openDownload('zertifikat.html')}
                    className="flex items-center gap-2 text-sm text-green-600 hover:text-green-700 transition-colors font-medium"
                  >
                    <Download className="w-4 h-4" />
                    Zertifikat herunterladen
                  </button>
                ) : (
                  <span className="flex items-center gap-2 text-sm text-neutral-gray/60">
                    <Lock className="w-4 h-4" />
                    Gesperrt
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zertifikat-Vorschau */}
      <section className="py-16 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="text-2xl sm:text-3xl font-outfit font-bold text-neutral-dark mb-3">
                Vorschau: Dein Zertifikat
              </h2>
              <p className="text-neutral-gray">
                So sieht das Zertifikat aus, das du nach Abschluss aller fünf Kurstage bekommst.
                Du erhältst es als <strong>PDF-Datei</strong> zum eigenständigen Ausdruck auf
                DIN&nbsp;A4 (Empfehlung: mindestens 160&nbsp;g/m², alternativ Copyshop). Bei
                Präsenz-Seminaren wird es vor Ort gedruckt überreicht.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-purple/5 to-primary-teal/5 rounded-3xl p-4 sm:p-8 shadow-inner border border-neutral-light">
              <picture>
                <source
                  type="image/webp"
                  srcSet={buildAssetUrl('images/preview/zertifikatvorschau.webp')}
                />
                <img
                  src={buildAssetUrl('images/preview/zertifikatvorschau.png')}
                  alt="Vorschau des KI-Entdecker Zertifikats"
                  loading="lazy"
                  decoding="async"
                  width={1600}
                  height={1054}
                  className="w-full h-auto max-w-3xl mx-auto rounded-2xl shadow-lg ring-1 ring-neutral-light/60"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* All Materials Download */}
      <section className="py-16 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="bg-gradient-to-br from-primary-purple to-primary-teal rounded-3xl p-8 sm:p-12 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileDown className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-outfit font-bold text-white mb-4">
                Alle Materialien auf einmal
              </h2>
              <p className="text-white/80 max-w-xl mx-auto mb-8">
                Lade alle Arbeitsblätter, den Wochenplan und alle Zusatzressourcen 
                als komplettes Paket herunter.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => openDownload('wochenplan.html')}
                  className="flex items-center gap-2 px-6 py-4 bg-white text-primary-purple rounded-xl font-bold hover:bg-white/90 transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Wochenplan
                </button>
                <button
                  onClick={() => openDownload('arbeitsblaetter.html')}
                  className="flex items-center gap-2 px-6 py-4 bg-white text-primary-purple rounded-xl font-bold hover:bg-white/90 transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Arbeitsblätter
                </button>
                <button
                  onClick={() => openDownload('eltern-guide.html')}
                  className="flex items-center gap-2 px-6 py-4 bg-white text-primary-purple rounded-xl font-bold hover:bg-white/90 transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Eltern-Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-neutral-light/50">
        <div className="section-padding">
          <div className="container-wide">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-outfit font-bold text-neutral-dark mb-2">
                    Fragen zu den Materialien?
                  </h3>
                  <p className="text-neutral-gray">
                    Schreib uns eine E-Mail, wir helfen dir gerne weiter.
                  </p>
                </div>
                <a
                  href="mailto:belkis.aslani@gmail.com?subject=Frage%20zu%20KI-Entdecker%20Materialien"
                  className="flex items-center gap-2 px-6 py-3 bg-neutral-light text-neutral-dark rounded-xl font-medium hover:bg-neutral-light/80 transition-colors"
                  aria-label="E-Mail an belkis.aslani@gmail.com schreiben"
                >
                  <ExternalLink className="w-5 h-5" />
                  E-Mail schreiben
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Materialien;
