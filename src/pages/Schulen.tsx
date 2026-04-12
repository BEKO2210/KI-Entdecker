import { School, Clock3, Target, ClipboardList, ShieldCheck, MonitorSmartphone, Handshake, Mail, MapPin } from 'lucide-react';

const Schulen = () => {
  const classLevels = [
    'Klasse 3–4: Grundlagen, erste Prompts, sichere Nutzung',
    'Klasse 5–6: Prompt-Techniken, kreative Aufgaben, Reflexion',
    'Klasse 7–8: Vertiefung mit Projektaufgaben und Quellenprüfung',
  ];

  const goals = [
    'Verstehen, was KI kann – und was nicht',
    'Prompts strukturiert formulieren und Ergebnisse verbessern',
    'KI-Antworten kritisch prüfen (Faktencheck, Quellen, Bias)',
    'KI sinnvoll für Schule einsetzen: Ideen, Zusammenfassungen, Lernhilfe',
    'Datenschutz und verantwortungsvolle Nutzung im Schulalltag anwenden',
  ];

  const preparation = [
    'Technik-Check vorab (WLAN, Beamer oder Anzeige auf Tablets/PCs)',
    'Raum mit Tafel/Whiteboard und Platz für kurze Gruppenarbeit',
    'Einverständnis- und Datenschutzhinweise intern mit Schulleitung klären',
    'Lehrkraft bleibt während des Workshops als pädagogische Begleitung dabei',
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="relative py-16 bg-gradient-to-br from-primary-purple to-primary-teal overflow-hidden">
        <div className="section-padding relative z-10">
          <div className="container-wide max-w-4xl text-white">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <School className="w-4 h-4" />
              Für Schulen / Für Lehrkräfte
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-bold mb-4">
              KI-Workshops für Schulen in der Region Ludwigsburg
            </h1>
            <p className="text-white/90 text-lg leading-relaxed">
              Praxisnahe Workshops für Klassenstufen 3 bis 8. Realistisch planbar für den Schulalltag,
              mit klarem Fokus auf Medienkompetenz, Datenschutz und verantwortungsvoller KI-Nutzung.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm bg-white/15 rounded-full px-4 py-2">
              <MapPin className="w-4 h-4" />
              Vor Ort in Ludwigsburg & Umgebung, auf Anfrage auch digital
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="section-padding">
          <div className="container-wide grid lg:grid-cols-2 gap-8">
            <div className="bg-neutral-light rounded-2xl p-6">
              <h2 className="text-xl font-outfit font-bold text-neutral-dark mb-4 flex items-center gap-2">
                <School className="w-5 h-5 text-primary-purple" />
                Für welche Klassenstufen?
              </h2>
              <ul className="space-y-3 text-neutral-dark">
                {classLevels.map((item) => (
                  <li key={item} className="bg-white rounded-xl p-3 shadow-sm">{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-neutral-light rounded-2xl p-6">
              <h2 className="text-xl font-outfit font-bold text-neutral-dark mb-4 flex items-center gap-2">
                <Clock3 className="w-5 h-5 text-primary-teal" />
                Dauer eines Workshops
              </h2>
              <div className="space-y-3 text-neutral-dark">
                <p className="bg-white rounded-xl p-3 shadow-sm">
                  <strong>Standard:</strong> 90 Minuten (2 Schulstunden)
                </p>
                <p className="bg-white rounded-xl p-3 shadow-sm">
                  <strong>Projektformat:</strong> 180 Minuten inkl. Pause (z. B. Projekttag)
                </p>
                <p className="text-sm text-neutral-gray">
                  Empfehlung: Für Grundschule eher 90 Minuten, für Klasse 7–8 gerne als 180-Minuten-Format mit Projektphase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-neutral-light/50">
        <div className="section-padding">
          <div className="container-wide grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-outfit font-bold text-neutral-dark mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-accent-pink" />
                Lernziele
              </h2>
              <ul className="space-y-2 text-neutral-dark">
                {goals.map((goal) => (
                  <li key={goal}>• {goal}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-outfit font-bold text-neutral-dark mb-4 flex items-center gap-2">
                <ClipboardList className="w-5 h-5 text-primary-purple" />
                Was Lehrkräfte vorbereiten müssen
              </h2>
              <ul className="space-y-2 text-neutral-dark">
                {preparation.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="section-padding">
          <div className="container-wide grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-neutral-light rounded-2xl p-6">
              <h3 className="font-outfit font-bold text-neutral-dark mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary-teal" /> Datenschutz
              </h3>
              <p className="text-sm text-neutral-gray">
                Es werden keine personenbezogenen Schülerdaten gespeichert. Wo möglich arbeiten wir mit anonymisierten Beispielen.
                Bei Tool-Einsatz werden datenschutzfreundliche Einstellungen und schulische Vorgaben beachtet.
              </p>
            </div>

            <div className="bg-neutral-light rounded-2xl p-6">
              <h3 className="font-outfit font-bold text-neutral-dark mb-3 flex items-center gap-2">
                <MonitorSmartphone className="w-5 h-5 text-primary-purple" /> Technik
              </h3>
              <p className="text-sm text-neutral-gray">
                Der Workshop funktioniert mit <strong>Beamer</strong> für Inputphasen sowie auf <strong>Tablet oder PC</strong>
                für Übungen. Bei wenig Geräten sind auch Partneraufgaben möglich.
              </p>
            </div>

            <div className="bg-neutral-light rounded-2xl p-6">
              <h3 className="font-outfit font-bold text-neutral-dark mb-3 flex items-center gap-2">
                <Handshake className="w-5 h-5 text-accent-pink" /> Kosten / Pilot
              </h3>
              <p className="text-sm text-neutral-gray">
                Aktuell ist ein <strong>begrenztes Pilot-Format</strong> für Schulen in der Region Ludwigsburg möglich.
                Je nach Kapazität kann der Pilot kostenfrei oder stark vergünstigt umgesetzt werden.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-neutral-light/40">
        <div className="section-padding">
          <div className="container-wide text-center bg-white rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-outfit font-bold text-neutral-dark mb-2">Kontakt für Kooperationen</h2>
            <p className="text-neutral-gray mb-6">
              Für Anfragen von Schulen, Medienzentren oder Fördervereinen bitte mit Klassenstufe,
              gewünschtem Zeitraum und Technik-Setup melden.
            </p>
            <a
              href="mailto:belkis.aslani@gmail.com?subject=Kooperation%20Schulworkshop%20KI-Entdecker"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-purple text-white rounded-xl font-medium hover:bg-primary-purple/90 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Kooperation anfragen
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schulen;
