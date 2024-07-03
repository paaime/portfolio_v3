import Image from 'next/image';
import StarIcon from '../icons/StarIcon';
import DevCard from './DevCard';
import UxCard from './UxCard';
import WordpressCard from './WordpressCard';
import IaCard from './IaCard';

export default function Skills() {
  return (
    <div className="flex flex-col px-10 md:max-w-4xl xl:max-w-6xl mx-auto gap-10 md:gap-20 mb-28 md:mb-40">
      <div className="flex flex-col items-center text-center gap-5 md:gap-6 z-10">
        <p
          className="tracking-[0.5em] uppercase text-xs md:text-sm bg-clip-text font-semibold"
          style={{
            backgroundImage:
              'linear-gradient(99.6983deg, rgb(198, 252, 166) 0%, rgba(167, 252, 238, 0.74) 100%)',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Mes projects
        </p>
        <div className="flex flex-col gap-3 md:gap-4">
          <h3 className="font-pockota text-2xl md:text-5xl">Mes compétences</h3>
          <p className="text-sm md:text-xl">
            Une liste des quelques projets que j&apos;ai pu réaliser.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-4 md:grid-rows-6 xl:grid-cols-5 xl:grid-rows-4 gap-5 lg:h-[1200px] xl:h-[750px]">
        <DevCard />
        <WordpressCard />
        <UxCard />
        <IaCard />
      </div>
    </div>
  );
}
