import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Unlock, ArrowRight, Clock, BookOpen, CheckCircle, Award, RotateCcw } from 'lucide-react';
import type { useProgress } from '../hooks/useProgress';
import { buildAssetUrl } from '@/lib/paths';

interface DayCourse {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  lessons: number;
  image: string;
  color: string;
  lessonsList: string[];
}

interface KursProps {
  progress: ReturnType<typeof useProgress>;
}

const Kurs = ({ progress }: KursProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);

  const unlockedCount = progress.getUnlockedBadgesCount();
  const completedDays = progress.getCompletedDaysCount();

  /* ══════════════════════════════════════════════════════════════════════
     🖼️  BILDER – KURS-ÜBERSICHTSBILDER (5 Stück auf /kurs)
     Pfad: public/images/dayN-xxx.png
     Zum Austauschen: Datei unter gleichem Pfad ersetzen (gleicher Name).
     Alle Details + alternative Bilder: siehe BILDER.md
     ══════════════════════════════════════════════════════════════════════ */
  const days: DayCourse[] = [
    {
      id: 1,
      title: 'Was ist KI?',
      subtitle: 'Die Grundlagen verstehen',
      description: 'Verstehe den Unterschied zwischen einfachen Regeln und echter KI. Lerne, wie Computer „denken" können und probiere deinen ersten Chatbot aus.',
      duration: '45 Minuten',
      lessons: 3,
      image: buildAssetUrl('images/day1-brain.png'),
      color: 'from-purple-500 to-indigo-600',
      lessonsList: [
        'Was ist KI?',
        'Wie lernen Computer?',
        'Dein erster Chatbot',
      ],
    },
    {
      id: 2,
      title: 'Prompt Engineering',
      subtitle: 'Die Kunst der guten Frage',
      description: 'Lerne, wie du KI mit guten Fragen steuerst. Mit dem 5-Sterne-Rezept schreibst du Prompts, die genau die Antwort liefern, die du brauchst.',
      duration: '45 Minuten',
      lessons: 3,
      image: buildAssetUrl('images/day2-chat.png'),
      color: 'from-teal-500 to-cyan-600',
      lessonsList: [
        'Was ist ein Prompt?',
        'Das 5-Sterne-Rezept',
        'Prompts verbessern',
      ],
    },
    {
      id: 3,
      title: 'Kreativ mit KI',
      subtitle: 'Dein kreativer Partner',
      description: 'Erstelle Bilder mit KI, schreibe kreative Geschichten und entdecke weitere Möglichkeiten wie Songtexte und Gedichte.',
      duration: '45 Minuten',
      lessons: 3,
      image: buildAssetUrl('images/day3-creative.png'),
      color: 'from-pink-500 to-rose-600',
      lessonsList: [
        'Bilder mit KI',
        'Geschichten schreiben',
        'Musik & mehr',
      ],
    },
    {
      id: 4,
      title: 'Problemlösen mit KI',
      subtitle: 'Der clevere Lernhelfer',
      description: 'Nutze KI als Lernhelfer. Lerne, wie du mit KI recherchierst, Texte zusammenfasst und Fehler in Texten findest und korrigierst.',
      duration: '45 Minuten',
      lessons: 3,
      image: buildAssetUrl('images/day4-puzzle.png'),
      color: 'from-orange-500 to-amber-600',
      lessonsList: [
        'KI als Lernhelfer',
        'Recherche & Zusammenfassen',
        'Fehler finden & Korrigieren',
      ],
    },
    {
      id: 5,
      title: 'Abschlussprojekt',
      subtitle: 'Zeig, was du gelernt hast!',
      description: 'Wähle aus drei spannenden Projekten: Erstelle einen KI-Comic, baue ein KI-Quiz oder entwickle deinen eigenen KI-Assistenten.',
      duration: '60 Minuten',
      lessons: 3,
      image: buildAssetUrl('images/day5-trophy.png'),
      color: 'from-yellow-500 to-amber-500',
      lessonsList: [
        'Projekt 1: KI-Comic',
        'Projekt 2: KI-Quiz',
        'Projekt 3: KI-Assistent',
      ],
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

  const handleStartDay = (dayId: number) => {
    navigate(`/kurs/tag-${dayId}`);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Banner */}
      <section className="relative py-16 bg-gradient-to-br from-primary-purple to-primary-teal overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }} />
        </div>
        
        <div className="section-padding relative z-10">
          <div className="container-wide">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-bold text-white mb-4">
                  Der Kurs
                </h1>
                <p className="text-white/80 text-lg max-w-xl">
                  5 Tage KI-Abenteuer. Jeder Tag bringt neue Erkenntnisse und eine spannende Herausforderung.
                </p>
              </div>
              
              {/* Progress Summary */}
              <div className="flex items-center gap-4 bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                <div className="text-center">
                  <div className="text-3xl font-outfit font-bold text-white">{completedDays}</div>
                  <div className="text-white/70 text-sm">Tage fertig</div>
                </div>
                <div className="w-px h-12 bg-white/30" />
                <div className="text-center">
                  <div className="text-3xl font-outfit font-bold text-white">{unlockedCount}</div>
                  <div className="text-white/70 text-sm">Badges</div>
                </div>
                <div className="w-px h-12 bg-white/30" />
                <div className="text-center">
                  <div className="text-3xl font-outfit font-bold text-white">{Math.round((completedDays / 5) * 100)}%</div>
                  <div className="text-white/70 text-sm">Gesamt</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="py-8 bg-white border-b border-neutral-light">
        <div className="section-padding">
          <div className="container-wide">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-neutral-dark">Dein Fortschritt</span>
              <span className="text-sm text-neutral-gray">{completedDays} von 5 Tagen abgeschlossen</span>
            </div>
            <div className="h-3 bg-neutral-light rounded-full overflow-hidden" role="progressbar" aria-valuenow={completedDays} aria-valuemin={0} aria-valuemax={5}>
              <div 
                className="h-full bg-gradient-to-r from-primary-purple to-primary-teal rounded-full transition-all duration-1000"
                style={{ width: `${(completedDays / 5) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Cards */}
      <section ref={sectionRef} className="py-16 bg-neutral-light/50">
        <div className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-8">
              {days.map((day, index) => {
                const isUnlocked = progress.isDayUnlocked(day.id);
                const isCompleted = progress.getDayProgress(day.id)?.completed;
                
                return (
                  <div
                    key={day.id}
                    className={`group transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                    style={{ transitionDelay: `${200 + index * 100}ms` }}
                    onMouseEnter={() => setHoveredCard(day.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() => isUnlocked && handleStartDay(day.id)}
                  >
                    <div className={`relative bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-500 ${
                      isUnlocked ? 'hover:shadow-2xl hover:-translate-y-1 cursor-pointer' : 'opacity-75 cursor-not-allowed'
                    }`}>
                      {/* Status Banner */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${day.color}`} />
                      
                      <div className="flex flex-col md:flex-row">
                        {/* Image Section */}
                        <div className={`relative md:w-48 h-48 md:h-auto bg-gradient-to-br ${day.color} flex items-center justify-center flex-shrink-0`}>
                          <img
                            src={day.image}
                            alt={day.title}
                            loading="lazy"
                            className={`w-32 h-32 object-contain transition-all duration-500 ${
                              hoveredCard === day.id ? 'scale-110 rotate-6' : ''
                            }`}
                          />
                          
                          {/* Status Badge */}
                          <div className="absolute top-4 left-4">
                            {isCompleted ? (
                              <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-green-600">
                                <CheckCircle className="w-4 h-4" />
                                Fertig
                              </span>
                            ) : isUnlocked ? (
                              <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-primary-purple">
                                <Unlock className="w-4 h-4" />
                                Frei
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                                <Lock className="w-4 h-4" />
                                Gesperrt
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="flex-1 p-6">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <span className="text-sm text-neutral-gray">Tag {day.id}</span>
                              <h3 className="text-xl font-outfit font-bold text-neutral-dark">
                                {day.title}
                              </h3>
                              <p className="text-sm text-primary-purple font-medium">
                                {day.subtitle}
                              </p>
                            </div>
                            {isCompleted && (
                              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center" aria-label="Abgeschlossen">
                                <Award className="w-5 h-5 text-green-600" />
                              </div>
                            )}
                          </div>

                          <p className="text-neutral-gray text-sm mb-4">
                            {day.description}
                          </p>

                          {/* Lessons Preview */}
                          <div className="mb-4">
                            <p className="text-xs text-neutral-gray mb-2">Lektionen:</p>
                            <ul className="space-y-1">
                              {day.lessonsList.map((lesson, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-neutral-dark">
                                  <div className="w-1.5 h-1.5 bg-primary-purple rounded-full" />
                                  {lesson}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Meta */}
                          <div className="flex items-center gap-4 text-sm text-neutral-gray pt-4 border-t border-neutral-light">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{day.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <BookOpen className="w-4 h-4" />
                              <span>{day.lessons} Lektionen</span>
                            </div>
                          </div>

                          {/* Action Button */}
                          <div className="mt-4">
                            {isUnlocked ? (
                              <button
                                onClick={(e) => { e.stopPropagation(); handleStartDay(day.id); }}
                                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary-purple text-white rounded-xl text-sm font-semibold hover:bg-primary-purple/90 transition-colors group/btn"
                                aria-label={`${day.title} starten`}
                              >
                                {isCompleted ? 'Wiederholen' : (day.id === 1 && completedDays === 0 ? 'Starten' : 'Weitermachen')}
                                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                              </button>
                            ) : (
                              <span className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-neutral-light text-neutral-gray rounded-xl text-sm">
                                <Lock className="w-4 h-4" />
                                Tag {day.id - 1} zuerst
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Reset Progress */}
            <div className="mt-12 text-center">
              <button
                onClick={progress.resetProgress}
                className="inline-flex items-center gap-2 text-sm text-neutral-gray hover:text-red-500 transition-colors"
                aria-label="Fortschritt zurücksetzen"
              >
                <RotateCcw className="w-4 h-4" />
                Fortschritt zurücksetzen
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kurs;
