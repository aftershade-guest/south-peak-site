
import React, { useState } from 'react';
import { Sparkles, Loader2, Camera, Download, RefreshCw } from 'lucide-react';
import { generateVisionImage } from '../services/geminiService.ts';

const AIVision: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [generatedImg, setGeneratedImg] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    const img = await generateVisionImage(prompt);
    if (img) setGeneratedImg(img);
    setLoading(false);
  };

  return (
    <section id="ai-vision" className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles size={14} /> New Feature
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Visualize Your Dream Project</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Not sure how that kitchen island or outdoor patio will look? Use our <span className="text-blue-600 font-bold">AI Vision Tool</span> to generate high-quality concepts. Describe your dream, and we'll show you what's possible.
            </p>
            
            <div className="space-y-4">
              <div className="relative">
                <input 
                  type="text" 
                  className="w-full px-6 py-4 rounded-xl border-2 border-slate-100 focus:border-orange-400 outline-none transition-all pr-12 shadow-sm"
                  placeholder="e.g. Modern industrial kitchen with navy blue cabinets and gold hardware"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleGenerate()}
                />
                <button 
                  onClick={handleGenerate}
                  disabled={loading || !prompt}
                  className="absolute right-2 top-2 bottom-2 bg-orange-500 hover:bg-orange-600 disabled:bg-slate-300 text-white px-4 rounded-lg transition-colors flex items-center justify-center"
                >
                  {loading ? <Loader2 className="animate-spin" size={20} /> : <Sparkles size={20} />}
                </button>
              </div>
              <p className="text-sm text-slate-400 italic flex items-center gap-2">
                <Camera size={14} /> AI-generated for inspiration and visualization purposes.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-100 border-4 border-slate-50 shadow-inner group">
              {generatedImg ? (
                <>
                  <img src={generatedImg} alt="AI Visualization" className="w-full h-full object-cover animate-in fade-in duration-700" />
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <button onClick={handleGenerate} className="bg-white p-3 rounded-full hover:bg-orange-500 hover:text-white transition-all">
                      <RefreshCw size={24} />
                    </button>
                    <a href={generatedImg} download="vision.png" className="bg-white p-3 rounded-full hover:bg-orange-500 hover:text-white transition-all">
                      <Download size={24} />
                    </a>
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center text-slate-400">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md mb-4 animate-pulse">
                    <Sparkles size={32} className="text-slate-300" />
                  </div>
                  <p className="font-medium">Enter a description to see your vision come to life</p>
                  <p className="text-sm mt-2">Try: "Luxury master bathroom with floating vanity and rainfall shower"</p>
                </div>
              )}
              {loading && (
                <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex flex-col items-center justify-center text-orange-600">
                  <Loader2 className="animate-spin mb-2" size={48} />
                  <p className="font-bold text-slate-900">Architectural AI is drawing...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIVision;
