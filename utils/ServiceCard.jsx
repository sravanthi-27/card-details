import React from 'react';
function ServiceCard({ image, category, heading, title, location }) {
  return (
    <div
      className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-[16.71px] flex flex-col"
      style={{
        padding: "15.88px 17.55px",
        gap: "12.52px",
        borderRadius: "16.71px",
      }}
    >
      <div className="w-full">
        <img
          src={image}
          alt={title}
          className="w-full"
          style={{
            height: "260.42px",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="mt-2 flex flex-col">
        <span className="font-medium text-[14px] leading-[125%]">
          {category}
        </span>
        <h3 className="text-[16px] font-semibold text-gray-800">{heading}</h3>
        <h2 className="text-[18px] font-bold text-black mt-1">{title}</h2>
        <p className="text-sm text-gray-500 mt-1">{location}</p>
      </div>
    </div>
  );
}
export default ServiceCard;
