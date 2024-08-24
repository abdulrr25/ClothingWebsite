import React from 'react';

interface PropsType {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}

const Slide: React.FC<PropsType> = ({ img, title, mainTitle, price }) => {
  return (
    <div className='outline-none border-none relative'>
      <div className='absolute left-4 sm:left-8 lg:left-[70px] max-w-[200px] sm:max-w-[300px] lg:max-w-[350px] top-1/2 transform -translate-y-1/2 space-y-2 lg:space-y-4 bg-[#cbc3c379] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none'>
        <h3 className='text-accent text-[18px] sm:text-[20px] lg:text-[24px]'>{title}</h3>
        <h2 className='text-gray-500 text-[22px] sm:text-[26px] lg:text-[44px] font-bold leading-[1.2]'>
          {mainTitle}
        </h2>
        <h3 className='text-[20px] sm:text-[22px] lg:text-[24px] text-gray-700'>
          Starting at{' '}
          <b className='text-[18px] sm:text-[22px] lg:text-[30px]'>
            {price}
          </b>
          .00
        </h3>
        <div className='bg-accent text-white text-[12px] sm:text-[14px] lg:text-[16px] p-2 rounded-lg inline-block cursor-pointer hover:bg-black'>
          Shop Now
        </div>
      </div>
      <div className='w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-auto rounded-xl object-cover object-center md:object-left-bottom'>
        <img src={img} alt='banner' className='w-full h-full rounded-xl' />
      </div>
    </div>
  );
};

export default Slide;
