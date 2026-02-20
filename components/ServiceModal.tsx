
import React, { useEffect } from 'react';
import ServiceForm from './ServiceForm';

interface Service {
    icon: string;
    title: string;
    description: string;
}

interface ServiceModalProps {
    service: Service | null;
    onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
    // Prevent scrolling on body when modal is open
    useEffect(() => {
        if (service) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [service]);

    if (!service) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm cursor-pointer"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-slate-900 w-full max-w-4xl max-h-[95vh] overflow-y-auto rounded-xl sm:rounded-2xl border border-amber-400/30 shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 text-gray-400 hover:text-white transition-colors p-2 bg-slate-900/80 rounded-full md:bg-transparent"
                >
                    <i className="fas fa-times text-xl sm:text-2xl"></i>
                </button>

                {/* Info Column */}
                <div className="md:w-1/2 p-6 sm:p-8 md:p-12 border-b md:border-b-0 md:border-r border-amber-400/10">
                    <div className="bg-amber-400/10 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-6 sm:mb-8">
                        <i className={`${service.icon} text-amber-400 text-3xl sm:text-5xl`}></i>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 sm:mb-6">
                        {service.title}
                    </h2>
                    <div className="space-y-4">
                        <h4 className="text-amber-400 font-semibold uppercase tracking-widest text-xs sm:text-sm">About this service</h4>
                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                            {service.description}
                        </p>
                        <p className="text-gray-400 text-sm sm:text-base">
                            Our professional team is dedicated to providing high-quality {service.title.toLowerCase()} tailored to your specific needs. We ensure reliability, safety, and excellence in every assignment.
                        </p>
                    </div>
                </div>

                {/* Form Column */}
                <div className="md:w-1/2 p-6 sm:p-8 md:p-12 bg-slate-900/50">
                    <ServiceForm serviceTitle={service.title} />
                </div>
            </div>
        </div>
    );
};

export default ServiceModal;
