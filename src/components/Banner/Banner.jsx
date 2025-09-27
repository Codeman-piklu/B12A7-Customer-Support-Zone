import React from 'react';
import vector1 from '../../assets/vector1.png';

const Banner = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="flex flex-col md:flex-row justify-center items-center p-6 md:p-16 max-w-[1440px] mx-auto gap-6 md:gap-3">
        
        {/* left div */}
        <div className="relative w-full md:w-1/2 h-40 md:h-48 rounded-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex flex-col items-center justify-center text-white overflow-hidden">
          <img
            src={vector1}
            alt="vector-left"
            className="absolute top-0 left-0 h-full object-contain opacity-80"
          />
          <img
            src={vector1}
            alt="vector-right"
            className="absolute top-0 right-0 h-full object-contain opacity-80 transform -scale-x-100"
          />
          <h2 className="text-base md:text-lg font-medium">In-Progress</h2>
          <p className="text-3xl md:text-4xl font-bold">0</p>
        </div>

        {/* right div */}
        <div className="relative w-full md:w-1/2 h-40 md:h-48 rounded-lg bg-gradient-to-b from-[#54CF68] to-[#00827A] flex flex-col items-center justify-center text-white overflow-hidden">
          <img
            src={vector1}
            alt="vector-left"
            className="absolute top-0 left-0 h-full object-contain opacity-80"
          />
          <img
            src={vector1}
            alt="vector-right"
            className="absolute top-0 right-0 h-full object-contain opacity-80 transform -scale-x-100"
          />
          <h2 className="text-base md:text-lg font-medium">Resolved</h2>
          <p className="text-3xl md:text-4xl font-bold">0</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
