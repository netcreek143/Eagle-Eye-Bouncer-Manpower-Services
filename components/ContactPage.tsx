
import React, { useState } from 'react';
import { PhoneIcon } from './icons/PhoneIcon';
import { MailIcon } from './icons/MailIcon';
import { LocationIcon } from './icons/LocationIcon';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Submitting...');
    console.log('Form data submitted:', formData);
    // In a real app, you would send this to a backend.
    setTimeout(() => {
      setStatus('Your message has been sent successfully!');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 1500);
  };

  return (
    <div className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Contact <span className="text-amber-400">Us</span>
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            We're here to help. Reach out to us for a free quote or any inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-slate-950 p-6 md:p-8 rounded-lg border border-amber-400/20 order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full bg-slate-800 border border-slate-700 rounded-md py-2 px-3 text-white focus:ring-amber-400 focus:border-amber-400" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full bg-slate-800 border border-slate-700 rounded-md py-2 px-3 text-white focus:ring-amber-400 focus:border-amber-400" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                  <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="w-full bg-slate-800 border border-slate-700 rounded-md py-2 px-3 text-white focus:ring-amber-400 focus:border-amber-400" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">Service of Interest</label>
                  <select name="service" id="service" value={formData.service} onChange={handleChange} className="w-full bg-slate-800 border border-slate-700 rounded-md py-2 px-3 text-white focus:ring-amber-400 focus:border-amber-400">
                    <option value="">Select a service</option>
                    <option>Bouncer & Security</option>
                    <option>Receptionist</option>
                    <option>House Keeping</option>
                    <option>Labour Supply</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} required className="w-full bg-slate-800 border border-slate-700 rounded-md py-2 px-3 text-white focus:ring-amber-400 focus:border-amber-400"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-amber-400 text-slate-900 font-bold py-3 px-6 rounded-md hover:bg-amber-300 transition-colors duration-300">
                  Submit Request
                </button>
              </div>
              {status && <p className="text-center text-amber-400">{status}</p>}
            </form>
          </div>

          <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Contact Information</h3>
            <div className="grid grid-cols-1 gap-4 md:gap-6">
              <div className="flex items-start p-5 md:p-6 bg-slate-950 rounded-lg border border-amber-400/20">
                <LocationIcon className="h-6 w-6 md:h-8 md:w-8 text-amber-400 mt-1 mr-4 md:mr-5 flex-shrink-0" />
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-white">Address</h4>
                  <p className="text-gray-400 text-sm md:text-base">Thiruverkadu, Chennai - 600077</p>
                </div>
              </div>
              <div className="flex items-start p-5 md:p-6 bg-slate-950 rounded-lg border border-amber-400/20">
                <PhoneIcon className="h-6 w-6 md:h-8 md:w-8 text-amber-400 mt-1 mr-4 md:mr-5 flex-shrink-0" />
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-white">Phone</h4>
                  <a href="tel:9094091083" className="text-gray-400 hover:text-amber-400 transition-colors text-sm md:text-base">90940 91083</a>
                </div>
              </div>
              <div className="flex items-start p-5 md:p-6 bg-slate-950 rounded-lg border border-amber-400/20">
                <MailIcon className="h-6 w-6 md:h-8 md:w-8 text-amber-400 mt-1 mr-4 md:mr-5 flex-shrink-0" />
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-white">Email</h4>
                  <a href="mailto:eagleisecure360degri@gmail.com" className="text-gray-400 hover:text-amber-400 transition-colors break-all text-sm md:text-base">eagleisecure360degri@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
