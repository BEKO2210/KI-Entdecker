import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Play, Users, FileText, Award, Star, ArrowRight, CheckCircle, BookOpen, Brain, Palette, Lightbulb, Trophy, Lock, Download } from 'lucide-react';
import type { useProgress } from '../hooks/useProgress';
import { buildAssetUrl, buildDownloadUrl } from '@/lib/paths';

interface HomeProps {
  progress: ReturnType<typeof useProgress>;
}

const Home = ({ progress }: HomeProps) => {
  const isVisible = true;
  const [imageLoaded, setImageLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const unlockedCount = progress.getUnlockedBadgesCount();
  const completedDays = progress.getCompletedDaysCount();

  const stats = [
    { icon: Users, value: '5', label: 'Kurstage' },
    { icon: FileText, value: '4', label: 'Arbeitsblätter' },
    { icon: Award, value: '5', label: 'Badges zu sammeln' },
  ];

  const features = [
    'Spielerisch KI lernen',
    'Praxisnahe Projekte',
    'Kostenlos starten',
    'Für Kinder ab 8 Jahren',
  ];

  /* ══════════════════════════════════════════════════════════════════════
     🖼️  BILDER – KURS-ÜBERSICHTSKARTEN (5 Stück auf der Startseite)
     Jedes 'image:' referenziert ein Bild unter public/images/courses/…
     Zum Austauschen: Datei unter gleichem Pfad ersetzen (gleicher Name).
     Komplette Bild-Dokumentation: siehe BILDER.md im Projekt-Root.
     ══════════════════════════════════════════════════════════════════════ */
  const courses = [
    {
      day: '1',
      title: 'Was ist KI?',
      description: 'Die Grundlagen der Künstlichen Intelligenz verstehen',
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      icon: Brain,
      image: buildAssetUrl('images/courses/day1/robot-confused.png'),
      path: '/kurs/tag-1',
      topics: ['KI verstehen', 'Maschinelles Lernen', 'Erster Chatbot']
    },
    {
      day: '2',
      title: 'Prompt Engineering',
      description: 'Die Kunst der guten Frage',
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      icon: BookOpen,
      image: buildAssetUrl('images/courses/day2/magic-prompt.png'),
      path: '/kurs/tag-2',
      topics: ['Was ist ein Prompt?', '5-Sterne-Rezept', 'Prompts verbessern']
    },
    {
      day: '3',
      title: 'Kreativ mit KI',
      description: 'Bilder, Geschichten und Songtexte mit KI',
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
      icon: Palette,
      image: buildAssetUrl('images/courses/day3/art-easel.png'),
      path: '/kurs/tag-3',
      topics: ['Bilder erstellen', 'Geschichten schreiben', 'Musik & mehr']
    },
    {
      day: '4',
      title: 'Problemlösen mit KI',
      description: 'Recherchieren, zusammenfassen und korrigieren',
      color: 'from-orange-500 to-amber-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      icon: Lightbulb,
      image: buildAssetUrl('images/courses/day4/puzzle-solution.png'),
      path: '/kurs/tag-4',
      topics: ['KI als Lernhelfer', 'Recherche', 'Fehler korrigieren']
    },
    {
      day: '5',
      title: 'Abschlussprojekt',
      description: 'Zeig, was du gelernt hast!',
      color: 'from-yellow-500 to-amber-500',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      icon: Trophy,
      image: buildAssetUrl('images/courses/day5/trophy-celebration.png'),
      path: '/kurs/tag-5',
      topics: ['KI-Comic', 'KI-Quiz', 'KI-Assistent']
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-teal-50" />
        
        {/* Animated Blobs */}
        <div className="blob bg-primary-purple/30 w-96 h-96 -top-48 -left-48 animate-float-slow" aria-hidden="true" />
        <div className="blob bg-primary-teal/30 w-80 h-80 top-1/3 -right-40 animate-float" style={{ animationDelay: '2s' }} aria-hidden="true" />
        <div className="blob bg-accent-pink/20 w-72 h-72 bottom-20 left-1/4 animate-float-slow" style={{ animationDelay: '4s' }} aria-hidden="true" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(#7F56D9 1px, transparent 1px), linear-gradient(90deg, #7F56D9 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} aria-hidden="true" />

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
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
                  <Star className="w-4 h-4 text-primary-purple fill-primary-purple" aria-hidden="true" />
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

                {/* Feature List */}
                <div
                  className={`flex flex-wrap justify-center lg:justify-start gap-3 mb-8 transition-all duration-700 delay-250 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full shadow-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-primary-teal" aria-hidden="true" />
                      <span className="text-sm text-neutral-dark">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div
                  className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 transition-all duration-700 delay-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <button
                    onClick={() => document.getElementById('course-path')?.scrollIntoView({ behavior: 'smooth' })}
                    className="btn-primary flex items-center justify-center gap-2 group"
                    aria-label={unlockedCount > 0 ? 'Kurs fortsetzen' : 'Kurs starten'}
                  >
                    <Play className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                    {unlockedCount > 0 ? 'Weitermachen' : 'Kurs starten'}
                  </button>
                  <Link
                    to="/eltern"
                    className="btn-secondary flex items-center justify-center"
                    aria-label="Informationen für Eltern anzeigen"
                  >
                    Informationen für Eltern
                  </Link>
                  <Link
                    to="/schulen"
                    className="btn-secondary flex items-center justify-center"
                    aria-label="Informationen für Schulen und Lehrkräfte anzeigen"
                  >
                    Für Schulen / Lehrkräfte
                  </Link>
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
                        <stat.icon className="w-5 h-5 text-primary-purple" aria-hidden="true" />
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
                <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                  <div className="w-80 h-80 bg-primary-purple/20 rounded-full blur-3xl animate-pulse" />
                </div>
                
                {/* Decorative Rings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
                  <div className="w-96 h-96 border-2 border-primary-purple/10 rounded-full animate-spin-slow" />
                  <div className="absolute w-80 h-80 border-2 border-primary-teal/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '12s' }} />
                </div>

                {/* Robot Image */}
                <div className="relative z-10 floating">
                  <img
                    src={buildAssetUrl('images/robot-hero.png')}
                    alt="KI-Roboter Maskottchen"
                    loading="eager"
                    onLoad={() => setImageLoaded(true)}
                    className={`w-full max-w-md lg:max-w-lg drop-shadow-2xl transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  />
                  {!imageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-neutral-light rounded-2xl animate-pulse" />
                    </div>
                  )}
                </div>

                {/* Floating Badges */}
                {unlockedCount > 0 && (
                  <div className="absolute top-10 right-10 bg-white rounded-xl p-3 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-accent-yellow/20 rounded-lg flex items-center justify-center">
                        <Star className="w-4 h-4 text-accent-yellow fill-accent-yellow" aria-hidden="true" />
                      </div>
                      <span className="text-sm font-medium text-neutral-dark">
                        {unlockedCount} {unlockedCount === 1 ? 'Badge' : 'Badges'} freigeschaltet!
                      </span>
                    </div>
                  </div>
                )}

                <div className="absolute bottom-20 left-0 bg-white rounded-xl p-3 shadow-lg animate-float-slow" style={{ animationDelay: '2s' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary-teal/20 rounded-lg flex items-center justify-center">
                      <SparklesIcon className="w-4 h-4 text-primary-teal" aria-hidden="true" />
                    </div>
                    <span className="text-sm font-medium text-neutral-dark">KI lernt!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
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

      {/* Course Cards Section */}
      <section id="course-path" className="py-24 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-outfit font-bold text-neutral-dark mb-4">
                Dein KI-Lernpfad
              </h2>
              <p className="text-lg text-neutral-gray">
                In 5 spannenden Tagen lernst du alles, was du brauchst, um KI sicher und kreativ zu nutzen.
                Klicke auf einen Kurs, um direkt zu starten!
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => {
                const dayNum = Number(course.day);
                const isUnlocked = progress.isDayUnlocked(dayNum);
                const isCompleted = progress.getDayProgress(dayNum)?.completed;

                return (
                  <div
                    key={index}
                    onClick={() => isUnlocked && navigate(course.path)}
                    className={`group relative ${course.bgColor} ${course.borderColor} border-2 rounded-3xl p-6 transition-all duration-500 overflow-hidden ${
                      isUnlocked
                        ? 'hover:shadow-2xl hover:-translate-y-2 cursor-pointer'
                        : 'opacity-70 cursor-not-allowed'
                    }`}
                    role="button"
                    tabIndex={isUnlocked ? 0 : -1}
                    aria-label={isUnlocked ? `Tag ${course.day}: ${course.title}` : `Tag ${course.day} ist gesperrt`}
                    onKeyDown={(e) => { if (isUnlocked && (e.key === 'Enter' || e.key === ' ')) navigate(course.path); }}
                  >
                    {/* Day Badge */}
                    <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${course.color} rounded-xl flex items-center justify-center shadow-lg ${isUnlocked ? 'group-hover:scale-110' : ''} transition-transform duration-300`}>
                      <span className="text-white font-outfit font-bold text-lg">{course.day}</span>
                    </div>

                    {/* Course Image */}
                    <div className="relative mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-10 rounded-2xl transform rotate-3 ${isUnlocked ? 'group-hover:rotate-6' : ''} transition-transform duration-300`} />
                      <img
                        src={course.image}
                        alt={course.title}
                        className={`w-full h-40 object-contain relative z-10 ${isUnlocked ? 'group-hover:scale-105' : ''} transition-transform duration-300`}
                      />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-3">
                        <course.icon className={`w-5 h-5 text-${course.color.split('-')[1]}-500`} />
                        <span className="text-sm font-medium text-neutral-gray">Tag {course.day}</span>
                      </div>

                      <h3 className={`font-outfit font-bold text-xl text-neutral-dark mb-2 ${isUnlocked ? 'group-hover:text-primary-purple' : ''} transition-colors`}>
                        {course.title}
                      </h3>
                      <p className="text-sm text-neutral-gray mb-4">
                        {course.description}
                      </p>

                      {/* Topics */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {course.topics.map((topic, tidx) => (
                          <span
                            key={tidx}
                            className="px-2 py-1 bg-white/70 rounded-lg text-xs text-neutral-dark"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      {isUnlocked ? (
                        <div className="flex items-center gap-2 text-primary-purple font-medium">
                          <span>{isCompleted ? 'Wiederholen' : 'Jetzt starten'}</span>
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-neutral-gray font-medium">
                          <Lock className="w-4 h-4" />
                          <span>Schließe Tag {dayNum - 1} ab</span>
                        </div>
                      )}
                    </div>

                    {/* Hover Glow */}
                    {isUnlocked && (
                      <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-20 rounded-full blur-3xl transition-opacity duration-500`} />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/kurs"
                className="btn-primary inline-flex items-center gap-2"
                aria-label="Zur vollständigen Kursübersicht"
              >
                Zur Kursübersicht
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Preview */}
      <section className="py-16 bg-gradient-to-b from-white to-neutral-light">
        <div className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Certificate Preview Image */}
              <div className="flex-shrink-0 w-full md:w-80">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={buildAssetUrl('images/preview/zertifikatvorschau.webp')}
                  />
                  <img
                    src={buildAssetUrl('images/preview/zertifikatvorschau.png')}
                    alt="Vorschau des KI-Entdecker Zertifikats"
                    loading="lazy"
                    decoding="async"
                    width={1600}
                    height={1054}
                    className="w-full h-auto rounded-xl shadow-xl ring-1 ring-neutral-light bg-white"
                  />
                </picture>
              </div>

              {/* Text + Button */}
              <div className="text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl font-outfit font-bold text-neutral-dark mb-3">
                  Dein Zertifikat wartet
                </h2>
                <p className="text-neutral-gray mb-3">
                  Nach Abschluss aller 5 Kurstage erhältst du dein Zertifikat als hochwertige
                  <strong> PDF-Datei</strong> mit allen erreichten Kompetenzstufen und dem
                  KI-Entdecker-Siegel. <strong>Name und Datum trägst du nach dem Ausdrucken
                  selbst in Druckschrift ein</strong> – so wird es zu deinem ganz persönlichen
                  Zertifikat.
                </p>
                <p className="text-sm text-neutral-gray/80 mb-5">
                  Der Online-Kurs ist kostenlos – der Ausdruck erfolgt zu Hause oder im Copyshop
                  (Empfehlung: A4, mindestens 160 g/m²). Bei Präsenz-Seminaren an Schulen wird das
                  Zertifikat auf festem Papier vor Ort überreicht.
                </p>

                {completedDays === 5 ? (
                  /* All done - download button */
                  <button
                    onClick={() => window.open(buildDownloadUrl('zertifikat.html'), '_blank')}
                    className="relative inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-primary-purple rounded-xl hover:bg-primary-purple/90 transition-all duration-300 overflow-hidden group/cert"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl group-hover/cert:opacity-75 transition-opacity opacity-0" />
                    <Download className="w-4 h-4 relative" />
                    <span className="relative">Zertifikat herunterladen</span>
                  </button>
                ) : (
                  /* Not done - locked button with tooltip */
                  <div className="relative inline-block group/tip">
                    <button
                      className="relative inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-neutral-gray/40 rounded-xl cursor-not-allowed overflow-hidden"
                      aria-disabled="true"
                    >
                      <Lock className="w-4 h-4" />
                      <span>Zertifikat herunterladen</span>
                    </button>

                    {/* Tooltip */}
                    <div className="absolute invisible opacity-0 group-hover/tip:visible group-hover/tip:opacity-100 top-full left-1/2 -translate-x-1/2 mt-3 w-72 transition-all duration-300 ease-out transform group-hover/tip:translate-y-0 -translate-y-2 z-20">
                      <div className="relative p-4 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(79,70,229,0.15)]">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-purple/20">
                            <Award className="w-4 h-4 text-purple-400" />
                          </div>
                          <h3 className="text-sm font-semibold text-white">Noch nicht freigeschaltet</h3>
                        </div>
                        <p className="text-sm text-gray-300 mb-2">
                          Schließe alle 5 Kurstage ab, um dein Zertifikat freizuschalten.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <CheckCircle className="w-3.5 h-3.5" />
                          <span>{completedDays} von 5 Tagen abgeschlossen</span>
                        </div>
                        {/* Arrow */}
                        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-gray-900/95 to-gray-800/95 rotate-45 border-l border-t border-white/10" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-neutral-light">
        <div className="section-padding">
          <div className="container-wide">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-outfit font-bold text-neutral-dark mb-4">
                Warum dieser Kurs?
              </h2>
              <p className="text-lg text-neutral-gray">
                Unser Kurs ist speziell für Kinder entwickelt - altersgerecht, interaktiv und voller Spaß!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Play,
                  title: 'Interaktives Lernen',
                  description: 'Nicht nur lesen, sondern selbst ausprobieren! Mit praktischen Übungen und echten Projekten.'
                },
                {
                  icon: Award,
                  title: 'Badges sammeln',
                  description: 'Für jeden Tag gibt es einen Badge. Sammle alle 5 und werde zum KI-Experten!'
                },
                {
                  icon: Users,
                  title: 'Für die ganze Familie',
                  description: 'Eltern können mitlernen und unterstützen. Gemeinsam KI entdecken!'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="w-14 h-14 bg-primary-purple/10 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-primary-purple" />
                  </div>
                  <h3 className="font-outfit font-bold text-xl text-neutral-dark mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-gray">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Sparkles Icon Component
const SparklesIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </svg>
);

export default Home;
