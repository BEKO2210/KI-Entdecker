import { useEffect, useRef, useState } from 'react';
import { Rocket, Sparkles, Star, Zap } from 'lucide-react';

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToCourse = () => {
    const element = document.querySelector('#course');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-purple via-primary-purple to-primary-teal" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Stars */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
              animation: `float ${3 + i * 0.3}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          >
            <Star
              className="w-4 h-4 text-white/30"
              style={{ transform: `rotate(${i * 45}deg)` }}
            />
          </div>
        ))}

        {/* Large Glow Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-yellow/20 rounded-full blur-3xl" />

        {/* Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }} />
        </div>
      </div>

      <div className="section-padding relative z-10">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Sparkles className="w-4 h-4 text-accent-yellow" />
              <span className="text-sm font-medium text-white">
                Kostenlos starten
              </span>
            </div>

            {/* Headline */}
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-outfit font-bold text-white mb-6 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Bereit für dein{' '}
              <span className="text-accent-yellow">KI-Abenteuer?</span>
            </h2>

            {/* Subheadline */}
            <p
              className={`text-lg sm:text-xl text-white/80 mb-10 max-w-xl mx-auto transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Starte jetzt und werde in nur 5 Tagen zum KI-Experten. 
              Spannende Lektionen, kreative Projekte und tolle Badges warten auf dich!
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <button
                onClick={scrollToCourse}
                className="group relative bg-white text-primary-purple font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Rocket className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  Jetzt kostenlos starten
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-yellow to-accent-orange opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div
              className={`flex flex-wrap justify-center gap-6 text-white/70 text-sm transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent-yellow" />
                <span>Keine Anmeldung nötig</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent-yellow" />
                <span>100% Kostenlos</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent-yellow" />
                <span>Sofort starten</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L60 75C120 70 240 60 360 55C480 50 600 50 720 52.5C840 55 960 60 1080 62.5C1200 65 1320 65 1380 65L1440 65V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default CTA;
