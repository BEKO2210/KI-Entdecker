import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Copy, Trophy, Rocket, GraduationCap, Star, Medal, Sparkles, Send, HelpCircle, ChevronDown, ChevronUp, BookOpen, Download } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { buildAssetUrl, buildDownloadUrl } from '@/lib/paths';
import type { useProgress } from '../hooks/useProgress';

interface CourseDayProps {
  progress: ReturnType<typeof useProgress>;
}

const CourseDay5 = ({ progress }: CourseDayProps) => {
  const [activeSection, setActiveSection] = useState(0);
  const [maxReachedSection, setMaxReachedSection] = useState(0);
  const [showCertificate, setShowCertificate] = useState(false);
  const [projectIdea, setProjectIdea] = useState('');
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const canProceed = useRef(false);

  const { completeDay, unlockBadge } = progress;

  const handleNext = () => {
    if (!canProceed.current && activeSection < 5) {
      toast({ title: "Nicht so schnell!", description: "Nimm dir Zeit und schau dir die Inhalte in Ruhe an. Gutes Lernen braucht etwas Geduld.", duration: 3000 });
      return;
    }
    if (activeSection === 5) { setShowCertificate(true); }
    else { setActiveSection(activeSection + 1); }
  };

  if (activeSection > maxReachedSection) { setMaxReachedSection(activeSection); }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    canProceed.current = false;
    
    const minSeconds = (activeSection === 0 || activeSection >= 4) ? 8 : 15;
    const timer = setTimeout(() => { canProceed.current = true; }, minSeconds * 1000);
    if (activeSection === 5) { completeDay(5); unlockBadge(5); }
    return () => clearTimeout(timer);
  }, [activeSection, completeDay, unlockBadge]);

  useEffect(() => {
    if (showCertificate) {
      completeDay(5);
      unlockBadge(5);
    }
  }, [showCertificate, completeDay, unlockBadge]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Kopiert!",
      description: "Der Prompt wurde in die Zwischenablage kopiert.",
      variant: "success",
      duration: 2000,
    });
  };

  const toggleTask = (task: string) => {
    setCompletedTasks(prev => 
      prev.includes(task) 
        ? prev.filter(t => t !== task)
        : [...prev, task]
    );
  };

  const sections = [
    {
      id: 'intro',
      title: 'Willkommen zu Tag 5',
      icon: Trophy,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-yellow-100 to-amber-100 rounded-2xl p-8 text-center">
            <img 
              src={buildAssetUrl('images/courses/day5/trophy-celebration.png')} 
              alt="Trophäen-Feier" 
              className="w-48 h-48 mx-auto mb-6"
            />
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">Abschlussprojekt</h2>
            <p className="text-yellow-700 max-w-2xl mx-auto">
              Herzlichen Glückwunsch! Du hast es bis zum letzten Tag geschafft! Heute wendest du alles, 
              was du gelernt hast, in deinem eigenen KI-Projekt an. Bereit für die große Premiere?
            </p>
          </div>
          
          <div className="bg-white rounded-2xl border-2 border-yellow-200 p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">🏆 Was du in den letzten 4 Tagen gelernt hast:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { day: 'Tag 1', skill: 'KI-Grundlagen verstehen', color: 'bg-purple-100 text-purple-800' },
                { day: 'Tag 2', skill: 'Perfekte Prompts schreiben', color: 'bg-teal-100 text-teal-800' },
                { day: 'Tag 3', skill: 'Kreativ mit KI arbeiten', color: 'bg-pink-100 text-pink-800' },
                { day: 'Tag 4', skill: 'Probleme mit KI lösen', color: 'bg-orange-100 text-orange-800' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${item.color}`}>
                    {item.day}
                  </span>
                  <span className="text-gray-700">{item.skill}</span>
                  <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <Rocket className="w-10 h-10 text-blue-600" />
              <h3 className="text-xl font-bold text-blue-800">Deine Mission heute:</h3>
            </div>
            <p className="text-blue-700 mb-4">
              Erstelle ein eigenes KI-Projekt! Wähle eines der drei Projekte unten oder erfinde dein eigenes. 
              Nutze alles, was du gelernt hast, und zeige, was in dir steckt!
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-white rounded-full text-blue-700 text-sm font-medium">🎨 Kreatives Projekt</span>
              <span className="px-4 py-2 bg-white rounded-full text-blue-700 text-sm font-medium">📚 Lern-Projekt</span>
              <span className="px-4 py-2 bg-white rounded-full text-blue-700 text-sm font-medium">🎮 Spiele-Projekt</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'project1',
      title: 'Projekt 1: KI-Comic',
      icon: Sparkles,
      content: (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border-2 border-gray-100 p-8">
            <div className="flex items-start gap-6 mb-8">
              <img 
                src={buildAssetUrl('images/courses/day5/robot-presentation.png')} 
                alt="Roboter-Präsentation" 
                className="w-32 h-32 flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">🎨 Erstelle deinen eigenen KI-Comic!</h3>
                <p className="text-gray-600 mb-4">
                  In diesem Projekt erstellst du einen kompletten Comic mit Hilfe der KI. 
                  Du erfindest die Geschichte, die Charaktere und lässt die KI die Bilder beschreiben!
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <h4 className="font-bold text-gray-800">Schritt-für-Schritt Anleitung:</h4>
              
              <div className="bg-purple-50 rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                  <div>
                    <h5 className="font-bold text-purple-800">Geschichte erfinden</h5>
                    <p className="text-purple-700 text-sm mb-3">Lass die KI dir bei der Idee helfen:</p>
                    <div className="bg-gray-900 rounded-lg p-3 relative">
                      <pre className="text-green-400 text-xs whitespace-pre-wrap">Hilf mir, eine lustige Comic-Geschichte zu erfinden. Sie sollte einen Roboter als Hauptcharakter haben und in der Zukunft spielen. Gib mir 3 verschiedene Ideen!</pre>
                      <button onClick={() => copyToClipboard('Hilf mir, eine lustige Comic-Geschichte zu erfinden. Sie sollte einen Roboter als Hauptcharakter haben und in der Zukunft spielen. Gib mir 3 verschiedene Ideen!')} className="absolute top-2 right-2 bg-white/10 hover:bg-white/20 text-white p-1 rounded">
                        <Copy className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <span className="bg-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                  <div>
                    <h5 className="font-bold text-teal-800">Charaktere entwickeln</h5>
                    <p className="text-teal-700 text-sm mb-3">Beschreibe deine Hauptfiguren:</p>
                    <div className="bg-gray-900 rounded-lg p-3 relative">
                      <pre className="text-green-400 text-xs whitespace-pre-wrap">Beschreibe meinen Hauptcharakter [Name] detailliert: Aussehen, Persönlichkeit, besondere Fähigkeiten. Ich will ihn später als Bild beschreiben können.</pre>
                      <button onClick={() => copyToClipboard('Beschreibe meinen Hauptcharakter [Name] detailliert: Aussehen, Persönlichkeit, besondere Fähigkeiten. Ich will ihn später als Bild beschreiben können.')} className="absolute top-2 right-2 bg-white/10 hover:bg-white/20 text-white p-1 rounded">
                        <Copy className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-pink-50 rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <span className="bg-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                  <div>
                    <h5 className="font-bold text-pink-800">Szenen beschreiben</h5>
                    <p className="text-pink-700 text-sm mb-3">Erstelle Bildbeschreibungen für jedes Panel:</p>
                    <div className="bg-gray-900 rounded-lg p-3 relative">
                      <pre className="text-green-400 text-xs whitespace-pre-wrap">Schreibe mir 5 Bildbeschreibungen für meinen Comic. Jede Beschreibung sollte so detailliert sein, dass ich sie in ein KI-Bild-Tool eingeben kann. Comic-Stil, bunt und kinderfreundlich!</pre>
                      <button onClick={() => copyToClipboard('Schreibe mir 5 Bildbeschreibungen für meinen Comic. Jede Beschreibung sollte so detailliert sein, dass ich sie in ein KI-Bild-Tool eingeben kann. Comic-Stil, bunt und kinderfreundlich!')} className="absolute top-2 right-2 bg-white/10 hover:bg-white/20 text-white p-1 rounded">
                        <Copy className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6">
              <h4 className="font-bold text-yellow-800 mb-3">💡 Tipp:</h4>
              <p className="text-yellow-700">
                In der Schule arbeitest du mit der Landes-KI <strong>telli</strong> (SCHULE@BW) –
                dort gibt es aktuell noch keine Bildgenerierung, dafür viele Text-Bausteine für
                deinen Comic. Zu Hause kannst du gemeinsam mit deinen Eltern ein Bild-KI-Tool
                ausprobieren (z. B. Adobe Firefly oder Bing Image Creator). Drucke die Bilder
                aus und klebe sie zu einem echten Comic zusammen!
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'project2',
      title: 'Projekt 2: KI-Quiz',
      icon: Star,
      content: (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border-2 border-gray-100 p-8">
            <div className="flex items-start gap-6 mb-8">
              <img 
                src={buildAssetUrl('images/courses/day5/rocket-launch.png')} 
                alt="Raketen-Start" 
                className="w-32 h-32 flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">🎮 Erstelle dein eigenes KI-Quiz!</h3>
                <p className="text-gray-600 mb-4">
                  In diesem Projekt erstellst du ein interaktives Quiz mit der KI. Du kannst es über 
                  jedes Thema machen - dein Lieblingstier, dein Hobby oder ein Schul-Thema!
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <h4 className="font-bold text-gray-800">So erstellst du dein Quiz:</h4>
              
              <div className="bg-indigo-50 rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                  <div className="flex-1">
                    <h5 className="font-bold text-indigo-800">Wähle dein Thema</h5>
                    <p className="text-indigo-700 text-sm mb-3">Über was soll dein Quiz sein?</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3">
                      {['Dinosaurier', 'Weltraum', 'Tiere', 'Sport', 'Geschichte', 'Technik', 'Geografie', 'Filme'].map((topic) => (
                        <button
                          key={topic}
                          onClick={() => setProjectIdea(topic)}
                          className={`px-3 py-2 rounded-lg text-sm transition-all ${
                            projectIdea === topic 
                              ? 'bg-indigo-600 text-white' 
                              : 'bg-white text-indigo-700 hover:bg-indigo-100'
                          }`}
                        >
                          {topic}
                        </button>
                      ))}
                    </div>
                    {projectIdea && (
                      <div className="bg-gray-900 rounded-lg p-3 relative mt-3">
                        <pre className="text-green-400 text-xs whitespace-pre-wrap">Erstelle ein Quiz mit 10 Fragen über {projectIdea}. Jede Frage sollte 4 Antwortmöglichkeiten haben (A, B, C, D), wobei eine richtig ist. Mache es für Kinder im Alter von 10-12 Jahren. Am Ende soll die KI mir sagen, wie viele ich richtig habe!</pre>
                        <button onClick={() => copyToClipboard(`Erstelle ein Quiz mit 10 Fragen über ${projectIdea}. Jede Frage sollte 4 Antwortmöglichkeiten haben (A, B, C, D), wobei eine richtig ist. Mache es für Kinder im Alter von 10-12 Jahren. Am Ende soll die KI mir sagen, wie viele ich richtig habe!`)} className="absolute top-2 right-2 bg-white/10 hover:bg-white/20 text-white p-1 rounded">
                          <Copy className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                  <div>
                    <h5 className="font-bold text-green-800">Spiele das Quiz</h5>
                    <p className="text-green-700 text-sm">
                      Kopiere den Prompt in eine schulkonforme KI (in Baden-Württemberg z. B. telli
                      über SCHULE@BW) und spiele dein Quiz! Antworte auf jede Frage und schau, wie
                      gut du abschneidest.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                  <div>
                    <h5 className="font-bold text-orange-800">Verbessere es</h5>
                    <p className="text-orange-700 text-sm mb-3">Nach dem Spielen kannst du sagen:</p>
                    <div className="bg-gray-900 rounded-lg p-3 relative">
                      <pre className="text-green-400 text-xs whitespace-pre-wrap">Das war toll! Kannst du 5 schwierigere Fragen erstellen? Diesmal über [anderes Thema]!</pre>
                      <button onClick={() => copyToClipboard('Das war toll! Kannst du 5 schwierigere Fragen erstellen?')} className="absolute top-2 right-2 bg-white/10 hover:bg-white/20 text-white p-1 rounded">
                        <Copy className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="font-bold text-blue-800 mb-3">🎯 Challenge:</h4>
              <p className="text-blue-700">
                Erstelle ein Quiz für deine Familie oder Freunde! Schreib die Fragen auf und 
                spielt zusammen. Wer kann die meisten richtig beantworten?
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'project3',
      title: 'Projekt 3: KI-Assistent',
      icon: GraduationCap,
      content: (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border-2 border-gray-100 p-8">
            <div className="flex items-start gap-6 mb-8">
              <img 
                src={buildAssetUrl('images/courses/day5/robot-graduate.png')} 
                alt="Absolvent-Roboter" 
                className="w-32 h-32 flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">🎓 Erstelle deinen eigenen KI-Assistenten!</h3>
                <p className="text-gray-600 mb-4">
                  In diesem Projekt programmierst du (mit Worten!) deinen eigenen KI-Assistenten. 
                  Er kann ein Lehrer, ein Coach oder ein Experte für dein Lieblingsthema sein!
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <h4 className="font-bold text-gray-800">Dein persönlicher Assistent:</h4>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-5 border-2 border-purple-200">
                <h5 className="font-bold text-purple-800 mb-3">🌟 Beispiel: Der Mathe-Coach</h5>
                <div className="bg-gray-900 rounded-lg p-4 relative">
                  <pre className="text-green-400 text-sm whitespace-pre-wrap">{`Du bist ein freundlicher Mathe-Coach für Kinder im Alter von 10-12 Jahren. 

Deine Aufgaben:
1. Erkläre Mathe-Konzepte Schritt für Schritt
2. Gib mir Übungsaufgaben passend zu meinem Niveau
3. Wenn ich eine Aufgabe falsch löse, erkläre freundlich, was ich falsch gemacht habe
4. Feiere mit mir, wenn ich etwas richtig mache!
5. Frage mich zuerst, in welchem Thema ich Hilfe brauche

Stell dich vor und frag mich, womit ich heute üben möchte!`}</pre>
                  <button onClick={() => copyToClipboard(`Du bist ein freundlicher Mathe-Coach für Kinder im Alter von 10-12 Jahren. 

Deine Aufgaben:
1. Erkläre Mathe-Konzepte Schritt für Schritt
2. Gib mir Übungsaufgaben passend zu meinem Niveau
3. Wenn ich eine Aufgabe falsch löse, erkläre freundlich, was ich falsch gemacht habe
4. Feiere mit mir, wenn ich etwas richtig mache!
5. Frage mich zuerst, in welchem Thema ich Hilfe brauche

Stell dich vor und frag mich, womit ich heute üben möchte!`)} className="absolute top-2 right-2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-xl p-5">
                  <h5 className="font-bold text-blue-800 mb-3">📚 Lern-Assistent</h5>
                  <div className="bg-gray-900 rounded-lg p-3 relative">
                    <pre className="text-green-400 text-xs whitespace-pre-wrap">Du bist ein Lern-Assistent. Hilf mir, für meine nächste Klassenarbeit zu lernen. Stelle mir Fragen zu [Thema] und sag mir, ob sie richtig sind!</pre>
                    <button onClick={() => copyToClipboard('Du bist ein Lern-Assistent. Hilf mir, für meine nächste Klassenarbeit zu lernen. Stelle mir Fragen zu [Thema] und sag mir, ob sie richtig sind!')} className="absolute top-2 right-2 bg-white/10 hover:bg-white/20 text-white p-1 rounded">
                      <Copy className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-5">
                  <h5 className="font-bold text-green-800 mb-3">🎨 Kreativ-Coach</h5>
                  <div className="bg-gray-900 rounded-lg p-3 relative">
                    <pre className="text-green-400 text-xs whitespace-pre-wrap">Du bist ein Kreativ-Coach. Hilf mir, Geschichten zu schreiben und Bilder zu beschreiben. Gib mir kreative Ideen und Aufgaben!</pre>
                    <button onClick={() => copyToClipboard('Du bist ein Kreativ-Coach. Hilf mir, Geschichten zu schreiben und Bilder zu beschreiben. Gib mir kreative Ideen und Aufgaben!')} className="absolute top-2 right-2 bg-white/10 hover:bg-white/20 text-white p-1 rounded">
                      <Copy className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6">
              <h4 className="font-bold text-yellow-800 mb-3">💡 Deine eigene Idee:</h4>
              <p className="text-yellow-700 mb-4">
                Was für einen Assistenten möchtest du erstellen? Einen Sport-Coach? Einen Tier-Experten? 
                Einen Programmier-Lehrer? Sei kreativ!
              </p>
              <div className="bg-gray-900 rounded-lg p-4 relative">
                <pre className="text-green-400 text-sm whitespace-pre-wrap">{`Du bist ein [deine Idee]-Experte für Kinder. 

Deine Aufgaben:
1. [Was soll der Assistent tun?]
2. [Wie soll er sich verhalten?]
3. [Was soll er besonders gut können?]

Stell dich vor und frag mich, wie du mir helfen kannst!`}</pre>
                <button onClick={() => copyToClipboard(`Du bist ein [deine Idee]-Experte für Kinder. 

Deine Aufgaben:
1. [Was soll der Assistent tun?]
2. [Wie soll er sich verhalten?]
3. [Was soll er besonders gut können?]

Stell dich vor und frag mich, wie du mir helfen kannst!`)} className="absolute top-2 right-2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors">
                  <Copy className="w-4 h-4" />
                </button>
              </div>
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
          <div className="bg-gradient-to-br from-yellow-100 to-amber-100 rounded-3xl p-8 text-center">
            <img
              src={buildAssetUrl('images/courses/day5/trophy-celebration.png')}
              alt="Trophäe"
              className="w-48 h-48 mx-auto mb-6"
            />
            <h3 className="text-2xl font-bold text-yellow-800 mb-4">
              Alle 5 Tage gemeistert!
            </h3>
            <p className="text-yellow-700 max-w-2xl mx-auto leading-relaxed">
              Du hast den gesamten KI-Entdecker-Kurs durchgearbeitet und bist jetzt ein
              echter KI-Experte! Hier ist eine Zusammenfassung deiner Reise.
            </p>
          </div>

          {/* Gesamtübersicht */}
          <div className="bg-white rounded-2xl border-2 border-yellow-100 p-6 sm:p-8">
            <h4 className="font-bold text-gray-800 mb-6 flex items-center gap-2 text-lg">
              <BookOpen className="w-5 h-5 text-yellow-600" />
              Deine KI-Reise im Überblick
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { day: 'Tag 1', title: 'KI-Grundlagen', desc: 'Was KI ist und wie Computer lernen', color: 'bg-purple-50', badge: 'bg-purple-600' },
                { day: 'Tag 2', title: 'Prompt Engineering', desc: 'Die Kunst der perfekten Frage', color: 'bg-teal-50', badge: 'bg-teal-600' },
                { day: 'Tag 3', title: 'Kreativ mit KI', desc: 'Bilder, Geschichten und Musik', color: 'bg-pink-50', badge: 'bg-pink-600' },
                { day: 'Tag 4', title: 'Problemlösen', desc: 'KI als Lernhelfer und Korrekturleser', color: 'bg-orange-50', badge: 'bg-orange-600' },
              ].map((item, i) => (
                <div key={i} className={`flex items-start gap-3 p-4 ${item.color} rounded-xl`}>
                  <div className={`w-8 h-8 ${item.badge} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-bold text-sm">{item.day.split(' ')[1]}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 sm:p-8">
            <h4 className="font-bold text-gray-800 mb-6 flex items-center gap-2 text-lg">
              <HelpCircle className="w-5 h-5 text-yellow-600" />
              Häufig gestellte Fragen
            </h4>
            <div className="space-y-3">
              {[
                {
                  q: 'Wie geht es nach dem Kurs weiter?',
                  a: 'Du kannst die KI-Tools weiter nutzen und eigene Projekte erstellen! Probiere neue Ideen aus, experimentiere mit verschiedenen Prompts und zeige deinen Freunden, was du gelernt hast.'
                },
                {
                  q: 'Welche KI-Tools kann ich nutzen?',
                  a: 'In der Schule in Baden-Württemberg ist die offizielle Landes-KI telli (über SCHULE@BW) für dich freigegeben – sie beherrscht Text sehr gut. Bildgenerierung gibt es dort aktuell noch nicht (Funktion ist in Entwicklung). Zu Hause frag bitte deine Eltern, bevor du andere KI-Tools verwendest – viele haben eine Altersgrenze.'
                },
                {
                  q: 'Kann ich den Kurs nochmal machen?',
                  a: 'Klar! Du kannst jederzeit zu jedem Tag zurückkehren und die Übungen wiederholen. Übung macht den Meister!'
                },
                {
                  q: 'Wo finde ich mehr über KI?',
                  a: 'Es gibt viele Bücher und Websites für Kinder über KI. Frag auch in deiner Bibliothek nach oder schau auf unserer Materialien-Seite vorbei!'
                }
              ].map((faq, idx) => (
                <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-4 text-left font-medium text-gray-800 hover:bg-gray-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {expandedFaq === idx ? (
                      <ChevronUp className="w-5 h-5 text-yellow-600 flex-shrink-0" />
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
        </div>
      )
    },
    {
      id: 'finish',
      title: 'Abschluss',
      icon: Medal,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-yellow-100 via-amber-100 to-orange-100 rounded-2xl p-8 text-center">
            <img 
              src={buildAssetUrl('images/courses/day5/certificate.png')} 
              alt="Zertifikat" 
              className="w-40 h-40 mx-auto mb-6"
            />
            <h2 className="text-3xl font-bold text-yellow-800 mb-4">🎉 Du hast es geschafft!</h2>
            <p className="text-yellow-700 max-w-2xl mx-auto mb-3">
              Herzlichen Glückwunsch! Du hast den kompletten KI-Kurs abgeschlossen!
              Du bist jetzt ein echter KI-Experte und kannst die KI sicher und kreativ nutzen.
            </p>
            <p className="text-sm text-yellow-700/80 max-w-2xl mx-auto mb-6">
              Dein Zertifikat erhältst du als <strong>PDF-Datei</strong> zum eigenständigen
              Ausdruck (am besten A4, mindestens 160&nbsp;g/m² – oder im Copyshop).
              <strong> Name und Datum trägst du nach dem Ausdrucken selbst ein.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowCertificate(true)}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-500 text-white rounded-xl font-bold text-lg hover:bg-yellow-600 transition-colors shadow-lg"
              >
                <Medal className="w-6 h-6" />
                Mein Zertifikat anzeigen
              </button>
              <button
                onClick={() => window.open(buildDownloadUrl('zertifikat.html'), '_blank')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-yellow-600 border-2 border-yellow-400 rounded-xl font-bold text-lg hover:bg-yellow-50 transition-colors"
              >
                <Download className="w-6 h-6" />
                Als PDF herunterladen
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl border-2 border-gray-100 p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6">✅ Checkliste: Was hast du alles geschafft?</h3>
            <div className="space-y-3">
              {[
                'Ich verstehe, was KI ist und wie sie funktioniert',
                'Ich kann gute Prompts schreiben (5-Sterne-Rezept)',
                'Ich kann mit KI Bilder und Geschichten erstellen',
                'Ich kann die KI beim Lernen und Problemlösen nutzen',
                'Ich habe mein eigenes KI-Projekt erstellt',
              ].map((task, index) => (
                <label 
                  key={index}
                  className={`flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all ${
                    completedTasks.includes(task) 
                      ? 'bg-green-50 border-2 border-green-200' 
                      : 'bg-gray-50 border-2 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <input 
                    type="checkbox" 
                    className="w-6 h-6 mt-0.5 rounded border-2 border-gray-300 text-green-500 focus:ring-green-500"
                    checked={completedTasks.includes(task)}
                    onChange={() => toggleTask(task)}
                  />
                  <span className={`text-lg ${completedTasks.includes(task) ? 'text-green-700 line-through' : 'text-gray-700'}`}>
                    {task}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-indigo-800 mb-4">🚀 Was kommt als Nächstes?</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-5">
                <div className="text-3xl mb-3">📚</div>
                <h4 className="font-bold text-gray-800 mb-2">Weiter lernen</h4>
                <p className="text-sm text-gray-600">Besuche die Materialien-Seite für mehr Übungen</p>
              </div>
              <div className="bg-white rounded-xl p-5">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-bold text-gray-800 mb-2">Üben, üben, üben</h4>
                <p className="text-sm text-gray-600">Je mehr du die KI nutzt, desto besser wirst du!</p>
              </div>
              <div className="bg-white rounded-xl p-5">
                <div className="text-3xl mb-3">👨‍👩‍👧</div>
                <h4 className="font-bold text-gray-800 mb-2">Teilen</h4>
                <p className="text-sm text-gray-600">Zeige deinen Eltern, was du gelernt hast!</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Link 
              to="/" 
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-bold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg"
            >
              <Send className="w-5 h-5" />
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Link to="/kurs" className="text-white/80 hover:text-white flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              Zurück
            </Link>
            <span className="text-white/60">|</span>
            <span className="text-white/80">Tag 5 von 5</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Abschlussprojekt</h1>
          <p className="text-white/80">Deine große KI-Premiere!</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b sticky top-16 z-30 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm text-gray-500">Fortschritt</span>
            <span className="text-sm font-medium text-yellow-600">{Math.round(((activeSection + 1) / sections.length) * 100)}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-yellow-500 transition-all duration-300"
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
                  ? 'bg-yellow-500 text-white'
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
            className="flex items-center gap-2 px-6 py-3 bg-yellow-500 text-white rounded-xl font-medium hover:bg-yellow-600 transition-colors shadow-lg shadow-yellow-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {activeSection === sections.length - 1 ? 'Zertifikat anzeigen' : 'Weiter'}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Certificate Dialog */}
      <Dialog open={showCertificate} onOpenChange={setShowCertificate}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">🏆 Zertifikat</DialogTitle>
            <DialogDescription className="text-center">
              Herzlichen Glückwunsch zum Abschluss!
            </DialogDescription>
          </DialogHeader>
          <div className="bg-gradient-to-br from-yellow-100 to-amber-100 rounded-2xl p-8 text-center border-4 border-yellow-400">
            <div className="text-6xl mb-4">🎓</div>
            <h2 className="text-2xl font-bold text-yellow-800 mb-2">Zertifikat</h2>
            <p className="text-yellow-700 mb-4">Hiermit wird bescheinigt, dass du</p>
            <p className="text-xl font-bold text-yellow-800 mb-4">den KI-Entdecker-Kurs</p>
            <p className="text-yellow-700 mb-6">mit allen 5 Kurstagen erfolgreich abgeschlossen hast!</p>
            <h3 className="text-xl font-bold text-yellow-800 mb-6">„KI-Experte für Kinder"</h3>
            <div className="flex justify-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-8 h-8 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <p className="text-sm text-yellow-600 mb-6">5 Tage · 5 Badges · 15 Lektionen</p>
            <button
              onClick={() => window.open(buildDownloadUrl('zertifikat.html'), '_blank')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-white rounded-xl font-bold hover:bg-yellow-600 transition-colors shadow-lg"
            >
              <Download className="w-5 h-5" />
              Zertifikat als PDF herunterladen
            </button>
            <p className="text-xs text-yellow-600/70 mt-3">
              Öffnet eine Druckversion – dort &bdquo;Als PDF speichern&ldquo; wählen
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CourseDay5;
