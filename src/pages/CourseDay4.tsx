import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Copy, Lightbulb, Calculator, Search, Bug, Target, HelpCircle, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { buildAssetUrl } from '@/lib/paths';
import type { useProgress } from '../hooks/useProgress';

interface CourseDayProps {
  progress: ReturnType<typeof useProgress>;
}

const CourseDay4 = ({ progress }: CourseDayProps) => {
  const [activeSection, setActiveSection] = useState(0);
  const [maxReachedSection, setMaxReachedSection] = useState(0);
  const navigate = useNavigate();
  const [mathInput, setMathInput] = useState('');
  const [showAnswers, setShowAnswers] = useState<{[key: string]: boolean}>({});
  const [selectedProblem, setSelectedProblem] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const canProceed = useRef(false);

  const { completeDay } = progress;

  const handleNext = () => {
    if (!canProceed.current && activeSection < 4) {
      toast({ title: "Nicht so schnell!", description: "Nimm dir Zeit und schau dir die Inhalte in Ruhe an. Gutes Lernen braucht etwas Geduld.", duration: 3000 });
      return;
    }
    if (activeSection === 4) { navigate('/kurs/tag-5'); }
    else { setActiveSection(activeSection + 1); }
  };

  if (activeSection > maxReachedSection) { setMaxReachedSection(activeSection); }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    canProceed.current = false;
    
    const minSeconds = (activeSection === 0 || activeSection === 4) ? 8 : 15;
    const timer = setTimeout(() => { canProceed.current = true; }, minSeconds * 1000);
    if (activeSection === 4) { completeDay(4); }
    return () => clearTimeout(timer);
  }, [activeSection, completeDay]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Kopiert!",
      description: "Der Text wurde in die Zwischenablage kopiert.",
      variant: "success",
      duration: 2000,
    });
  };

  const sections = [
    {
      id: 'intro',
      title: 'Willkommen zu Tag 4',
      icon: Target,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl p-8 text-center">
            <img 
              src={buildAssetUrl('images/courses/day4/puzzle-solution.png')} 
              alt="Puzzle-Lösung" 
              className="w-48 h-48 mx-auto mb-6"
            />
            <h2 className="text-2xl font-bold text-orange-800 mb-4">Problemlösen mit KI</h2>
            <p className="text-orange-700 max-w-2xl mx-auto">
              Heute wirst du zum KI-Detektiv! Du lernst, wie die KI dir beim Lösen von Problemen hilft - 
              von Mathe-Aufgaben bis zu kniffligen Rätseln. Die KI wird dein Superhelfer bei allen Herausforderungen!
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white border-2 border-orange-100 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Calculator className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Mathe-Hilfe</h3>
              <p className="text-sm text-gray-600">KI als dein Nachhilfelehrer</p>
            </div>
            <div className="bg-white border-2 border-orange-100 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Search className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Recherche</h3>
              <p className="text-sm text-gray-600">Informationen finden</p>
            </div>
            <div className="bg-white border-2 border-orange-100 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Bug className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Fehler finden</h3>
              <p className="text-sm text-gray-600">KI als Korrekturleser</p>
            </div>
            <div className="bg-white border-2 border-orange-100 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Lightbulb className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Brainstorming</h3>
              <p className="text-sm text-gray-600">Ideen entwickeln</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'lesson1',
      title: 'Lektion 1: KI als Lernhelfer',
      icon: Calculator,
      content: (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border-2 border-gray-100 p-8">
            <div className="flex items-start gap-6 mb-8">
              <img 
                src={buildAssetUrl('images/courses/day4/robot-math.png')} 
                alt="Mathe-Roboter" 
                className="w-32 h-32 flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Die KI erklärt dir alles!</h3>
                <p className="text-gray-600 mb-4">
                  Stell dir vor, du hast eine schwierige Mathe-Aufgabe und verstehst nicht, wie man sie löst. 
                  Die KI kann dir Schritt für Schritt erklären, wie es geht - ganz ohne Stress und immer geduldig!
                </p>
              </div>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-orange-800 mb-4">🧮 So fragst du nach Mathe-Hilfe:</h4>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 relative">
                  <p className="text-sm text-gray-500 mb-2">Beispiel 1: Eine Aufgabe lösen</p>
                  <p className="text-gray-700">"Erkläre mir Schritt für Schritt, wie man 3x + 5 = 20 nach x auflöst. Ich bin in der 6. Klasse."</p>
                  <button
                    onClick={() => copyToClipboard('Erkläre mir Schritt für Schritt, wie man 3x + 5 = 20 nach x auflöst. Ich bin in der 6. Klasse.')}
                    className="absolute top-2 right-2 bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                <div className="bg-white rounded-lg p-4 relative">
                  <p className="text-sm text-gray-500 mb-2">Beispiel 2: Ein Konzept verstehen</p>
                  <p className="text-gray-700">"Erkläre mir Bruchrechnung so, als wärst du ein lustiger Lehrer für 10-Jährige."</p>
                  <button
                    onClick={() => copyToClipboard('Erkläre mir Bruchrechnung so, als wärst du ein lustiger Lehrer für 10-Jährige.')}
                    className="absolute top-2 right-2 bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <h4 className="font-bold text-green-800 mb-4">✅ Gute vs. schlechte Fragen:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 rounded-lg p-4 border-2 border-red-100">
                  <p className="text-red-800 font-medium mb-2">❌ Schlecht: "Löse diese Aufgabe"</p>
                  <p className="text-sm text-red-600">Die KI gibt dir nur die Lösung, aber du lernst nichts!</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border-2 border-green-100">
                  <p className="text-green-800 font-medium mb-2">✅ Gut: "Zeige mir den Weg zur Lösung"</p>
                  <p className="text-sm text-green-600">Die KI erklärt Schritt für Schritt - du lernst mit!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interaktive Mathe-Übung */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h4 className="font-bold text-blue-800 mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              Übung: Probiere es aus!
            </h4>
            <p className="text-blue-700 mb-4">
              Gib eine Mathe-Aufgabe ein, die du nicht verstehst. Die KI wird sie dir erklären!
            </p>
            <div className="bg-white rounded-xl p-6 space-y-4">
              <input
                type="text"
                placeholder="z.B. Wie rechnet man 25% von 80?"
                className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500"
                value={mathInput}
                onChange={(e) => setMathInput(e.target.value)}
              />
              {mathInput && (
                <div className="bg-gray-900 rounded-xl p-4 relative">
                  <pre className="text-green-400 text-sm whitespace-pre-wrap">
{`Erkläre mir Schritt für Schritt, wie man "${mathInput}" löst. 
Ich bin ein Schüler und möchte es wirklich verstehen. 
Zeige mir jeden Zwischenschritt und erkläre, warum man das macht.`}
                  </pre>
                  <button
                    onClick={() => copyToClipboard(`Erkläre mir Schritt für Schritt, wie man "${mathInput}" löst. Ich bin ein Schüler und möchte es wirklich verstehen. Zeige mir jeden Zwischenschritt und erkläre, warum man das macht.`)}
                    className="absolute top-2 right-2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'lesson2',
      title: 'Lektion 2: Recherche & Zusammenfassen',
      icon: Search,
      content: (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border-2 border-gray-100 p-8">
            <div className="flex items-start gap-6 mb-8">
              <img 
                src={buildAssetUrl('images/courses/day4/magnifying-glass.png')} 
                alt="Lupe" 
                className="w-32 h-32 flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">KI als Forschungsassistent</h3>
                <p className="text-gray-600 mb-4">
                  Du musst ein Referat über Dinosaurier halten? Die KI kann dir helfen, Informationen zu sammeln 
                  und sie in eine verständliche Form zu bringen. Sie ist wie ein super-schnelles Lexikon!
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-purple-50 rounded-xl p-6">
                <h4 className="font-bold text-purple-800 mb-3">🔍 Recherche-Prompt</h4>
                <div className="bg-white rounded-lg p-4 relative mb-3">
                  <p className="text-gray-700 text-sm">
                    "Gib mir 5 spannende Fakten über Dinosaurier für ein Schulreferat. Schreibe es für Kinder im Alter von 10 Jahren."
                  </p>
                  <button
                    onClick={() => copyToClipboard('Gib mir 5 spannende Fakten über Dinosaurier für ein Schulreferat. Schreibe es für Kinder im Alter von 10 Jahren.')}
                    className="absolute top-2 right-2 bg-gray-100 hover:bg-gray-200 p-1.5 rounded transition-colors"
                  >
                    <Copy className="w-3 h-3" />
                  </button>
                </div>
                <p className="text-sm text-purple-600">Perfekt für den Anfang deiner Recherche!</p>
              </div>

              <div className="bg-teal-50 rounded-xl p-6">
                <h4 className="font-bold text-teal-800 mb-3">📝 Zusammenfassen</h4>
                <div className="bg-white rounded-lg p-4 relative mb-3">
                  <p className="text-gray-700 text-sm">
                    "Fasse diesen Text in 3 Sätzen zusammen: [dein Text hier]"
                  </p>
                  <button
                    onClick={() => copyToClipboard('Fasse diesen Text in 3 Sätzen zusammen: [dein Text hier]')}
                    className="absolute top-2 right-2 bg-gray-100 hover:bg-gray-200 p-1.5 rounded transition-colors"
                  >
                    <Copy className="w-3 h-3" />
                  </button>
                </div>
                <p className="text-sm text-teal-600">Wenn Texte zu lang sind!</p>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6">
              <h4 className="font-bold text-yellow-800 mb-4">💡 Wichtiger Hinweis:</h4>
              <p className="text-yellow-700 mb-4">
                Die KI kann manchmal Fehler machen! Bei wichtigen Themen (z.B. für die Schule) solltest du 
                die Informationen immer nochmal in einem Buch oder auf einer vertrauenswürdigen Website prüfen.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-600">
                  <strong>Goldene Regel:</strong> KI gibt dir einen guten Start, aber für wichtige Dinge immer 
                  die Fakten überprüfen!
                </p>
              </div>
            </div>
          </div>

          {/* Themen-Auswahl */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
            <h4 className="font-bold text-indigo-800 mb-4">🎯 Wähle ein Thema zum Recherchieren:</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {['Weltraum', 'Tiere', 'Geschichte', 'Technik', 'Sport', 'Natur', 'Kunst', 'Musik'].map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSelectedProblem(topic)}
                  className={`p-3 rounded-lg font-medium transition-all ${
                    selectedProblem === topic
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-indigo-50 border-2 border-indigo-100'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
            
            {selectedProblem && (
              <div className="bg-white rounded-xl p-6">
                <p className="text-gray-600 mb-4">Hier ist dein Recherche-Prompt für <strong>{selectedProblem}</strong>:</p>
                <div className="bg-gray-900 rounded-xl p-4 relative">
                  <pre className="text-green-400 text-sm whitespace-pre-wrap">
{`Gib mir 5 spannende Fakten über ${selectedProblem} für ein Schulreferat. 
Schreibe es für Kinder im Alter von 10-12 Jahren.
Mache es interessant und verständlich!`}
                  </pre>
                  <button
                    onClick={() => copyToClipboard(`Gib mir 5 spannende Fakten über ${selectedProblem} für ein Schulreferat. Schreibe es für Kinder im Alter von 10-12 Jahren. Mache es interessant und verständlich!`)}
                    className="absolute top-2 right-2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )
    },
    {
      id: 'lesson3',
      title: 'Lektion 3: Fehler finden & Korrigieren',
      icon: Bug,
      content: (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border-2 border-gray-100 p-8">
            <div className="flex items-start gap-6 mb-8">
              <img 
                src={buildAssetUrl('images/courses/day4/robot-problem-solver.png')} 
                alt="Problem-Löser Roboter" 
                className="w-32 h-32 flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">KI als Korrekturleser</h3>
                <p className="text-gray-600 mb-4">
                  Du hast einen Aufsatz geschrieben und bist dir nicht sicher, ob alles richtig ist? 
                  Die KI kann dir helfen, Rechtschreibfehler zu finden und deinen Text zu verbessern!
                </p>
              </div>
            </div>

            <div className="space-y-6 mb-6">
              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-100">
                <h4 className="font-bold text-red-800 mb-3">❌ Text mit Fehlern:</h4>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-gray-700 italic">
                    "Mein letzter Urlaub war sehr schön. Ich habe am Strand gespielt und Eis gegessen. 
                    Das wetter war supa und ich hatte viel spaß."
                  </p>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border-2 border-green-100">
                <h4 className="font-bold text-green-800 mb-3">✅ Korrigierte Version:</h4>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-gray-700">
                    "Mein letzter Urlaub war sehr schön. Ich habe am Strand gespielt und Eis gegessen. 
                    Das <span className="bg-green-200">W</span>etter war <span className="bg-green-200">super</span> und ich hatte viel <span className="bg-green-200">Spaß</span>."
                  </p>
                  <p className="text-sm text-green-600 mt-2">
                    Korrekturen: wetter → Wetter, supa → super, spaß → Spaß
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="font-bold text-blue-800 mb-4">📝 Prompt zum Korrigieren:</h4>
              <div className="bg-gray-900 rounded-xl p-4 relative">
                <pre className="text-green-400 text-sm whitespace-pre-wrap">
{`Korrigiere diesen Text und zeige mir alle Fehler:

"[dein Text hier]"

Markiere die Fehler und erkläre kurz, was falsch war.`}
                </pre>
                <button
                  onClick={() => copyToClipboard(`Korrigiere diesen Text und zeige mir alle Fehler:\n\n"[dein Text hier]"\n\nMarkiere die Fehler und erkläre kurz, was falsch war.`)}
                  className="absolute top-2 right-2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Lückentext Übung */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8">
            <h4 className="font-bold text-amber-800 mb-4">✏️ Übung: Fülle die Lücken!</h4>
            <p className="text-amber-700 mb-4">
              Wenn du die KI zum Korrigieren benutzt, solltest du immer ______ sein. Die KI kann dir helfen, 
              ______ Fehler zu finden, aber du musst die ______ immer noch selbst verstehen!
            </p>
            <div className="bg-white rounded-xl p-6 space-y-4">
              <div className="flex flex-wrap gap-2">
                {['konkret', 'Rechtschreib-', 'Grammatik', 'Vorschläge', 'spezifisch'].map((word) => (
                  <span key={word} className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
                    {word}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setShowAnswers({...showAnswers, 'korrektur': !showAnswers['korrektur']})}
                className="text-amber-600 text-sm hover:underline flex items-center gap-1"
              >
                {showAnswers['korrektur'] ? 'Antwort verbergen' : 'Antwort anzeigen'}
              </button>
              {showAnswers['korrektur'] && (
                <div className="bg-green-50 rounded-lg p-4 text-green-700">
                  <p><strong>Lösung:</strong> Wenn du die KI zum Korrigieren benutzt, solltest du immer <strong>spezifisch</strong> sein. Die KI kann dir helfen, <strong>Rechtschreib</strong>-Fehler zu finden, aber du musst die <strong>Vorschläge</strong> immer noch selbst verstehen!</p>
                </div>
              )}
            </div>
          </div>

          {/* Übersicht: Das kannst du jetzt */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
            <div className="bg-white rounded-xl p-6">
              <h5 className="font-bold text-gray-800 mb-4">Das kannst du jetzt:</h5>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Mathe-Aufgaben Schritt für Schritt verstehen</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Informationen für Referate sammeln</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Texte auf Fehler prüfen lassen</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Lange Texte zusammenfassen</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'faq',
      title: 'FAQ & Zusammenfassung',
      icon: HelpCircle,
      content: (
        <div className="space-y-8">
          {/* Zusammenfassung */}
          <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl p-8 text-center">
            <img
              src={buildAssetUrl('images/courses/day4/robot-problem-solver.png')}
              alt="Problem-Löser Roboter"
              className="w-48 h-48 mx-auto mb-6"
            />
            <h3 className="text-2xl font-bold text-orange-800 mb-4">
              Tag 4 geschafft!
            </h3>
            <p className="text-orange-700 max-w-2xl mx-auto leading-relaxed">
              Du bist jetzt ein echter Problem-Löser! Du weißt, wie du die KI als Lernhelfer,
              Recherche-Assistent und Korrekturleser einsetzen kannst.
            </p>
          </div>

          {/* Wichtigste Punkte */}
          <div className="bg-white rounded-2xl border-2 border-orange-100 p-6 sm:p-8">
            <h4 className="font-bold text-gray-800 mb-6 flex items-center gap-2 text-lg">
              <BookOpen className="w-5 h-5 text-orange-600" />
              Die wichtigsten Punkte im Überblick
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-xl">
                <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">KI als Nachhilfelehrer</p>
                  <p className="text-sm text-gray-600">Lass dir Aufgaben Schritt für Schritt erklären</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-xl">
                <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Recherche mit KI</p>
                  <p className="text-sm text-gray-600">Fakten sammeln und zusammenfassen lassen</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl">
                <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Fehler finden</p>
                  <p className="text-sm text-gray-600">KI als Korrekturleser für deine Texte</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl">
                <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Immer prüfen!</p>
                  <p className="text-sm text-gray-600">KI-Antworten bei wichtigen Themen überprüfen</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 sm:p-8">
            <h4 className="font-bold text-gray-800 mb-6 flex items-center gap-2 text-lg">
              <HelpCircle className="w-5 h-5 text-orange-600" />
              Häufig gestellte Fragen
            </h4>
            <div className="space-y-3">
              {[
                {
                  q: 'Kann ich KI für meine Hausaufgaben nutzen?',
                  a: 'Ja, aber richtig! Lass dir Aufgaben erklären statt nur die Lösung zu kopieren. So lernst du wirklich etwas. Nutze KI als Nachhilfelehrer, nicht als Abschreib-Maschine.'
                },
                {
                  q: 'Macht KI bei Mathe Fehler?',
                  a: 'Ja, KI kann bei Rechenaufgaben Fehler machen, besonders bei komplexen Aufgaben. Prüfe die Ergebnisse immer nach – besonders bei Hausaufgaben und Tests!'
                },
                {
                  q: 'Darf ich KI-Texte für die Schule abgeben?',
                  a: 'Das hängt von deiner Schule und deinem Lehrer ab. Frag immer vorher nach! In der Regel solltest du KI nur als Hilfe nutzen und den Text selbst schreiben.'
                },
                {
                  q: 'Wie weiß ich, ob KI-Informationen stimmen?',
                  a: 'Prüfe wichtige Fakten in Büchern oder auf vertrauenswürdigen Websites. KI kann falsche Informationen liefern, die aber überzeugend klingen. Sei immer kritisch!'
                }
              ].map((faq, idx) => (
                <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-4 text-left font-medium text-gray-800 hover:bg-gray-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {expandedFaq === idx ? (
                      <ChevronUp className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {expandedFaq === idx && (
                    <div className="px-4 pb-4 text-gray-600 animate-fade-in-up">
                      <p className="leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Naechster Tag */}
          <div className="bg-blue-50 rounded-2xl p-6">
            <h4 className="font-bold text-blue-800 mb-3 text-lg">Was kommt als Nächstes?</h4>
            <p className="text-blue-700 leading-relaxed mb-4">
              Morgen ist der große Tag! Du erstellst dein eigenes <strong>Abschlussprojekt</strong> und
              bekommst dein offizielles KI-Experten-Zertifikat!
            </p>
            <div className="flex items-center gap-2 text-blue-600">
              <ArrowRight className="w-5 h-5" />
              <span className="font-medium">Tag 5: Das Abschlussprojekt</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link
              to="/kurs"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors border-2 border-gray-200"
            >
              <ArrowLeft className="w-5 h-5" />
              Zur Kursübersicht
            </Link>
            <Link
              to="/kurs/tag-5"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-xl font-medium hover:from-orange-700 hover:to-amber-700 transition-all shadow-lg shadow-orange-200"
            >
              Weiter zu Tag 5
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Link to="/kurs" className="text-white/80 hover:text-white flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              Zurück
            </Link>
            <span className="text-white/60">|</span>
            <span className="text-white/80">Tag 4 von 5</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Problemlösen mit KI</h1>
          <p className="text-white/80">Dein smarter Helfer für alle Herausforderungen</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b sticky top-16 z-30 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm text-gray-500">Fortschritt</span>
            <span className="text-sm font-medium text-orange-600">{Math.round(((activeSection + 1) / sections.length) * 100)}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-orange-600 transition-all duration-300"
              style={{ width: `${((activeSection + 1) / sections.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-2 mb-8">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => index <= maxReachedSection && setActiveSection(index)}
              disabled={index > maxReachedSection}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                activeSection === index
                  ? 'bg-orange-600 text-white'
                  : index <= maxReachedSection
                  ? 'bg-green-100 text-green-700'
                  : 'bg-white text-gray-400 border border-gray-200 opacity-50 cursor-not-allowed'
              }`}
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
            className="flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-xl font-medium hover:bg-orange-700 transition-colors shadow-lg shadow-orange-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {activeSection === sections.length - 1 ? 'Tag 5 starten' : 'Weiter'}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDay4;
