'use client';

import { useState } from 'react';
import ArrowUpIcon from '../icons/ArrowUpIcon';
import Question from './Question';

export default function Questions() {
  const [active, setActive] = useState<number>(0);

  return (
    <div className="flex flex-col px-10 md:max-w-4xl xl:max-w-6xl mx-auto gap-10 md:gap-20 pb-20 md:pb-40">
      <div className="flex flex-col items-center text-center gap-5 md:gap-6 z-10">
        <p
          className="tracking-[0.5em] uppercase text-xs md:text-sm bg-clip-text font-semibold"
          style={{
            backgroundImage:
              'linear-gradient(99.6983deg, rgb(198, 252, 166) 0%, rgba(167, 252, 238, 0.74) 100%)',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Informations
        </p>
        <div className="flex flex-col gap-3 md:gap-4">
          <h3 className="font-pockota text-2xl md:text-5xl">Des questions ?</h3>
          <p className="text-sm md:text-xl font-light">
            Une liste des quelques projets que j&apos;ai pu réaliser.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <Question active={active} setActive={setActive} index={0} />
        <Question active={active} setActive={setActive} index={1} />
      </div>
      <button className="hover:rotate-2 hover:scale-95 transition-all duration-300 bg-white border border-[#ffffff33] rounded-xl text-black py-2.5 px-10 font-semibold mx-auto">
        <span className="mr-1">👋</span> Me contacter
      </button>
    </div>
  );
}
