import React from 'react';
import PartnerSection from '../home/PartnerSection';

const ServiceDetail = () => {
  return (
    <>
      {/* Desktop Version - Yoga services offerings */}
      <div className="hidden md:block relative bg-white max-w-[1280px] mt-8 ml-32">
        <h2 className="text-black font-inter font-semibold text-3xl mb-6">
          Main Offerings
        </h2>

        <div className="w-full rounded-2xl bg-[#F3D0A1] p-8 mb-12">
          {[
            { 
              title: 'YOGASANAS WORKSHOP', 
              desc: 'Yogasanas are physical postures that help transform the body and mind into a possibility for wellbeing. Offered as a set of 21 powerful postures, they enhance health and inner balance.' 
            },
            { 
              title: 'SERVICE 2 – ₹499', 
              desc: 'A rejuvenating full-body massage using deep pressure to ease muscle knots, reduce stress, and enhance flexibility.' 
            },
            { 
              title: 'SERVICE 3 – ₹699', 
              desc: 'A rejuvenating full-body massage using deep pressure to ease muscle knots, reduce stress, and enhance flexibility.' 
            },
            { 
              title: 'SERVICE 3 – ₹1299', 
              desc: 'A rejuvenating full-body massage using deep pressure to ease muscle knots, reduce stress, and enhance flexibility.' 
            }
          ].map((service, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-[#121212] font-montserrat text-2xl font-bold uppercase">
                    {service.title}
                  </h3>
                  <p className="text-[#121212] font-montserrat text-base mt-2 max-w-3xl">
                    {service.desc}
                  </p>
                </div>
                <button className="bg-white text-black rounded-lg font-montserrat text-lg font-semibold px-8 py-3">
                  Book Now
                </button>
              </div>
              {idx < 3 && <div className="w-full h-px bg-white my-6"></div>}
            </div>
          ))}
        </div>
        <div className="w-full h-px bg-[#A2A2A2] mb-8"></div>
      </div>

      {/* Mobile Version - Compact services listing */}
      <div className="block md:hidden bg-white px-4">
        <h2 className="text-black font-inter font-semibold text-lg mb-4">
          Main Offerings
        </h2>
        <div className="bg-[#F3D0A1] rounded-lg p-4 space-y-4">
          {[
            { 
              title: 'YOGASANAS WORKSHOP', 
              desc: 'Yogasanas are physical postures that help transform the body and mind into a possibility for wellbeing. Offered as a set of 21 powerful postures, they enhance health and inner balance.' 
            },
            { 
              title: 'SERVICE 2 – ₹499', 
              desc: 'A rejuvenating full-body massage using deep pressure to ease muscle knots, reduce stress, and enhance flexibility.' 
            },
            { 
              title: 'SERVICE 3 – ₹699', 
              desc: 'A rejuvenating full-body massage using deep pressure to ease muscle knots, reduce stress, and enhance flexibility.' 
            },
            { 
              title: 'SERVICE 3 – ₹1299', 
              desc: 'A rejuvenating full-body massage using deep pressure to ease muscle knots, reduce stress, and enhance flexibility.' 
            }
          ].map((service, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <h3 className="text-[#121212] font-montserrat text-base font-bold uppercase">
                {service.title}
              </h3>
              <p className="text-[#121212] font-montserrat text-sm">
                {service.desc}
              </p>
              <button className="bg-white text-black rounded-md text-sm font-semibold px-12 py-2 w-max">
                Book Now
              </button>
              {idx < 3 && <div className="h-px bg-white"></div>}
            </div>
          ))}
        </div>
      </div>
      {/* <PartnerSection/> */}
    </>
  );
};

export default ServiceDetail;
