import { useEffect, useRef, useState } from 'react';
import { Gamepad2, Wrench, Lightbulb, Rocket, Shield, Heart, Star, Zap } from 'lucide-react';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  gradient: string;
}

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const features: Feature[] = [
    {
      id: 1,
      title: 'Spielerisch Lernen',
      description: 'Lerne durch interaktive Spiele, Quizze und Herausforderungen. Keine langweiligen Texte, nur pure Entdeckungsfreude!',
      icon: Gamepad2,
      color: 'text-primary-purple',
      gradient: 'from-primary-purple to-indigo-600',
    },
    {
      id: 2,
      title: 'Praxisnah & Handlungsorientiert',
      description: 'Wende das Gelernte sofort an mit echten Projekten. Baue Chatbots, erstelle Bilder und löse echte Probleme.',
      icon: Wrench,
      color: 'text-primary-teal',
      gradient: 'from-primary-teal to-cyan-600',
    },
    {
      id: 3,
      title: 'Kreativität fördern',
      description: 'Die KI wird zu deinem kreativen Partner. Entfessle deine Fantasie und erschaffe Dinge, die du nie für möglich gehalten hast.',
      icon: Lightbulb,
      color: 'text-accent-yellow',
      gradient: 'from-accent-yellow to-orange-500',
    },
    {
      id: 4,
      title: 'Zukunftssicher',
      description: 'KI ist die Technologie der Zukunft. Mit diesem Kurs legst du heute das Fundament für morgen.',
      icon: Rocket,
      color: 'text-accent-pink',
      gradient: 'from-accent-pink to-rose-600',
    },
  ];

  const additionalBenefits = [
    { icon: Shield, text: 'Sicherer Umgang mit KI', color: 'bg-primary-purple/10 text-primary-purple' },
    { icon: Heart, text: 'Altersgerechte Inhalte', color: 'bg-accent-pink/10 text-accent-pink' },
    { icon: Star, text: 'Motivierendes Belohnungssystem', color: 'bg-accent-yellow/10 text-accent-yellow' },
    { icon: Zap, text: 'Schnelle Erfolgserlebnisse', color: 'bg-primary-teal/10 text-primary-teal' },
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
    <section ref={sectionRef} className="relative py-24 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-primary-teal/5 rounded-full blur-3xl" />

      <div className="section-padding relative z-10">
        <div className="container-wide">
          {/* Section Header */}
          <div
            className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-bold text-neutral-dark mb-4">
              Warum <span className="gradient-text">KI-Entdecker</span>?
            </h2>
            <p className="text-lg text-neutral-gray">
              Unser Kurs bietet alles, was Kinder brauchen, um die Welt der KI spielerisch zu entdecken.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="relative h-full bg-neutral-light rounded-3xl p-6 hover:bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-outfit font-bold text-neutral-dark mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-neutral-gray leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-purple/5 to-primary-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </div>
              </div>
            ))}
          </div>

          {/* Additional Benefits */}
          <div
            className={`bg-gradient-to-br from-neutral-light to-white rounded-3xl p-8 sm:p-12 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-2xl font-outfit font-bold text-neutral-dark text-center mb-8">
              Das bekommst du zusätzlich
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 group"
                >
                  <div
                    className={`w-12 h-12 ${benefit.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium text-neutral-dark">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
