
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ProjectGallery from './components/ProjectGallery';
import AIVision from './components/AIVision';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';

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
