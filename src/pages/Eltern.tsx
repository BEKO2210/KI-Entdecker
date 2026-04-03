import { useState } from 'react';
import { Shield, Clock, BookOpen, MessageCircle, CheckCircle, ChevronDown, ChevronUp, Mail, Download } from 'lucide-react';
import { buildDownloadUrl } from '@/lib/paths';

interface FAQ {
  question: string;
  answer: string;
}

const Eltern = () => {
  const isVisible = true;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const benefits = [
    {
      icon: Shield,
      title: 'Sicherheit zuerst',
      description: 'Alle Inhalte sind altersgerecht und kindersicher. Keine Werbung, keine Datenweitergabe an Dritte, keine versteckten Kosten.',
    },
    {
      icon: Clock,
      title: 'Flexibel & Selbstständig',
      description: 'Kinder können in ihrem eigenen Tempo lernen. Ideal für Nachmittage oder Wochenenden. Kein fester Termin nötig.',
    },
    {
      icon: BookOpen,
      title: 'Praxisnah & Verständlich',
      description: 'Alle Lektionen sind praxisnah aufgebaut: lesen, ausprobieren, üben. Kein trockenes Theorie-Pauken.',
    },
    {
      icon: MessageCircle,
      title: 'Eltern-Guide inklusive',
      description: 'Ein ausführlicher Guide mit Tipps, Gesprächsanregungen und Regeln für die KI-Nutzung – auch ohne eigenes KI-Wissen.',
    },
  ];

  const learningGoals = [
    'Verstehen, was KI ist und wie Computer lernen (Tag 1)',
    'Gute Prompts schreiben und KI gezielt steuern (Tag 2)',
    'Kreativ mit KI arbeiten: Bilder, Geschichten, Songtexte (Tag 3)',
    'KI als Lernhelfer nutzen: recherchieren, zusammenfassen, korrigieren (Tag 4)',
    'Ein eigenes Projekt mit KI umsetzen: Comic, Quiz oder Assistent (Tag 5)',
    'Kritisches Denken: KI-Antworten hinterfragen und prüfen',
  ];

  const faqs: FAQ[] = [
    {
      question: 'Ab welchem Alter ist der Kurs geeignet?',
      answer: 'Der Kurs ist für Kinder im Alter von 8-14 Jahren konzipiert. Jüngere Kinder können den Kurs mit Unterstützung der Eltern durchführen. Die Inhalte sind altersgerecht aufbereitet und verständlich erklärt. Für Teenager ab 12 Jahren empfehlen wir zusätzliche vertiefende Materialien.',
    },
    {
      question: 'Brauchen wir spezielle Software oder Geräte?',
      answer: 'Nein! Alles, was Sie brauchen, ist ein Computer, Tablet oder Smartphone mit Internetverbindung und einem modernen Browser (Chrome, Firefox, Safari oder Edge). Alle Tools, die wir verwenden, sind kostenlos und webbasiert. Es ist keine Installation notwendig.',
    },
    {
      question: 'Wie lange dauert der komplette Kurs?',
      answer: 'Der Kurs umfasst 5 Tage mit jeweils ca. 45 Minuten Lernzeit. Das Abschlussprojekt am Tag 5 dauert etwa 60 Minuten. Sie können aber in Ihrem eigenen Tempo arbeiten und Pausen einlegen, wann immer Sie möchten. Es gibt keinen Zeitdruck.',
    },
    {
      question: 'Ist der Kurs wirklich kostenlos?',
      answer: 'Ja, der komplette Kurs ist und bleibt zu 100% kostenlos. Wir glauben, dass jeder Zugang zu KI-Bildung haben sollte. Es gibt keine versteckten Kosten, keine Abos und keine Pflicht zur Angabe von Zahlungsdaten. Optional gibt es ein kostenloses Zertifikat am Ende.',
    },
    {
      question: 'Was lernen die Kinder genau?',
      answer: 'Die Kinder lernen die Grundlagen der KI verstehen, effektive Prompts (Anweisungen) zu schreiben, kreativ mit KI-Tools zu arbeiten (Bilder, Texte, Geschichten) und Probleme mit KI-Unterstützung zu lösen. Alles spielerisch, praxisnah und altersgerecht.',
    },
    {
      question: 'Muss ich als Elternteil KI verstehen?',
      answer: 'Überhaupt nicht! Der Kurs ist so konzipiert, dass Kinder ihn weitgehend selbstständig durchführen können. Unser Eltern-Guide gibt Ihnen alle Informationen, die Sie brauchen, um Ihr Kind bei Fragen zu unterstützen. Sie lernen nebenbei auch selbst dazu.',
    },
    {
      question: 'Wie werden die Daten meines Kindes geschützt?',
      answer: 'Wir speichern keine personenbezogenen Daten auf unseren Servern. Der Fortschritt wird lokal im Browser Ihres Gerätes gespeichert (Local Storage). Für die KI-Tools, die wir empfehlen, gelten deren jeweilige Datenschutzbestimmungen. Wir empfehlen nur Tools, die einen hohen Datenschutzstandard haben.',
    },
    {
      question: 'Kann der Kurs mehrfach durchgeführt werden?',
      answer: 'Absolut! Der Kurs kann so oft wiederholt werden wie gewünscht. Das ist sogar empfohlen, um das Gelernte zu festigen. Der Fortschritt kann jederzeit zurückgesetzt werden, um von vorne zu beginnen.',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Banner */}
      <section className="relative py-16 bg-gradient-to-br from-accent-pink to-rose-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }} />
        </div>
        
        <div className="section-padding relative z-10">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Für Eltern
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-bold text-white mb-4">
                Informationen für Eltern
              </h1>
              <p className="text-white/80 text-lg">
                Alles, was Sie wissen müssen, um Ihr Kind auf dem KI-Abenteuer zu begleiten.
                Sicher, verständlich und transparent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`group bg-neutral-light rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-pink to-rose-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-outfit font-bold text-neutral-dark mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-neutral-gray">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Split */}
      <section className="py-16 bg-neutral-light/50">
        <div className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: What Kids Learn */}
              <div
                className={`transition-all duration-700 delay-400 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                }`}
              >
                <h2 className="text-2xl font-outfit font-bold text-neutral-dark mb-6">
                  Was lernen die Kinder?
                </h2>
                <div className="space-y-4">
                  {learningGoals.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="w-6 h-6 bg-primary-teal/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-primary-teal" />
                      </div>
                      <span className="text-neutral-dark">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Safety Note */}
                <div className="mt-8 p-6 bg-primary-purple/5 rounded-2xl border border-primary-purple/10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-purple/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-primary-purple" />
                    </div>
                    <div>
                      <h3 className="font-outfit font-bold text-neutral-dark mb-2">
                        Sicherheit hat Priorität
                      </h3>
                      <p className="text-sm text-neutral-gray">
                        Alle empfohlenen Tools sind auf Kindersicherheit geprüft. 
                        Wir verwenden keine Tools, die personenbezogene Daten speichern 
                        oder Werbung an Kinder zeigen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: FAQ */}
              <div
                className={`transition-all duration-700 delay-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                }`}
              >
                <h2 className="text-2xl font-outfit font-bold text-neutral-dark mb-6">
                  Häufige Fragen
                </h2>
                <div className="space-y-3">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full flex items-center justify-between p-4 text-left"
                        aria-expanded={openFaq === index}
                        aria-controls={`faq-answer-${index}`}
                      >
                        <span className="font-medium text-neutral-dark pr-4">
                          {faq.question}
                        </span>
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                            openFaq === index ? 'bg-primary-purple text-white' : 'bg-neutral-light'
                          }`}
                        >
                          {openFaq === index ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </div>
                      </button>
                      <div
                        id={`faq-answer-${index}`}
                        className={`overflow-hidden transition-all duration-300 ${
                          openFaq === index ? 'max-h-96' : 'max-h-0'
                        }`}
                      >
                        <p className="px-4 pb-4 text-neutral-gray text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eltern-Guide Download */}
      <section className="py-16 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="bg-gradient-to-br from-accent-pink to-rose-600 rounded-3xl p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-outfit font-bold text-white mb-4">
                Eltern-Guide herunterladen
              </h2>
              <p className="text-white/80 max-w-xl mx-auto mb-8">
                Unser ausführlicher Guide enthält Tipps zur Begleitung, Gesprächsanregungen
                für jeden Kurstag, Regeln für die KI-Nutzung und eine praktische Checkliste.
              </p>
              <button
                onClick={() => window.open(buildDownloadUrl('eltern-guide.html'), '_blank')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-accent-pink rounded-xl font-bold hover:bg-white/90 transition-colors"
                aria-label="Eltern-Guide als PDF herunterladen"
              >
                <Download className="w-5 h-5" />
                Eltern-Guide öffnen (PDF / Druck)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-8 bg-white">
        <div className="section-padding">
          <div className="container-wide text-center">
            <p className="text-neutral-gray mb-4">
              Haben Sie weitere Fragen? Wir sind für Sie da.
            </p>
            <a
              href="mailto:belkis.aslani@gmail.com?subject=Frage%20zu%20KI-Entdecker"
              className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-light text-neutral-dark rounded-xl font-medium hover:bg-neutral-light/80 transition-colors"
              aria-label="E-Mail an belkis.aslani@gmail.com schreiben"
            >
              <Mail className="w-5 h-5" />
              E-Mail schreiben
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Eltern;
