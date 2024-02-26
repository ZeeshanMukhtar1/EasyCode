import Image from 'next/image';
import Herosections from './components/Herosections';
import FeaturedCourses from './components/FeaturedCourses';
import WhyChoseUs from './components/WhyChoseUs';
import TestimonialsCard from './components/TestimonialsCard';
import UpcomingWebinars from './components/UpcomingWebinars';

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Herosections />
      <FeaturedCourses />
      <WhyChoseUs />
      <TestimonialsCard />
      <UpcomingWebinars />
    </main>
  );
}
