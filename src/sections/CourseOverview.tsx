import { useEffect, useRef, useState } from 'react';
import { Lock, Unlock, ArrowRight, Clock, BookOpen } from 'lucide-react';

interface DayCourse {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  lessons: number;
  image: string;
  color: string;
  locked: boolean;
}

const CourseOverview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const days: DayCourse[] = [
    {
      id: 1,
      title: 'Was ist KI?',
      subtitle: 'Die Grundlagen verstehen',
      description: 'Verstehe den Unterschied zwischen einfachen Regeln und echter KI. Wir bauen einen einfachen Chatbot und lernen, wie Computer "denken" können.',
      duration: '45 Minuten',
      lessons: 3,
      image: '/images/day1-brain.png',
      color: 'from-purple-500 to-indigo-600',
      locked: false,
    },
    {
      id: 2,
      title: 'Prompt Engineering',
      subtitle: 'Die Kunst der perfekten Frage',
      description: 'Lerne die Kunst der perfekten Frage. Wie bekommst du genau die Antwort, die du brauchst? Mit dem 5-Sterne-Prompt-Rezept.',
      duration: '45 Minuten',
      lessons: 4,
      image: '/images/day2-chat.png',
      color: 'from-teal-500 to-cyan-600',
      locked: true,
    },
    {
      id: 3,
      title: 'Kreativ mit KI',
      subtitle: 'Dein kreativer Partner',
      description: 'Erstelle eigene Bilder, schreibe Geschichten und designe Charaktere. Die KI wird zu deinem kreativen Partner für unendliche Möglichkeiten.',
      duration: '45 Minuten',
      lessons: 5,
      image: '/images/day3-creative.png',
      color: 'from-pink-500 to-rose-600',
      locked: true,
    },
    {
      id: 4,
      title: 'Problemlösen mit KI',
      subtitle: 'Der clevere Lernhelfer',
      description: 'Nutze KI als Lernhelfer. Verstehe komplexe Themen, werde Fehler-Jäger und löse knifflige Probleme Schritt für Schritt.',
      duration: '45 Minuten',
      lessons: 4,
      image: '/images/day4-puzzle.png',
      color: 'from-orange-500 to-amber-600',
      locked: true,
    },
    {
      id: 5,
      title: 'Das Abschlussprojekt',
      subtitle: 'Werde KI-Experte',
      description: 'Entwickle dein eigenes Projekt mit KI-Unterstützung. Präsentiere deine Idee und werde offizieller KI-Experte!',
      duration: '60 Minuten',
      lessons: 2,
      image: '/images/day5-trophy.png',
      color: 'from-yellow-500 to-amber-500',
      locked: true,
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
      id="course"
      ref={sectionRef}
      className="relative py-24 bg-white"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-teal/5 rounded-full blur-3xl" />

      <div className="section-padding relative z-10">
        <div className="container-wide">
          {/* Section Header */}
          <div
            className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-bold text-neutral-dark mb-4">
              Die 5 Tage im <span className="gradient-text">Überblick</span>
            </h2>
            <p className="text-lg text-neutral-gray">
              Jeder Tag bringt neue Erkenntnisse und eine spannende Herausforderung. 
              Klicke auf einen Tag, um zu starten.
            </p>
          </div>

          {/* Course Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {days.map((day, index) => (
              <div
                key={day.id}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
                onMouseEnter={() => setHoveredCard(day.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`relative h-full bg-white rounded-3xl overflow-hidden transition-all duration-500 ${
                    day.locked
                      ? 'opacity-80'
                      : 'shadow-lg hover:shadow-2xl hover:-translate-y-2'
                  }`}
                >
                  {/* Card Header with Image */}
                  <div className={`relative h-48 bg-gradient-to-br ${day.color} overflow-hidden`}>
                    {/* Pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '20px 20px'
                      }} />
                    </div>

                    {/* Day Number */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                        Tag {day.id}
                      </span>
                    </div>

                    {/* Lock Status */}
                    <div className="absolute top-4 right-4 z-10">
                      {day.locked ? (
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                          <Lock className="w-3 h-3" />
                          Gesperrt
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent-yellow/90 rounded-full text-white text-sm">
                          <Unlock className="w-3 h-3" />
                          Frei
                        </span>
                      )}
                    </div>

                    {/* Image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src={day.image}
                        alt={day.title}
                        className={`w-32 h-32 object-contain transition-all duration-500 ${
                          hoveredCard === day.id ? 'scale-110 rotate-6' : ''
                        }`}
                      />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-outfit font-bold text-neutral-dark mb-1">
                      {day.title}
                    </h3>
                    <p className="text-sm text-primary-purple font-medium mb-3">
                      {day.subtitle}
                    </p>
                    <p className="text-neutral-gray text-sm mb-4 line-clamp-2">
                      {day.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-neutral-gray mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{day.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{day.lessons} Lektionen</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button
                      className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-medium transition-all duration-300 ${
                        day.locked
                          ? 'bg-neutral-light text-neutral-gray cursor-not-allowed'
                          : 'bg-primary-purple text-white hover:bg-primary-purple/90 group/btn'
                      }`}
                      disabled={day.locked}
                    >
                      {day.locked ? (
                        <>
                          <Lock className="w-4 h-4" />
                          Tag {day.id} freischalten
                        </>
                      ) : (
                        <>
                          Zur Lektion
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            className={`mt-16 text-center transition-all duration-700 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-neutral-gray mb-4">
              Bereit für dein KI-Abenteuer?
            </p>
            <button className="btn-primary">
              Jetzt mit Tag 1 starten
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;
