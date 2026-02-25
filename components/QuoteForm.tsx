
import React, { useState } from 'react';
import { Send, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { getAIProjectAdvice } from '../services/geminiService';
import { AIResponse } from '../types';

const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', description: '' });
  const [loading, setLoading] = useState(false);
  const [aiAdvice, setAiAdvice] = useState<AIResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleGetAdvice = async () => {
    if (!formData.description) {
      setError("Please describe your project first for AI advice.");
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const advice = await getAIProjectAdvice(formData.description);
      setAiAdvice(advice);
    } catch (err) {
      setError("Unable to generate AI advice. Please try again or submit the form directly.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="bg-white p-12 rounded-2xl shadow-xl text-center border border-green-100">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Send size={40} />
        </div>
        <h3 className="text-3xl font-bold text-slate-900 mb-4">Request Received!</h3>
        <p className="text-slate-600 mb-8">
          Thank you, {formData.name}. Our team will review your project details for South Peak Construction and call you at {formData.phone} shortly.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-blue-600 font-bold hover:underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <section id="quote" className="py-24 bg-blue-900 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-white rounded-full -top-96 -left-96"></div>
        <div className="absolute w-[600px] h-[600px] bg-white rounded-full -bottom-48 -right-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-orange-400 font-bold tracking-[0.2em] uppercase text-sm mb-4">Contact Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">Request a Professional Quote</h3>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              Serving <span className="text-white font-bold">Sandton, Germiston, and Alberton.</span> We provide transparent pricing and expert consultations for all Gauteng construction projects.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 items-start bg-white/10 p-4 rounded-xl border border-white/10">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Expert Site Consultation</h4>
                  <p className="text-blue-200 text-sm">We'll visit your property to understand the full scope of work.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start bg-white/10 p-4 rounded-xl border border-white/10">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Detailed Itemized Quote</h4>
                  <p className="text-blue-200 text-sm">No hidden costs. You see exactly where every Rand is going.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    placeholder="074 521 3420"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Tell us about your project</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="e.g., Kitchen renovation in Alberton, structural wall removal in Sandton..."
                  value={formData.description}
                  onChange={e => setFormData({...formData, description: e.target.value})}
                ></textarea>
              </div>

              {error && (
                <div className="p-3 bg-red-50 text-red-600 rounded-lg flex items-center gap-2 text-sm border border-red-100">
                  <AlertCircle size={16} />
                  {error}
                </div>
              )}

              <div className="flex flex-col gap-4">
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? <Loader2 className="animate-spin" /> : <><Send size={18} /> Send Quote Request</>}
                </button>
                
                <button 
                  type="button"
                  onClick={handleGetAdvice}
                  disabled={loading || !formData.description}
                  className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Sparkles size={18} className="text-orange-500" />
                  Get AI Project Assistant Advice
                </button>
              </div>
            </form>

            {aiAdvice && (
              <div className="mt-8 p-6 bg-orange-50 rounded-xl border border-orange-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles size={18} className="text-orange-500" />
                  <h4 className="font-bold text-slate-900">AI Assistant Breakdown</h4>
                </div>
                <div className="mb-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-1">Estimated Complexity</p>
                  <p className="font-bold text-lg text-slate-800">{aiAdvice.estimatedComplexity}</p>
                </div>
                <div className="mb-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-1">Advisor Notes</p>
                  <p className="text-slate-700 text-sm leading-relaxed">{aiAdvice.advice}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-1">Technical Considerations</p>
                  <ul className="list-disc list-inside text-sm text-slate-700 mt-2 space-y-1">
                    {aiAdvice.considerations.map((c, i) => <li key={i}>{c}</li>)}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
