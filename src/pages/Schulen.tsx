import { School, Clock3, Target, ClipboardList, ShieldCheck, MonitorSmartphone, Handshake, Mail, MapPin, FileDown, Download, Users, UserCheck, User, CheckCircle2, BookOpen } from 'lucide-react';
import { buildDownloadUrl } from '@/lib/paths';

const Schulen = () => {
  const openDownload = (file: string) => window.open(buildDownloadUrl(file), '_blank');

  const teacherCourses = [
    {
      id: 1,
      title: 'Kurs 1 · KI verstehen',
      level: 'Grundschule · Klasse 3/4',
      duration: '90 Minuten (2 Schulstunden)',
      summary: 'Einstieg in Künstliche Intelligenz mit ersten Prompts, Faktencheck und gemeinsamen Klassenregeln. Abgestimmt auf den Bildungsplan BW (Sachunterricht, Deutsch, Leitperspektive Medienbildung).',
      bullets: [
        '3 Arbeitsblätter (A1–A3) zum Ausdrucken oder am Bildschirm ausfüllen',
        'Lehrkraft-Handreichung mit Bildungsplanbezug &amp; Unterrichtsverlauf',
        'Differenzierung für Grundschule (Basis / erweitert / inklusiv)',
      ],
      color: 'from-purple-500 to-indigo-600',
      accent: 'text-primary-purple',
      bg: 'bg-primary-purple/10',
      btn: 'bg-primary-purple hover:bg-primary-purple/90',
      handreichung: 'lehrer-kurs-1-handreichung.html',
      arbeitsblatt: 'lehrer-kurs-1-arbeitsblatt.html',
    },
    {
      id: 2,
      title: 'Kurs 2 · Prompt-Werkstatt',
      level: 'Sekundarstufe I · Klasse 5/6',
      duration: '180 Minuten (Projektformat, 4 Schulstunden)',
      summary: 'Projekttag zu strukturierten Prompts (RAKF-Schema), Faktencheck und Bias-Analyse. Passt zum Basiskurs Medienbildung (Kl. 5) und bereitet den Aufbaukurs Informatik (Kl. 7) vor.',
      bullets: [
        '4 Arbeitsblätter (B1–B4) als fillable PDF / druckfertig',
        'Handreichung mit Kriterienraster &amp; Bewertungshilfe',
        'Gruppen- und Projektarbeit inkl. Präsentationsphase',
      ],
      color: 'from-teal-500 to-cyan-600',
      accent: 'text-primary-teal',
      bg: 'bg-primary-teal/10',
      btn: 'bg-primary-teal hover:bg-primary-teal/90',
      handreichung: 'lehrer-kurs-2-handreichung.html',
      arbeitsblatt: 'lehrer-kurs-2-arbeitsblatt.html',
    },
  ];

  const usageModels = [
    {
      icon: User,
      title: 'Modell A · Lehrkraft allein',
      desc: 'Nach kurzer Absprache setzen Sie den Kurs eigenständig um. Sie erhalten das komplette Material inkl. Handreichung zur internen Nutzung an Ihrer Schule.',
      cta: 'Absprache &amp; Freigabe per E-Mail',
      mailto: 'mailto:belkis.aslani@gmail.com?subject=Modell%20A%20%E2%80%93%20Lehrkraft%20allein%20(KI-Entdecker%20Kurs)',
    },
    {
      icon: Users,
      title: 'Modell B · Gemeinsam (Team-Teaching)',
      desc: 'Wir führen den Kurs gemeinsam durch. Sie bringen die Klassenkenntnis ein, ich die KI-Expertise und das Material. Ideal für den Einstieg ins Kollegium.',
      cta: 'Gemeinsame Durchführung anfragen',
      mailto: 'mailto:belkis.aslani@gmail.com?subject=Modell%20B%20%E2%80%93%20Team-Teaching%20(KI-Entdecker%20Kurs)',
    },
    {
      icon: UserCheck,
      title: 'Modell C · Nur durch Belkis Aslani',
      desc: 'Ich übernehme den Workshop vollständig, die Lehrkraft bleibt als pädagogische Begleitung dabei. Kein zusätzlicher Vorbereitungsaufwand.',
      cta: 'Externe Durchführung buchen',
      mailto: 'mailto:belkis.aslani@gmail.com?subject=Modell%20C%20%E2%80%93%20Externe%20Durchf%C3%BChrung%20(KI-Entdecker%20Kurs)',
    },
  ];

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

      {/* Zwei Kurse mit Premium-Material */}
      <section className="py-14 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-purple/10 text-primary-purple rounded-full text-sm font-medium mb-4">
                <BookOpen className="w-4 h-4" /> Premium-Material für Schulen
              </span>
              <h2 className="text-2xl sm:text-3xl font-outfit font-bold text-neutral-dark mb-3">
                Zwei fertige Kurse inklusive Material
              </h2>
              <p className="text-neutral-gray">
                Jeder Kurs enthält eine <strong>Lehrkraft-Handreichung</strong> (Bildungsplanbezug, Verlauf, Differenzierung)
                und passende <strong>Arbeitsblätter zum Ausdrucken oder am Bildschirm / im PDF-Editor auszufüllen</strong>.
                Alle Inhalte sind konform mit dem Bildungsplan Baden-Württemberg, den Leitperspektiven sowie DSGVO / LDSG BW.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {teacherCourses.map((c) => (
                <div key={c.id} className="bg-white rounded-3xl shadow-lg border border-neutral-light overflow-hidden flex flex-col">
                  <div className={`bg-gradient-to-br ${c.color} p-6 text-white`}>
                    <div className="text-xs font-semibold uppercase tracking-wide text-white/80 mb-2">{c.level}</div>
                    <h3 className="text-2xl font-outfit font-bold mb-1">{c.title}</h3>
                    <div className="inline-flex items-center gap-2 text-sm bg-white/15 rounded-full px-3 py-1 mt-2">
                      <Clock3 className="w-4 h-4" /> {c.duration}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-neutral-gray mb-5" dangerouslySetInnerHTML={{ __html: c.summary }} />
                    <ul className="space-y-2 mb-6">
                      {c.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-neutral-dark">
                          <CheckCircle2 className={`w-5 h-5 ${c.accent} flex-shrink-0 mt-0.5`} />
                          <span dangerouslySetInnerHTML={{ __html: b }} />
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto grid sm:grid-cols-2 gap-3">
                      <button
                        onClick={() => openDownload(c.handreichung)}
                        className={`flex items-center justify-center gap-2 px-4 py-3 ${c.btn} text-white rounded-xl font-medium transition-colors`}
                        aria-label={`${c.title}: Lehrer-Handreichung öffnen`}
                      >
                        <FileDown className="w-4 h-4" /> Handreichung (PDF)
                      </button>
                      <button
                        onClick={() => openDownload(c.arbeitsblatt)}
                        className={`flex items-center justify-center gap-2 px-4 py-3 border-2 ${c.accent} border-current rounded-xl font-medium hover:bg-neutral-light/50 transition-colors`}
                        aria-label={`${c.title}: Arbeitsblätter öffnen`}
                      >
                        <Download className="w-4 h-4" /> Arbeitsblätter (fillable)
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => openDownload('schulen-konformitaet.html')}
                className="inline-flex items-center gap-2 px-5 py-3 bg-neutral-light text-neutral-dark rounded-xl font-medium hover:bg-neutral-light/80 transition-colors"
              >
                <ShieldCheck className="w-5 h-5 text-primary-teal" />
                Konformität BW &amp; OPS-Grundschule · Übersicht als PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Nutzungsmodelle */}
      <section className="py-14 bg-neutral-light/50">
        <div className="section-padding">
          <div className="container-wide">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-outfit font-bold text-neutral-dark mb-3">
                Wer führt den Kurs durch? Drei Modelle nach Absprache
              </h2>
              <p className="text-neutral-gray">
                Sie entscheiden, wie viel Unterstützung Sie wünschen. Alle Modelle werden vorab kurz per E-Mail abgestimmt,
                die Materialfreigabe erfolgt schriftlich.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {usageModels.map((m) => (
                <div key={m.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                  <div className="w-12 h-12 bg-primary-purple/10 rounded-xl flex items-center justify-center mb-4">
                    <m.icon className="w-6 h-6 text-primary-purple" />
                  </div>
                  <h3 className="font-outfit font-bold text-neutral-dark mb-2">{m.title}</h3>
                  <p className="text-sm text-neutral-gray mb-4 flex-grow">{m.desc}</p>
                  <a
                    href={m.mailto}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-purple hover:text-primary-purple/80 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span dangerouslySetInnerHTML={{ __html: m.cta }} />
                  </a>
                </div>
              ))}
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
