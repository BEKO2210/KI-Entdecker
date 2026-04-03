import { useEffect, useRef, useState } from 'react';
import { Calendar, FileText, Users, Download, ExternalLink, CheckCircle } from 'lucide-react';

interface Material {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  color: string;
  bgColor: string;
  action: string;
}

const Materials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const materials: Material[] = [
    {
      id: 1,
      title: 'Wochenplan',
      description: 'Die komplette Übersicht aller 5 Tage mit Zeitplan, Lernzielen und Pausen. Perfekt für Eltern und Kinder zur Planung.',
      icon: Calendar,
      features: [
        'Detaillierter Tagesplan',
        'Lernziele pro Tag',
        'Pausenzeiten',
        'Material-Checkliste',
      ],
      color: 'text-primary-purple',
      bgColor: 'bg-primary-purple/10',
      action: 'Download PDF',
    },
    {
      id: 2,
      title: 'Arbeitsblätter',
      description: 'Vier interaktive Arbeitsblätter zum Ausdrucken oder Ausfüllen am Bildschirm. Mit Lösungen für Eltern.',
      icon: FileText,
      features: [
        '4 interaktive Übungen',
        'Quiz-Fragen',
        'Kreativ-Aufgaben',
        'Lösungsblätter',
      ],
      color: 'text-primary-teal',
      bgColor: 'bg-primary-teal/10',
      action: 'Arbeitsblätter öffnen',
    },
    {
      id: 3,
      title: 'Für Eltern',
      description: 'Informationen für Erwachsene: Was die Kinder lernen, wie ihr unterstützen könnt und häufige Fragen.',
      icon: Users,
      features: [
        'Lerninhalte erklärt',
        'Tipps zur Unterstützung',
        'Sicherheit im Internet',
        'FAQ',
      ],
      color: 'text-accent-pink',
      bgColor: 'bg-accent-pink/10',
      action: 'Mehr erfahren',
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
      id="materials"
      ref={sectionRef}
      className="relative py-24 bg-neutral-light"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #7F56D9 0.5px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="section-padding relative z-10">
        <div className="container-wide">
          {/* Section Header */}
          <div
            className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-bold text-neutral-dark mb-4">
              Weitere <span className="gradient-text">Materialien</span>
            </h2>
            <p className="text-lg text-neutral-gray">
              Arbeitsblätter, Wochenplan und zusätzliche Ressourcen für dein KI-Abenteuer.
            </p>
          </div>

          {/* Materials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {materials.map((material, index) => (
              <div
                key={material.id}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
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
                        className="flex items-center gap-3 text-sm text-neutral-dark"
                      >
                        <CheckCircle className={`w-5 h-5 ${material.color} flex-shrink-0`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Button */}
                  <button
                    className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
                      material.id === 1
                        ? 'bg-primary-purple text-white hover:bg-primary-purple/90'
                        : material.id === 2
                        ? 'bg-primary-teal text-white hover:bg-primary-teal/90'
                        : 'bg-accent-pink text-white hover:bg-accent-pink/90'
                    }`}
                  >
                    {material.id === 1 ? (
                      <Download className="w-4 h-4" />
                    ) : (
                      <ExternalLink className="w-4 h-4" />
                    )}
                    {material.action}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div
            className={`mt-16 bg-white rounded-2xl p-8 shadow-lg transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent-yellow/20 rounded-xl flex items-center justify-center">
                  <Download className="w-6 h-6 text-accent-yellow" />
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-neutral-dark">
                    Alle Materialien auf einen Blick
                  </h4>
                  <p className="text-sm text-neutral-gray">
                    Lade alle Arbeitsblätter und den Wochenplan als ZIP herunter
                  </p>
                </div>
              </div>
              <button className="btn-primary whitespace-nowrap">
                Alle Materialien downloaden
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Materials;
