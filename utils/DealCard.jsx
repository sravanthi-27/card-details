import React from 'react';

function DealCard({ image, heading, title, location }) {
  return (
    <div className="flex flex-col w-full h-full rounded-[18px] bg-white border border-[#f0f0f0] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
      {/* Responsive Image Container */}
      <div className="flex justify-center items-center w-full h-[220px] sm:h-[250px] md:h-[280px] p-3 overflow-hidden ">
        <img
          src={image}
          alt={heading}
          className="w-full h-full object-cover"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectPosition: 'center'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col p-3 sm:p-4 gap-1 sm:gap-2">
        <p className="text-[#414141] font-medium text-[15px] sm:text-[17px] md:text-[19px] leading-[20px] sm:leading-[22px] md:leading-[25px] font-montserrat">
          Yoga & Pilates Instructors
        </p>

        <h3 className="text-black font-semibold text-[17px] sm:text-[19px] md:text-[21px] leading-[21px] sm:leading-[23px] md:leading-[25px] font-montserrat line-clamp-2">
          {heading}
        </h3>

        <h4 className="text-black font-normal text-[13px] sm:text-[15px] md:text-[17px] leading-[16px] sm:leading-[18px] md:leading-[20px] font-montserrat line-clamp-2">
          {title}
        </h4>

        {/* Location section */}
        <div className="flex items-start gap-1 sm:gap-2 mt-1 sm:mt-2">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="mt-0.5">
            <path d="M7.5916 9.03208C7.12674 9.03208 6.67232 8.89423 6.2858 8.63597C5.89928 8.3777 5.59802 8.01062 5.42012 7.58115C5.24223 7.15167 5.19568 6.67908 5.28637 6.22315C5.37706 5.76722 5.60092 5.34842 5.92963 5.01971C6.25833 4.69101 6.67713 4.46715 7.13306 4.37646C7.58899 4.28577 8.06158 4.33232 8.49106 4.51021C8.92054 4.68811 9.28762 4.98936 9.54588 5.37588C9.80414 5.7624 9.94199 6.21683 9.94199 6.68169C9.94125 7.30482 9.69338 7.90222 9.25275 8.34284C8.81213 8.78346 8.21474 9.03133 7.5916 9.03208ZM7.5916 5.27146C7.31268 5.27146 7.04003 5.35416 6.80812 5.50912C6.57621 5.66408 6.39545 5.88433 6.28872 6.14202C6.18198 6.3997 6.15405 6.68325 6.20847 6.95681C6.26288 7.23037 6.39719 7.48165 6.59442 7.67888C6.79164 7.8761 7.04292 8.01041 7.31648 8.06483C7.59004 8.11924 7.87359 8.09131 8.13128 7.98458C8.38896 7.87784 8.60921 7.69709 8.76417 7.46517C8.91913 7.23326 9.00184 6.96061 9.00184 6.68169C9.00146 6.30779 8.85277 5.94931 8.58838 5.68492C8.32399 5.42053 7.9655 5.27183 7.5916 5.27146Z" fill="#5D5D5D"/>
            <path d="M7.59176 14.6732L3.62618 9.99637C3.57108 9.92614 3.51655 9.85547 3.46259 9.78436C2.78554 8.89187 2.41964 7.80208 2.4209 6.68184C2.4209 5.31045 2.96569 3.99522 3.93541 3.0255C4.90514 2.05577 6.22036 1.51099 7.59176 1.51099C8.96316 1.51099 10.2784 2.05577 11.2481 3.0255C12.2178 3.99522 12.7626 5.31045 12.7626 6.68184C12.7637 7.80155 12.398 8.89078 11.7214 9.78295L11.7209 9.78436C11.7209 9.78436 11.5799 9.96957 11.5587 9.99449L7.59176 14.6732ZM4.21331 9.21792C4.21331 9.21792 4.32284 9.3627 4.34775 9.39372L7.59176 13.2197L10.84 9.38855C10.8607 9.3627 10.9707 9.21698 10.9712 9.21651C11.5245 8.48748 11.8236 7.59711 11.8225 6.68184C11.8225 5.55979 11.3767 4.4837 10.5833 3.69029C9.78991 2.89688 8.71381 2.45114 7.59176 2.45114C6.46971 2.45114 5.39361 2.89688 4.6002 3.69029C3.80679 4.4837 3.36106 5.55979 3.36106 6.68184C3.3599 7.5977 3.6593 8.48863 4.21331 9.21792Z" fill="#5D5D5D"/>
          </svg>
          <span className="text-[#4A4A4A] font-normal text-[12px] sm:text-[13px] md:text-[14px] leading-[14px] sm:leading-[15px] md:leading-[17px] font-montserrat">
            {location}
          </span>
        </div>
      </div>
    </div>
  );
}

export default DealCard;