import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, CheckCircle, Copy, Star, MessageCircle, Zap, Target,
  BookOpen, Sparkles, Play, HelpCircle, ChevronDown, ChevronUp,
  Award, Wand2, Users, FileText, Palette
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { buildAssetUrl } from '@/lib/paths';
import type { useProgress } from '../hooks/useProgress';

interface CourseDayProps {
  progress: ReturnType<typeof useProgress>;
}

// ============================================================================
// COURSE DAY 2: PROMPT ENGINEERING - Comprehensive Expanded Version
// 5x Content Expansion with Premium Design
// ============================================================================

const CourseDay2 = ({ progress }: CourseDayProps) => {
  const [activeSection, setActiveSection] = useState(0);
  const [maxReachedSection, setMaxReachedSection] = useState(0);
  const navigate = useNavigate();
  const [promptRating, setPromptRating] = useState<{[key: string]: number}>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [completedExercises, setCompletedExercises] = useState<string[]>([]);
  const [userPrompt, setUserPrompt] = useState('');
  const [showAnswers, setShowAnswers] = useState<{[key: string]: boolean}>({});
  const sectionRef = useRef<HTMLDivElement>(null);
  const canProceed = useRef(false);

  const { completeDay } = progress;

  const handleNext = () => {
    if (!canProceed.current && activeSection < 4) {
      toast({
        title: "Nicht so schnell!",
        description: "Nimm dir Zeit und schau dir die Inhalte in Ruhe an. Gutes Lernen braucht etwas Geduld.",
        duration: 3000,
      });
      return;
    }

    if (activeSection === 4) {
      navigate('/kurs/tag-3');
    } else {
      setActiveSection(activeSection + 1);
    }
  };

  // Track highest section reached (render-time update, no effect needed)
  if (activeSection > maxReachedSection) {
    setMaxReachedSection(activeSection);
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    canProceed.current = false;
    
    const minSeconds = (activeSection === 0 || activeSection === 4) ? 8 : 15;
    const timer = setTimeout(() => { canProceed.current = true; }, minSeconds * 1000);

    // Mark day as completed when reaching the last section
    if (activeSection === 4) { // CourseDay2 has 5 sections (0 to 4)
      completeDay(2);
    }

    return () => clearTimeout(timer);
  }, [activeSection, completeDay]);

  const copyToClipboard = (text: string, description?: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Kopiert!",
      description: description || "Der Prompt wurde in die Zwischenablage kopiert.",
      variant: "success",
      duration: 2000,
    });
  };

  const ratePrompt = (id: string, rating: number) => {
    setPromptRating({...promptRating, [id]: rating});
  };

  const toggleExercise = (id: string) => {
    setCompletedExercises(prev => 
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    );
  };

  // ============================================================================
  // CONTENT SECTIONS - Massively Expanded
  // ============================================================================

  const sections = [
    // ========================================================================
    // SECTION 0: INTRODUCTION
    // ========================================================================
    {
      id: 'intro',
      title: 'Willkommen zu Tag 2',
      icon: Sparkles,
      content: (
        <div className="space-y-8">
          {/* Hero Welcome Block */}
          <div className="relative bg-gradient-to-br from-teal-100 via-cyan-50 to-teal-100 rounded-3xl p-8 sm:p-12 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <img 
              src={buildAssetUrl('images/courses/day2/magic-prompt.png')} 
              alt="Magischer Prompt" 
              className="w-40 h-40 sm:w-56 sm:h-56 mx-auto mb-8 relative z-10 animate-float"
            />
            
            <h2 className="text-3xl sm:text-4xl font-bold text-teal-800 mb-4 relative z-10">
              Prompt Engineering
            </h2>
            <p className="text-lg text-teal-700 max-w-3xl mx-auto leading-relaxed relative z-10">
              Heute lernst du die <strong>Kunst der perfekten Frage</strong>! Ein guter Prompt 
              ist wie ein Zauberspruch – er bringt die KI dazu, genau das zu tun, was du willst. 
              Mit dem <strong>5-Sterne-Rezept</strong> wirst du zum Prompt-Profi!
            </p>
          </div>

          {/* What You'll Learn */}
          <div className="bg-white rounded-2xl border-2 border-teal-100 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Target className="w-6 h-6 text-teal-600" />
              Was du heute lernen wirst
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: MessageCircle, text: 'Was ist ein Prompt?', desc: 'Die Grundlagen verstehen' },
                { icon: Star, text: 'Das 5-Sterne-Rezept', desc: 'Die perfekte Struktur' },
                { icon: Zap, text: 'Prompts verbessern', desc: 'Von schlecht zu perfekt' },
                { icon: Wand2, text: 'Magische Formeln', desc: 'Wiederverwendbare Vorlagen' },
                { icon: Users, text: 'Für verschiedene Zielgruppen', desc: 'Anpassen und optimieren' },
                { icon: Award, text: 'Praxis-Übungen', desc: 'Direkt ausprobieren' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-teal-50/50 rounded-xl hover:bg-teal-50 transition-colors">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{item.text}</p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why This Matters */}
          <div className="content-block-info">
            <h4 className="font-bold text-blue-800 mb-3 text-lg">Warum Prompt Engineering wichtig ist</h4>
            <p className="text-blue-700 leading-relaxed">
              Die Qualität deiner Antworten hängt direkt von der Qualität deiner Fragen ab. 
              Ein schlechter Prompt gibt dir eine mittelmäßige Antwort. Ein guter Prompt gibt 
              dir eine <strong>herausragende</strong> Antwort. Mit den richtigen Techniken kannst 
              du die KI zu 10x besseren Ergebnissen bringen – ganz ohne Programmierung!
            </p>
          </div>

          {/* Course Overview Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-teal-100 rounded-2xl p-6 hover:border-teal-300 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">Was ist ein Prompt?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lerne, was einen Prompt ausmacht und warum er so wichtig ist.
              </p>
            </div>
            <div className="bg-white border-2 border-teal-100 rounded-2xl p-6 hover:border-teal-300 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Star className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">Das 5-Sterne-Rezept</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Die bewährte Struktur für perfekte Prompts – Schritt für Schritt.
              </p>
            </div>
            <div className="bg-white border-2 border-teal-100 rounded-2xl p-6 hover:border-teal-300 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">Prompts verbessern</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Wandle schlechte Prompts in 5-Sterne-Meisterwerke um.
              </p>
            </div>
          </div>
        </div>
      )
    },

    // ========================================================================
    // SECTION 1: WAS IST EIN PROMPT?
    // ========================================================================
    {
      id: 'lesson1',
      title: 'Lektion 1: Was ist ein Prompt?',
      icon: MessageCircle,
      content: (
        <div className="space-y-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img 
              src={buildAssetUrl('images/courses/day2/robot-speaking.png')} 
              alt="Sprechender Roboter" 
              className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 mx-auto md:mx-0"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Ein Prompt ist deine Anweisung</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ein <strong>Prompt</strong> ist die Anweisung oder Frage, die du der KI gibst. 
                Stell dir vor, du fragst einen Freund: <em>"Erzähl mir was über Hunde!"</em> – 
                das ist ein Prompt. Aber was, wenn du genauer wärst?
              </p>
              <p className="text-gray-600 leading-relaxed">
                <em>"Erzähl mir 3 lustige Fakten über Golden Retriever für meine 8-jährige Schwester!"</em> – 
                das ist ein <strong>VIEL besserer Prompt</strong>! Die KI weiß jetzt genau, was du willst.
              </p>
            </div>
          </div>

          {/* The Power of a Good Prompt */}
          <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 sm:p-8">
            <h4 className="font-bold text-gray-800 mb-6 flex items-center gap-2 text-lg">
              <Wand2 className="w-5 h-5 text-purple-600" />
              Die Macht eines guten Prompts
            </h4>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="comparison-bad">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-red-600 font-bold text-lg">✗</span>
                  </div>
                  <h4 className="font-bold text-red-800">Schlechter Prompt</h4>
                </div>
                <div className="bg-white rounded-lg p-4 mb-4 border border-red-200">
                  <p className="text-gray-700 font-mono text-sm">"Schreib über Katzen"</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-red-700 flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span><strong>Zu allgemein</strong> – Was genau soll geschrieben werden?</span>
                  </p>
                  <p className="text-sm text-red-700 flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span><strong>Keine Zielgruppe</strong> – Für wen ist der Text?</span>
                  </p>
                  <p className="text-sm text-red-700 flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span><strong>Kein Format</strong> – Wie lang? Als Liste? Als Geschichte?</span>
                  </p>
                  <p className="text-sm text-red-700 flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span><strong>Kein Ton</strong> – Lustig? Seriös? Wissenschaftlich?</span>
                  </p>
                </div>
                <div className="mt-4 bg-red-100/50 rounded-lg p-3">
                  <p className="text-red-700 text-sm">
                    <strong>Ergebnis:</strong> Die KI ratet und gibt eine mittelmäßige, generische Antwort.
                  </p>
                </div>
              </div>

              <div className="comparison-good">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <h4 className="font-bold text-green-800">Guter Prompt</h4>
                </div>
                <div className="bg-white rounded-lg p-4 mb-4 border border-green-200">
                  <p className="text-gray-700 font-mono text-sm">
                    "Schreibe 5 kurze Fakten über Hauskatzen für Kinder im Alter von 8-10 Jahren. 
                    Mache es lustig und spannend!"
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-green-700 flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Konkret</strong> – 5 Fakten, nicht mehr, nicht weniger</span>
                  </p>
                  <p className="text-sm text-green-700 flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Zielgruppe klar</strong> – Kinder 8-10 Jahre</span>
                  </p>
                  <p className="text-sm text-green-700 flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Format angegeben</strong> – Kurze Fakten</span>
                  </p>
                  <p className="text-sm text-green-700 flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Ton definiert</strong> – Lustig und spannend</span>
                  </p>
                </div>
                <div className="mt-4 bg-green-100/50 rounded-lg p-3">
                  <p className="text-green-700 text-sm">
                    <strong>Ergebnis:</strong> Die KI liefert genau das, was du brauchst!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Real Examples */}
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 sm:p-8">
            <h4 className="font-bold text-amber-800 mb-6 flex items-center gap-2 text-lg">
              <Sparkles className="w-5 h-5 text-amber-600" />
              Beispiele aus der Praxis
            </h4>
            
            <div className="space-y-6">
              {[
                {
                  bad: 'Erklär Mathe',
                  good: 'Erkläre mir, wie man Brüche addiert, als wärst du ein geduldiger Lehrer für die 5. Klasse. Verwende einfache Beispiele!',
                  topic: 'Mathe-Hilfe'
                },
                {
                  bad: 'Schreib eine Geschichte',
                  good: 'Schreibe eine 300-Wörter-Geschichte über einen mutigen Hamster, der ins Weltall fliegt. Für Kinder ab 7 Jahren, lustiger Ton, mit einem Happy End.',
                  topic: 'Kreatives Schreiben'
                },
                {
                  bad: 'Was ist Klimawandel?',
                  good: 'Erkläre den Klimawandel so, dass ein 10-Jähriger es versteht. Verwende 3 kurze Absätze und ein Alltagsbeispiel. Sei sachlich aber nicht beunruhigend.',
                  topic: 'Erklärung'
                }
              ].map((example, idx) => (
                <div key={idx} className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                      {example.topic}
                    </span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-red-500 font-medium mb-1">❌ SCHLECHT</p>
                      <p className="text-gray-500 text-sm italic">"{example.bad}"</p>
                    </div>
                    <div>
                      <p className="text-xs text-green-500 font-medium mb-1">✅ GUT</p>
                      <p className="text-gray-700 text-sm">"{example.good}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Takeaway */}
          <div className="content-block-key">
            <h4 className="font-bold text-purple-800 mb-4 text-lg">Das solltest du dir merken</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ein guter Prompt ist wie eine gute Anweisung an einen Assistenten: Je klarer und 
              detaillierter du bist, desto besser das Ergebnis. Die KI kann nicht raten, was 
              du dir vorstellst – du musst es ihr sagen!
            </p>
            <div className="bg-white/70 rounded-xl p-4">
              <p className="text-purple-700 font-medium">
                💡 Merksatz: "Wenn du nicht weißt, was du willst, bekommst du auch nicht das, 
                was du brauchst."
              </p>
            </div>
          </div>

          {/* Exercise */}
          <div className="content-block-exercise">
            <h4 className="font-bold text-indigo-800 mb-4 flex items-center gap-2 text-lg">
              <Play className="w-5 h-5" />
              Übung: Verbessere diesen Prompt!
            </h4>
            <p className="text-indigo-600 mb-6">
              Der folgende Prompt ist ziemlich schlecht. Überlege dir, was fehlt, und schreibe 
              eine verbesserte Version:
            </p>
            
            <div className="bg-white rounded-xl p-6 space-y-6">
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
                <p className="text-red-700 font-medium mb-2">Original (schlecht):</p>
                <p className="text-gray-700 italic">"Erzähl mir was über Dinosaurier"</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Deine verbesserte Version:
                </label>
                <textarea
                  value={userPrompt}
                  onChange={(e) => setUserPrompt(e.target.value)}
                  placeholder="Schreibe hier deinen verbesserten Prompt..."
                  className="w-full px-4 py-3 border-2 border-indigo-200 rounded-xl focus:outline-none focus:border-indigo-500 resize-none"
                  rows={3}
                />
              </div>
              
              <button
                onClick={() => setShowAnswers({...showAnswers, 'prompt-improvement': !showAnswers['prompt-improvement']})}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors"
              >
                <HelpCircle className="w-4 h-4" />
                {showAnswers['prompt-improvement'] ? 'Lösung verbergen' : 'Lösung anzeigen'}
              </button>
              
              {showAnswers['prompt-improvement'] && (
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 animate-fade-in-up">
                  <p className="text-green-800 font-medium mb-2">Musterlösung:</p>
                  <p className="text-gray-700">
                    "Du bist ein aufgeregter Paläontologe. Erzähle 5 spannende Fakten über 
                    T-Rex als kurze Geschichte für 9-Jährige. Mache es lustig und begeistert!"
                  </p>
                  <p className="text-green-600 text-sm mt-2">
                    ✓ Rolle (Paläontologe) ✓ Aufgabe (5 Fakten) ✓ Thema (T-Rex) 
                    ✓ Format (Kurze Geschichte) ✓ Zielgruppe (9-Jährige) ✓ Ton (lustig, begeistert)
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )
    },

    // ========================================================================
    // SECTION 2: DAS 5-STERNE-REZEPT
    // ========================================================================
    {
      id: 'lesson2',
      title: 'Lektion 2: Das 5-Sterne-Rezept',
      icon: Star,
      content: (
        <div className="space-y-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img 
              src={buildAssetUrl('images/courses/day2-extra/five-stars-recipe.png')} 
              alt="Fünf Sterne Rezept" 
              className="w-32 h-32 md:w-48 md:h-32 flex-shrink-0 mx-auto md:mx-0 object-cover rounded-xl"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Das perfekte Prompt-Rezept</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ein perfekter Prompt hat <strong>5 Zutaten</strong> – wie ein Stern mit 5 Spitzen! 
                Je mehr Zutaten du verwendest, desto besser wird dein Ergebnis. Das nennen wir 
                das <strong>5-Sterne-Rezept</strong>.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Du musst nicht immer alle 5 Sterne verwenden, aber je mehr du einbaust, 
                desto präziser wird die Antwort der KI.
              </p>
            </div>
          </div>

          {/* The 5 Stars */}
          <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 sm:p-8">
            <h4 className="font-bold text-gray-800 mb-8 flex items-center gap-2 text-lg">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              Die 5 Zutaten des perfekten Prompts
            </h4>
            
            <div className="space-y-6">
              {[
                { 
                  star: '⭐', 
                  title: 'Rolle', 
                  desc: 'Wer soll die KI sein?',
                  examples: ['Du bist ein Lehrer', 'Du bist ein Wissenschaftler', 'Du bist ein Comedian'],
                  why: 'Die Rolle gibt der KI einen Perspektivrahmen und beeinflusst den Tonfall.',
                  color: 'bg-yellow-50 border-yellow-200',
                  icon: Users
                },
                { 
                  star: '⭐⭐', 
                  title: 'Aufgabe', 
                  desc: 'Was genau soll gemacht werden?',
                  examples: ['Erkläre Photosynthese', 'Schreibe eine Geschichte', 'Fasse zusammen'],
                  why: 'Die Aufgabe ist das Herzstück deines Prompts – sie sagt der KI, was sie tun soll.',
                  color: 'bg-orange-50 border-orange-200',
                  icon: Target
                },
                { 
                  star: '⭐⭐⭐', 
                  title: 'Zielgruppe', 
                  desc: 'Für wen ist der Text?',
                  examples: ['für 10-Jährige', 'für Anfänger', 'für Experten'],
                  why: 'Die Zielgruppe bestimmt den Schwierigkeitsgrad und die verwendete Sprache.',
                  color: 'bg-red-50 border-red-200',
                  icon: Users
                },
                { 
                  star: '⭐⭐⭐⭐', 
                  title: 'Format', 
                  desc: 'Wie soll es aussehen?',
                  examples: ['3 Absätze', 'Als nummerierte Liste', 'Als Tabelle'],
                  why: 'Das Format gibt der Antwort Struktur und macht sie leichter verständlich.',
                  color: 'bg-purple-50 border-purple-200',
                  icon: FileText
                },
                { 
                  star: '⭐⭐⭐⭐⭐', 
                  title: 'Ton & Stil', 
                  desc: 'Wie soll es klingen?',
                  examples: ['lustig', 'seriös', 'begeistert', 'sachlich'],
                  why: 'Der Ton verleiht der Antwort Persönlichkeit und passt sie an deinen Bedarf an.',
                  color: 'bg-blue-50 border-blue-200',
                  icon: Palette
                },
              ].map((item, idx) => (
                <div key={idx} className={`${item.color} rounded-xl p-6 border-2`}>
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{item.star}</span>
                      <div className="md:hidden">
                        <h4 className="font-bold text-gray-800 text-lg">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="hidden md:block mb-3">
                        <h4 className="font-bold text-gray-800 text-lg">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                      
                      <div className="bg-white/70 rounded-lg p-4 mb-3">
                        <p className="text-sm font-medium text-gray-700 mb-2">Beispiele:</p>
                        <div className="flex flex-wrap gap-2">
                          {item.examples.map((ex, i) => (
                            <span key={i} className="px-3 py-1 bg-white rounded-full text-sm text-gray-600">
                              {ex}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600">
                        <strong>Warum wichtig:</strong> {item.why}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Complete Example */}
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl border-2 border-teal-200 p-6 sm:p-8">
            <h4 className="font-bold text-teal-800 mb-6 flex items-center gap-2 text-lg">
              <Award className="w-5 h-5" />
              Ein komplettes 5-Sterne-Beispiel
            </h4>
            
            <div className="bg-white rounded-xl p-6 relative">
              <p className="text-gray-700 leading-loose">
                <span className="bg-yellow-100 px-2 py-0.5 rounded font-medium">⭐ Du bist ein aufgeregter Tierpfleger im Zoo.</span>{' '}
                <span className="bg-orange-100 px-2 py-0.5 rounded font-medium">⭐⭐ Erkläre, warum Giraffen so lange Hälse haben.</span>{' '}
                <span className="bg-red-100 px-2 py-0.5 rounded font-medium">⭐⭐⭐ Schreibe für Kinder im Alter von 8 Jahren.</span>{' '}
                <span className="bg-purple-100 px-2 py-0.5 rounded font-medium">⭐⭐⭐⭐ Mache es in 3 kurzen Absätzen.</span>{' '}
                <span className="bg-blue-100 px-2 py-0.5 rounded font-medium">⭐⭐⭐⭐⭐ Sei lustig und begeistert!</span>
              </p>
              <button
                onClick={() => copyToClipboard(
                  'Du bist ein aufgeregter Tierpfleger im Zoo. Erkläre, warum Giraffen so lange Hälse haben. Schreibe für Kinder im Alter von 8 Jahren. Mache es in 3 kurzen Absätzen. Sei lustig und begeistert!',
                  '5-Sterne-Beispiel kopiert!'
                )}
                className="absolute top-3 right-3 bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-colors"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
            
            <div className="mt-6 grid sm:grid-cols-5 gap-3">
              <div className="bg-yellow-100/50 rounded-lg p-3 text-center">
                <p className="text-2xl mb-1">⭐</p>
                <p className="text-xs text-yellow-800 font-medium">Rolle</p>
                <p className="text-xs text-yellow-700">Tierpfleger</p>
              </div>
              <div className="bg-orange-100/50 rounded-lg p-3 text-center">
                <p className="text-2xl mb-1">⭐⭐</p>
                <p className="text-xs text-orange-800 font-medium">Aufgabe</p>
                <p className="text-xs text-orange-700">Erklären</p>
              </div>
              <div className="bg-red-100/50 rounded-lg p-3 text-center">
                <p className="text-2xl mb-1">⭐⭐⭐</p>
                <p className="text-xs text-red-800 font-medium">Zielgruppe</p>
                <p className="text-xs text-red-700">8-Jährige</p>
              </div>
              <div className="bg-purple-100/50 rounded-lg p-3 text-center">
                <p className="text-2xl mb-1">⭐⭐⭐⭐</p>
                <p className="text-xs text-purple-800 font-medium">Format</p>
                <p className="text-xs text-purple-700">3 Absätze</p>
              </div>
              <div className="bg-blue-100/50 rounded-lg p-3 text-center">
                <p className="text-2xl mb-1">⭐⭐⭐⭐⭐</p>
                <p className="text-xs text-blue-800 font-medium">Ton</p>
                <p className="text-xs text-blue-700">Lustig</p>
              </div>
            </div>
          </div>

          {/* Template Formulas */}
          <div className="content-block-info">
            <h4 className="font-bold text-blue-800 mb-4 text-lg">Wiederverwendbare Formeln</h4>
            <p className="text-blue-700 mb-4">
              Hier sind einige bewährte Vorlagen, die du immer wieder verwenden kannst:
            </p>
            <div className="space-y-3">
              {[
                { name: 'Der Erklärer', formula: 'Du bist ein [Rolle]. Erkläre [Thema] für [Zielgruppe] in [Format]. Sei [Ton].' },
                { name: 'Der Storyteller', formula: 'Du bist ein [Rolle]. Schreibe eine [Länge]-Geschichte über [Thema] für [Zielgruppe]. Der Ton soll [Ton] sein.' },
                { name: 'Der Zusammenfasser', formula: 'Fasse den folgenden Text in [Format] zusammen für [Zielgruppe]. [Text einfügen]' },
                { name: 'Der Brainstormer', formula: 'Du bist ein [Rolle]. Ich brauche Ideen für [Thema]. Zielgruppe: [Zielgruppe]. Gib mir [Anzahl] Vorschläge im Stil: [Ton].' }
              ].map((template, idx) => (
                <div key={idx} className="bg-white/70 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-blue-800">{template.name}</p>
                    <button
                      onClick={() => copyToClipboard(template.formula, `${template.name} kopiert!`)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm font-mono">{template.formula}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pro Tip */}
          <div className="content-block-tip">
            <h4 className="font-bold text-purple-800 mb-3">Profi-Tipp: Reihenfolge spielt keine Rolle</h4>
            <p className="text-purple-700 leading-relaxed">
              Die Reihenfolge der 5 Zutaten ist nicht festgelegt. Du kannst mit der Aufgabe 
              anfangen oder mit der Rolle – was sich natürlicher anfühlt. Wichtig ist, dass 
              alle Elemente irgendwo im Prompt vorkommen!
            </p>
          </div>

          {/* Summary */}
          <div className="content-block-summary">
            <p className="text-slate-700 leading-relaxed">
              <strong>Zusammenfassung:</strong> Das 5-Sterne-Rezept besteht aus Rolle, Aufgabe, 
              Zielgruppe, Format und Ton. Je mehr dieser Elemente du in deinen Prompt einbaust, 
              desto besser wird das Ergebnis. Es ist wie ein Kochrezept – mit allen Zutaten 
              schmeckt es am besten!
            </p>
          </div>
        </div>
      )
    },

    // ========================================================================
    // SECTION 3: PROMPTS VERBESSERN
    // ========================================================================
    {
      id: 'lesson3',
      title: 'Lektion 3: Prompts verbessern',
      icon: Zap,
      content: (
        <div className="space-y-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img 
              src={buildAssetUrl('images/courses/day2-extra/prompt-transformation.png')} 
              alt="Prompt Transformation" 
              className="w-32 h-32 md:w-48 md:h-32 flex-shrink-0 mx-auto md:mx-0 object-cover rounded-xl"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Von schlecht zu perfekt</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Lass uns gemeinsam einen schlechten Prompt Schritt für Schritt in einen 
                <strong>5-Sterne-Meisterprompt</strong> verwandeln! Du wirst sehen, wie 
                jede Verbesserung das Ergebnis deutlich besser macht.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Bewerte jeden Schritt mit Sternen und vergleiche die Unterschiede. 
                Am Ende hast du einen Prompt, der exakt das liefert, was du willst!
              </p>
            </div>
          </div>

          {/* Transformation Levels */}
          <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 sm:p-8">
            <h4 className="font-bold text-gray-800 mb-6 flex items-center gap-2 text-lg">
              <Zap className="w-5 h-5 text-amber-500" />
              Die Verwandlung: 5 Levels
            </h4>
            
            <div className="space-y-6">
              {[
                {
                  level: 'Level 1: Schlecht',
                  prompt: 'Erzähl mir was über Dinosaurier',
                  stars: 1,
                  feedback: 'Zu allgemein, keine Details. Die KI muss raten.',
                  id: 'dino-1',
                  color: 'bg-red-50 border-red-200'
                },
                {
                  level: 'Level 2: Okay',
                  prompt: 'Erzähl mir 3 Fakten über Dinosaurier für Kinder',
                  stars: 2,
                  feedback: 'Besser! Aber wer bist du? Und wie soll es klingen?',
                  id: 'dino-2',
                  color: 'bg-orange-50 border-orange-200'
                },
                {
                  level: 'Level 3: Gut',
                  prompt: 'Du bist ein Paläontologe. Erzähl mir 3 spannende Fakten über Dinosaurier für 9-Jährige.',
                  stars: 3,
                  feedback: 'Schon viel besser! Aber in welchem Format?',
                  id: 'dino-3',
                  color: 'bg-yellow-50 border-yellow-200'
                },
                {
                  level: 'Level 4: Sehr gut',
                  prompt: 'Du bist ein Paläontologe. Erzähl mir 3 spannende Fakten über Dinosaurier für 9-Jährige. Schreibe es als spannende Geschichte.',
                  stars: 4,
                  feedback: 'Fast perfekt! Fehlt nur noch der richtige Ton.',
                  id: 'dino-4',
                  color: 'bg-green-50 border-green-200'
                },
                {
                  level: 'Level 5: PERFEKT! ⭐⭐⭐⭐⭐',
                  prompt: 'Du bist ein abenteuerlustiger Paläontologe. Erzähle 3 spannende Fakten über Dinosaurier als kurze Geschichte für 9-Jährige. Sei begeistert und mache es spannend wie ein Abenteuerfilm!',
                  stars: 5,
                  feedback: 'Perfekt! Alle 5 Zutaten sind drin!',
                  id: 'dino-5',
                  color: 'bg-emerald-50 border-emerald-300'
                }
              ].map((item, idx) => (
                <div key={idx} className={`${item.color} rounded-xl p-5 border-2`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <h4 className="font-bold text-gray-800 text-lg">{item.level}</h4>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => ratePrompt(item.id, star)}
                          className={`transition-colors ${
                            star <= item.stars 
                              ? 'text-yellow-400' 
                              : (promptRating[item.id] || 0) >= star 
                                ? 'text-yellow-400' 
                                : 'text-gray-300 hover:text-yellow-200'
                          }`}
                        >
                          <Star className="w-6 h-6 fill-current" />
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 mb-3 relative border border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{item.prompt}</p>
                    <button
                      onClick={() => copyToClipboard(item.prompt, 'Prompt kopiert!')}
                      className="absolute top-2 right-2 bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <p className="text-sm text-gray-600">
                    <strong>Feedback:</strong> {item.feedback}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="content-block-warning">
            <h4 className="font-bold text-amber-800 mb-4 text-lg">Häufige Fehler vermeiden</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { mistake: 'Zu viele Anweisungen auf einmal', fix: 'Konzentriere dich auf eine Hauptaufgabe pro Prompt' },
                { mistake: 'Unklare Zielgruppe', fix: 'Gib immer an, für wen der Text ist' },
                { mistake: 'Widersprüchliche Anweisungen', fix: 'Stelle sicher, dass alle Teile des Prompts zusammenpassen' },
                { mistake: 'Zu komplizierte Sprache', fix: 'Formuliere klar und verständlich' },
                { mistake: 'Fehlender Kontext', fix: 'Gib genug Hintergrundinformationen' },
                { mistake: 'Zu lange Prompts', fix: 'Sei prägnant – Qualität vor Quantität' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/70 rounded-lg p-4">
                  <p className="text-red-700 font-medium mb-1">❌ {item.mistake}</p>
                  <p className="text-green-700 text-sm">✓ {item.fix}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Practice Exercise */}
          <div className="content-block-exercise">
            <h4 className="font-bold text-indigo-800 mb-4 flex items-center gap-2 text-lg">
              <Play className="w-5 h-5" />
              Übung: Verbessere diese Prompts!
            </h4>
            <p className="text-indigo-600 mb-6">
              Nimm dir Zeit und wandle diese schlechten Prompts in 5-Sterne-Versionen um.
            </p>
            
            <div className="space-y-4">
              {[
                { bad: 'Erklär mir Mathe', topic: 'Mathe' },
                { bad: 'Schreib was über Hunde', topic: 'Tiere' },
                { bad: 'Ich brauche Hilfe bei meiner Hausarbeit', topic: 'Schule' }
              ].map((exercise, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded text-xs font-medium">
                      {exercise.topic}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mb-3">Schlecht: "{exercise.bad}"</p>
                  <input
                    type="text"
                    placeholder="Deine verbesserte Version..."
                    className="w-full px-4 py-2 border-2 border-indigo-200 rounded-lg focus:outline-none focus:border-indigo-500"
                  />
                </div>
              ))}
            </div>
            
            <div className="mt-4 flex items-center gap-3">
              <input 
                type="checkbox" 
                id="exercise-prompts"
                className="w-5 h-5 text-indigo-600 rounded"
                checked={completedExercises.includes('prompts')}
                onChange={() => toggleExercise('prompts')}
              />
              <label htmlFor="exercise-prompts" className="text-indigo-700 cursor-pointer">
                Ich habe die Übungen gemacht!
              </label>
            </div>
          </div>

          {/* Challenge */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200 p-6 sm:p-8">
            <div className="bg-white rounded-xl p-6">
              <h5 className="font-bold text-gray-800 mb-4">Deine Challenge für heute:</h5>
              <p className="text-gray-600 mb-4">
                Schreibe einen 5-Sterne-Prompt über dein Lieblingstier und probiere ihn
                in einem KI-Tool aus! Experimentiere mit verschiedenen Rollen und Tönen.
              </p>
              <div className="bg-teal-50 rounded-lg p-4">
                <p className="text-teal-700 text-sm">
                  <strong>Tipp:</strong> Verwende alle 5 Zutaten: Rolle, Aufgabe, Zielgruppe, Format und Ton!
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // ========================================================================
    // SECTION 4: FAQ & WRAP-UP
    // ========================================================================
    {
      id: 'faq',
      title: 'FAQ & Zusammenfassung',
      icon: HelpCircle,
      content: (
        <div className="space-y-8">
          {/* Final Summary */}
          <div className="bg-gradient-to-br from-teal-100 via-cyan-50 to-teal-100 rounded-3xl p-8 text-center">
            <img 
              src={buildAssetUrl('images/courses/day2/magic-prompt.png')} 
              alt="Magischer Prompt" 
              className="w-32 h-32 mx-auto mb-6"
            />
            <h3 className="text-2xl font-bold text-teal-800 mb-4">
              Du beherrschst jetzt die Kunst der Prompts!
            </h3>
            <p className="text-teal-700 max-w-2xl mx-auto leading-relaxed">
              Du weißt, was einen guten Prompt ausmacht und kannst mit dem 5-Sterne-Rezept 
              perfekte Anweisungen schreiben. Das ist die Grundlage für alles, was kommt!
            </p>
          </div>

          {/* Key Learnings */}
          <div className="bg-white rounded-2xl border-2 border-teal-100 p-6 sm:p-8">
            <h4 className="font-bold text-gray-800 mb-6 flex items-center gap-2 text-lg">
              <BookOpen className="w-5 h-5 text-teal-600" />
              Die wichtigsten Punkte im Überblick
            </h4>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { num: '1', text: 'Ein Prompt ist deine Anweisung an die KI', color: 'bg-teal-600' },
                { num: '2', text: 'Je genauer, desto besser das Ergebnis', color: 'bg-cyan-600' },
                { num: '3', text: 'Das 5-Sterne-Rezept: Rolle, Aufgabe, Zielgruppe, Format, Ton', color: 'bg-teal-600' },
                { num: '4', text: 'Schlechte Prompts kannst du Schritt für Schritt verbessern', color: 'bg-cyan-600' },
                { num: '5', text: 'Experimentiere mit verschiedenen Kombinationen', color: 'bg-teal-600' },
                { num: '6', text: 'Übung macht den Meister!', color: 'bg-cyan-600' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-teal-50/50 rounded-xl">
                  <div className={`w-8 h-8 ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-bold">{item.num}</span>
                  </div>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 sm:p-8">
            <h4 className="font-bold text-gray-800 mb-6 flex items-center gap-2 text-lg">
              <HelpCircle className="w-5 h-5 text-teal-600" />
              Häufig gestellte Fragen
            </h4>
            
            <div className="space-y-3">
              {[
                {
                  q: 'Muss ich immer alle 5 Sterne verwenden?',
                  a: 'Nein! Manchmal reichen auch 2-3 Sterne. Verwende so viele, wie nötig sind, um dein Ziel zu erreichen. Für einfache Fragen brauchst du weniger, für komplexe Aufgaben mehr.'
                },
                {
                  q: 'Was ist wichtiger: Rolle oder Aufgabe?',
                  a: 'Die Aufgabe ist das Minimum – sie sagt der KI, was sie tun soll. Die Rolle verbessert das Ergebnis erheblich, ist aber optional. Für beste Ergebnisse verwende beides!'
                },
                {
                  q: 'Kann ein Prompt zu lang sein?',
                  a: 'Ja! Sei prägnant. Ein langer, unstrukturierter Prompt verwirrt die KI oft mehr, als dass er hilft. Qualität vor Quantität – lieber 5 klare Sätze als 20 wirre.'
                },
                {
                  q: 'Was tun, wenn der Prompt nicht funktioniert?',
                  a: 'Iteriere! Nimm die Antwort der KI, analysiere, was fehlt, und verbessere deinen Prompt. Oft helfen schon kleine Anpassungen. Probiere auch andere Rollen oder Töne aus.'
                },
                {
                  q: 'Gibt es Prompts, die immer funktionieren?',
                  a: 'Es gibt bewährte Vorlagen (wie das 5-Sterne-Rezept), aber jede Situation ist anders. Die Kunst liegt darin, die Vorlage an deinen spezifischen Bedarf anzupassen.'
                }
              ].map((faq, idx) => (
                <div key={idx} className="faq-item">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="faq-question w-full"
                  >
                    <span>{faq.q}</span>
                    {expandedFaq === idx ? (
                      <ChevronUp className="w-5 h-5 text-teal-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-neutral-400" />
                    )}
                  </button>
                  {expandedFaq === idx && (
                    <div className="faq-answer animate-fade-in-up">
                      <p className="leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* What's Next */}
          <div className="content-block-info">
            <h4 className="font-bold text-blue-800 mb-3 text-lg">Was kommt als Nächstes?</h4>
            <p className="text-blue-700 leading-relaxed mb-4">
              Morgen wirst du <strong>kreativ mit KI</strong>! Du lernst, wie du Bilder erstellen, 
              Geschichten schreiben und Musik komponieren kannst – alles mit Hilfe von KI.
            </p>
            <div className="flex items-center gap-2 text-blue-600">
              <ArrowRight className="w-5 h-5" />
              <span className="font-medium">Tag 3: Kreativ mit KI</span>
            </div>
          </div>

          {/* Final CTA */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link 
              to="/kurs" 
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors border-2 border-gray-200"
            >
              <ArrowLeft className="w-5 h-5" />
              Zur Kursübersicht
            </Link>
            <Link 
              to="/kurs/tag-3" 
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl font-medium hover:from-teal-700 hover:to-cyan-700 transition-all shadow-lg shadow-teal-200"
            >
              Weiter zu Tag 3
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      )
    }
  ];

  // ============================================================================
  // RENDER
  // ============================================================================

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Link to="/kurs" className="text-white/80 hover:text-white flex items-center gap-2 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Zurück
            </Link>
            <span className="text-white/40">|</span>
            <span className="text-white/80">Tag 2 von 5</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Prompt Engineering</h1>
          <p className="text-white/80 text-lg">Die Kunst der perfekten Frage</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b sticky top-16 z-30 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">Fortschritt</span>
            <span className="text-sm font-medium text-teal-600">
              {Math.round(((activeSection + 1) / sections.length) * 100)}%
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-teal-600 to-cyan-600 transition-all duration-500"
              style={{ width: `${((activeSection + 1) / sections.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-2 mb-8">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => index <= maxReachedSection && setActiveSection(index)}
              disabled={index > maxReachedSection}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all ${
                activeSection === index
                  ? 'bg-teal-600 text-white shadow-lg shadow-teal-200'
                  : index <= maxReachedSection
                  ? 'bg-green-100 text-green-700'
                  : 'bg-white text-gray-400 border border-gray-200 opacity-50 cursor-not-allowed'
              }`}
              aria-current={activeSection === index ? 'step' : undefined}
            >
              {index <= maxReachedSection && activeSection !== index ? (
                <CheckCircle className="w-4 h-4" />
              ) : (
                <section.icon className="w-4 h-4" />
              )}
              <span className="hidden sm:inline">{section.title}</span>
              <span className="sm:hidden">{index + 1}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div ref={sectionRef} className="animate-fade-in-up">
          {sections[activeSection].content}
        </div>

        {/* Spacer for sticky nav */}
        <div className="h-24" />
      </div>

      {/* Navigation Buttons - sticky bottom */}
      <div className="sticky bottom-0 z-20 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between">
          <button
            onClick={() => setActiveSection(Math.max(0, activeSection - 1))}
            disabled={activeSection === 0}
            className="flex items-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors border-2 border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-5 h-5" />
            Zurück
          </button>
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-xl font-medium hover:bg-teal-700 transition-colors shadow-lg shadow-teal-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {activeSection === sections.length - 1 ? 'Tag 3 starten' : 'Weiter'}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDay2;
