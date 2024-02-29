'use client';
import React from 'react';
import { WavyBackground } from './ui/wavy-background';
import { AnimatedTooltip } from '../components/ui/animated-tooltip';

function Instructers() {
  const instructers = [
    {
      id: 1,
      name: 'Zeeshan Mukhtar',
      designation: 'CEO & Founder',
      image:
        'https://res.cloudinary.com/di611res2/image/upload/v1709050109/1701674444512_o1qrce.jpg',
    },
    {
      id: 2,
      name: 'John Doe',
      designation: 'Java Instructor',
      image:
        'https://res.cloudinary.com/di611res2/image/upload/v1709050109/1701674444512_o1qrce.jpg',
    },
    {
      id: 3,
      name: 'Jane Doe',
      designation: 'Python Instructor',
      image:
        'https://res.cloudinary.com/di611res2/image/upload/v1709050109/1701674444512_o1qrce.jpg',
    },
    {
      id: 4,
      name: 'John Smith',
      designation: 'React Instructor',
      image:
        'https://res.cloudinary.com/di611res2/image/upload/v1709050109/1701674444512_o1qrce.jpg',
    },
    {
      id: 5,
      name: 'Jane Smith',
      designation: 'JavaScript Instructor',
      image:
        'https://res.cloudinary.com/di611res2/image/upload/v1709050109/1701674444512_o1qrce.jpg',
    },
  ];

  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl text-center font-bold text-white mb-8">
          Meet our instrcuters
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex  w-full items-center justify-center mb-10 ">
          <AnimatedTooltip items={instructers} />
        </div>
      </WavyBackground>
    </div>
  );
}

export default Instructers;
