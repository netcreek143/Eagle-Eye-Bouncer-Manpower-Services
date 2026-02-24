
import React from 'react';
import type { Page } from '../App';
import { HomeIcon } from './icons/HomeIcon';
import { AboutIcon } from './icons/AboutIcon';
import { EventsIcon } from './icons/EventsIcon';
import { PhoneIcon } from './icons/PhoneIcon';

interface MobileNavbarProps {
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ currentPage, setCurrentPage }) => {
    const navItems = [
        { page: 'home' as Page, label: 'Home', Icon: HomeIcon },
        { page: 'events' as Page, label: 'Events', Icon: EventsIcon },
        { page: 'about' as Page, label: 'About', Icon: AboutIcon },
        { page: 'contact' as Page, label: 'Contact', Icon: PhoneIcon },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-t border-amber-400/20 z-50 md:hidden">
            <div className="flex justify-around items-center h-16">
                {navItems.map((item) => (
                    <button
                        key={item.page}
                        onClick={() => setCurrentPage(item.page)}
                        className={`flex flex-col items-center justify-center w-full h-full transition-colors duration-300 ${currentPage === item.page ? 'text-amber-400' : 'text-gray-400'
                            }`}
                    >
                        <item.Icon className={`h-6 w-6 ${currentPage === item.page ? 'animate-pulse' : ''}`} />
                        <span className="text-[10px] mt-1 font-medium uppercase tracking-tight">{item.label}</span>
                        {currentPage === item.page && (
                            <div className="absolute top-0 w-8 h-0.5 bg-amber-400 rounded-full" />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MobileNavbar;
