import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, CheckCircle, Copy, Palette, Image, BookOpen, Music, Sparkles,
  Target, Zap, Play, HelpCircle, ChevronDown, ChevronUp, Wand2,
  PenTool, Film, Camera, Star
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

// ============================================================================
// COURSE DAY 3: KREATIV MIT KI - Comprehensive Expanded Version
// 5x Content Expansion with Premium Design
// ============================================================================

const CourseDay3 = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [completedExercises, setCompletedExercises] = useState<string[]>([]);
  const [storyPrompt, setStoryPrompt] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  const copyToClipboard = (text: string, description?: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Kopiert!",
      description: description || "Der Prompt wurde in die Zwischenablage kopiert.",
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
      title: 'Willkommen zu Tag 3',
      icon: Sparkles,
      content: (
        <div className="space-y-8">
          {/* Hero Welcome Block */}
          <div className="relative bg-gradient-to-br from-pink-100 via-rose-50 to-pink-100 rounded-3xl p-8 sm:p-12 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-rose-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <img 
              src="/KI-Entdecker/images/courses/day3/art-easel.png" 
              alt="Künstler-Staffelei" 
              className="w-40 h-40 sm:w-56 sm:h-56 mx-auto mb-8 relative z-10 animate-float"
            />
            
            <h2 className="text-3xl sm:text-4xl font-bold text-pink-800 mb-4 relative z-10">
              Kreativ mit KI
            </h2>
            <p className="text-lg text-pink-700 max-w-3xl mx-auto leading-relaxed relative z-10">
              Heute wird <strong>kreativ</strong>! Die KI wird zu deinem Kunstpartner. Du wirst 
              Bilder erstellen, Geschichten schreiben und sogar Musik komponieren – alles mit 
              Hilfe von Künstlicher Intelligenz!
            </p>
          </div>

          {/* What You'll Learn */}
          <div className="bg-white rounded-2xl border-2 border-pink-100 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Target className="w-6 h-6 text-pink-600" />
              Was du heute lernen wirst
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: Image, text: 'Bilder mit KI erstellen', desc: 'Text-zu-Bild Tools nutzen' },
                { icon: BookOpen, text: 'Geschichten schreiben', desc: 'KI als Co-Autor einsetzen' },
                { icon: Palette, text: 'Charaktere designen', desc: 'Einzigartige Figuren erschaffen' },
                { icon: Music, text: 'Musik & Songtexte', desc: 'Kreative Texte verfassen' },
                { icon: PenTool, text: 'Prompts für Kreativität', desc: 'Spezielle Techniken lernen' },
                { icon: Wand2, text: 'Dein Kreativprojekt', desc: 'Alles zusammen anwenden' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-pink-50/50 rounded-xl hover:bg-pink-50 transition-colors">
                  <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-pink-600" />
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
            <h4 className="font-bold text-blue-800 mb-3 text-lg">Warum Kreativität mit KI wichtig ist</h4>
            <p className="text-blue-700 leading-relaxed">
              KI ist nicht nur für Fakten und Daten – sie kann auch dein kreativer Partner sein! 
              Ob du eine Geschichte schreiben, ein Bild erstellen oder ein Gedicht verfassen willst: 
              Die KI kann dir helfen, Ideen zu entwickeln, Schreibblockaden zu überwinden und 
              deine Kreativität auf ein neues Level zu heben. Sie ist wie ein immer verfügbarer 
              kreativer Sparringspartner!
            </p>
          </div>

          {/* Course Overview Cards */}
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { icon: Image, title: 'Bilder erstellen', desc: 'KI als Maler' },
              { icon: BookOpen, title: 'Geschichten', desc: 'KI als Autor' },
              { icon: Palette, title: 'Charaktere', desc: 'KI als Designer' },
              { icon: Music, title: 'Musik', desc: 'KI als Komponist' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border-2 border-pink-100 rounded-2xl p-6 text-center hover:border-pink-300 hover:shadow-lg transition-all group">
                <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-pink-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },

    // ========================================================================
    // SECTION 1: BILDER MIT KI
    // ========================================================================
    {
      id: 'lesson1',
      title: 'Lektion 1: Bilder mit KI',
      icon: Image,
      content: (
        <div className="space-y-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img 
              src="/KI-Entdecker/images/courses/day3/robot-painting.png" 
              alt="Maler-Roboter" 
              className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 mx-auto md:mx-0"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">KI als dein persönlicher Maler</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Stell dir vor, du beschreibst ein Bild mit Worten und die KI malt es für dich! 
                Das nennt man <strong>"Text-zu-Bild"</strong>. Je genauer du beschreibst, desto besser wird das Bild.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Tools wie DALL-E, Midjourney oder Stable Diffusion können aus deinen Beschreibungen 
                beeindruckende Bilder erstellen. Du musst kein Künstler sein – du musst nur 
                gut beschreiben können!
              </p>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 sm:p-8">
            <h4 className="font-bold text-gray-800 mb-6 flex items-center gap-2 text-lg">
              <Wand2 className="w-5 h-5 text-purple-600" />
              So funktioniert Text-zu-Bild
            </h4>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 text-center">
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <PenTool className="w-7 h-7 text-purple-600" />
                </div>
                <h5 className="font-bold text-purple-800 mb-2">1. Du beschreibst</h5>
                <p className="text-purple-700 text-sm">
                  Schreibe eine detaillierte Beschreibung dessen, was du sehen willst.
                </p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-5 text-center">
                <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Zap className="w-7 h-7 text-pink-600" />
                </div>
                <h5 className="font-bold text-pink-800 mb-2">2. Die KI versteht</h5>
                <p className="text-pink-700 text-sm">
                  Die KI analysiert deine Wörter und wandelt sie in visuelle Konzepte um.
                </p>
              </div>
              <div className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-xl p-5 text-center">
                <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Camera className="w-7 h-7 text-rose-600" />
                </div>
                <h5 className="font-bold text-rose-800 mb-2">3. Das Bild entsteht</h5>
                <p className="text-rose-700 text-sm">
                  Die KI generiert ein Bild basierend auf deiner Beschreibung.
                </p>
              </div>
            </div>
          </div>

          {/* Good Image Prompts */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200 p-6 sm:p-8">
            <h4 className="font-bold text-purple-800 mb-6 flex items-center gap-2 text-lg">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              Was macht einen guten Bild-Prompt aus?
            </h4>
            
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5">
                <h5 className="font-bold text-gray-800 mb-3">🎨 Ein guter Bild-Prompt enthält:</h5>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { text: 'Das Hauptthema', example: '"Ein niedlicher Roboter"' },
                    { text: 'Die Umgebung', example: '"in einem sonnigen Garten"' },
                    { text: 'Den Stil', example: '"im Cartoon-Stil"' },
                    { text: 'Die Farben', example: '"mit warmen Farben"' },
                    { text: 'Die Stimmung', example: '"fröhlich und verspielt"' },
                    { text: 'Details', example: '"mit großen Augen und einem Lächeln"' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700 text-sm"><strong>{item.text}:</strong></p>
                        <p className="text-gray-500 text-xs">{item.example}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 relative">
                <p className="text-gray-700 font-mono text-sm leading-relaxed">
                  "Ein niedlicher Roboter mit großen Augen und einem breiten Lächeln, 
                  sitzt in einem sonnigen Garten voller bunter Blumen. Cartoon-Stil, 
                  warme Farben, fröhliche Stimmung, kinderfreundlich."
                </p>
                <button
                  onClick={() => copyToClipboard(
                    'Ein niedlicher Roboter mit großen Augen und einem breiten Lächeln, sitzt in einem sonnigen Garten voller bunter Blumen. Cartoon-Stil, warme Farben, fröhliche Stimmung, kinderfreundlich.',
                    'Bild-Prompt kopiert!'
                  )}
                  className="absolute top-3 right-3 bg-purple-100 hover:bg-purple-200 p-2 rounded-lg transition-colors"
                >
                  <Copy className="w-4 h-4 text-purple-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Image Prompt Examples */}
          <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 sm:p-8">
            <h4 className="font-bold text-gray-800 mb-6 flex items-center gap-2 text-lg">
              <Palette className="w-5 h-5 text-pink-600" />
              Beispiele für Bild-Prompts
            </h4>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { 
                  title: 'Fantasy-Welt', 
                  prompt: 'Eine schwimmende Insel mit Wasserfällen in den Himmel, im Hintergrund ein Regenbogen und fliegende Fische. Fantasy-Stil, magische Atmosphäre, leuchtende Farben.' 
                },
                { 
                  title: 'Space-Abenteuer', 
                  prompt: 'Ein kleiner Astronaut-Hund im Weltraum, umgeben von Planeten und Sternen. Niedlicher Cartoon-Stil, bunte Galaxie im Hintergrund, kinderfreundlich.' 
                },
                { 
                  title: 'Unterwasserwelt', 
                  prompt: 'Ein versunkenes Schiff auf dem Meeresboden, umgeben von bunten Fischen und Korallen. Realistischer Stil, mystisches Licht von oben, detailliert.' 
                },
                { 
                  title: 'Zukunftsstadt', 
                  prompt: 'Eine futuristische Stadt bei Sonnenuntergang mit fliegenden Autos und hohen Türmen. Cyberpunk-Stil, Neonlichter, beeindruckende Perspektive.' 
                }
              ].map((example, idx) => (
                <div key={idx} className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-bold text-pink-800">{example.title}</p>
                    <button
                      onClick={() => copyToClipboard(example.prompt, `${example.title} kopiert!`)}
                      className="text-pink-600 hover:text-pink-800"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm">{example.prompt}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pro Tip */}
          <div className="content-block-tip">
            <h4 className="font-bold text-purple-800 mb-3">Profi-Tipp: Experimentiere mit Stilen</h4>
            <p className="text-purple-700 leading-relaxed">
              Versuche verschiedene Stil-Keywords in deinen Prompts: "im Stil von Pixar", 
              "Aquarell-Malerei", "Ölgemälde", "Pixel Art", "3D-Rendering", "Anime-Stil". 
              Derselbe Prompt kann komplett unterschiedliche Ergebnisse liefern!
            </p>
          </div>

          {/* Exercise */}
          <div className="content-block-exercise">
            <h4 className="font-bold text-indigo-800 mb-4 flex items-center gap-2 text-lg">
              <Play className="w-5 h-5" />
              Übung: Schreibe deinen eigenen Bild-Prompt!
            </h4>
            <p className="text-indigo-600 mb-6">
              Beschreibe ein Bild, das du gerne sehen würdest. Verwende mindestens 3 der 
              6 Elemente (Thema, Umgebung, Stil, Farben, Stimmung, Details).
            </p>
            
            <div className="bg-white rounded-xl p-6">
              <textarea
                value={storyPrompt}
                onChange={(e) => setStoryPrompt(e.target.value)}
                placeholder="Beschreibe hier dein Bild..."
                className="w-full px-4 py-3 border-2 border-indigo-200 rounded-xl focus:outline-none focus:border-indigo-500 resize-none"
                rows={4}
              />
              <div className="mt-4 flex items-center gap-3">
                <input 
                  type="checkbox" 
                  id="exercise-image"
                  className="w-5 h-5 text-indigo-600 rounded"
                  checked={completedExercises.includes('image')}
                  onChange={() => toggleExercise('image')}
                />
                <label htmlFor="exercise-image" className="text-indigo-700 cursor-pointer">
                  Ich habe meinen Bild-Prompt geschrieben!
                </label>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="content-block-summary">
            <p className="text-slate-700 leading-relaxed">
              <strong>Zusammenfassung:</strong> Mit Text-zu-Bild-Tools kannst du aus Beschreibungen 
              beeindruckende Bilder erstellen. Ein guter Bild-Prompt enthält: Hauptthema, Umgebung, 
              Stil, Farben, Stimmung und Details. Je genauer du beschreibst, desto besser das Ergebnis!
            </p>
          </div>
        </div>
      )
    },

    // ========================================================================
    // SECTION 2: GESCHICHTEN SCHREIBEN
    // ========================================================================
    {
      id: 'lesson2',
      title: 'Lektion 2: Geschichten schreiben',
      icon: BookOpen,
      content: (
        <div className="space-y-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img 
              src="/KI-Entdecker/images/courses/day3-extra/story-magic.png" 
              alt="Geschichten-Magie" 
              className="w-32 h-32 md:w-48 md:h-32 flex-shrink-0 mx-auto md:mx-0 object-cover rounded-xl"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">KI als dein Co-Autor</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Eine Geschichte schreiben kann schwierig sein – vor allem der Anfang! 
                Die KI kann dir helfen, Ideen zu entwickeln, Charaktere zu erschaffen 
                und sogar ganze Kapitel zu schreiben.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Du kannst die KI als <strong>Brainstorming-Partner</strong>, <strong>Schreibcoach</strong> 
                oder sogar als <strong>Co-Autor</strong> nutzen. Du bleibst der Regisseur – 
                die KI hilft dir beim Umsetzen!
              </p>
            </div>
          </div>

          {/* Story Elements */}
          <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 sm:p-8">
            <h4 className="font-bold text-gray-800 mb-6 flex items-center gap-2 text-lg">
              <BookOpen className="w-5 h-5 text-amber-600" />
              Die Elemente einer guten Geschichte
            </h4>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Protagonist', desc: 'Die Hauptfigur, deren Geschichte wir erleben', icon: '👤' },
                { title: 'Ziel', desc: 'Was will der Held erreichen?', icon: '🎯' },
                { title: 'Konflikt', desc: 'Was steht dem Helden im Weg?', icon: '⚡' },
                { title: 'Setting', desc: 'Wo und wann spielt die Geschichte?', icon: '🌍' },
                { title: 'Handlung', desc: 'Die Ereignisse, die zur Auflösung führen', icon: '📖' },
                { title: 'Auflösung', desc: 'Wie endet die Geschichte?', icon: '🎬' }
              ].map((element, idx) => (
                <div key={idx} className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-4">
                  <div className="text-2xl mb-2">{element.icon}</div>
                  <h5 className="font-bold text-amber-800 mb-1">{element.title}</h5>
                  <p className="text-amber-700 text-sm">{element.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Story Prompts */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border-2 border-amber-200 p-6 sm:p-8">
            <h4 className="font-bold text-amber-800 mb-6 flex items-center gap-2 text-lg">
              <Sparkles className="w-5 h-5 text-amber-600" />
              Prompts für Geschichten
            </h4>
            
            <div className="space-y-4">
              {[
                { 
                  title: 'Geschichte starten', 
                  prompt: 'Du bist ein Geschichtenerzähler. Schreibe den Anfang einer spannenden Geschichte über [Thema] für [Zielgruppe]. Der Ton soll [Ton] sein. Maximal 200 Wörter.' 
                },
                { 
                  title: 'Charakter entwickeln', 
                  prompt: 'Hilf mir, einen Charakter für meine Geschichte zu entwickeln. Der Charakter soll [Eigenschaften] haben. Gib mir: Name, Alter, Aussehen, Persönlichkeit und eine besondere Fähigkeit.' 
                },
                { 
                  title: 'Handlung planen', 
                  prompt: 'Ich schreibe eine Geschichte über [Thema]. Erstelle mir einen einfachen Handlungsplan mit Anfang, Mitte und Ende. Für [Zielgruppe].' 
                },
                { 
                  title: 'Dialog schreiben', 
                  prompt: 'Schreibe einen Dialog zwischen [Charakter 1] und [Charakter 2]. Sie diskutieren über [Thema]. Der Ton soll [Ton] sein.' 
                }
              ].map((template, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 relative">
                  <p className="font-medium text-gray-800 mb-2">{template.title}</p>
                  <p className="text-gray-600 text-sm font-mono">{template.prompt}</p>
                  <button
                    onClick={() => copyToClipboard(template.prompt, `${template.title} kopiert!`)}
                    className="absolute top-3 right-3 text-amber-600 hover:text-amber-800"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Example Story */}
          <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 sm:p-8">
            <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2 text-lg">
              <Film className="w-5 h-5 text-pink-600" />
              Beispiel: Eine Geschichte mit KI schreiben
            </h4>
            
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-5 mb-4">
              <p className="text-sm text-pink-700 mb-2"><strong>Dein Prompt:</strong></p>
              <p className="text-gray-700 italic">
                "Schreibe eine kurze Geschichte (max. 150 Wörter) über einen mutigen Hamster, 
                der ins Weltall fliegt. Für Kinder ab 7 Jahren. Lustiger Ton, mit Happy End."
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-5">
              <p className="text-sm text-slate-600 mb-2"><strong>Mögliche KI-Antwort:</strong></p>
              <p className="text-gray-700 leading-relaxed">
                Hugo, der kleinste Hamster im Zoo, träumte vom Weltraum. Eines Nachts baute er 
                eine Rakete aus seinem Laufrad und einer Cola-Flasche. "3... 2... 1... START!" 
                rief Hugo und schoss in den Nachthimmel hoch. Er flog an funkelnden Sternen vorbei 
                und tanzte mit den Kometen. Doch dann wurde er müde. "Wie komme ich nach Hause?" 
                fragte er traurig. Da erschien ein freundlicher Mond, der ihn sanft zurück zur Erde 
                trug. Hugo landete weich in seinem Käfig und schlief sofort ein – der glücklichste 
                Hamster im Universum!
              </p>
            </div>
          </div>

          {/* Exercise */}
          <div className="content-block-exercise">
            <h4 className="font-bold text-indigo-800 mb-4 flex items-center gap-2 text-lg">
              <Play className="w-5 h-5" />
              Übung: Starte deine eigene Geschichte!
            </h4>
            <p className="text-indigo-600 mb-6">
              Wähle ein Thema und schreibe einen Prompt für den Anfang deiner Geschichte.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              {['Ein magisches Tier', 'Eine Zeitreise', 'Ein versteckter Schatz'].map((theme, idx) => (
                <button
                  key={idx}
                  onClick={() => setStoryPrompt(`Schreibe den Anfang einer Geschichte über ${theme.toLowerCase()}...`)}
                  className="p-3 bg-indigo-50 text-indigo-700 rounded-lg hover:bg-indigo-100 transition-colors text-sm font-medium"
                >
                  {theme}
                </button>
              ))}
            </div>
            
            <textarea
              value={storyPrompt}
              onChange={(e) => setStoryPrompt(e.target.value)}
              placeholder="Dein Story-Prompt..."
              className="w-full px-4 py-3 border-2 border-indigo-200 rounded-xl focus:outline-none focus:border-indigo-500 resize-none"
              rows={3}
            />
          </div>

          {/* Summary */}
          <div className="content-block-summary">
            <p className="text-slate-700 leading-relaxed">
              <strong>Zusammenfassung:</strong> Die KI kann dir beim Schreiben helfen – von der 
              Ideenfindung bis zum fertigen Text. Eine gute Geschichte braucht: Protagonist, 
              Ziel, Konflikt, Setting, Handlung und Auflösung. Mit guten Prompts kannst du 
              die KI als kreativen Partner nutzen!
            </p>
          </div>
        </div>
      )
    },

    // ========================================================================
    // SECTION 3: MUSIK & MEHR
    // ========================================================================
    {
      id: 'lesson3',
      title: 'Lektion 3: Musik & mehr',
      icon: Music,
      content: (
        <div className="space-y-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img 
              src="/KI-Entdecker/images/courses/day3/robot-artist.png" 
              alt="Künstler-Roboter" 
              className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 mx-auto md:mx-0"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">KI als kreativer Partner</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                KI kann nicht nur Bilder und Geschichten erstellen – sie kann auch bei Musik, 
                Gedichten, Witzen und vielen anderen kreativen Projekten helfen!
              </p>
              <p className="text-gray-600 leading-relaxed">
                In dieser Lektion erkundest du weitere kreative Möglichkeiten mit KI und 
                bereitest dich auf dein eigenes Kreativprojekt vor.
              </p>
            </div>
          </div>

          {/* Creative Possibilities */}
          <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 sm:p-8">
            <h4 className="font-bold text-gray-800 mb-6 flex items-center gap-2 text-lg">
              <Palette className="w-5 h-5 text-rose-600" />
              Weitere kreative Möglichkeiten
            </h4>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Songtexte', desc: 'Lass die KI einen Song für dich schreiben', icon: '🎵' },
                { title: 'Gedichte', desc: 'Von Haiku bis Reimgedicht', icon: '📝' },
                { title: 'Witze', desc: 'Lustige Sprüche für jede Gelegenheit', icon: '😄' },
                { title: 'Rezepte', desc: 'Kreative Kochideen mit vorhandenen Zutaten', icon: '🍳' },
                { title: 'Übersetzungen', desc: 'Texte in andere Sprachen übersetzen', icon: '🌍' },
                { title: 'Zusammenfassungen', desc: 'Lange Texte kurz und verständlich', icon: '📚' }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-4">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h5 className="font-bold text-rose-800 mb-1">{item.title}</h5>
                  <p className="text-rose-700 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Music & Lyrics */}
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl border-2 border-purple-200 p-6 sm:p-8">
            <h4 className="font-bold text-purple-800 mb-6 flex items-center gap-2 text-lg">
              <Music className="w-5 h-5 text-purple-600" />
              Songtexte mit KI schreiben
            </h4>
            
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5">
                <h5 className="font-bold text-gray-800 mb-3">Prompt-Vorlage für Songtexte:</h5>
                <div className="bg-slate-900 rounded-lg p-4 relative">
                  <pre className="text-green-400 text-sm whitespace-pre-wrap">
{`Schreibe einen Songtext über [Thema] im Stil von [Künstler/Genre]. 
Der Song soll [Stimmung] sein und etwa [Länge] Strophen haben.

Struktur:
- Vers 1
- Refrain  
- Vers 2
- Refrain
- Bridge
- Refrain (final)`}
                  </pre>
                  <button
                    onClick={() => copyToClipboard(
                      `Schreibe einen Songtext über [Thema] im Stil von [Künstler/Genre]. Der Song soll [Stimmung] sein und etwa [Länge] Strophen haben.`,
                      'Songtext-Vorlage kopiert!'
                    )}
                    className="absolute top-3 right-3 bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5">
                <h5 className="font-bold text-gray-800 mb-3">Beispiel-Prompt:</h5>
                <p className="text-gray-600 italic mb-3">
                  "Schreibe einen fröhlichen Songtext über Sommerferien im Pop-Stil. 
                  2 Strophen, ein Refrain und eine Bridge. Für Teenager."
                </p>
              </div>
            </div>
          </div>

          {/* Creative Challenge */}
          <div className="content-block-exercise">
            <h4 className="font-bold text-indigo-800 mb-4 flex items-center gap-2 text-lg">
              <Play className="w-5 h-5" />
              Kreative Challenge: Dein Meisterwerk
            </h4>
            <p className="text-indigo-600 mb-6">
              Wähle ein kreatives Projekt und plane es mit Hilfe der KI:
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Comic-Story', desc: 'Eine kurze Geschichte mit Dialogen', icon: '🎨' },
                { title: 'Eigenes Lied', desc: 'Text für einen Song schreiben', icon: '🎤' },
                { title: 'Fantasy-Welt', desc: 'Eine Welt mit eigenen Regeln erschaffen', icon: '🏰' },
                { title: 'Witzige Rede', desc: 'Eine lustige Ansprache verfassen', icon: '🎤' }
              ].map((project, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 border-2 border-indigo-100 hover:border-indigo-300 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{project.icon}</span>
                    <div>
                      <p className="font-bold text-gray-800">{project.title}</p>
                      <p className="text-gray-600 text-sm">{project.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Completion */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200 p-6 sm:p-8">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="/KI-Entdecker/images/courses/day3/music-notes.png" 
                alt="Musik-Noten" 
                className="w-16 h-16"
              />
              <div>
                <h4 className="text-xl font-bold text-green-800">🎨 Kreativ-Meister!</h4>
                <p className="text-green-600">Du hast die kreativen Grundlagen gelernt!</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 mb-6">
              <h5 className="font-bold text-gray-800 mb-4">Deine nächste Challenge:</h5>
              <p className="text-gray-600 mb-4">
                Starte dein eigenes Kreativprojekt! Wähle eines der Themen oben und 
                nutze die KI, um es zu verwirklichen.
              </p>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-green-700 text-sm">
                  <strong>Tipp:</strong> Dokumentiere deinen Prozess – welche Prompts hast du verwendet? 
                  Was hat funktioniert, was nicht?
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <Link 
                to="/kurs/tag-2" 
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors border-2 border-gray-200"
              >
                <ArrowLeft className="w-5 h-5" />
                Zurück zu Tag 2
              </Link>
              <Link 
                to="/kurs/tag-4" 
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-xl font-medium hover:from-pink-700 hover:to-rose-700 transition-all shadow-lg shadow-pink-200"
              >
                Weiter zu Tag 4
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
          <div className="bg-gradient-to-br from-pink-100 via-rose-50 to-pink-100 rounded-3xl p-8 text-center">
            <img 
              src="/KI-Entdecker/images/courses/day3-extra/robot-artist-painting.png" 
              alt="Künstler-Roboter" 
              className="w-48 h-32 mx-auto mb-6 object-cover rounded-xl"
            />
            <h3 className="text-2xl font-bold text-pink-800 mb-4">
              Du bist jetzt ein kreativer KI-Nutzer!
            </h3>
            <p className="text-pink-700 max-w-2xl mx-auto leading-relaxed">
              Du kannst jetzt Bilder erstellen, Geschichten schreiben und kreativ mit KI arbeiten. 
              Die KI ist dein Partner – du bringst die Ideen, sie hilft dir beim Umsetzen!
            </p>
          </div>

          {/* Key Learnings */}
          <div className="bg-white rounded-2xl border-2 border-pink-100 p-6 sm:p-8">
            <h4 className="font-bold text-gray-800 mb-6 flex items-center gap-2 text-lg">
              <BookOpen className="w-5 h-5 text-pink-600" />
              Die wichtigsten Punkte im Überblick
            </h4>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { num: '1', text: 'Text-zu-Bild: Beschreibe Bilder detailliert für beste Ergebnisse', color: 'bg-pink-600' },
                { num: '2', text: 'Geschichten: Nutze die 6 Elemente (Protagonist, Ziel, Konflikt...)', color: 'bg-rose-600' },
                { num: '3', text: 'KI ist dein Co-Autor, nicht dein Ersatz – du bleibst kreativ!', color: 'bg-pink-600' },
                { num: '4', text: 'Experimentiere mit verschiedenen Stilen und Formaten', color: 'bg-rose-600' },
                { num: '5', text: 'Gute Prompts führen zu besseren kreativen Ergebnissen', color: 'bg-pink-600' },
                { num: '6', text: 'Die KI kann bei Musik, Gedichten und mehr helfen', color: 'bg-rose-600' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-pink-50/50 rounded-xl">
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
              <HelpCircle className="w-5 h-5 text-pink-600" />
              Häufig gestellte Fragen
            </h4>
            
            <div className="space-y-3">
              {[
                {
                  q: 'Gehören KI-erstellte Bilder mir?',
                  a: 'Das hängt vom Tool ab. Viele Tools erlauben die private Nutzung, aber für kommerzielle Zwecke gibt es oft Einschränkungen. Lies immer die Nutzungsbedingungen!'
                },
                {
                  q: 'Kann ich eine KI-Geschichte als meine eigene ausgeben?',
                  a: 'Das ist eine Grauzone. Es ist am besten, die KI als Hilfsmittel zu nutzen und die Geschichte selbst zu überarbeiten und zu verbessern. So wird sie wirklich zu deiner!'
                },
                {
                  q: 'Welche Bild-Tools gibt es?',
                  a: 'Beliebte Tools sind DALL-E (von OpenAI), Midjourney, Stable Diffusion, Adobe Firefly und Bing Image Creator. Viele haben kostenlose Testversionen.'
                },
                {
                  q: 'Warum werden meine Bilder manchmal komisch?',
                  a: 'KI hat noch Schwierigkeiten mit Händen, Text in Bildern und komplexen räumlichen Beziehungen. Sei geduldig und experimentiere mit verschiedenen Beschreibungen!'
                },
                {
                  q: 'Kann ich mit KI Geld verdienen?',
                  a: 'Ja, aber mit Einschränkungen. Viele nutzen KI für Stock-Bilder, Buchcover oder Marketing-Materialien. Achte auf die Lizenzbedingungen des jeweiligen Tools!'
                }
              ].map((faq, idx) => (
                <div key={idx} className="faq-item">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="faq-question w-full"
                  >
                    <span>{faq.q}</span>
                    {expandedFaq === idx ? (
                      <ChevronUp className="w-5 h-5 text-pink-600" />
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
              Morgen lernst du, wie du KI zum <strong>Problemlösen</strong> nutzen kannst – 
              für Mathe, Recherche und als Lernhelfer!
            </p>
            <div className="flex items-center gap-2 text-blue-600">
              <ArrowRight className="w-5 h-5" />
              <span className="font-medium">Tag 4: Problemlösen mit KI</span>
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
              to="/kurs/tag-4" 
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-xl font-medium hover:from-pink-700 hover:to-rose-700 transition-all shadow-lg shadow-pink-200"
            >
              Weiter zu Tag 4
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
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Link to="/kurs" className="text-white/80 hover:text-white flex items-center gap-2 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Zurück
            </Link>
            <span className="text-white/40">|</span>
            <span className="text-white/80">Tag 3 von 5</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Kreativ mit KI</h1>
          <p className="text-white/80 text-lg">Dein kreativer Partner für unendliche Möglichkeiten</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b sticky top-16 z-30 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">Fortschritt</span>
            <span className="text-sm font-medium text-pink-600">
              {Math.round(((activeSection + 1) / sections.length) * 100)}%
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-pink-600 to-rose-600 transition-all duration-500"
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
                  ? 'bg-pink-600 text-white shadow-lg shadow-pink-200' 
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
        <div className="animate-fade-in-up">
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
            className="flex items-center gap-2 px-6 py-3 bg-pink-600 text-white rounded-xl font-medium hover:bg-pink-700 transition-colors shadow-lg shadow-pink-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Weiter
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDay3;
