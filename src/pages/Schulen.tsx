import { School, Clock3, Target, ClipboardList, ShieldCheck, MonitorSmartphone, Handshake, Mail, MapPin, FileDown, Download, Users, UserCheck, User, CheckCircle2, BookOpen, Award, FileText, FlaskConical, Sparkles, X, Check, AlertTriangle } from 'lucide-react';
import { buildDownloadUrl } from '@/lib/paths';

const Schulen = () => {
  const openDownload = (file: string) => window.open(buildDownloadUrl(file), '_blank');

  const competencies = [
    { area: 'Fachkompetenz', items: ['KI verstehen und in eigenen Worten erklären', 'Regelbasierte Programme von lernenden Systemen unterscheiden', 'Strukturierte Prompts nach RAKF-Schema formulieren'] },
    { area: 'Methodenkompetenz', items: ['KI-Antworten anhand von Kriterien prüfen', 'Mit kindersicheren Suchwerkzeugen recherchieren', 'Prompt-Prozess dokumentieren'] },
    { area: 'Sozialkompetenz', items: ['In Partner- und Gruppenarbeit zusammenarbeiten', 'Diskriminierungssensibel über KI-Output reflektieren'] },
    { area: 'Selbstkompetenz', items: ['Eigene Regeln im Umgang mit KI formulieren', 'Grenzen beim Teilen persönlicher Daten benennen'] },
  ];

  const bildungsplan = [
    { fach: 'Sachunterricht Kl. 3/4', anknuepfung: 'Bereich „Technik und Kultur" – Funktionsweise technischer Systeme verstehen und kritisch bewerten' },
    { fach: 'Deutsch Kl. 3 – 8', anknuepfung: 'Mit Texten und Medien umgehen, Informationen prüfen, Sprache zur Anweisung nutzen' },
    { fach: 'Basiskurs Medienbildung (Kl. 5)', anknuepfung: 'Recherchieren, Informationen bewerten, Kommunikation gestalten' },
    { fach: 'Aufbaukurs Informatik (Kl. 7)', anknuepfung: 'Algorithmen, Daten, Mensch-Maschine-Interaktion' },
    { fach: 'Leitperspektive Medienbildung (MB)', anknuepfung: 'Medienanalyse, Information und Wissen, Kommunikation, Produktion' },
    { fach: 'Leitperspektive Verbraucherbildung (VB)', anknuepfung: 'Reflektierte Entscheidungen beim Umgang mit digitalen Angeboten' },
    { fach: 'Leitperspektive Bildung für Toleranz (BTV)', anknuepfung: 'Bias und Stereotype erkennen, Vielfalt wahrnehmen' },
    { fach: 'KMK-Empfehlung KI (2024)', anknuepfung: 'Anschluss an die ergänzende KMK-Strategie zu KI in der Bildung' },
  ];

  const methods = [
    { title: 'Handlungsorientierung', desc: 'Jede Einheit endet mit einem konkreten Produkt: ein Prompt, ein Plakat, ein Prompt-Pass.' },
    { title: 'Entdeckendes Lernen', desc: 'Kinder probieren selbst, die Lehrkraft moderiert.' },
    { title: 'Kooperatives Lernen', desc: 'Placemat, Gruppenpuzzle, Partnerarbeit.' },
    { title: 'Scaffolding & Differenzierung', desc: 'Prompt-Bausteine als Satzkarten für Basisniveau, Reflexionsaufgaben für erweitertes Niveau.' },
    { title: 'Visuelle Sprache', desc: 'Farbcodierung, Icons, große Schrift, hoher Kontrast – barrierearm.' },
    { title: 'Transparenz', desc: 'KI-Antworten werden im Klassengespräch gemeinsam bewertet.' },
  ];

  const allowedTools = [
    'telli (SCHULE@BW · Landes-KI BW · Lehrkräfte &amp; Schüler:innen · seit Okt. 2025)',
    'F13 (SCHULE@BW · Landes-KI BW · nur Lehrkräfte · Chat &amp; Dokumente)',
    'Fobizz Chat (Bildungslizenz, EU-Server, AVV vorhanden) – falls von der Schule gebucht',
    'MNSpro Chat (DSGVO-konform, Schulserver) – falls von der Schule gebucht',
    'fragFINN, Blinde Kuh – Kindersuchmaschinen, ohne Konto',
  ];
  const forbiddenItems = [
    'Schüler:innen legen niemals eigene Accounts an',
    'Keine echten Namen, Adressen, Fotos, Telefonnummern in Prompts',
    'Keine Consumer-KI ohne AVV (kein ChatGPT-Web, kein Gemini-Web)',
    'Keine Speicherung personenbezogener Schülerdaten',
  ];

  const conceptDocs = [
    { title: 'Pädagogisches Konzept', desc: 'Lernziele, Methoden, Differenzierung, Bildungsplanbezug BW.', file: 'konzept-paedagogisch.html', icon: BookOpen, color: 'text-primary-purple', bg: 'bg-primary-purple/10' },
    { title: 'Datenschutz- &amp; Schutzkonzept', desc: 'DSGVO, LDSG BW, Tool-Liste, Jugendmedienschutz, Verhaltenskodex.', file: 'konzept-datenschutz.html', icon: ShieldCheck, color: 'text-primary-teal', bg: 'bg-primary-teal/10' },
    { title: 'Durchführungskonzept', desc: 'Pilotplan, 4 Phasen, Rollen, Zeitplan, Risiken &amp; Erfolgskriterien.', file: 'konzept-durchfuehrung.html', icon: ClipboardList, color: 'text-accent-pink', bg: 'bg-accent-pink/10' },
    { title: 'Evaluations-Vorlage', desc: 'Vorher- / Nachher-Bögen + Lehrkräfte-Feedback, anonym, fillable.', file: 'evaluation-vorlage.html', icon: FlaskConical, color: 'text-orange-600', bg: 'bg-orange-100' },
    { title: 'Elternbrief &amp; Einverständnis', desc: 'Muster für Datenschutz-Information und Einwilligungserklärung.', file: 'elternbrief-einverstaendnis.html', icon: FileText, color: 'text-primary-purple', bg: 'bg-primary-purple/10' },
    { title: 'Projekt-Übersicht (One-Pager)', desc: 'Kurzpitch für Förderer, Schulleitungen und Stiftungen.', file: 'projekt-uebersicht.html', icon: Sparkles, color: 'text-yellow-600', bg: 'bg-yellow-100' },
  ];


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

      {/* Kompetenzen */}
      <section className="py-14 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-purple/10 text-primary-purple rounded-full text-sm font-medium mb-4">
                <Award className="w-4 h-4" /> Kompetenzen
              </span>
              <h2 className="text-2xl sm:text-3xl font-outfit font-bold text-neutral-dark mb-3">
                Was Kinder konkret lernen
              </h2>
              <p className="text-neutral-gray">
                Vier Kompetenzbereiche, klar formuliert und in jedem Workshop überprüfbar.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {competencies.map((c) => (
                <div key={c.area} className="bg-neutral-light rounded-2xl p-6 border-l-4 border-primary-purple">
                  <h3 className="font-outfit font-bold text-neutral-dark mb-3">{c.area}</h3>
                  <ul className="space-y-2">
                    {c.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-neutral-dark">
                        <CheckCircle2 className="w-4 h-4 text-primary-purple flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bildungsplan BW */}
      <section className="py-14 bg-neutral-light/40">
        <div className="section-padding">
          <div className="container-wide">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-teal/10 text-primary-teal rounded-full text-sm font-medium mb-4">
                <BookOpen className="w-4 h-4" /> Bildungsplan Baden-Württemberg
              </span>
              <h2 className="text-2xl sm:text-3xl font-outfit font-bold text-neutral-dark mb-3">
                Klar verankert im Bildungsplan
              </h2>
              <p className="text-neutral-gray">
                Bildungsplan 2016 (Grundschule &amp; Sek I), Leitperspektiven sowie KMK-Empfehlung KI (2024).
              </p>
            </div>
            {/* Mobile: Card-Stapel */}
            <div className="sm:hidden space-y-3">
              {bildungsplan.map((row) => (
                <div
                  key={row.fach}
                  className="bg-white rounded-2xl p-4 shadow-sm border-l-4 border-primary-purple"
                >
                  <div className="text-xs uppercase tracking-wide font-semibold text-primary-purple mb-1">
                    Fach / Bereich
                  </div>
                  <div className="text-sm font-medium text-neutral-dark mb-3">{row.fach}</div>
                  <div className="text-xs uppercase tracking-wide font-semibold text-primary-purple mb-1">
                    Anknüpfung
                  </div>
                  <div className="text-sm text-neutral-gray">{row.anknuepfung}</div>
                </div>
              ))}
            </div>

            {/* Ab sm: Tabelle, horizontal scrollbar als Fallback */}
            <div className="hidden sm:block bg-white rounded-2xl shadow-sm overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-primary-purple/5">
                  <tr>
                    <th className="text-left px-5 py-3 text-xs uppercase tracking-wide font-semibold text-primary-purple">Fach / Bereich</th>
                    <th className="text-left px-5 py-3 text-xs uppercase tracking-wide font-semibold text-primary-purple">Anknüpfung</th>
                  </tr>
                </thead>
                <tbody>
                  {bildungsplan.map((row, i) => (
                    <tr key={row.fach} className={i % 2 ? 'bg-neutral-light/30' : 'bg-white'}>
                      <td className="px-5 py-3 font-medium text-neutral-dark align-top">{row.fach}</td>
                      <td className="px-5 py-3 text-neutral-gray">{row.anknuepfung}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Methoden */}
      <section className="py-14 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent-pink/10 text-accent-pink rounded-full text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" /> Methoden
              </span>
              <h2 className="text-2xl sm:text-3xl font-outfit font-bold text-neutral-dark mb-3">
                Methodisch fundiert, praktisch erprobbar
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {methods.map((m) => (
                <div key={m.title} className="bg-neutral-light rounded-2xl p-5">
                  <h3 className="font-outfit font-bold text-neutral-dark mb-2">{m.title}</h3>
                  <p className="text-sm text-neutral-gray">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Datenschutz im Detail */}
      <section className="py-14 bg-neutral-light/40">
        <div className="section-padding">
          <div className="container-wide">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-teal/10 text-primary-teal rounded-full text-sm font-medium mb-4">
                <ShieldCheck className="w-4 h-4" /> Datenschutz &amp; Sicherheit
              </span>
              <h2 className="text-2xl sm:text-3xl font-outfit font-bold text-neutral-dark mb-3">
                Was wir machen — und was wir <em>nicht</em> machen
              </h2>
              <p className="text-neutral-gray">
                DSGVO, Landesdatenschutzgesetz BW, Schulgesetz BW und Jugendmedienschutz sind die Leitplanken.
                Eltern und Schulleitungen erhalten vorab das vollständige Datenschutzkonzept.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-green-500">
                <h3 className="font-outfit font-bold text-neutral-dark mb-3 flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" /> Was wir einsetzen
                </h3>
                <ul className="space-y-2">
                  {allowedTools.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm text-neutral-dark">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                      <span dangerouslySetInnerHTML={{ __html: t }} />
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-neutral-gray mt-4">
                  Tool-Auswahl wird vorab mit dem schulischen Datenschutzbeauftragten abgestimmt.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-red-500">
                <h3 className="font-outfit font-bold text-neutral-dark mb-3 flex items-center gap-2">
                  <X className="w-5 h-5 text-red-600" /> Was wir nicht machen
                </h3>
                <ul className="space-y-2">
                  {forbiddenItems.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm text-neutral-dark">
                      <X className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-neutral-gray mt-4">
                  Erweitertes Führungszeugnis wird auf Anfrage vorgelegt. Zwei-Personen-Prinzip im Klassenraum.
                </p>
              </div>
            </div>

            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-900">
                <strong>So gehen wir bei ungeeignetem Output vor:</strong> Alle KI-Demos werden vorab mit dem
                geplanten Prompt-Set getestet. Sollte ein Tool im Workshop dennoch unerwartet ungeeignete
                Inhalte erzeugen, bricht die Workshop-Leitung sofort ab und ordnet pädagogisch ein.
                Eltern werden binnen 24 Stunden informiert.
              </p>
            </div>

            <div className="mt-4 bg-primary-teal/5 border border-primary-teal/20 rounded-2xl p-5 flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-primary-teal flex-shrink-0 mt-0.5" />
              <p className="text-sm text-neutral-dark">
                <strong>Hinweis zur Bildgenerierung:</strong> Die offizielle Landes-KI Baden-Württemberg
                (telli / F13 über SCHULE@BW) kann aktuell <em>noch keine Bilder erstellen</em> – diese
                Funktion ist laut Kultusministerium BW in Entwicklung. Für die Kreativeinheit in unseren
                Workshops arbeiten wir deshalb mit vorbereiteten Bildbeispielen und besprechen gemeinsam,
                wie Bild-KIs grundsätzlich funktionieren – ohne dass Kinder im Unterricht eigenhändig
                externe Bild-Tools nutzen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot 2026 */}
      <section className="py-14 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="bg-gradient-to-br from-primary-purple to-primary-teal rounded-3xl p-8 sm:p-12 text-white">
              <div className="max-w-3xl mx-auto text-center">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4">
                  <FlaskConical className="w-4 h-4" /> Pilotphase 2026/27
                </span>
                <h2 className="text-2xl sm:text-3xl font-outfit font-bold mb-4">
                  Wir suchen 2 – 3 Pilotschulen in der Region Ludwigsburg
                </h2>
                <p className="text-white/90 mb-8">
                  Im Rahmen der Pilotphase erhält Ihre Schule die Workshops zu vergünstigten
                  Konditionen oder im Rahmen einer Förderung kostenfrei. Im Gegenzug fließt Ihr
                  Feedback in die Weiterentwicklung des Materials ein.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-xs uppercase tracking-wide text-white/70 font-semibold mb-1">Was Sie geben</div>
                    <p className="text-sm">2 – 3 Klassen, Termine und Räume, kurze Lehrkräfte-Rückmeldung</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-xs uppercase tracking-wide text-white/70 font-semibold mb-1">Was Sie bekommen</div>
                    <p className="text-sm">Workshops + Material + Lehrkraft-Handreichungen + anonyme Evaluations-Auswertung</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-xs uppercase tracking-wide text-white/70 font-semibold mb-1">Wie lange</div>
                    <p className="text-sm">Ein Schulhalbjahr (3 – 4 Monate) inkl. Auswertung und Bericht</p>
                  </div>
                </div>
                <a
                  href="mailto:belkis.aslani@gmail.com?subject=Pilotschule%202026%20%E2%80%93%20KI-Entdecker"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-purple rounded-xl font-bold hover:bg-white/90 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Pilot-Anfrage senden
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Konzepte & Transparenz Downloads */}
      <section className="py-14 bg-neutral-light/40">
        <div className="section-padding">
          <div className="container-wide">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-purple/10 text-primary-purple rounded-full text-sm font-medium mb-4">
                <FileDown className="w-4 h-4" /> Transparenz
              </span>
              <h2 className="text-2xl sm:text-3xl font-outfit font-bold text-neutral-dark mb-3">
                Konzepte &amp; Dokumente zum Download
              </h2>
              <p className="text-neutral-gray">
                Alle Konzepte sind öffentlich einsehbar. Wir glauben: Eltern, Lehrkräfte und Förderer
                sollen vorab genau wissen, wie wir arbeiten.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {conceptDocs.map((doc) => (
                <button
                  key={doc.file}
                  onClick={() => openDownload(doc.file)}
                  className="text-left bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow border border-neutral-light"
                  aria-label={`${doc.title} öffnen`}
                >
                  <div className={`w-11 h-11 ${doc.bg} rounded-xl flex items-center justify-center mb-4`}>
                    <doc.icon className={`w-5 h-5 ${doc.color}`} />
                  </div>
                  <h3 className="font-outfit font-bold text-neutral-dark mb-2" dangerouslySetInnerHTML={{ __html: doc.title }} />
                  <p className="text-sm text-neutral-gray mb-3" dangerouslySetInnerHTML={{ __html: doc.desc }} />
                  <span className="inline-flex items-center gap-2 text-sm text-primary-purple font-medium">
                    <Download className="w-4 h-4" /> Öffnen
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technik & Kosten */}
      <section className="py-14 bg-white">
        <div className="section-padding">
          <div className="container-wide grid md:grid-cols-2 gap-6">

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

      {/* Zwei Kurse inklusive Material */}
      <section className="py-14 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-purple/10 text-primary-purple rounded-full text-sm font-medium mb-4">
                <BookOpen className="w-4 h-4" /> Kurse für Schulen
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
                Konformität Baden-Württemberg &amp; Grundschule · Übersicht als PDF
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
