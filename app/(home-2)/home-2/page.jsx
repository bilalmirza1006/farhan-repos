'use client';

import Button from '@/app/(components)/ui/Button';
import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen bg-pink-500">
      <section className="relative h-screen flex items-center justify-start overflow-hidden pt-20 max-w-[1440px] mx-auto">
        <div className='text-white max-w-xl flex flex-col gap-4 items-start'>
          <h1 className='text-6xl font-semibold'>No More Stress, <br /> just progress</h1>
          <p className='text-xl font-medium'>Alex is a Real Get2Uni Member</p>
          <Button text="Get Started" bg="bg-white" color="text-black" />
        </div>
      </section>

    </div>
  );
};

export default Page;

