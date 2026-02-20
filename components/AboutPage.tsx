
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            About <span className="text-amber-400">Eagle Eye</span>
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Your Trusted Partner in Security and Manpower Services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-amber-400 mb-4">Professional Summary</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              The Eagle Eye Bouncer Team, led by R. Velmurugan, is a professional security service specializing in event and crowd management across Tamil Nadu. We are a physically strong, disciplined, and alert team with a proven record of maintaining safety, control, and order in high-traffic venues. Our commitment to excellence ensures that every client receives the highest level of protection and professionalism.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-amber-400 mb-2">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To provide top-tier security and manpower solutions that ensure the safety and success of our clients' events and operations. We strive to be the most reliable, professional, and respected security provider in the region.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-amber-400 mb-2">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To set the industry standard for security services, known for our integrity, vigilance, and unwavering commitment to client safety. We aim to build long-lasting relationships based on trust and exceptional performance.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=1000"
              alt="Professional security team"
              className="rounded-lg shadow-2xl w-full h-[300px] md:h-auto object-cover border-4 border-amber-400/30"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
