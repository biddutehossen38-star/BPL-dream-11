import React from 'react';
import Banne from '../assets/banner-main.png'
const Banner = () => {
  return (
    <div className=' bg-blue-200 rounded-4xl'>
      <div className='grid  items-center   container mx-auto m-10 p-10 space-y-4'>
        <div className='mx-auto'>
          <img src={Banne} alt="" className='' />
        </div>
        <h2 className='font- font-semibold text-4xl mx-auto text-[#FFFFFF]'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
        <p className='mx-auto text-[#FFFFFF]'>Beyond Boundaries Beyond Limits</p>
        <button className='bg-yellow-200 rounded-[10px] font-[10px] h-8 w-30 text-[13px] font-semibold mx-auto'>Claim Free Credit</button>
      </div>
    </div>
  );
};

export default Banner;