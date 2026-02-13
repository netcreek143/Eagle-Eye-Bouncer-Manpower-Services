
import React from 'react';
import type { Page } from '../App';
import { EagleIcon } from './icons/EagleIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { MailIcon } from './icons/MailIcon';
import { LocationIcon } from './icons/LocationIcon';

interface FooterProps {
    setCurrentPage: (page: Page) => void;
}


const Footer: React.FC<FooterProps> = ({setCurrentPage}) => {
  return (
    <footer className="bg-slate-950 border-t border-amber-400/20 pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
             <div 
                className="flex items-center cursor-pointer mb-4" 
                onClick={() => setCurrentPage('home')}
             >
                <EagleIcon className="h-10 w-10 text-amber-400" />
                <span className="ml-3 text-2xl font-bold text-white tracking-wider">
                    EAGLE <span className="text-amber-400">EYE</span>
                </span>
            </div>
            <p className="text-gray-400">
              Your trusted partner for elite security and professional manpower solutions in Chennai.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => setCurrentPage('home')} className="text-gray-400 hover:text-amber-400 transition-colors">Home</button></li>
              <li><button onClick={() => setCurrentPage('about')} className="text-gray-400 hover:text-amber-400 transition-colors">About Us</button></li>
              <li><button onClick={() => setCurrentPage('services')} className="text-gray-400 hover:text-amber-400 transition-colors">Services</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="text-gray-400 hover:text-amber-400 transition-colors">Contact</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <LocationIcon className="h-5 w-5 mr-3 mt-1 text-amber-400 flex-shrink-0" />
                <span>Thiruverkadu, Chennai - 600077</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-3 text-amber-400 flex-shrink-0" />
                <a href="tel:9094091083" className="hover:text-amber-400 transition-colors">90940 91083</a>
              </li>
              <li className="flex items-start">
                <MailIcon className="h-5 w-5 mr-3 mt-1 text-amber-400 flex-shrink-0" />
                <a href="mailto:eagleisecure360degri@gmail.com" className="hover:text-amber-400 transition-colors break-all">eagleisecure360degri@gmail.com</a>
              </li>
            </ul>
          </div>
           <div>
            <h3 className="text-white font-semibold text-lg mb-4">Proprietor</h3>
             <p className="text-gray-400">R. Velmurugan</p>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Eagle Eye Bouncer & Manpower Services. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
