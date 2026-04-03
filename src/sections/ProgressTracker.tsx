import { useEffect, useRef, useState } from 'react';
import { Star, Lock, Trophy } from 'lucide-react';

interface Badge {
  id: number;
  name: string;
  icon: string;
  unlocked: boolean;
}

const ProgressTracker = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const badges: Badge[] = [
    { id: 1, name: 'KI-Anfänger', icon: '🤖', unlocked: true },
    { id: 2, name: 'Prompt-Meister', icon: '💬', unlocked: false },
    { id: 3, name: 'Kreativ-Genie', icon: '🎨', unlocked: false },
    { id: 4, name: 'Problem-Löser', icon: '🧩', unlocked: false },
    { id: 5, name: 'KI-Experte', icon: '🏆', unlocked: false },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate progress
          setTimeout(() => {
            setProgress(20);
          }, 500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const unlockedCount = badges.filter((b) => b.unlocked).length;

  return (
    <section ref={sectionRef} className="relative py-20 bg-white">
      <div className="section-padding">
        <div className="container-wide">
          <div
            className={`relative bg-gradient-to-br from-primary-purple to-primary-teal rounded-3xl p-8 sm:p-12 overflow-hidden transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-outfit font-bold text-white mb-2">
                    Dein Fortschritt
                  </h2>
                  <p className="text-white/80">
                    Sammle alle 5 Badges, um ein KI-Experte zu werden
                  </p>
                </div>
                <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2">
                  <Trophy className="w-6 h-6 text-accent-yellow" />
                  <span className="text-white font-outfit font-bold text-xl">
                    {unlockedCount} / {badges.length}
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-10">
                <div className="h-4 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-accent-yellow to-accent-orange rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="h-full w-full bg-white/30 animate-shimmer" />
                  </div>
                </div>
                <p className="text-white/70 text-sm mt-2">
                  {unlockedCount === 0
                    ? 'Starte mit Tag 1, um deinen ersten Badge zu erhalten.'
                    : `Super! Du hast ${unlockedCount} von ${badges.length} Badges gesammelt.`}
                </p>
              </div>

              {/* Badges */}
              <div className="grid grid-cols-5 gap-3 sm:gap-6">
                {badges.map((badge, index) => (
                  <div
                    key={badge.id}
                    className={`relative group transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <div
                      className={`relative aspect-square rounded-2xl flex flex-col items-center justify-center p-2 sm:p-4 transition-all duration-300 ${
                        badge.unlocked
                          ? 'bg-white shadow-lg group-hover:scale-110 group-hover:shadow-xl'
                          : 'bg-white/10 backdrop-blur-sm'
                      }`}
                    >
                      {/* Badge Icon */}
                      <div
                        className={`text-2xl sm:text-4xl mb-1 sm:mb-2 transition-transform duration-300 ${
                          badge.unlocked ? 'group-hover:scale-110 group-hover:rotate-12' : ''
                        }`}
                      >
                        {badge.unlocked ? badge.icon : '🔒'}
                      </div>

                      {/* Badge Name */}
                      <span
                        className={`text-[10px] sm:text-xs text-center font-medium leading-tight ${
                          badge.unlocked ? 'text-neutral-dark' : 'text-white/60'
                        }`}
                      >
                        {badge.name}
                      </span>

                      {/* Unlocked Indicator */}
                      {badge.unlocked && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-accent-yellow rounded-full flex items-center justify-center">
                          <Star className="w-3 h-3 text-white fill-white" />
                        </div>
                      )}

                      {/* Locked Overlay */}
                      {!badge.unlocked && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Lock className="w-4 h-4 sm:w-6 sm:h-6 text-white/30" />
                        </div>
                      )}
                    </div>

                    {/* Connection Line */}
                    {index < badges.length - 1 && (
                      <div className="hidden sm:block absolute top-1/2 -right-3 w-6 h-0.5 bg-white/30" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressTracker;
