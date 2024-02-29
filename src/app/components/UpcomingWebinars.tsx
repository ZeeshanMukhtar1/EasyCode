'use client';
import Link from 'next/link';
import React from 'react';

function UpcomingWebinars() {
  const featuredWebinars = [
    {
      title: 'Python for Beginners',
      description:
        'Unlock the power of Python with our beginner-friendly workshop',
      slug: 'python-for-beginners',
      isFeatured: true,
    },
    {
      title: 'JavaScript Essentials',
      description:
        'Master the fundamentals of JavaScript in a hands-on coding session',
      slug: 'javascript-essentials',
      isFeatured: true,
    },
    {
      title: 'Web Development Bootcamp',
      description:
        'Dive into full-stack web development with our intensive bootcamp',
      slug: 'web-development-bootcamp',
      isFeatured: true,
    },
    {
      title: 'Data Science Crash Course',
      description:
        'Explore the world of data science with our crash course on key concepts',
      slug: 'data-science-crash-course',
      isFeatured: true,
    },
    {
      title: 'ReactJS Workshop',
      description:
        'Build interactive UIs with ReactJS in our hands-on workshop',
      slug: 'reactjs-workshop',
      isFeatured: true,
    },
    {
      title: 'Hackathon: CodeFest 2024',
      description:
        'Join us for a coding extravaganza with prizes and recognition',
      slug: 'codefest-2024',
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Upcoming Webinars
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold text-white sm:text-4xl">
            Learn from the best in the industry
          </p>
        </div>
        <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {featuredWebinars.map((webinar) => (
            <a
              href={`/webinars/${webinar.slug}`}
              key={webinar.slug}
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {webinar.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {webinar.description}
              </p>
            </a>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href={'/'} className="px-4 py-2 text-neutral-700 ">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            >
              View All Webinars
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
