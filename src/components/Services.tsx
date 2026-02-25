
import React from 'react';
import { Hammer, Home, PenTool, ShieldCheck, Ruler, Truck } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Structural Work",
      description: "Foundation, framework, and structural integrity upgrades for residential and commercial builds."
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Kitchen Remodels",
      description: "Complete modern kitchen transformations from design and plumbing to custom cabinetry."
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Full Renovations",
      description: "Breathe new life into your property with our end-to-end renovation services."
    },
    {
      icon: <Ruler className="w-8 h-8" />,
      title: "Project Planning",
      description: "Professional site analysis, cost estimation, and material selection for seamless execution."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Maintenance",
      description: "Ongoing construction maintenance and emergency repairs available 24/7."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Logistics",
      description: "Material sourcing and site management across Germiston, Alberton, and wider Gauteng."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm mb-4">What We Do</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Expertise Built on Trust</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            At South Peak Construction, we handle everything from minor repairs to large-scale structural changes with precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-orange-200 transition-all duration-300"
            >
              <div className="mb-6 text-orange-500 group-hover:scale-110 transition-transform origin-left">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
