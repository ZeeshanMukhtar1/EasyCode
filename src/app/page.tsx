import Image from 'next/image';
import Herosections from './components/Herosections';
import FeaturedCourses from './components/FeaturedCourses';
import WhyChoseUs from './components/WhyChoseUs';

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Herosections />
      <FeaturedCourses />
      <WhyChoseUs />
    </main>
  );
}
