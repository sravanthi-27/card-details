import React from 'react';
import PartnerSection from '../home/PartnerSection'
import { useParams } from 'react-router-dom';

const DealDetail = () => {
  const { id } = useParams(); 

  const services = [
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
  ];

  return (
  <>
    <div className="min-h-screen bg-white">
      {/* Desktop Version */}
      <div className="hidden md:block max-w-7xl mx-auto px-8 pt-[100px]">
        {/* Main Offerings Heading */}
        <h1 className="text-[#121212] font-montserrat text-[32px] font-semibold leading-[44.8px] mb-6">
          Main Offerings
        </h1>

        <div className="w-full rounded-2xl bg-[#F3D0A1] p-8 mb-12">
          {services.map((service, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-start mb-4">
                <div className="max-w-4xl">
                  <h3 className="text-[#121212] font-montserrat text-[20px] font-bold uppercase leading-[25px]">
                    {service.title}
                  </h3>
                  <p className={`text-[#121212] font-montserrat text-[16px] leading-[22px] mt-2 ${idx > 0 ? 'whitespace-nowrap overflow-hidden text-ellipsis max-w-full' : ''}`}>
                    {idx === 0 ? (
                      <>
                        Yogasanas are physical postures that help transform the body and mind into a possibility for wellbeing. Offered as<br />
                        a set of 21 powerful postures, they enhance health and inner balance.
                      </>
                    ) : (
                      service.desc
                    )}
                  </p>                     
                </div>
                <button className="w-[220px] bg-white text-black rounded-lg font-montserrat text-[18px] font-semibold py-3 hover:bg-gray-100 transition text-center">
                  Book Now
                </button>
              </div>
              {idx < services.length - 1 && <div className="w-full h-px bg-white my-9"></div>}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Version */}
      <div className="block md:hidden p-4 pt-20">
        {/* Mobile Heading */}
        <h1 className="text-[#121212] font-montserrat text-[24px] font-semibold leading-[30px] mb-6">
          Main Offerings
        </h1>
        
        <div className="bg-[#F3D0A1] rounded-[20px] p-4 space-y-4">
          {services.map((service, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              <h3 className="text-[#121212] font-montserrat text-[16px] font-bold uppercase leading-[20px]">
                {service.title}
              </h3>
              <p className="text-[#121212] font-montserrat text-[14px] leading-[18px]">
                {service.desc}
              </p>
              <button className="bg-white text-black rounded-[10px] font-montserrat text-[14px] font-semibold px-6 py-2 w-[160px] hover:bg-gray-100 transition">
                Book Now
              </button>
              {idx < services.length - 1 && <div className="h-px bg-white"></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* <PartnerSection/> */}
  </>
  );
};

export default DealDetail;
