'use client';
import React from 'react';
import { StickyScroll } from './ui/sticky-scroll-reveal';

const codecontent = [
  {
    title: 'Comprehensive Code Courses',
    description:
      'Unlock in-depth knowledge with our comprehensive code courses covering the latest technologies and best practices.',
  },
  {
    title: 'Hands-On Learning Experience',
    description:
      'Immerse yourself in hands-on coding experiences and real-world projects to reinforce your learning and gain practical skills.',
  },
  {
    title: 'Expert Instructors',
    description:
      'Learn from industry experts and experienced instructors who are passionate about sharing their knowledge and insights with you.',
  },
  {
    title: 'Flexible Learning Paths',
    description:
      'Tailor your learning journey with flexible courses and learning paths designed to meet your specific goals and skill level.',
  },
  {
    title: 'Interactive Coding Challenges',
    description:
      'Sharpen your coding skills with interactive challenges and assessments, ensuring a dynamic and engaging learning experience.',
  },
  {
    title: 'Community Support',
    description:
      'Join a vibrant community of learners, collaborate with peers, and get support from our community forums to enhance your learning.',
  },
];
function WhyChoseUs() {
  return (
    <div>
      <StickyScroll content={codecontent} />
    </div>
  );
}

export default WhyChoseUs;
