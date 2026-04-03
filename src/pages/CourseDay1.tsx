import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, CheckCircle, Copy, Lightbulb, MessageSquare, Brain, 
  Sparkles, Play, HelpCircle, BookOpen, Star, Zap, Target, ChevronDown, ChevronUp,
  Info, Rocket, Users, Award
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

// ============================================================================
// COURSE DAY 1: WAS IST KI? - Comprehensive Expanded Version
// 5x Content Expansion with Premium Design
// ============================================================================

const CourseDay1 = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [fillBlankAnswers, setFillBlankAnswers] = useState<{[key: string]: string}>({});
  const [showAnswers, setShowAnswers] = useState<{[key: string]: boolean}>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [completedExercises, setCompletedExercises] = useState<string[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  const copyToClipboard = (text: string, description?: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Kopiert!",
      description: description || "Der Text wurde in die Zwischenablage kopiert.",
      variant: "success",
      duration: 2000,
    });
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
      title: 'Willkommen zu Tag 1',
      icon: Sparkles,
      content: (
        <div className="space-y-8">
          {/* Hero Welcome Block */}
          <div className="relative bg-gradient-to-br from-purple-100 via-indigo-50 to-purple-100 rounded-3xl p-8 sm:p-12 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <img 
              src="/KI-Entdecker/images/courses/day1/robot-confused.png" 
              alt="KI-Roboter begrüßt dich" 
              className="w-40 h-40 sm:w-56 sm:h-56 mx-auto mb-8 relative z-10 animate-float"
            />
            
            <h2 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-4 relative z-10">
              Was ist Künstliche Intelligenz?
            </h2>
            <p className="text-lg text-purple-700 max-w-3xl mx-auto leading-relaxed relative z-10">
              Stell dir vor, du hast einen Freund, der nie müde wird, immer neue Dinge lernt 
              und dir bei allen Fragen hilft – das ist im Grunde eine KI! Heute beginnst du 
              deine Reise in die faszinierende Welt der Künstlichen Intelligenz.
            </p>
          </div>

          {/* What You'll Learn */}
          <div className="bg-white rounded-2xl border-2 border-purple-100 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Target className="w-6 h-6 text-purple-600" />
              Was du heute lernen wirst
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: Brain, text: 'Die Grundlagen der KI verstehen', desc: 'Was macht KI anders als normale Programme?' },
                { icon: Zap, text: 'Maschinelles Lernen entdecken', desc: 'Wie lernen Computer aus Beispielen?' },
                { icon: MessageSquare, text: 'Deinen ersten Chatbot bauen', desc: 'Erstelle einen eigenen KI-Assistenten' },
                { icon: Lightbulb, text: 'KI in der realen Welt erkennen', desc: 'Wo begegnest du KI im Alltag?' },
                { icon: Star, text: 'Starkes Fundament legen', desc: 'Die Basis für alle folgenden Tage' },
                { icon: Award, text: 'Ersten Badge verdienen', desc: 'Schließe den Tag ab und sammle Punkte' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-purple-50/50 rounded-xl hover:bg-purple-50 transition-colors">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-purple-600" />
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
            <h4 className="font-bold text-blue-800 mb-3 text-lg">Warum das wichtig ist</h4>
            <p className="text-blue-700 leading-relaxed">
              KI verändert unsere Welt rasant. Sie ist in deinem Handy, in Videospielen, 
              in der Medizin und überall um uns herum. Wenn du verstehst, wie KI funktioniert, 
              kannst du sie besser nutzen, ihre Grenzen erkennen und selbst kreative Projekte 
              damit umsetzen. Du wirst zum aktiven Gestalter statt nur zum passiven Nutzer!
            </p>
          </div>

          {/* Course Overview Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-purple-100 rounded-2xl p-6 hover:border-purple-300 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Brain className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">KI verstehen</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Entdecke den Unterschied zwischen einfachen Programmen und echter Künstlicher Intelligenz.
              </p>
            </div>
            <div className="bg-white border-2 border-purple-100 rounded-2xl p-6 hover:border-purple-300 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">Wie lernen Computer?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Der spannende Prozess des maschinellen Lernens – Schritt für Schritt erklärt.
              </p>
            </div>
            <div className="bg-white border-2 border-purple-100 rounded-2xl p-6 hover:border-purple-300 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">Dein erster Chatbot</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Baue deinen eigenen kleinen KI-Assistenten und probiere ihn sofort aus.
              </p>
            </div>
          </div>
        </div>
      )
    },

    // ========================================================================
    // SECTION 1: WAS IST KI?
    // ========================================================================
    {
      id: 'lesson1',
      title: 'Lektion 1: Was ist KI?',
      icon: Brain,
      content: (
        <div className="space-y-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img 
              src="/KI-Entdecker/images/courses/day1/brain-circuits.png" 
              alt="Gehirn aus Schaltkreisen" 
              className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 mx-auto md:mx-0"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">KI ist wie ein digitales Gehirn</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Künstliche Intelligenz (KI)</strong> ist ein Computerprogramm, das lernen kann – 
                ähnlich wie du! Statt nur feste Anweisungen zu folgen, kann eine KI aus Beispielen lernen 
                und dann selbstständig neue Dinge machen, die sie nie explizit programmiert wurde.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Stell dir vor, ein normaler Computer ist wie ein sehr genauer Taschenrechner: 
                Er macht genau das, was du ihm sagst, nicht mehr und nicht weniger. 
                Eine KI hingegen ist wie ein kluger Schüler: Sie kann aus Fehlern lernen, 
                Muster erkennen und sogar Dinge tun, die sie nie explizit gelernt hat!
              </p>
            </div>
          </div>

          {/* AI vs Regular Program Comparison */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="comparison-bad">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <span className="text-red-600 font-bold">VS</span>
                </div>
                <h4 className="font-bold text-red-800">Normales Programm</h4>
              </div>
              <img 
                src="/KI-Entdecker/images/courses/day1-extra/ai-vs-program.png" 
                alt="Vergleich: Normales Programm" 
                className="w-full h-32 object-cover rounded-lg mb-4 opacity-70"
              />
              <ul className="space-y-2 text-red-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span>Folgt nur festen Regeln (Wenn-Dann)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span>Kann nichts Neues dazulernen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span>Macht immer dasselbe bei gleicher Eingabe</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span>Braucht einen Programmierer für jede Änderung</span>
                </li>
              </ul>
            </div>
            <div className="comparison-good">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-green-600" />
                </div>
                <h4 className="font-bold text-green-800">Künstliche Intelligenz</h4>
              </div>
              <img 
                src="/KI-Entdecker/images/courses/day1/brain-circuits.png" 
                alt="KI-Gehirn" 
                className="w-full h-32 object-contain rounded-lg mb-4"
              />
              <ul className="space-y-2 text-green-700 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Kann aus Daten lernen und Muster erkennen</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Wird mit jedem Beispiel besser</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Kann unbekannte Situationen meistern</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Passt sich an, ohne neu programmiert zu werden</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="content-block-key">
            <h4 className="font-bold text-purple-800 mb-4 text-lg">Das solltest du dir merken</h4>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white/70 rounded-xl p-4">
                <div className="text-2xl mb-2">🎯</div>
                <p className="font-medium text-gray-800 mb-1">Feste Regeln vs. Lernen</p>
                <p className="text-sm text-gray-600">Normale Programme folgen Regeln, KI lernt aus Beispielen.</p>
              </div>
              <div className="bg-white/70 rounded-xl p-4">
                <div className="text-2xl mb-2">📈</div>
                <p className="font-medium text-gray-800 mb-1">Wird immer besser</p>
                <p className="text-sm text-gray-600">KI verbessert sich mit mehr Daten und Übung.</p>
              </div>
              <div className="bg-white/70 rounded-xl p-4">
                <div className="text-2xl mb-2">🧠</div>
                <p className="font-medium text-gray-800 mb-1">Muster erkennen</p>
                <p className="text-sm text-gray-600">KI findet Zusammenhänge, die wir übersehen.</p>
              </div>
            </div>
          </div>

          {/* Real World Examples */}
          <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 sm:p-8">
            <h4 className="font-bold text-gray-800 mb-6 flex items-center gap-2 text-lg">
              <Sparkles className="w-5 h-5 text-amber-500" />
              Beispiele aus dem echten Leben
            </h4>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📱</span>
                  </div>
                  <h5 className="font-bold text-amber-800">Gesichtserkennung</h5>
                </div>
                <p className="text-amber-700 text-sm leading-relaxed">
                  Kennst du die Gesichtserkennung in deinem Handy? Das ist KI! Das Handy hat 
                  Tausende von Gesichtern gesehen und gelernt, deins zu erkennen – ganz ohne 
                  dass ein Mensch jedes einzelne Gesicht programmiert hat.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🎮</span>
                  </div>
                  <h5 className="font-bold text-blue-800">Videospiel-Gegner</h5>
                </div>
                <p className="text-blue-700 text-sm leading-relaxed">
                  In vielen Spielen lernen die Computergegner aus deinen Taktiken und werden 
                  schlauer, je öfter du spielst. Sie passen sich deinem Spielstil an!
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🎵</span>
                  </div>
                  <h5 className="font-bold text-green-800">Musik-Empfehlungen</h5>
                </div>
                <p className="text-green-700 text-sm leading-relaxed">
                  Spotify und andere Apps lernen, welche Musik dir gefällt, und schlagen dir 
                  ähnliche Songs vor – basierend auf Millionen von Hörgewohnheiten.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">✍️</span>
                  </div>
                  <h5 className="font-bold text-purple-800">Autokorrektur</h5>
                </div>
                <p className="text-purple-700 text-sm leading-relaxed">
                  Deine Tastatur lernt, wie du schreibst, und schlägt Wörter vor, die du oft 
                  benutzt. Sie wird mit der Zeit immer besser darin, dich vorherzusagen!
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Fill-in-the-Blanks */}
          <div className="content-block-exercise">
            <h4 className="font-bold text-indigo-800 mb-4 flex items-center gap-2 text-lg">
              <Play className="w-5 h-5" />
              Übung: Fülle die Lücken aus!
            </h4>
            <p className="text-indigo-600 mb-6">
              Teste dein Verständnis, indem du die fehlenden Wörter einträgst.
            </p>
            
            <div className="bg-white rounded-xl p-6 space-y-6">
              <div className="text-gray-700 leading-loose text-lg">
                KI steht für{' '}
                <input 
                  type="text" 
                  className="border-b-2 border-indigo-300 px-3 py-1 w-48 text-center focus:outline-none focus:border-indigo-500 bg-indigo-50/50 rounded-t"
                  placeholder="?"
                  value={fillBlankAnswers['ki-bedeutung'] || ''}
                  onChange={(e) => setFillBlankAnswers({...fillBlankAnswers, 'ki-bedeutung': e.target.value})}
                />
                . Im Gegensatz zu normalen Programmen kann KI aus{' '}
                <input 
                  type="text" 
                  className="border-b-2 border-indigo-300 px-3 py-1 w-32 text-center focus:outline-none focus:border-indigo-500 bg-indigo-50/50 rounded-t"
                  placeholder="?"
                  value={fillBlankAnswers['ki-lernen'] || ''}
                  onChange={(e) => setFillBlankAnswers({...fillBlankAnswers, 'ki-lernen': e.target.value})}
                />
                {' '}lernen und wird besser, je mehr{' '}
                <input 
                  type="text" 
                  className="border-b-2 border-indigo-300 px-3 py-1 w-32 text-center focus:outline-none focus:border-indigo-500 bg-indigo-50/50 rounded-t"
                  placeholder="?"
                  value={fillBlankAnswers['ki-beispiele'] || ''}
                  onChange={(e) => setFillBlankAnswers({...fillBlankAnswers, 'ki-beispiele': e.target.value})}
                />
                {' '}sie sieht.
              </div>
              
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setShowAnswers({...showAnswers, 'ki-basics': !showAnswers['ki-basics']})}
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors font-medium"
                >
                  {showAnswers['ki-basics'] ? <CheckCircle className="w-4 h-4" /> : <HelpCircle className="w-4 h-4" />}
                  {showAnswers['ki-basics'] ? 'Antworten verbergen' : 'Antworten anzeigen'}
                </button>
                
                <button
                  onClick={() => {
                    setFillBlankAnswers({});
                    setShowAnswers({...showAnswers, 'ki-basics': false});
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <ArrowRight className="w-4 h-4 rotate-180" />
                  Zurücksetzen
                </button>
              </div>
              
              {showAnswers['ki-basics'] && (
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-5 animate-fade-in-up">
                  <p className="text-green-800 leading-relaxed">
                    <strong className="text-green-900">Lösung:</strong> KI steht für <strong className="bg-green-200 px-1 rounded">Künstliche Intelligenz</strong>. 
                    Im Gegensatz zu normalen Programmen kann KI aus <strong className="bg-green-200 px-1 rounded">Daten</strong> lernen und wird besser, 
                    je mehr <strong className="bg-green-200 px-1 rounded">Beispiele</strong> sie sieht.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Mini Summary */}
          <div className="content-block-summary">
            <p className="text-slate-700 leading-relaxed">
              <strong>Zusammenfassung:</strong> Künstliche Intelligenz ist ein Computerprogramm, 
              das aus Erfahrungen lernen kann. Im Gegensatz zu normalen Programmen, die nur 
              feste Regeln befolgen, kann KI Muster erkennen, aus Fehlern lernen und sich an 
              neue Situationen anpassen. Du begegnest KI täglich – in deinem Handy, in Spielen 
              und in vielen Apps!
            </p>
          </div>
        </div>
      )
    },

    // ========================================================================
    // SECTION 2: WIE LERNEN COMPUTER?
    // ========================================================================
    {
      id: 'lesson2',
      title: 'Lektion 2: Wie lernen Computer?',
      icon: Lightbulb,
      content: (
        <div className="space-y-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img 
              src="/KI-Entdecker/images/courses/day1/robot-learning.png" 
              alt="Lernender Roboter" 
              className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 mx-auto md:mx-0"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Maschinelles Lernen einfach erklärt</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Stell dir vor, du lernst, Äpfel von Birnen zu unterscheiden. Zuerst zeigt dir jemand 
                viele Bilder und sagt dir, was was ist. Nach einer Weile erkennst du selbst, 
                was ein Apfel und was eine Birne ist – auch bei Bildern, die du noch nie gesehen hast!
              </p>
              <p className="text-gray-600 leading-relaxed">
                Genau so funktioniert maschinelles Lernen: Die KI bekommt viele Beispiele, 
                findet selbst heraus, was die Unterschiede sind, und kann dann neue Dinge 
                erkennen, die sie noch nie gesehen hat.
              </p>
            </div>
          </div>

          {/* The Learning Process - Step by Step */}
          <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 sm:p-8">
            <h4 className="font-bold text-gray-800 mb-8 flex items-center gap-2 text-lg">
              <BookOpen className="w-5 h-5 text-purple-600" />
              Der Lernprozess in 3 Schritten
            </h4>
            
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="content-block-step">
                <div className="content-block-step-number">1</div>
                <div>
                  <h5 className="font-bold text-blue-800 mb-2 text-lg">Daten sammeln</h5>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Die KI bekommt Tausende von Beispielen zu sehen. Wenn sie lernen soll, 
                    Katzen zu erkennen, sieht sie Millionen von Katzenbildern – von allen 
                    Seiten, in allen Farben, in verschiedenen Posen.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-blue-700 text-sm">
                      <strong>Beispiel:</strong> Ein selbstfahrendes Auto sieht Millionen von 
                      Bildern von Straßen, Ampeln, Fußgängern und anderen Autos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="content-block-step">
                <div className="content-block-step-number">2</div>
                <div>
                  <h5 className="font-bold text-green-800 mb-2 text-lg">Muster erkennen</h5>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Die KI analysiert alle Beispiele und sucht nach Gemeinsamkeiten. 
                    Bei Katzen merkt sie: Katzen haben spitze Ohren, Schnurrhaare, 
                    eine bestimmte Gesichtsform und oft einen Schwanz.
                  </p>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-green-700 text-sm">
                      <strong>Spannend:</strong> Die KI findet manchmal Muster, die wir 
                      gar nicht bewusst wahrnehmen – wie bestimmte Pixel-Muster in Bildern!
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="content-block-step">
                <div className="content-block-step-number">3</div>
                <div>
                  <h5 className="font-bold text-purple-800 mb-2 text-lg">Anwenden & Verbessern</h5>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Jetzt kann die KI neue Bilder sehen und sagen: "Das ist eine Katze!" 
                    Wenn sie falsch liegt, lernt sie daraus und wird beim nächsten Mal besser. 
                    So wird sie mit der Zeit immer genauer.
                  </p>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="text-purple-700 text-sm">
                      <strong>Wichtig:</strong> Die KI wird nie perfekt, aber sie kann 
                      besser werden als Menschen bei bestimmten Aufgaben!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pro Tip */}
          <div className="content-block-tip">
            <h4 className="font-bold text-purple-800 mb-3">Profi-Tipp: Qualität der Daten</h4>
            <p className="text-purple-700 leading-relaxed">
              Die Qualität der KI hängt stark von den Trainingsdaten ab. Wenn die KI nur 
              Bilder von orangenen Katzen sieht, könnte sie schwarze Katzen nicht erkennen! 
              Deshalb braucht man für gute KI viele <strong>vielfältige</strong> Beispiele.
            </p>
          </div>

          {/* Interactive Exercise */}
          <div className="content-block-exercise">
            <h4 className="font-bold text-indigo-800 mb-4 flex items-center gap-2 text-lg">
              <Play className="w-5 h-5" />
              Deine Übung: Der Katzen-Erkenner
            </h4>
            <p className="text-indigo-600 mb-6">
              Kopiere diesen Prompt und probiere ihn in einem KI-Tool aus (z.B. ChatGPT). 
              Du wirst erstaunt sein, wie gut die KI erklären kann!
            </p>
            
            <div className="bg-slate-900 rounded-xl p-5 relative group">
              <pre className="text-green-400 text-sm whitespace-pre-wrap leading-relaxed">
{`Beschreibe mir Schritt für Schritt, wie eine KI lernt, 
Katzen auf Bildern zu erkennen. 

Erkläre es so, als würdest du einem 10-Jährigen erklären.
Verwende diese Struktur:
1. Was für Bilder sieht die KI?
2. Welche Merkmale sucht sie?
3. Wie weiß sie, ob sie richtig liegt?`}
              </pre>
              <button
                onClick={() => copyToClipboard(
                  `Beschreibe mir Schritt für Schritt, wie eine KI lernt, Katzen auf Bildern zu erkennen. Erkläre es so, als würdest du einem 10-Jährigen erklären.`,
                  "Prompt für Katzen-Erkenner kopiert!"
                )}
                className="absolute top-3 right-3 bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg transition-colors flex items-center gap-2"
              >
                <Copy className="w-4 h-4" />
                <span className="text-sm">Kopieren</span>
              </button>
            </div>
            
            <div className="mt-4 flex items-center gap-3">
              <input 
                type="checkbox" 
                id="exercise-cat"
                className="w-5 h-5 text-indigo-600 rounded"
                checked={completedExercises.includes('cat')}
                onChange={() => toggleExercise('cat')}
              />
              <label htmlFor="exercise-cat" className="text-indigo-700 cursor-pointer">
                Ich habe die Übung ausprobiert!
              </label>
            </div>
          </div>

          {/* Warning Block */}
          <div className="content-block-warning">
            <h4 className="font-bold text-amber-800 mb-3">Achtung: KI macht Fehler!</h4>
            <p className="text-amber-700 leading-relaxed">
              KI-Systeme sind nicht perfekt. Sie können Dinge verwechseln, Vorurteile aus 
              den Trainingsdaten übernehmen oder bei ungewöhnlichen Situationen scheitern. 
              Deshalb ist es wichtig, KI-Ergebnisse kritisch zu hinterfragen und nicht 
              blind zu vertrauen – besonders bei wichtigen Entscheidungen!
            </p>
          </div>

          {/* Summary */}
          <div className="content-block-summary">
            <p className="text-slate-700 leading-relaxed">
              <strong>Zusammenfassung:</strong> Maschinelles Lernen funktioniert in drei Schritten: 
              1) Die KI sieht viele Beispiele, 2) Sie findet Muster und Gemeinsamkeiten, 
              3) Sie wendet das Gelernte auf neue Situationen an und verbessert sich dabei. 
              Je mehr und vielfältigere Daten die KI sieht, desto besser wird sie!
            </p>
          </div>
        </div>
      )
    },

    // ========================================================================
    // SECTION 3: DEIN ERSTER CHATBOT
    // ========================================================================
    {
      id: 'lesson3',
      title: 'Lektion 3: Dein erster Chatbot',
      icon: MessageSquare,
      content: (
        <div className="space-y-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img 
              src="/KI-Entdecker/images/courses/day1-extra/chatbot-friendly.png" 
              alt="Freundlicher Chatbot" 
              className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 mx-auto md:mx-0"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Baue deinen eigenen Chatbot!</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ein Chatbot ist ein Programm, das mit dir schreiben kann. Mit KI können 
                Chatbots richtig schlau werden und sogar Fragen beantworten, die sie 
                noch nie gehört haben!
              </p>
              <p className="text-gray-600 leading-relaxed">
                In dieser Lektion erstellst du deinen eigenen KI-Assistenten. Du wirst 
                staunen, wie einfach es ist – mit dem richtigen Prompt kannst du eine 
                KI in einen Tier-Experten, einen Mathe-Tutor oder was immer du willst verwandeln!
              </p>
            </div>
          </div>

          {/* What is a Chatbot */}
          <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 sm:p-8">
            <h4 className="font-bold text-gray-800 mb-6 flex items-center gap-2 text-lg">
              <Info className="w-5 h-5 text-blue-600" />
              Was ist ein Chatbot?
            </h4>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Ein Chatbot ist wie ein digitaler Gesprächspartner. Frühere Chatbots 
                  konnten nur auf feste Befehle reagieren – wie ein Automat, der nur 
                  bestimmte Knöpfe hat.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Moderne KI-Chatbots wie ChatGPT verstehen natürliche Sprache. Du kannst 
                  mit ihnen sprechen wie mit einem Menschen, und sie antworten sinnvoll – 
                  sogar auf Fragen, die sie noch nie gehört haben!
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-5">
                <h5 className="font-bold text-purple-800 mb-3">Ein Chatbot kann:</h5>
                <ul className="space-y-2">
                  {[
                    'Fragen beantworten',
                    'Texte zusammenfassen',
                    'Ideen brainstormen',
                    'Bei Hausaufgaben helfen',
                    'Geschichten erzählen',
                    'Code schreiben',
                    'Übersetzen',
                    'Und vieles mehr!'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-purple-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Your First Chatbot Project */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-purple-800 text-xl">Praxis-Projekt: Dein Tier-Experte</h4>
                <p className="text-purple-600 text-sm">Erstelle einen Chatbot, der alles über Tiere weiß!</p>
              </div>
            </div>
            
            <p className="text-purple-700 mb-6 leading-relaxed">
              Kopiere diesen Prompt und füge ihn in ein KI-Tool ein (z.B. ChatGPT, Claude oder Gemini). 
              Dann kannst du mit deinem persönlichen Tier-Experten chatten!
            </p>
            
            <div className="bg-slate-900 rounded-xl p-5 relative group">
              <pre className="text-green-400 text-sm whitespace-pre-wrap leading-relaxed">
{`Du bist ein freundlicher Tier-Experte für Kinder. 
Beantworte alle Fragen über Tiere einfach und spannend. 

Wenn du ein Tier beschreibst, erwähne immer:
- Wie groß es wird (in Metern oder im Vergleich zu bekannten Dingen)
- Was es isst und wie es seine Nahrung findet
- Wo auf der Welt es lebt
- Eine coole, besondere Fähigkeit
- Ob es gefährdet ist oder nicht

Stell dich vor und frag mich, welches Tier mich interessiert!`}
              </pre>
              <button
                onClick={() => copyToClipboard(
                  `Du bist ein freundlicher Tier-Experte für Kinder. Beantworte alle Fragen über Tiere einfach und spannend. Wenn du ein Tier beschreibst, erwähne: Wie groß es wird, was es isst, wo es lebt, eine coole Fähigkeit. Stell dich vor und frag mich, welches Tier mich interessiert!`,
                  "Tier-Experten Prompt kopiert!"
                )}
                className="absolute top-3 right-3 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
              >
                <Copy className="w-4 h-4" />
                <span className="text-sm font-medium">Kopieren</span>
              </button>
            </div>
            
            <div className="mt-6 flex items-center gap-3">
              <input 
                type="checkbox" 
                id="exercise-animal"
                className="w-5 h-5 text-purple-600 rounded"
                checked={completedExercises.includes('animal')}
                onChange={() => toggleExercise('animal')}
              />
              <label htmlFor="exercise-animal" className="text-purple-700 cursor-pointer">
                Ich habe meinen Tier-Experten erstellt und getestet!
              </label>
            </div>
          </div>

          {/* Tips for Better Results */}
          <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 sm:p-8">
            <h4 className="font-bold text-gray-800 mb-6 flex items-center gap-2 text-lg">
              <Sparkles className="w-5 h-5 text-amber-500" />
              Tipps für bessere Ergebnisse
            </h4>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  icon: Target,
                  title: 'Sei spezifisch',
                  desc: 'Je genauer deine Anweisungen, desto besser die Antwort.'
                },
                {
                  icon: BookOpen,
                  title: 'Gib der KI eine Rolle',
                  desc: 'Sag: "Du bist ein Lehrer" oder "Du bist ein Wissenschaftler"'
                },
                {
                  icon: Users,
                  title: 'Nenne die Zielgruppe',
                  desc: 'Sag: "Erkläre es für 10-Jährige" oder "Schreibe für Anfänger"'
                },
                {
                  icon: Lightbulb,
                  title: 'Gib Format vor',
                  desc: 'Sag: "Als Liste", "In 3 Absätzen" oder "Als Geschichte"'
                },
                {
                  icon: Zap,
                  title: 'Sei iterativ',
                  desc: 'Verbessere den Prompt Schritt für Schritt.'
                },
                {
                  icon: Star,
                  title: 'Experimentiere',
                  desc: 'Probiere verschiedene Formulierungen aus!'
                }
              ].map((tip, idx) => (
                <div key={idx} className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-3">
                    <tip.icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <h5 className="font-bold text-amber-800 mb-1">{tip.title}</h5>
                  <p className="text-amber-700 text-sm">{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* More Chatbot Ideas */}
          <div className="content-block-info">
            <h4 className="font-bold text-blue-800 mb-4 text-lg">Weitere Chatbot-Ideen zum Ausprobieren</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/70 rounded-lg p-4">
                <p className="font-medium text-blue-800 mb-2">🧮 Mathe-Tutor</p>
                <p className="text-blue-600 text-sm">"Du bist ein geduldiger Mathe-Tutor für die 5. Klasse..."</p>
              </div>
              <div className="bg-white/70 rounded-lg p-4">
                <p className="font-medium text-blue-800 mb-2">🌍 Sprach-Lehrer</p>
                <p className="text-blue-600 text-sm">"Du hilfst mir, Englisch zu lernen. Korrigiere meine Fehler..."</p>
              </div>
              <div className="bg-white/70 rounded-lg p-4">
                <p className="font-medium text-blue-800 mb-2">🎨 Kreativ-Coach</p>
                <p className="text-blue-600 text-sm">"Du bist ein Kreativ-Coach. Hilf mir bei Ideen für..."</p>
              </div>
              <div className="bg-white/70 rounded-lg p-4">
                <p className="font-medium text-blue-800 mb-2">📚 Geschichten-Erzähler</p>
                <p className="text-blue-600 text-sm">"Du bist ein Geschichten-Erzähler. Schreibe eine spannende..."</p>
              </div>
            </div>
          </div>

          {/* Completion Quiz */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200 p-6 sm:p-8">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="/KI-Entdecker/images/courses/day1/robot-idea.png" 
                alt="Roboter mit Idee" 
                className="w-16 h-16"
              />
              <div>
                <h4 className="text-xl font-bold text-green-800">🎉 Geschafft!</h4>
                <p className="text-green-600">Du hast Tag 1 abgeschlossen!</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 mb-6">
              <h5 className="font-bold text-gray-800 mb-4">Was hast du heute gelernt? (Checkliste)</h5>
              <div className="space-y-3">
                {[
                  'Ich weiß, was KI bedeutet und wie sie funktioniert',
                  'Ich verstehe den Unterschied zwischen KI und normalen Programmen',
                  'Ich kann erklären, wie Computer lernen (maschinelles Lernen)',
                  'Ich habe meinen ersten eigenen Chatbot erstellt',
                  'Ich kenne Tipps für bessere Prompts'
                ].map((item, idx) => (
                  <label 
                    key={idx} 
                    className="checklist-item"
                  >
                    <input 
                      type="checkbox" 
                      className="w-5 h-5 text-green-600 rounded mt-0.5"
                      checked={completedExercises.includes(`learned-${idx}`)}
                      onChange={() => toggleExercise(`learned-${idx}`)}
                    />
                    <span className="text-gray-700">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <Link 
                to="/kurs" 
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors border-2 border-gray-200"
              >
                <ArrowLeft className="w-5 h-5" />
                Zurück zur Übersicht
              </Link>
              <Link 
                to="/kurs/tag-2" 
                className="flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700 transition-colors shadow-lg shadow-purple-200"
              >
                Weiter zu Tag 2
                <ArrowRight className="w-5 h-5" />
              </Link>
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
          <div className="bg-gradient-to-br from-purple-100 via-indigo-50 to-purple-100 rounded-3xl p-8 text-center">
            <img 
              src="/KI-Entdecker/images/courses/day1-extra/robot-teacher.png" 
              alt="Roboter-Lehrer" 
              className="w-48 h-48 mx-auto mb-6 rounded-xl object-cover"
            />
            <h3 className="text-2xl font-bold text-purple-800 mb-4">
              Du hast den ersten Tag gemeistert!
            </h3>
            <p className="text-purple-700 max-w-2xl mx-auto leading-relaxed">
              Du weißt jetzt, was KI ist, wie sie funktioniert und wie Computer lernen können. 
              Du hast sogar deinen eigenen Chatbot erstellt! Das ist eine großartige Grundlage 
              für die kommenden Tage.
            </p>
          </div>

          {/* Key Learnings Recap */}
          <div className="bg-white rounded-2xl border-2 border-purple-100 p-6 sm:p-8">
            <h4 className="font-bold text-gray-800 mb-6 flex items-center gap-2 text-lg">
              <BookOpen className="w-5 h-5 text-purple-600" />
              Die wichtigsten Punkte im Überblick
            </h4>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl">
                  <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">KI = Künstliche Intelligenz</p>
                    <p className="text-sm text-gray-600">Computerprogramme, die lernen können</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl">
                  <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Maschinelles Lernen</p>
                    <p className="text-sm text-gray-600">KI lernt aus Beispielen, nicht aus Regeln</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl">
                  <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">KI ist überall</p>
                    <p className="text-sm text-gray-600">Handy, Spiele, Apps – du nutzt KI täglich</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-indigo-50 rounded-xl">
                  <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Chatbots verstehen Sprache</p>
                    <p className="text-sm text-gray-600">Sie können natürlich mit uns kommunizieren</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-indigo-50 rounded-xl">
                  <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Gute Prompts sind wichtig</p>
                    <p className="text-sm text-gray-600">Je genauer, desto besser die Ergebnisse</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-indigo-50 rounded-xl">
                  <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">6</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">KI macht Fehler</p>
                    <p className="text-sm text-gray-600">Immer kritisch hinterfragen!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 sm:p-8">
            <h4 className="font-bold text-gray-800 mb-6 flex items-center gap-2 text-lg">
              <HelpCircle className="w-5 h-5 text-purple-600" />
              Häufig gestellte Fragen
            </h4>
            
            <div className="space-y-3">
              {[
                {
                  q: 'Kann KI wirklich denken?',
                  a: 'Nein, KI kann nicht wirklich denken wie ein Mensch. Sie erkennt Muster in Daten und gibt passende Antworten, aber sie hat kein Bewusstsein, keine Gefühle und kein echtes Verständnis. Sie simuliert Intelligenz, ohne sie wirklich zu haben.'
                },
                {
                  q: 'Werde ich von KI ersetzt?',
                  a: 'KI wird viele Berufe verändern, aber sie ersetzt nicht den menschlichen Kreativität, Empathie und kritisches Denken. Menschen, die KI beherrschen, haben bessere Chancen – deshalb ist es so wichtig, sie zu verstehen!'
                },
                {
                  q: 'Ist KI gefährlich?',
                  a: 'KI ist ein Werkzeug – sie kann für gute oder schlechte Zwecke genutzt werden. Wichtig ist, dass wir verstehen, wie sie funktioniert, damit wir sie verantwortungsvoll einsetzen können. Deshalb ist Bildung so wichtig!'
                },
                {
                  q: 'Wie alt muss ich sein, um KI zu nutzen?',
                  a: 'Das hängt vom Tool ab. Viele KI-Tools haben Altersgrenzen (oft 13+), aber mit elterlicher Begleitung kannst du schon früher lernen, wie KI funktioniert. Frag deine Eltern, wenn du unsicher bist!'
                },
                {
                  q: 'Muss ich programmieren können, um KI zu nutzen?',
                  a: 'Überhaupt nicht! Mit Tools wie ChatGPT kannst du sofort loslegen – ganz ohne Programmierung. Wenn du später eigene KI-Systeme bauen willst, hilft Programmieren, aber zum Nutzen brauchst du es nicht.'
                }
              ].map((faq, idx) => (
                <div key={idx} className="faq-item">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="faq-question w-full"
                  >
                    <span>{faq.q}</span>
                    {expandedFaq === idx ? (
                      <ChevronUp className="w-5 h-5 text-purple-600" />
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
              Morgen lernst du <strong>Prompt Engineering</strong> – die Kunst, KI so zu fragen, 
              dass du genau die Antwort bekommst, die du brauchst. Das ist der Schlüssel, 
              um das Beste aus KI herauszuholen!
            </p>
            <div className="flex items-center gap-2 text-blue-600">
              <ArrowRight className="w-5 h-5" />
              <span className="font-medium">Tag 2: Prompt Engineering</span>
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
              to="/kurs/tag-2" 
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg shadow-purple-200"
            >
              Weiter zu Tag 2
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
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Link to="/kurs" className="text-white/80 hover:text-white flex items-center gap-2 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Zurück
            </Link>
            <span className="text-white/40">|</span>
            <span className="text-white/80">Tag 1 von 5</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Was ist KI?</h1>
          <p className="text-white/80 text-lg">Die Grundlagen der Künstlichen Intelligenz verstehen</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b sticky top-16 z-30 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">Fortschritt</span>
            <span className="text-sm font-medium text-purple-600">
              {Math.round(((activeSection + 1) / sections.length) * 100)}%
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-500"
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
              onClick={() => setActiveSection(index)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all ${
                activeSection === index 
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-200' 
                  : activeSection > index
                  ? 'bg-green-100 text-green-700'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
              aria-current={activeSection === index ? 'step' : undefined}
            >
              {activeSection > index ? (
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

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-8 border-t border-gray-200">
          <button
            onClick={() => setActiveSection(Math.max(0, activeSection - 1))}
            disabled={activeSection === 0}
            className="flex items-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors border-2 border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-5 h-5" />
            Zurück
          </button>
          <button
            onClick={() => setActiveSection(Math.min(sections.length - 1, activeSection + 1))}
            disabled={activeSection === sections.length - 1}
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700 transition-colors shadow-lg shadow-purple-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Weiter
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDay1;
