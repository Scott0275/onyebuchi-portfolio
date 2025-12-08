import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';
import { Mail, Send, Github, Linkedin, Twitter, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (name: string, value: string) => {
    switch (name) {
      case 'name':
        return !value.trim() ? 'Name is required' : '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
        return '';
      case 'message':
        return !value.trim() ? 'Message is required' : '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Real-time validation
    const error = validate(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields before submission
    const nameError = validate('name', formData.name);
    const emailError = validate('email', formData.email);
    const messageError = validate('message', formData.message);

    setErrors({
      name: nameError,
      email: emailError,
      message: messageError
    });

    if (!nameError && !emailError && !messageError) {
      setIsSubmitting(true);
      
      // Construct mailto link
      const subject = `Portfolio Contact: ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoLink = `mailto:techwithbuchi@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Simulate network request for UX, then open email client
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        window.location.href = mailtoLink;
        setFormData({ name: '', email: '', message: '' });
        setErrors({ name: '', email: '', message: '' });
      }, 1500);
    }
  };

  return (
    <PageTransition className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Let's Connect</h1>
            <p className="text-slate-600 text-lg">
              Interested in collaboration, cloud architecture, or data engineering discussions? I'm always open to meaningful conversations.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
              <div className="bg-teal-50 p-3 rounded-full text-teal-600">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Email</p>
                <p className="text-slate-900 font-medium">techwithbuchi@gmail.com</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Social Profiles</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/scott0275" className="p-3 bg-slate-100 rounded-lg text-slate-600 hover:bg-slate-800 hover:text-white transition-all duration-300">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/oscar-onokwuru" className="p-3 bg-slate-100 rounded-lg text-slate-600 hover:bg-blue-700 hover:text-white transition-all duration-300">
                <Linkedin size={24} />
              </a>
              <a href="https://twitter.com/OOnokwuru" className="p-3 bg-slate-100 rounded-lg text-slate-600 hover:bg-sky-500 hover:text-white transition-all duration-300">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <Send size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Message Prepared!</h3>
              <p className="text-slate-500 max-w-xs mx-auto">
                Your default email client should open shortly to send the message to <strong>techwithbuchi@gmail.com</strong>.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-4 text-teal-600 font-medium hover:underline"
              >
                Write another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg outline-none transition-all ${
                      errors.name 
                        ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
                        : 'border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500'
                    }`}
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <div className="absolute right-3 top-2.5 text-red-500">
                      <AlertCircle size={18} />
                    </div>
                  )}
                </div>
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg outline-none transition-all ${
                      errors.email 
                        ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
                        : 'border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500'
                    }`}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <div className="absolute right-3 top-2.5 text-red-500">
                      <AlertCircle size={18} />
                    </div>
                  )}
                </div>
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg outline-none transition-all resize-none ${
                    errors.message 
                      ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
                      : 'border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500'
                  }`}
                  placeholder="How can I help you?"
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white ${
                  isSubmitting 
                    ? 'bg-slate-400 cursor-not-allowed' 
                    : 'bg-teal-600 hover:bg-teal-700 shadow-md hover:shadow-lg'
                } transition-all duration-200`}
              >
                {isSubmitting ? 'Preparing Email...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>

      </div>
    </PageTransition>
  );
};

export default Contact;