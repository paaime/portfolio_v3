'use client';

import Image from 'next/image';
import StarIcon from '../icons/StarIcon';
import Lottie from 'lottie-react';

export default function WordpressCard() {
  return (
    <div className="group bg-[#0a1e29] rounded-[18px] transition-all cursor-pointer relative overflow-hidden wordpress-card">
      <div
        className="flex items-end bg-[#07151d] rounded-2xl border-[0.5px] border-[#70707029] m-1 p-4 md:p-7 overflow-hidden relative"
        style={{
          height: 'calc(100% - 0.5rem)',
          boxShadow:
            'rgb(7, 21, 28) -2px -2px 5px 0px inset, rgb(7, 21, 28) 2px 2px 3px 0px inset, rgba(6, 21, 29, 0.65) 0px 2px 10px 2px',
        }}
      >
        <div className="flex flex-col gap-[10px] w-full h-full">
          <div
            className="rounded-full absolute left-0 w-[110px] h-[1365px] top-0 group-hover:opacity-100 opacity-0 transition-all"
            style={{
              filter: 'blur(465px)',
              background:
                'linear-gradient(99.69833281472663deg,#c6fca6 0%,rgba(167,252,238,.7400000095367432) 100%)',
            }}
          />
          <div className="flex items-center justify-center h-[150px] md:h-[250px]">
            <Image
              src="/images/wordpress.webp"
              height={150}
              width={150}
              alt="Wordpress"
              className="group-hover:rotate-[-12deg] transition-all duration-300 w-[100px] md:w-[150px]"
            />
          </div>

          <div className="flex gap-[10px] items-center">
            <StarIcon className="fill-[#a0dfb4] rotate-[20deg] md:h-[40px] md:w-[40px] group-hover:rotate-45 transition-all" />
            <p className="md:text-xl font-medium tracking-wide group-hover:text-[#c6fca6] transition-all">
              Wordpress
            </p>
          </div>
          <p className="text-sm md:text-base text-[#ffffff80] tracking-wide">
            Impactfull Visual Storytelling Mastery
          </p>
        </div>
      </div>
    </div>
  );
}
