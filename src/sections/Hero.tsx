import { useEffect, useRef, useState } from 'react';
import { Play, Users, FileText, Award, Star } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Users, value: '5', label: 'Tage á 45 Minuten' },
    { icon: FileText, value: '4', label: 'Arbeitsblätter' },
    { icon: Award, value: '5', label: 'Badges zu sammeln' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-teal-50" />
      
      {/* Animated Blobs */}
      <div className="blob bg-primary-purple/30 w-96 h-96 -top-48 -left-48 animate-float-slow" />
      <div className="blob bg-primary-teal/30 w-80 h-80 top-1/3 -right-40 animate-float" style={{ animationDelay: '2s' }} />
      <div className="blob bg-accent-pink/20 w-72 h-72 bottom-20 left-1/4 animate-float-slow" style={{ animationDelay: '4s' }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(#7F56D9 1px, transparent 1px), linear-gradient(90deg, #7F56D9 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-primary-purple to-primary-teal opacity-40"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 section-padding w-full">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 bg-primary-purple/10 rounded-full mb-6 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <Star className="w-4 h-4 text-primary-purple fill-primary-purple" />
                <span className="text-sm font-medium text-primary-purple">
                  5 Tage KI-Abenteuer
                </span>
              </div>

              {/* Headline */}
              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-outfit font-bold leading-tight mb-6 transition-all duration-700 delay-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Werde zum{' '}
                <span className="gradient-text">KI-Experten</span>
              </h1>

              {/* Subheadline */}
              <p
                className={`text-lg sm:text-xl text-neutral-gray max-w-xl mx-auto lg:mx-0 mb-8 transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Ein interaktiver Kurs für junge Entdecker. Entdecke die Welt der 
                Künstlichen Intelligenz – spielerisch, verständlich und mit echten Projekten.
              </p>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 transition-all duration-700 delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <button
                  onClick={() => scrollToSection('#course')}
                  className="btn-primary flex items-center justify-center gap-2 group"
                >
                  <Play className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  Kurs starten
                </button>
                <button
                  onClick={() => scrollToSection('#parents')}
                  className="btn-secondary"
                >
                  Informationen für Eltern
                </button>
              </div>

              {/* Stats */}
              <div
                className={`flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 transition-all duration-700 delay-400 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 group"
                    style={{ transitionDelay: `${500 + index * 100}ms` }}
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                      <stat.icon className="w-5 h-5 text-primary-purple" />
                    </div>
                    <div className="text-left">
                      <div className="font-outfit font-bold text-neutral-dark">
                        {stat.value}
                      </div>
                      <div className="text-xs text-neutral-gray">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Robot Image */}
            <div
              className={`relative flex items-center justify-center transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 bg-primary-purple/20 rounded-full blur-3xl animate-pulse" />
              </div>
              
              {/* Decorative Rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-96 h-96 border-2 border-primary-purple/10 rounded-full animate-spin-slow" />
                <div className="absolute w-80 h-80 border-2 border-primary-teal/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '12s' }} />
              </div>

              {/* Robot Image */}
              <div className="relative z-10 floating">
                <img
                  src="/images/robot-hero.png"
                  alt="KI-Roboter Maskottchen"
                  className="w-full max-w-md lg:max-w-lg drop-shadow-2xl"
                />
              </div>

              {/* Floating Badges */}
              <div className="absolute top-10 right-10 bg-white rounded-xl p-3 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-accent-yellow/20 rounded-lg flex items-center justify-center">
                    <Star className="w-4 h-4 text-accent-yellow fill-accent-yellow" />
                  </div>
                  <span className="text-sm font-medium text-neutral-dark">Badge freigeschaltet!</span>
                </div>
              </div>

              <div className="absolute bottom-20 left-0 bg-white rounded-xl p-3 shadow-lg animate-float-slow" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary-teal/20 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-primary-teal" />
                  </div>
                  <span className="text-sm font-medium text-neutral-dark">KI lernt!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

// Sparkles Icon Component
const Sparkles = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </svg>
);

export default Hero;
