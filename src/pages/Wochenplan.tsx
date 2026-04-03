import { Calendar, Clock, BookOpen, Coffee, CheckCircle, Download, ArrowRight, Sparkles } from 'lucide-react';
import { buildDownloadUrl } from '@/lib/paths';

const Wochenplan = () => {
  const isVisible = true;

  const handleDownload = () => {
    window.open(buildDownloadUrl('wochenplan.html'), '_blank');
  };

  const schedule = [
    {
      day: 1,
      title: 'Was ist KI?',
      duration: '45 Min',
      color: 'from-purple-500 to-indigo-600',
      lessons: [
        { time: '~15 min', title: 'Was ist KI? – Grundlagen lesen & verstehen', type: 'reading' },
        { time: '~15 min', title: 'Wie lernen Computer? – Beispiele & Erklärungen', type: 'reading' },
        { time: '~10 min', title: 'Dein erster Chatbot – Prompts ausprobieren', type: 'mitmachen' },
        { time: '~5 min', title: 'FAQ & Zusammenfassung', type: 'review' },
      ],
      goals: ['KI-Grundlagen verstehen', 'Unterschied zwischen Regeln und KI erkennen'],
      materials: ['Computer oder Tablet', 'Internetzugang'],
    },
    {
      day: 2,
      title: 'Prompt Engineering',
      duration: '45 Min',
      color: 'from-teal-500 to-cyan-600',
      lessons: [
        { time: '~10 min', title: 'Was ist ein Prompt? – Einführung lesen', type: 'reading' },
        { time: '~15 min', title: 'Das 5-Sterne-Rezept – Aufbau guter Prompts lernen', type: 'reading' },
        { time: '~15 min', title: 'Prompts verbessern – Vorher/Nachher-Beispiele üben', type: 'practice' },
        { time: '~5 min', title: 'FAQ & Zusammenfassung', type: 'review' },
      ],
      goals: ['Gute Prompts schreiben können', 'KI gezielt steuern lernen'],
      materials: ['Computer oder Tablet', 'Optional: Notizbuch'],
    },
    {
      day: 3,
      title: 'Kreativ mit KI',
      duration: '45 Min',
      color: 'from-pink-500 to-rose-600',
      lessons: [
        { time: '~15 min', title: 'Bilder mit KI – Bild-Prompts ausprobieren', type: 'mitmachen' },
        { time: '~15 min', title: 'Geschichten schreiben – Kreative Texte mit KI', type: 'mitmachen' },
        { time: '~10 min', title: 'Musik & mehr – Weitere kreative Möglichkeiten', type: 'mitmachen' },
        { time: '~5 min', title: 'FAQ & Zusammenfassung', type: 'review' },
      ],
      goals: ['KI als Kreativ-Partner nutzen', 'Eigene Texte und Ideen erstellen'],
      materials: ['Computer oder Tablet', 'Optional: Papier & Stifte'],
    },
    {
      day: 4,
      title: 'Problemlösen mit KI',
      duration: '45 Min',
      color: 'from-orange-500 to-amber-600',
      lessons: [
        { time: '~10 min', title: 'KI als Lernhelfer – Praktische Beispiele lesen', type: 'reading' },
        { time: '~15 min', title: 'Recherche & Zusammenfassen – Texte mit KI bearbeiten', type: 'practice' },
        { time: '~15 min', title: 'Fehler finden & Korrigieren – KI als Korrekturhilfe', type: 'practice' },
        { time: '~5 min', title: 'FAQ & Zusammenfassung', type: 'review' },
      ],
      goals: ['KI zum Lernen einsetzen', 'Texte prüfen und verbessern mit KI'],
      materials: ['Computer oder Tablet', 'Optional: eigene Texte oder Schulaufgaben'],
    },
    {
      day: 5,
      title: 'Abschlussprojekt',
      duration: '60 Min',
      color: 'from-yellow-500 to-amber-500',
      lessons: [
        { time: '~15 min', title: 'Projekt 1: KI-Comic – Eine Geschichte als Comic gestalten', type: 'project' },
        { time: '~15 min', title: 'Projekt 2: KI-Quiz – Ein eigenes Quiz erstellen', type: 'project' },
        { time: '~15 min', title: 'Projekt 3: KI-Assistent – Einen Helfer-Bot bauen', type: 'project' },
        { time: '~15 min', title: 'Abschluss – Zertifikat & Badges erhalten', type: 'celebration' },
      ],
      goals: ['Ein eigenes KI-Projekt umsetzen', 'Das Gelernte aus allen Tagen anwenden'],
      materials: ['Computer oder Tablet', 'Notizen aus Tag 1–4'],
    },
  ];

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      reading: 'Lesen',
      mitmachen: 'Mitmachen',
      practice: 'Übung',
      project: 'Projekt',
      review: 'Zusammenfassung',
      celebration: 'Abschluss',
    };
    return labels[type] || type;
  };

  const getTypeStyle = (type: string) => {
    const styles: Record<string, string> = {
      reading: 'bg-indigo-100 text-indigo-600',
      mitmachen: 'bg-blue-100 text-blue-600',
      practice: 'bg-orange-100 text-orange-600',
      project: 'bg-green-100 text-green-600',
      review: 'bg-gray-100 text-gray-600',
      celebration: 'bg-pink-100 text-pink-600',
    };
    return styles[type] || 'bg-neutral-100 text-neutral-600';
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Banner */}
      <section className="relative py-16 bg-gradient-to-br from-accent-yellow to-orange-500 overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }} />
        </div>
        
        <div className="section-padding relative z-10">
          <div className="container-wide text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-bold text-white mb-4">
              Wochenplan
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Die komplette Übersicht aller 5 Kurstage mit Zeitplan, Lernzielen und Materialien.
              So weißt du immer, was als Nächstes kommt!
            </p>
            <button 
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-orange-500 rounded-xl font-bold hover:bg-white/90 transition-colors"
              aria-label="Wochenplan zum Drucken öffnen"
            >
              <Download className="w-5 h-5" aria-hidden="true" />
              Druckversion öffnen
            </button>
          </div>
        </div>
      </section>

      {/* Overview Stats */}
      <section className="py-8 bg-white border-b border-neutral-light">
        <div className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-neutral-light rounded-xl">
                <div className="text-2xl font-outfit font-bold text-primary-purple">5</div>
                <div className="text-sm text-neutral-gray">Tage</div>
              </div>
              <div className="text-center p-4 bg-neutral-light rounded-xl">
                <div className="text-2xl font-outfit font-bold text-primary-teal">~4h</div>
                <div className="text-sm text-neutral-gray">Gesamtzeit</div>
              </div>
              <div className="text-center p-4 bg-neutral-light rounded-xl">
                <div className="text-2xl font-outfit font-bold text-accent-pink">15</div>
                <div className="text-sm text-neutral-gray">Lektionen</div>
              </div>
              <div className="text-center p-4 bg-neutral-light rounded-xl">
                <div className="text-2xl font-outfit font-bold text-accent-yellow">5</div>
                <div className="text-sm text-neutral-gray">Badges</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-16 bg-neutral-light/50">
        <div className="section-padding">
          <div className="container-wide">
            <h2 className="text-2xl font-outfit font-bold text-neutral-dark text-center mb-12">
              Die 5 Kurstage im Detail
            </h2>

            <div className="space-y-8">
              {schedule.map((day, index) => (
                <div
                  key={day.day}
                  className={`bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  {/* Day Header */}
                  <div className={`bg-gradient-to-r ${day.color} p-6`}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                          <span className="text-2xl font-outfit font-bold text-white">{day.day}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-outfit font-bold text-white">{day.title}</h3>
                          <div className="flex items-center gap-3 text-white/80 text-sm mt-1">
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" aria-hidden="true" />
                              {day.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <BookOpen className="w-4 h-4" aria-hidden="true" />
                              {day.lessons.length} Lektionen
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Day Content */}
                  <div className="p-6">
                    {/* Lessons Timeline */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-neutral-gray mb-4">Ablauf:</h4>
                      <div className="space-y-3">
                        {day.lessons.map((lesson, lessonIndex) => (
                          <div
                            key={lessonIndex}
                            className="flex items-center gap-4 p-3 bg-neutral-light rounded-xl"
                          >
                            <div className="w-16 text-sm text-neutral-gray font-medium">
                              {lesson.time}
                            </div>
                            <div className="flex-1">
                              <span className="text-neutral-dark">{lesson.title}</span>
                            </div>
                            <span className={`text-xs px-2 py-1 rounded-full ${getTypeStyle(lesson.type)}`}>
                              {getTypeLabel(lesson.type)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Goals & Materials */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-primary-purple/5 rounded-xl">
                        <h4 className="text-sm font-medium text-primary-purple mb-2 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" aria-hidden="true" />
                          Lernziele
                        </h4>
                        <ul className="space-y-1">
                          {day.goals.map((goal, goalIndex) => (
                            <li key={goalIndex} className="text-sm text-neutral-gray">
                              • {goal}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-4 bg-primary-teal/5 rounded-xl">
                        <h4 className="text-sm font-medium text-primary-teal mb-2 flex items-center gap-2">
                          <Sparkles className="w-4 h-4" aria-hidden="true" />
                          Benötigte Materialien
                        </h4>
                        <ul className="space-y-1">
                          {day.materials.map((material, materialIndex) => (
                            <li key={materialIndex} className="text-sm text-neutral-gray">
                              • {material}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tips */}
            <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-outfit font-bold text-neutral-dark mb-6">
                Tipps für den besten Lernerfolg
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent-yellow/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Coffee className="w-5 h-5 text-accent-yellow" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-dark mb-1">Pausen einlegen</h4>
                    <p className="text-sm text-neutral-gray">
                      Nach jeder Lektion eine kurze Pause machen. Das hilft beim Lernen!
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-purple/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-primary-purple" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-dark mb-1">Regelmäßig lernen</h4>
                    <p className="text-sm text-neutral-gray">
                      Ein Tag pro Woche ist ideal. So bleibt das Wissen hängen.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-teal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-5 h-5 text-primary-teal" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-dark mb-1">Experimentieren</h4>
                    <p className="text-sm text-neutral-gray">
                      Probiere aus, was du lernst. Je mehr du übst, desto besser wirst du!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wochenplan;
