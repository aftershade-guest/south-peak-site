
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'AI Vision', href: '#ai-vision' },
    { name: 'Quote', href: '#quote' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex flex-col">
              <span className={`text-2xl font-bold tracking-tighter ${scrolled ? 'text-blue-900' : 'text-white'} heading-font`}>
                SOUTH PEAK
              </span>
              <span className={`text-xs font-semibold tracking-[0.2em] uppercase ${scrolled ? 'text-orange-500' : 'text-orange-400'}`}>
                Construction
              </span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${scrolled ? 'text-slate-700 hover:text-blue-600' : 'text-white/90 hover:text-white'}`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:0745213420"
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-md text-sm font-bold transition-all shadow-md flex items-center gap-2"
              >
                <Phone size={16} />
                074 521 3420
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-slate-900' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-gray-100 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="border-t border-gray-100 pt-4 pb-2 px-3">
              <div className="flex items-center text-slate-600 mb-2">
                <MapPin size={16} className="mr-2 text-blue-600" />
                <span className="text-xs">Sandton, Gauteng</span>
              </div>
              <a
                href="tel:0745213420"
                className="w-full bg-orange-500 text-white text-center block px-3 py-3 rounded-md text-base font-bold"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
