import Link from 'next/link';
import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { Button } from './ui/moving-border';

function Herosections() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-10">
      <div className="p-4 relative z-10 w-full text-center">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <h1 className="text-5xl  mb-5">Master Coding with Our Courses 🚀</h1>
        <p className="text-justify px-20 mb-20">
          Unlock your potential with our comprehensive code courses and cheat
          sheets to help you get ahead. Our courses are designed to help you
          learn and improve your coding skills. Whether you are a beginner or an
          expert, we have something for you.
        </p>
        <div className="mt-4">
          <Link href={'/cources'}>
            <Button borderRadius="1.75rem" className="">
              Explore cources
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Herosections;
