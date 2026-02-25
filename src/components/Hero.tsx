
import React from 'react';
import { ArrowRight, Star, Clock, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2070)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-2xl text-white">
          <div className="flex items-center gap-2 mb-6 bg-white/10 backdrop-blur-md w-fit px-3 py-1.5 rounded-full border border-white/20">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <span className="text-sm font-semibold tracking-wide uppercase">5.0 Rated Construction Experts</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Quality Construction & Renovations in <span className="text-orange-400">Gauteng.</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-50 font-light mb-10 max-w-xl">
            From modern kitchen remodels to complex structural work. We build spaces that are <span className="font-semibold underline decoration-orange-500/50">Built to Last.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="#quote" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-transform hover:-translate-y-1 shadow-xl shadow-orange-500/20"
            >
              Get a Free Quote
              <ArrowRight size={20} />
            </a>
            <a 
              href="#projects" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all"
            >
              View Our Projects
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-white/20 pt-8">
            <div className="flex items-center gap-3">
              <Clock className="text-orange-400" />
              <div>
                <p className="text-xs uppercase text-blue-200 tracking-widest font-bold">Available</p>
                <p className="font-medium text-sm">Open 24 Hours</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-orange-400" />
              <div>
                <p className="text-xs uppercase text-blue-200 tracking-widest font-bold">Servicing</p>
                <p className="font-medium text-sm">Sandton, Germiston, Alberton</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Aesthetic decorative element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/4 bg-orange-500 opacity-10 blur-[120px] rounded-full pointer-events-none"></div>
    </div>
  );
};

export default Hero;
