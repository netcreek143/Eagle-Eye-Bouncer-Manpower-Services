
import React from 'react';

const services = [
  { icon: 'fas fa-user-shield', title: 'Bouncer & Security Services', description: 'Highly-trained bouncers and security personnel for events, parties, and venues to ensure crowd control and safety.' },
  { icon: 'fas fa-user-tie', title: 'Receptionist Staffing', description: 'Professional and courteous receptionists to manage your front desk and create a welcoming environment for your guests.' },
  { icon: 'fas fa-broom', title: 'House Keeping Services', description: 'Reliable and efficient housekeeping staff for residential, commercial, and industrial properties to maintain cleanliness.' },
  { icon: 'fas fa-hard-hat', title: 'Non-Skilled Labour Supply', description: 'Providing a dedicated workforce for various non-skilled labour requirements across different sectors.' },
  { icon: 'fas fa-users', title: 'Manpower for Events', description: 'Complete manpower solutions for events, including loading/unloading crews and general support staff.' },
  { icon: 'fas fa-graduation-cap', title: 'Fresher Placement', description: 'Connecting Diploma, ITI, and Engineering freshers with opportunities in various industries.' },
];

const sectors = [
    { icon: 'fas fa-desktop', name: 'IT Sector' },
    { icon: 'fas fa-university', name: 'Bank Sector' },
    { icon: 'fas fa-home', name: 'Residences' },
    { icon: 'fas fa-industry', name: 'Industrial' },
    { icon: 'fas fa-building', name: 'Commercial' },
    { icon: 'fas fa-hotel', name: 'Hotels' },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24 bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Our <span className="text-amber-400">Services</span>
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Comprehensive solutions to meet your security and manpower needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-900 p-8 rounded-lg border border-amber-400/20 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-amber-400/10 p-4 rounded-full mb-6">
                <i className={`${service.icon} text-amber-400 text-4xl`}></i>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 flex-grow">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
                Sectors We <span className="text-amber-400">Serve</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
                {sectors.map((sector, index) => (
                    <div key={index} className="flex flex-col items-center p-4 bg-slate-900 rounded-lg border border-gray-700 w-36">
                        <i className={`${sector.icon} text-amber-400 text-3xl mb-2`}></i>
                        <span className="text-gray-300 font-medium">{sector.name}</span>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;
