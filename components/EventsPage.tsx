
import React, { useState, useEffect } from 'react';

const eventImages = [
    { src: "/images/corporate-event-security.jpg.jpg", title: "Corporate Events", description: "Elite security for high-profile corporate gatherings and conferences." },
    { src: "/images/private-party-monitoring.jpeg", title: "Private Parties", description: "Discreet and effective monitoring for private celebrations." },
    { src: "/images/concert-crowd-management.jpg", title: "Music Concerts", description: "Expert crowd control and perimeter security for large-scale concerts." },
    { src: "/images/vip-celebrity-management.jpg.jpg", title: "VIP Protection", description: "Dedicated protection services for celebrities and high-net-worth individuals." },
    { src: "/images/venue-access-control.jpg", title: "Venue Access", description: "Strict access control and guest list management for exclusive venues." },
    { src: "/images/professional-alert-team.jpg", title: "Professional Team", description: "Our highly trained team ready for any security challenge." },
];

const EventsPage: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % eventImages.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % eventImages.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + eventImages.length) % eventImages.length);
    };

    return (
        <div className="py-16 md:py-24 bg-slate-950 min-h-[80vh]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                        Our Professionals in <span className="text-amber-400">Action</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
                        A showcase of our dedicated team providing security and manpower solutions across various premium events.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-2xl border border-amber-400/20">
                    {/* Carousel Container */}
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {eventImages.map((image, index) => (
                            <div key={index} className="w-full flex-shrink-0 relative aspect-video">
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">{image.title}</h3>
                                    <p className="text-gray-300 text-sm md:text-lg max-w-2xl">{image.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-900/50 hover:bg-amber-400 text-white hover:text-slate-900 p-3 rounded-full backdrop-blur-sm transition-all z-10"
                    >
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-900/50 hover:bg-amber-400 text-white hover:text-slate-900 p-3 rounded-full backdrop-blur-sm transition-all z-10"
                    >
                        <i className="fas fa-chevron-right"></i>
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {eventImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${currentIndex === index ? 'bg-amber-400 w-6 md:w-8' : 'bg-white/50'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Event Grid View (Optional/Alternative) */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-4">
                    {eventImages.map((image, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`relative cursor-pointer overflow-hidden rounded-lg group ${currentIndex === index ? 'ring-2 ring-amber-400' : 'opacity-60 hover:opacity-100'
                                }`}
                        >
                            <img src={image.src} alt={image.title} className="w-full aspect-square object-cover transition-transform group-hover:scale-110" />
                            <div className="absolute inset-0 bg-amber-400/10 group-hover:bg-transparent transition-colors"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventsPage;
