import Image from 'next/image';
import ArrowRightIcon from '../icons/ArrowRightIcon';

export default function AboutMe() {
  return (
    <div className="flex flex-col md:flex-row  gap-14 md:gap-20 md:max-w-4xl xl:max-w-6xl mx-auto items-center px-10 mb-28 md:mb-40">
      <div className="flex flex-col gap-5 md:w-2/3">
        <div className="flex flex-col gap-6">
          <p
            className="uppercase tracking-[0.4em] bg-clip-text text-xs md:text-sm font-semibold"
            style={{
              backgroundImage:
                'linear-gradient(99.6983deg, rgb(198, 252, 166) 0%, rgba(167, 252, 238, 0.74) 100%)',
              WebkitTextFillColor: 'transparent',
            }}
          >
            About me
          </p>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl md:text-5xl font-pockota">Know who am I</h3>
            <p className="text-sm md:text-xl font-light">
              My journey in few words
            </p>
          </div>
        </div>
        <p className="text-[#ffffff80] xl:text-xl font-light leading-[150%]">
          I’ve designed multiple web & mobile experiences for
          multi-cross-platform devices from TV to Ipads, etc. I&apos;ve worked
          with small agencies and also with medium-sized companies. I previously
          worked with one of India&apos;s largest Ed-Tech startups, Toppr which
          later got acquired by Byjus. Currently I&apos;m designing aesthetic
          and functional solutions for smallcase within the invest team, to
          enhance financial accessibility and understanding for Indian users.
        </p>
        <button className="text-sm md:text-base tracking-wide hover:rotate-2 hover:scale-95 transition-all duration-300 flex items-center justify-center gap-3 bg-[#081822] border border-[#ffffff33] rounded-xl text-white px-9 py-2.5 w-full md:w-fit font-medium">
          Mes projets
          <ArrowRightIcon />
        </button>
      </div>
      <div
        className="w-3/4 md:w-1/3 bg-white rotate-[3deg] md:rotate-[8deg] h-full md:h-[255px] xl:h-[365px]"
        style={{
          boxShadow: 'inset -1px 1px 4px #716f6f3b,2px 2px 4px #0b1a23',
        }}
      >
        <Image
          src="/images/picture.png"
          width={200}
          height={200}
          alt="Picture"
          className="w-full p-[10px] md:p-[13px]"
        />
      </div>
    </div>
  );
}
