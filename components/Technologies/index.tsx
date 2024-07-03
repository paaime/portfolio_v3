import { InfiniteMovingCards } from './InfiniteMovingCards';

export default function Technologies() {
  return (
    <div className="flex flex-col  mx-auto gap-10 md:gap-20 mb-28 md:mb-40">
      <div className="flex flex-col items-center text-center gap-5 md:gap-6 z-10 px-10">
        <p
          className="tracking-[0.5em] uppercase text-xs md:text-sm bg-clip-text font-semibold"
          style={{
            backgroundImage:
              'linear-gradient(99.6983deg, rgb(198, 252, 166) 0%, rgba(167, 252, 238, 0.74) 100%)',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Ma tech stacks
        </p>
        <div className="flex flex-col gap-3 md:gap-4">
          <h3 className="font-pockota text-2xl md:text-5xl">Technologie</h3>
          <p className="text-sm md:text-xl">
            Les technologies que j&apos;utilise pour réaliser mes projets.
          </p>
        </div>
      </div>
      <InfiniteMovingCards
        items={[
          {
            name: 'Next.js',
            picture: 'nextjs.webp',
          },
          {
            name: 'Node.js',
            picture: 'nodejs.png',
          },
          {
            name: 'React.js',
            picture: 'react.png',
          },
          {
            name: 'Typescript',
            picture: 'typescript.png',
          },
          {
            name: 'Javascript',
            picture: 'javascript.png',
          },
          {
            name: 'Tailwind CSS',
            picture: 'tailwindcss.png',
          },
          {
            name: 'Wordpress',
            picture: 'wordpress.png',
          },
          {
            name: 'MongoDB',
            picture: 'mongodb.png',
          },
          {
            name: 'MySQL',
            picture: 'mysql.webp',
          },
          {
            name: 'HTML',
            picture: 'html.png',
          },
          {
            name: 'CSS',
            picture: 'css.png',
          },
        ]}
        speed="slow"
      />
    </div>
  );
}
