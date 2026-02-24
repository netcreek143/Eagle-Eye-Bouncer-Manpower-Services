
import React, { useState } from 'react';

interface ServiceFormProps {
    serviceTitle: string;
}

const ServiceForm: React.FC<ServiceFormProps> = ({ serviceTitle }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        // We will let the form submit normally to FormSubmit
        setStatus('Sending...');
    };

    return (
        <div className="bg-slate-950 p-6 rounded-lg border border-amber-400/20">
            <h3 className="text-xl font-bold text-white mb-4 italic">Inquire about {serviceTitle}</h3>
            <form
                action="https://formsubmit.co/sekarsuriya16@gmail.com"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-4 text-left"
            >
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value={`New Inquiry: ${serviceTitle}`} />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value={window.location.href} />

                <div>
                    <label htmlFor="service-name" className="block text-xs font-medium text-gray-400 mb-1 uppercase tracking-wider">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        id="service-name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-white focus:ring-1 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="service-email" className="block text-xs font-medium text-gray-400 mb-1 uppercase tracking-wider">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="service-email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-white focus:ring-1 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all"
                        />
                    </div>
                    <div>
                        <label htmlFor="service-phone" className="block text-xs font-medium text-gray-400 mb-1 uppercase tracking-wider">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            id="service-phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-white focus:ring-1 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all"
                        />
                    </div>
                    <div>
                        <label htmlFor="service-location" className="block text-xs font-medium text-gray-400 mb-1 uppercase tracking-wider">Event Location</label>
                        <input
                            type="text"
                            name="location"
                            id="service-location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="e.g. City, Venue"
                            className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-white focus:ring-1 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="service-message" className="block text-xs font-medium text-gray-400 mb-1 uppercase tracking-wider">Tell us about your requirement</label>
                    <textarea
                        name="message"
                        id="service-message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-900 border border-slate-800 rounded-md py-2 px-3 text-white focus:ring-1 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all"
                    ></textarea>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full bg-amber-400 text-slate-900 font-bold py-3 px-6 rounded-md hover:bg-amber-300 transition-all duration-300 transform active:scale-95 shadow-lg shadow-amber-400/10"
                    >
                        Send Inquiry
                    </button>
                </div>
                {status && <p className="text-center text-sm text-amber-400 animate-pulse">{status}</p>}
            </form>
        </div>
    );
};

export default ServiceForm;
