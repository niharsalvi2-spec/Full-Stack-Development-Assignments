import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! This is a placeholder form.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-transparent">
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
        <div className="w-16 h-1 bg-brand mx-auto mb-10 rounded-full"></div>
        
        <div className="glass-card p-8 text-left max-w-2xl mx-auto border-slate-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block tracking-wide mb-2 text-sm font-medium text-slate-700">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-amber-50/50 border border-amber-200 text-slate-800 text-sm rounded-lg focus:ring-brand focus:border-brand block p-3 outline-none transition-colors" 
                  placeholder="John Doe" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block tracking-wide mb-2 text-sm font-medium text-slate-700">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-amber-50/50 border border-amber-200 text-slate-800 text-sm rounded-lg focus:ring-brand focus:border-brand block p-3 outline-none transition-colors" 
                  placeholder="john@example.com" 
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block tracking-wide mb-2 text-sm font-medium text-slate-700">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-amber-50/50 border border-amber-200 text-slate-800 text-sm rounded-lg focus:ring-brand focus:border-brand block p-3 outline-none transition-colors" 
                placeholder="How can I help you?"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full text-white bg-brand hover:bg-brand-dark focus:ring-4 focus:outline-none focus:ring-brand-light font-medium rounded-lg text-sm sm:w-auto px-8 py-3 text-center transition-all flex items-center justify-center gap-2 m-auto"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
