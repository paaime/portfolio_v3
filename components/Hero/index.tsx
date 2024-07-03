import Image from 'next/image';
import Circles from './Circles';
import Gradient from './Gradient';
import LightSource from './LightSource';
import Stars from './Stars';
import Granular from './Granular';
import ArrowIcon from '../icons/ArrowIcon';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="flex flex-col justify-center gap-8 h-[100vh] bg-[#081822] relative overflow-hidden px-10">
      <Granular />
      <LightSource />
      <Circles />
      <Gradient />
      <Stars />
      <div className="flex flex-col items-center animation-rotate">
        <Image
          className="-mb-2 rotate-1"
          src="/images/logo.webp"
          width={80}
          height={80}
          alt="logo"
        />
        <div className="flex items-center gap-3 bg-[#001402cc] border-[0.5px] border-[#061e17] rounded-xl text-sm text-[#ffffffcc] font-medium px-6 py-2 z-10">
          <div className="absolute animate-ping w-2.5 h-2.5 rounded-full bg-[#45c24f]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#45c24f]"></div>
          <p>Ouvert aux opportunités</p>
        </div>
      </div>
      <div className="flex flex-col items-center text-center gap-8 z-10 animation-fade-in">
        <h1 className="font-pockota text-3xl leading-[40px] md:text-5xl md:leading-[70px]">
          Paul-Arthur AIMÉ,
          <br />
          Développeur Web passionné
        </h1>
        <p className="text-[#ffffff66] font-medium">
          Je suis développeur web fullstack.
          <br />
          Passionné par le code et la technologie.
        </p>
        <div className="flex flex-col md:flex-row gap-4 w-full  max-w-[400px] font-semibold">
          <button className="hover:rotate-2 hover:scale-95 transition-all duration-300 bg-white border border-[#ffffff33] rounded-xl text-black py-2.5 md:w-1/2">
            <span className="mr-1">👋</span> Me contacter
          </button>
          <Link href="#projects" className="hover:rotate-2 hover:scale-95 transition-all duration-300 flex items-center justify-center gap-1 bg-[#081822] border border-[#ffffff33] rounded-xl text-white py-2.5 md:w-1/2">
            Mes projets
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}
