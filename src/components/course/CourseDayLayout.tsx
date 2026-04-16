import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type CourseColorScheme = 'purple' | 'teal' | 'pink' | 'orange' | 'yellow';

export interface CourseSection {
  id: string;
  title: string;
  icon: LucideIcon;
  content: ReactNode;
}

interface Props {
  dayNumber: 1 | 2 | 3 | 4 | 5;
  title: string;
  subtitle: string;
  colorScheme: CourseColorScheme;
  sections: CourseSection[];
  activeSection: number;
  maxReachedSection: number;
  onSelectSection: (index: number) => void;
  onBack: () => void;
  onNext: () => void;
  /**
   * Label for the "Weiter"-Button when activeSection is the last section.
   * Defaults to `Tag ${dayNumber+1} starten` (or just "Weiter" if none given
   * and dayNumber === 5). CourseDay5 uses "Zertifikat anzeigen".
   */
  lastSectionLabel?: string;
}

// Tailwind needs literal class strings — no dynamic `${color}-600`.
const schemes: Record<CourseColorScheme, {
  header: string;
  progressText: string;
  progressFill: string;
  tabActive: string;
  buttonPrimary: string;
}> = {
  purple: {
    header: 'from-purple-600 to-indigo-600',
    progressText: 'text-purple-600',
    progressFill: 'bg-gradient-to-r from-purple-600 to-indigo-600',
    tabActive: 'bg-purple-600 text-white shadow-lg shadow-purple-200',
    buttonPrimary: 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-200',
  },
  teal: {
    header: 'from-teal-600 to-cyan-600',
    progressText: 'text-teal-600',
    progressFill: 'bg-gradient-to-r from-teal-600 to-cyan-600',
    tabActive: 'bg-teal-600 text-white shadow-lg shadow-teal-200',
    buttonPrimary: 'bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-200',
  },
  pink: {
    header: 'from-pink-600 to-rose-600',
    progressText: 'text-pink-600',
    progressFill: 'bg-gradient-to-r from-pink-600 to-rose-600',
    tabActive: 'bg-pink-600 text-white shadow-lg shadow-pink-200',
    buttonPrimary: 'bg-pink-600 hover:bg-pink-700 text-white shadow-lg shadow-pink-200',
  },
  orange: {
    header: 'from-orange-600 to-amber-600',
    progressText: 'text-orange-600',
    progressFill: 'bg-gradient-to-r from-orange-600 to-amber-600',
    tabActive: 'bg-orange-600 text-white shadow-lg shadow-orange-200',
    buttonPrimary: 'bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-200',
  },
  yellow: {
    header: 'from-yellow-500 to-amber-500',
    progressText: 'text-yellow-600',
    progressFill: 'bg-gradient-to-r from-yellow-500 to-amber-500',
    tabActive: 'bg-yellow-500 text-white shadow-lg shadow-yellow-200',
    buttonPrimary: 'bg-yellow-500 hover:bg-yellow-600 text-white shadow-lg shadow-yellow-200',
  },
};

const CourseDayLayout = ({
  dayNumber,
  title,
  subtitle,
  colorScheme,
  sections,
  activeSection,
  maxReachedSection,
  onSelectSection,
  onBack,
  onNext,
  lastSectionLabel,
}: Props) => {
  const c = schemes[colorScheme];
  const isLast = activeSection === sections.length - 1;
  const nextLabel =
    isLast && lastSectionLabel
      ? lastSectionLabel
      : isLast && dayNumber < 5
        ? `Tag ${dayNumber + 1} starten`
        : 'Weiter';
  const progressPct = Math.round(((activeSection + 1) / sections.length) * 100);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className={`bg-gradient-to-r ${c.header} text-white py-12`}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Link to="/kurs" className="text-white/80 hover:text-white flex items-center gap-2 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Zurück
            </Link>
            <span className="text-white/40">|</span>
            <span className="text-white/80">Tag {dayNumber} von 5</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
          <p className="text-white/80 text-lg">{subtitle}</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b sticky top-16 z-30 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">Fortschritt</span>
            <span className={`text-sm font-medium ${c.progressText}`}>{progressPct}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full ${c.progressFill} transition-all duration-500`}
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-2 mb-8">
          {sections.map((section, index) => {
            const unlocked = index <= maxReachedSection;
            const isActive = activeSection === index;
            return (
              <button
                key={section.id}
                onClick={() => unlocked && onSelectSection(index)}
                disabled={!unlocked}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all ${
                  isActive
                    ? c.tabActive
                    : unlocked
                      ? 'bg-green-100 text-green-700'
                      : 'bg-white text-gray-400 border border-gray-200 opacity-50 cursor-not-allowed'
                }`}
                aria-current={isActive ? 'step' : undefined}
              >
                {unlocked && !isActive ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <section.icon className="w-4 h-4" />
                )}
                <span className="hidden sm:inline">{section.title}</span>
                <span className="sm:hidden">{index + 1}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="animate-fade-in-up">
          {sections[activeSection].content}
        </div>

        {/* Spacer for sticky nav */}
        <div className="h-24" />
      </div>

      {/* Navigation Buttons - sticky bottom */}
      <div className="sticky bottom-0 z-20 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between">
          <button
            onClick={onBack}
            disabled={activeSection === 0}
            className="flex items-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors border-2 border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-5 h-5" />
            Zurück
          </button>
          <button
            onClick={onNext}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${c.buttonPrimary}`}
          >
            {nextLabel}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDayLayout;
