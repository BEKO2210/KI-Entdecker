import { useEffect, useRef, useState } from 'react';
import { CheckCircle, Shield, Clock, BookOpen, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const Parents = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const benefits = [
    {
      icon: Shield,
      title: 'Sicherheit first',
      description: 'Alle Inhalte sind altersgerecht und kindersicher. Keine Werbung, keine Datenweitergabe.',
    },
    {
      icon: Clock,
      title: 'Flexibel & Selbstständig',
      description: 'Kinder können in ihrem eigenen Tempo lernen. Ideal für Nachmittage oder Wochenenden.',
    },
    {
      icon: BookOpen,
      title: 'Bildungsorientiert',
      description: 'Entwickelt mit Pädagogen und KI-Experten für maximale Lernwirkung.',
    },
    {
      icon: MessageCircle,
      title: 'Eltern-Guide inklusive',
      description: 'Umfassende Informationen, wie Sie Ihr Kind unterstützen können.',
    },
  ];

  const faqs: FAQ[] = [
    {
      question: 'Ab welchem Alter ist der Kurs geeignet?',
      answer: 'Der Kurs ist für Kinder im Alter von 8-14 Jahren konzipiert. Jüngere Kinder können den Kurs mit Unterstützung der Eltern durchführen. Die Inhalte sind altersgerecht aufbereitet und verständlich erklärt.',
    },
    {
      question: 'Brauchen wir spezielle Software oder Geräte?',
      answer: 'Nein! Alles, was du brauchst, ist ein Computer, Tablet oder Smartphone mit Internetverbindung und einem modernen Browser. Alle Tools, die wir verwenden, sind kostenlos und webbasiert.',
    },
    {
      question: 'Wie lange dauert der komplette Kurs?',
      answer: 'Der Kurs umfasst 5 Tage mit jeweils ca. 45 Minuten Lernzeit. Du kannst aber in deinem eigenen Tempo arbeiten und Pausen einlegen, wann du möchtest.',
    },
    {
      question: 'Ist der Kurs wirklich kostenlos?',
      answer: 'Ja, der komplette Kurs ist und bleibt kostenlos. Wir glauben, dass jeder Zugang zu KI-Bildung haben sollte. Optional gibt es ein kostenloses Zertifikat am Ende.',
    },
    {
      question: 'Was lernen die Kinder genau?',
      answer: 'Die Kinder lernen die Grundlagen der KI verstehen, effektive Prompts zu schreiben, kreativ mit KI-Tools zu arbeiten und Probleme mit KI-Unterstützung zu lösen. Alles spielerisch und praxisnah!',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="parents"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-purple-50 via-white to-teal-50"
    >
      <div className="section-padding">
        <div className="container-wide">
          {/* Section Header */}
          <div
            className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-purple/10 rounded-full text-primary-purple text-sm font-medium mb-4">
              <Shield className="w-4 h-4" />
              Für Eltern
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-bold text-neutral-dark mb-4">
              Informationen für <span className="gradient-text">Eltern</span>
            </h2>
            <p className="text-lg text-neutral-gray">
              Alles, was Sie wissen müssen, um Ihr Kind auf dem KI-Abenteuer zu begleiten.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-purple to-primary-teal rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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

          {/* Content Split */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: What Kids Learn */}
            <div
              className={`transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              <h3 className="text-2xl font-outfit font-bold text-neutral-dark mb-6">
                Was lernen die Kinder?
              </h3>
              <div className="space-y-4">
                {[
                  'Grundlagen der Künstlichen Intelligenz verstehen',
                  'Sicherer und verantwortungsvoller Umgang mit KI-Tools',
                  'Kreative Projekte mit KI-Unterstützung umsetzen',
                  'Kritisches Denken und Medienkompetenz entwickeln',
                  'Problemlösungsstrategien für die digitale Welt',
                  'Zukunftstechnologien spielerisch entdecken',
                ].map((item, index) => (
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
            </div>

            {/* Right: FAQ */}
            <div
              className={`transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
            >
              <h3 className="text-2xl font-outfit font-bold text-neutral-dark mb-6">
                Häufige Fragen
              </h3>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-4 text-left"
                    >
                      <span className="font-medium text-neutral-dark pr-4">
                        {faq.question}
                      </span>
                      <div
                        className={`w-8 h-8 bg-neutral-light rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          openFaq === index ? 'bg-primary-purple text-white' : ''
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

          {/* CTA */}
          <div
            className={`mt-16 text-center transition-all duration-700 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
              <p className="text-neutral-gray mb-4">
                Haben Sie weitere Fragen?
              </p>
              <button className="btn-primary">
                Kontaktieren Sie uns
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parents;
