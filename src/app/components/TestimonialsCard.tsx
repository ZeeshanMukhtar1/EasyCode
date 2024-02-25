'use client';
import React from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

const quotesArray = [
  {
    quote:
      'Success is not final, failure is not fatal: It is the courage to continue that counts.',
    name: 'Winston Churchill',
    title: 'Former Prime Minister of the United Kingdom',
  },
  {
    quote: 'The only way to do great work is to love what you do.',
    name: 'Steve Jobs',
    title: 'Co-founder of Apple Inc.',
  },
  {
    quote:
      'The future belongs to those who believe in the beauty of their dreams.',
    name: 'Eleanor Roosevelt',
    title: 'Former First Lady of the United States',
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
    name: 'Bill Gates',
    title: 'Co-founder of Microsoft',
  },
  {
    quote:
      'In the end, we will remember not the words of our enemies, but the silence of our friends.',
    name: 'Martin Luther King Jr.',
    title: 'Civil Rights Leader',
  },
];

function TestimonialsCard() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-center text-3xl mt-6 font-bold z-10">
        Hear our hormoney : voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={quotesArray}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialsCard;
