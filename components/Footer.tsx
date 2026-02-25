
import React from 'react';
import { Phone, MapPin, Mail, Instagram, Facebook, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="text-3xl font-bold tracking-tighter text-white heading-font">
                SOUTH PEAK
              </span>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-500">
                Construction
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Quality-focused construction and renovation experts based in Sandton. We specialize in structural work, kitchen remodels, and complete home transformations across the Gauteng region.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-orange-500 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-orange-500 hover:text-white transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Service Areas</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-orange-500" />
                <span>Sandton, Sandown</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-orange-500" />
                <span>Germiston</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-orange-500" />
                <span>Alberton</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-orange-500" />
                <span>Johannesburg CBD</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-orange-500 transition-colors">Projects</a></li>
              <li><a href="#quote" className="hover:text-orange-500 transition-colors">Request a Quote</a></li>
              <li><a href="#ai-vision" className="hover:text-orange-500 transition-colors">AI Vision Tool</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-orange-500" />
                <a href="tel:0745213420" className="hover:text-white transition-colors">074 521 3420</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-orange-500" />
                <a href="mailto:info@southpeak.co.za" className="hover:text-white transition-colors">info@southpeak.co.za</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-500 mt-1" />
                <span>108 Katherine St, Sandown, Sandton, 2031</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-orange-500" />
                <span className="text-green-500 font-medium">Open 24 Hours</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} South Peak Construction. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
