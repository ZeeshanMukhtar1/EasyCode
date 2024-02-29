'use client';
import React from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

const testimonialsArray = [
  {
    quote:
      'The coding courses here have been instrumental in my learning journey. The hands-on projects and real-world applications helped me apply theoretical knowledge to practical scenarios. I highly recommend these courses for anyone serious about mastering coding skills.',
    name: 'Alexandra Johnson',
    title: 'Web Developer',
  },
  {
    quote:
      "I've tried various online platforms, but this one stands out with its interactive and engaging coding challenges. The instructors are knowledgeable, and the community support is phenomenal. I'm proud to say I've found my coding home here!",
    name: 'Michael Rodriguez',
    title: 'Software Engineer',
    ve: undefined,
  },
  {
    quote:
      'As a beginner in coding, I was apprehensive, but these courses made the learning journey enjoyable. The well-structured courses, clear explanations, and supportive community made me feel confident in my coding abilities. Thank you!',
    name: 'Emily Chen',
    title: 'Aspiring Developer',
  },
  {
    quote:
      'These courses provide a comprehensive curriculum that covers the latest technologies. The courses are not just about learning syntax; they focus on problem-solving and building practical skills. These courses have truly elevated my coding expertise.',
    name: 'Daniel Patel',
    title: 'Full-stack Developer',
  },
  {
    quote:
      'I appreciate the commitment to quality. The courses are regularly updated to reflect industry trends, and the instructors go the extra mile to ensure students grasp complex concepts. These courses have been instrumental in my career growth.',
    name: 'Jessica Carter',
    title: 'Tech Enthusiast',
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
            items={testimonialsArray}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialsCard;
