
import React, { useState } from 'react';
import type { Page } from '../App';

interface HomePageProps {
    setCurrentPage: (page: Page) => void;
}

const galleryItems = [
    { src: "/images/corporate-event-security.jpg.jpg", caption: "Corporate Event Security" },
    { src: "/images/private-party-monitoring.jpeg", caption: "Private Party Monitoring" },
    { src: "/images/concert-crowd-management.jpg", caption: "Concert Crowd Management" },
    { src: "/images/vip-celebrity-management.jpg.jpg", caption: "VIP & Celebrity Protection" },
    { src: "/images/venue-access-control.jpg", caption: "Venue Access Control" },
    { src: "/images/professional-alert-team.jpg", caption: "Professional & Alert Team" },
];

const testimonials = [
    {
        quote: "The Eagle Eye team was incredibly professional and handled our corporate gala flawlessly. Their presence was reassuring yet non-intrusive. Highly recommended.",
        name: "Priya Sharma",
        company: "Lead Event Manager, Innovate Corp"
    },
    {
        quote: "We hired bouncers for a large-scale music festival, and Eagle Eye delivered. They managed the crowd effectively and were quick to de-escalate any potential issues. True professionals.",
        name: "Arjun Reddy",
        company: "Operations Head, Vibe Fest"
    },
    {
        quote: "For my wedding reception, I wanted to ensure everything went smoothly. The security personnel from Eagle Eye were courteous, well-dressed, and made all our guests feel safe.",
        name: "Anika Desai",
        company: "Private Client"
    }
];

const faqs = [
    {
        question: "What types of events do you provide bouncers for?",
        answer: "We provide security for a wide range of events including corporate functions, concerts, weddings, private parties, promotional events, and more. Our solutions are tailored to the specific needs of each event."
    },
    {
        question: "Are your security personnel trained and licensed?",
        answer: "Absolutely. All our bouncers and security staff undergo rigorous training in crowd management, conflict resolution, and first aid. They are fully licensed and vetted to ensure the highest standards of professionalism."
    },
    {
        question: "How far in advance should I book your services?",
        answer: "We recommend booking as early as possible, especially for large events, to ensure availability. However, we can often accommodate last-minute requests depending on our schedule. Contact us to check our availability."
    },
    {
        question: "What is your pricing structure?",
        answer: "Our pricing depends on several factors, including the number of personnel required, the duration of the event, and the level of risk involved. Please contact us for a detailed and customized quote."
    },
    {
        question: "What areas do you serve?",
        answer: "We are based in Chennai and primarily serve the entire Tamil Nadu region. For special requests or large-scale events outside this area, please get in touch to discuss the possibilities."
    }
];

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="relative overflow-hidden">
            {/* Hero Section */}
            <section
                className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white"
                style={{ backgroundImage: `url('https://picsum.photos/1920/1080?grayscale&blur=2&random=1')` }}
            >
                <div className="absolute inset-0 bg-slate-900 bg-opacity-70"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

                <div className="relative z-10 p-4">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">
                        <span className="text-amber-400">Elite Security</span> & Manpower Solutions
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8">
                        Providing vigilant, professional, and reliable bouncer and manpower services for events, corporates, and personal security in Chennai.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => setCurrentPage('services')}
                            className="bg-amber-400 text-slate-900 font-bold py-3 px-8 rounded-md text-lg hover:bg-amber-300 transition-all duration-300 transform hover:scale-105"
                        >
                            Our Services
                        </button>
                        <button
                            onClick={() => setCurrentPage('contact')}
                            className="bg-transparent border-2 border-amber-400 text-amber-400 font-bold py-3 px-8 rounded-md text-lg hover:bg-amber-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-slate-950">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Why Choose <span className="text-amber-400">Eagle Eye</span>?</h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">We deliver excellence and peace of mind through our dedicated and highly-trained personnel.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-slate-900 p-8 rounded-lg border border-amber-400/20 text-center transform hover:-translate-y-2 transition-transform duration-300">
                            <i className="fas fa-shield-halved text-amber-400 text-4xl mb-4"></i>
                            <h3 className="text-xl font-semibold text-white mb-2">Professional Staff</h3>
                            <p className="text-gray-400">Physically strong, disciplined, and alert team with a proven record.</p>
                        </div>
                        <div className="bg-slate-900 p-8 rounded-lg border border-amber-400/20 text-center transform hover:-translate-y-2 transition-transform duration-300">
                            <i className="fas fa-users-gear text-amber-400 text-4xl mb-4"></i>
                            <h3 className="text-xl font-semibold text-white mb-2">Customized Solutions</h3>
                            <p className="text-gray-400">Tailored security and manpower services to fit your unique needs.</p>
                        </div>
                        <div className="bg-slate-900 p-8 rounded-lg border border-amber-400/20 text-center transform hover:-translate-y-2 transition-transform duration-300">
                            <i className="fas fa-handshake text-amber-400 text-4xl mb-4"></i>
                            <h3 className="text-xl font-semibold text-white mb-2">Client-Centric</h3>
                            <p className="text-gray-400">Your safety and satisfaction are our top priorities.</p>
                        </div>
                        <div className="bg-slate-900 p-8 rounded-lg border border-amber-400/20 text-center transform hover:-translate-y-2 transition-transform duration-300">
                            <i className="fas fa-clock text-amber-400 text-4xl mb-4"></i>
                            <h3 className="text-xl font-semibold text-white mb-2">24/7 Availability</h3>
                            <p className="text-gray-400">Available on call for all events, assignments and emergencies.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-20 bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Our Professionals in <span className="text-amber-400">Action</span></h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">A glimpse into the professional and secure environments we create.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {galleryItems.map((item, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                                <img src={item.src} alt={item.caption} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300"></div>
                                <div className="absolute bottom-0 left-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-white text-lg font-semibold">{item.caption}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-slate-950">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">What Our <span className="text-amber-400">Clients Say</span></h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Real feedback from clients who trust our services.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-slate-900 p-8 rounded-lg border border-amber-400/20 flex flex-col">
                                <i className="fas fa-quote-left text-amber-400 text-3xl mb-4"></i>
                                <p className="text-gray-300 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                                <div>
                                    <p className="font-bold text-white text-lg">{testimonial.name}</p>
                                    <p className="text-amber-400 text-sm">{testimonial.company}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked <span className="text-amber-400">Questions</span></h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Find answers to common questions about our services.</p>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-slate-950 rounded-lg border border-amber-400/20 overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full flex justify-between items-center text-left p-6"
                                    aria-expanded={openFaq === index}
                                >
                                    <span className="text-lg font-semibold text-white">{faq.question}</span>
                                    <i className={`fas fa-chevron-down text-amber-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}></i>
                                </button>
                                <div className={`transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="p-6 pt-0">
                                        <p className="text-gray-400">{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default HomePage;
