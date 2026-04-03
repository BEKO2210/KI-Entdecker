import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';
import Home from './pages/Home';
import Kurs from './pages/Kurs';
import CourseDay1 from './pages/CourseDay1';
import CourseDay2 from './pages/CourseDay2';
import CourseDay3 from './pages/CourseDay3';
import CourseDay4 from './pages/CourseDay4';
import CourseDay5 from './pages/CourseDay5';
import Materialien from './pages/Materialien';
import Eltern from './pages/Eltern';
import Wochenplan from './pages/Wochenplan';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import { useProgress } from './hooks/useProgress';

function App() {
  const progress = useProgress();

  return (
    <div className="min-h-screen bg-white overflow-x-hidden flex flex-col">
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="skip-to-main"
      >
        Zum Hauptinhalt springen
      </a>
      
      <Navigation progress={progress} />
      <main id="main-content" className="flex-grow" tabIndex={-1}>
        <Routes>
          <Route index element={<Home progress={progress} />} />
          <Route path="/" element={<Home progress={progress} />} />
          <Route path="/kurs" element={<Kurs progress={progress} />} />
          <Route path="/kurs/tag-1" element={<CourseDay1 />} />
          <Route path="/kurs/tag-2" element={<CourseDay2 />} />
          <Route path="/kurs/tag-3" element={<CourseDay3 />} />
          <Route path="/kurs/tag-4" element={<CourseDay4 />} />
          <Route path="/kurs/tag-5" element={<CourseDay5 />} />
          <Route path="/materialien" element={<Materialien />} />
          <Route path="/eltern" element={<Eltern />} />
          <Route path="/wochenplan" element={<Wochenplan />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
