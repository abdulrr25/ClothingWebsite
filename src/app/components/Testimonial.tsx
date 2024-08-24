import Image from 'next/image';
import React from 'react';

const Testimonial = () => {
  return (
    <div className='container pt-16 pb-16'>
      <h2 className='font-medium text-2xl pb-4 text-center lg:text-left'>Testimonial</h2>
      <div className='grid lg:grid-cols-[300px,1fr] gap-4'>
        <div className='border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0'>
          <div className='text-center flex flex-col items-center gap-2'>
            <Image
              className='rounded-full'
              src={'/user.jpg'}
              width={80}
              height={80}
              alt='dp'
            />
            <h2 className='text-gray-500 font-black text-[18px] sm:text-[20px]'>Abdul Rahman</h2>
            <p className='text-gray-500 text-sm sm:text-base'>CEO & Founder Invasion</p>
            <Image
              className='inline-block py-2'
              src="/quote.jpg"
              width={60}
              height={60}
              alt="quotes"
            />
            <p className='max-w-[200px] text-gray-500 text-sm sm:text-base'>
              A Web Developer
            </p>
          </div>
        </div>
        <div className='bg-red-600 bg-[url(/cta-banner.jpg)] bg-cover h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl grid place-items-center'>
          <div className='bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[400px] lg:min-w-[500px] rounded-xl py-6 sm:py-8 px-4 sm:px-8 grid place-items-center gap-3'>
            <button className='bg-black text-white p-2 rounded-md text-sm sm:text-base'>
              25% DISCOUNT
            </button>
            <h2 className='font-extrabold text-xl sm:text-2xl text-[#272727] text-center'>
              SUMMER COLLECTION
            </h2>
            <p className='text-gray-500 text-sm sm:text-lg text-center'>
              Starting @ $20
            </p>
            <b className='text-sm sm:text-base cursor-pointer'>Shop Now</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
