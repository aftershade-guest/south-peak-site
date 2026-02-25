
import React, { useState } from 'react';

const projects = [
  { id: 1, title: 'Modern Kitchen Remodel', category: 'Renovation', img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Structural Support Installation', category: 'Structural', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Luxury Bathroom Suite', category: 'Renovation', img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Modern Office Fit-out', category: 'Commercial', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' },
  { id: 5, title: 'Home Extension Project', category: 'Structural', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'Exterior Facade Renovation', category: 'Exterior', img: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800' },
];

const ProjectGallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Renovation', 'Structural', 'Exterior', 'Commercial'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <h2 className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900">Proof of Quality</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  filter === cat 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-white text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-2xl transition-all"
            >
              <img 
                src={project.img} 
                alt={project.title}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <span className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-1">{project.category}</span>
                <h4 className="text-white text-xl font-bold">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
