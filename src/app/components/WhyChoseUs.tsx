'use client';
import React from 'react';
import { StickyScroll } from './ui/sticky-scroll-reveal';

const musicSchollContent = [
  {
    title: 'Interactive Music Courses',
    description:
      'Immerse yourself in interactive music courses designed for collaboration with fellow learners, instructors, and music enthusiasts. Explore diverse musical genres, share creative ideas, and enhance your skills with real-time collaboration features. Our platform fosters a dynamic learning environment for aspiring musicians.',
  },
  {
    title: 'Live Session Experiences',
    description:
      'Witness live changes as they unfold during interactive sessions. Our platform allows you to observe real-time demonstrations, receive immediate feedback, and engage in discussions with instructors and peers. No more waiting for updates—experience the excitement of live music learning.',
  },
  {
    title: 'Harmony in Versioning',
    description:
      'Embrace the harmony of version control tailored for musicians. Our platform ensures you always have access to the latest content, eliminating confusion and manual updates. Stay in tune with the latest lessons, collaborate seamlessly, and maintain the rhythm of your musical journey.',
  },
  {
    title: 'Exploring Musical Genres',
    description:
      "Dive into a world of musical exploration with real-time updates on course content. Our platform eliminates versioning stress, ensuring you're always connected to the most recent lessons. Stay in sync with the diverse musical landscape, collaborate effortlessly, and enjoy a continuous flow of learning.",
  },
];
function WhyChoseUs() {
  return (
    <div>
      <StickyScroll content={musicSchollContent} />
    </div>
  );
}

export default WhyChoseUs;
