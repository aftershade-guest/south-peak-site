import React from 'react';
import Navbar from '@/src/components/Navbar.tsx';
import Hero from '@/src/components/Hero.tsx';
import Services from '@/src/components/Services.tsx';
import ProjectGallery from '@/src/components/ProjectGallery.tsx';
import AIVision from '@/src/components/AIVision.tsx';
import QuoteForm from '@/src/components/QuoteForm.tsx';
import Footer from '@/src/components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ProjectGallery />
        <AIVision />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
