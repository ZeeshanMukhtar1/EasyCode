'use client';
import Link from 'next/link';
import React from 'react';
import { HoverEffect } from './ui/card-hover-effect';

function UpcomingWebinars() {
  const featuredWebinars = [
    {
      title: 'understanding music theory',
      description:
        'Learn the basics of music theory and how to read music notation',
      slug: 'understanding-music-theory',
      isFeatured: true,
    },
    {
      title: 'how to play the guitar',
      description: 'Learn to play the guitar from scratch',
      slug: 'how-to-play-the-guitar',
      isFeatured: true,
    },
    {
      title: 'how to play the piano',
      description: 'Learn to play the piano from scratch',
      slug: 'how-to-play-the-piano',
      isFeatured: true,
    },
    {
      title: 'how to play the drums',
      description: 'Learn to play the drums from scratch',
      slug: 'how-to-play-the-drums',
      isFeatured: true,
    },
    {
      title: 'how to play the violin',
      description: 'Learn to play the violin from scratch',
      slug: 'how-to-play-the-violin',
      isFeatured: true,
    },
    {
      title: 'how to play the saxophone',
      description: 'Learn to play the saxophone from scratch',
      slug: 'how-to-play-the-saxophone',
      isFeatured: true,
    },
  ];
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Featured Webnirars
          </h2>
          <p className="mt-2 text-3-xl leading-8 font-extrabold text-white sm:text-4xl">
            Enhace your Musical
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: `/webinars/${webinar.slug}`,
            }))}
          />
        </div>
        <div className="mt-10 text-center">
          <Link
            href={'/'}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
