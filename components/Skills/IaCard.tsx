import Image from 'next/image';
import StarIcon from '../icons/StarIcon';

export default function IaCard() {
  return (
    <div
      className="group bg-[#0a1e29] rounded-[18px] transition-all cursor-pointer relative overflow-hidden ia-card"
    >
      <div
        className="bg-[#07151d] rounded-2xl border-[0.5px] border-[#70707029] m-1 pl-4 pt-4 md:pl-7 md:pt-7 overflow-hidden relative"
        style={{
          height: 'calc(100% - 0.5rem)',
          boxShadow:
            'rgb(7, 21, 28) -2px -2px 5px 0px inset, rgb(7, 21, 28) 2px 2px 3px 0px inset, rgba(6, 21, 29, 0.65) 0px 2px 10px 2px',
        }}
      >
        <div className="flex flex-col gap-[10px]">
          <div
            className="rounded-full absolute left-0 w-[200px] h-[1365px] top-0 group-hover:opacity-100 opacity-0 transition-all"
            style={{
              filter: 'blur(465px)',
              background:
                'linear-gradient(99.69833281472663deg,#c6fca6 0%,rgba(167,252,238,.7400000095367432) 100%)',
            }}
          />
          <div className="flex gap-[10px] items-center">
            <StarIcon className="fill-[#a0dfb4] rotate-[20deg] md:h-[40px] md:w-[40px] group-hover:rotate-45 transition-all" />
            <p className="md:text-xl font-medium tracking-wide group-hover:text-[#c6fca6] transition-all">
              Intelligence Artificielle
            </p>
          </div>
          <p className="text-sm md:text-base text-[#ffffff80] tracking-wide">
            Impactfull Visual Storytelling Mastery
          </p>
          <div className="relative h-[150px] md:h-[250px]">
            <Image
              src="/images/dev.png"
              alt="Vs code"
              width={500}
              height={500}
              className="w-full rounded-lg absolute rotate-[-2deg] left-[20px] top-[25px] opacity-50 group-hover:rotate-0 transition-all duration-300"
            />
            <Image
              src="/images/dev.png"
              alt="Vs code 2"
              width={500}
              height={500}
              className="w-full rounded-lg absolute rotate-[-6deg] left-[20px] top-[25px] group-hover:rotate-0 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
