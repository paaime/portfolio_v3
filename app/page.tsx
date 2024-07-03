import AboutMe from '@/components/AboutMe';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Questions from '@/components/Questions';
import Skills from '@/components/Skills';
import Technologies from '@/components/Technologies';
import TextBanner from '@/components/TextBanner';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-[#081822]">
      <Hero />
      <Projects />
      <TextBanner />
      <Skills />
      <Technologies />
      <AboutMe />
      <Questions />
    </main>
  );
}
