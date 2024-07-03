import CardsList from './CardsList';

export default function Projects() {
  return (
    <div id="projects" className="flex flex-col md:gap-8 px-10 bg-[#081822]">
      <div
        className="absolute right-0 overflow-hidden h-[565px] w-full"
        style={{
          background:
            'linear-gradient(180deg,#051218 0%,rgba(18,24,30,0) 100%)',
        }}
      />
      <div
        className="rounded-full absolute left-[-800px] w-[815px] h-[1365px] top-[1900px]"
        style={{
          filter: 'blur(465px)',
          background:
            'linear-gradient(99.69833281472663deg,#c6fca6 0%,rgba(167,252,238,.7400000095367432) 100%)',
        }}
      />
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
          <h3 className="font-pockota text-2xl md:text-5xl">Quelque projets</h3>
          <p className="text-sm md:text-xl">
            Une liste des quelques projets que j&apos;ai pu réaliser.
          </p>
        </div>
      </div>
      <CardsList />
    </div>
  );
}
