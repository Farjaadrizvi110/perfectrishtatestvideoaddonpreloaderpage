import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Preloader from '@/components/Preloader';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import JoinPage from '@/pages/JoinPage';
import ProfilesPage from '@/pages/ProfilesPage';
import ProposalsPage from '@/pages/ProposalsPage';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
    // Small delay before showing content for smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  return (
    <>
      {/* Preloader */}
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}

      {/* Main Content - fades in after preloader */}
      <div
        className={`relative bg-white transition-opacity duration-700 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/profiles" element={<ProfilesPage />} />
          <Route path="/proposals" element={<ProposalsPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
