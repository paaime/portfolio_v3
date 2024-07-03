import Marquee from 'react-fast-marquee';
import StarIcon from './icons/StarIcon';

export default function TextBanner() {
  return (
    <Marquee
      style={{
        background:
        'linear-gradient(99.69833281472663deg,#c6fca6 0%,rgba(167,252,238,.7400000095367432) 100%)',
        rotate: '-1deg',
      }}
      gradient
      gradientColor="#a2dfb0"
      className="tracking-wide uppercase font-bold text-black my-32"
    >
      <p className="mx-2 my-3">User friendly</p>
      <div className="mx-2 my-3">
        <StarIcon className="fill-black" />
      </div>
      <p className="mx-2 my-3">Accessiblity</p>
      <div className="mx-2 my-3">
        <StarIcon className="fill-black" />
      </div>
      <p className="mx-2 my-3">User friendly</p>
      <div className="mx-2 my-3">
        <StarIcon className="fill-black" />
      </div>
      <p className="mx-2 my-3">Accessiblity</p>
      <div className="mx-2 my-3">
        <StarIcon className="fill-black" />
      </div>
      <p className="mx-2 my-3">Accessiblity</p>
      <div className="mx-2 my-3">
        <StarIcon className="fill-black" />
      </div>
      <p className="mx-2 my-3">Accessiblity</p>
      <div className="mx-2 my-3">
        <StarIcon className="fill-black" />
      </div>
      <p className="mx-2 my-3">Accessiblity</p>
      <div className="mx-2 my-3">
        <StarIcon className="fill-black" />
      </div>
      <p className="mx-2 my-3">Accessiblity</p>
      <div className="mx-2 my-3">
        <StarIcon className="fill-black" />
      </div>
    </Marquee>
  );
}
