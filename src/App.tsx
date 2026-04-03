import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from './components/ui/toaster';
import Home from './pages/Home';
import Kurs from './pages/Kurs';
const CourseDay1 = lazy(() => import('./pages/CourseDay1'));
const CourseDay2 = lazy(() => import('./pages/CourseDay2'));
const CourseDay3 = lazy(() => import('./pages/CourseDay3'));
const CourseDay4 = lazy(() => import('./pages/CourseDay4'));
const CourseDay5 = lazy(() => import('./pages/CourseDay5'));
import Materialien from './pages/Materialien';
import Eltern from './pages/Eltern';
import Wochenplan from './pages/Wochenplan';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import NotFound from './pages/NotFound';
import { useProgress } from './hooks/useProgress';

function App() {
  const progress = useProgress();

  return (
    <div className="min-h-screen bg-white overflow-x-hidden flex flex-col">
      <ScrollToTop />
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="skip-to-main"
      >
        Zum Hauptinhalt springen
      </a>
      
      <Navigation progress={progress} />
      <main id="main-content" className="flex-grow" tabIndex={-1}>
        <Suspense fallback={<div className="min-h-screen" />}>
        <Routes>
          <Route index element={<Home progress={progress} />} />
          <Route path="/" element={<Home progress={progress} />} />
          <Route path="/kurs" element={<Kurs progress={progress} />} />
          <Route path="/kurs/tag-1" element={<CourseDay1 progress={progress} />} />
          <Route path="/kurs/tag-2" element={<CourseDay2 progress={progress} />} />
          <Route path="/kurs/tag-3" element={<CourseDay3 progress={progress} />} />
          <Route path="/kurs/tag-4" element={<CourseDay4 progress={progress} />} />
          <Route path="/kurs/tag-5" element={<CourseDay5 progress={progress} />} />
          <Route path="/materialien" element={<Materialien />} />
          <Route path="/eltern" element={<Eltern />} />
          <Route path="/wochenplan" element={<Wochenplan />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
