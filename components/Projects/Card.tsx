import Image from 'next/image';
import ArrowIcon from '../icons/ArrowIcon';
import CheckedIcon from '../icons/CheckedIcon';
import { forwardRef } from 'react';

const Card = forwardRef<HTMLDivElement>((props, ref) => (
  <div ref={ref} style={{ transformOrigin: '50% 0%' }} className="sticky top-0">
    <div
      className="rounded-[32px] border border-[#ffffff1a] bg-[#2e4746] relative  w-full overflow-hidden"
      ref={ref}
    >
      <div className="opacity-25 absolute inset-0 rounded-lg">
        <div
          className="w-full h-full opacity-40"
          style={{
            backgroundSize: '128px',
            backgroundRepeat: 'repeat',
            backgroundImage: 'url(/images/granular.png)',
          }}
        ></div>
      </div>
      <div
        className="bg-[#6b9627] rounded-full absolute w-[425px] h-[720px] right-[60px] bottom-[-550px]"
        style={{ filter: 'blur(465px)' }}
      ></div>
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 pb-0 md:pb-10 px-7 py-7 xl:px-20 xl:py-16 pr-7 md:pr-10 relative">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 lg:gap-2 xl:gap-5">
            <div className="flex gap-2 font-extrabold tracking-wider text-sm">
              <p
                className="bg-clip-text"
                style={{
                  backgroundImage:
                    'linear-gradient(99.6983deg, rgb(198, 252, 166) 0%, rgba(167, 252, 238, 0.74) 100%)',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                AIRBNB
              </p>
              <div
                className="bg-clip-text h-1 w-1 rounded-full mt-2.5"
                style={{
                  background:
                    'linear-gradient(99.6983deg, rgb(198, 252, 166) 0%, rgba(167, 252, 238, 0.74) 100%)',
                }}
              />
              <p
                className="bg-clip-text"
                style={{
                  backgroundImage:
                    'linear-gradient(99.6983deg, rgb(198, 252, 166) 0%, rgba(167, 252, 238, 0.74) 100%)',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                2023
              </p>
            </div>
            <p className="font-pockota text-2xl xl:text-[38px] xl:leading-[3rem]">
              Curating AR experiences while travelling
            </p>
            <div className="flex flex-col gap-6">
              <div className="bg-[#ffffff1a] w-full h-[1px]" />
              <ul className="flex flex-col text-[#ffffffcc] xl:text-lg font-light gap-4">
                <li className="flex items-center gap-2">
                  <CheckedIcon />
                  Onboarding increased to 12%.
                </li>
                <li className="flex items-center gap-2">
                  <CheckedIcon />
                  Onboarding increased to 12%.
                </li>
                <li className="flex items-center gap-2">
                  <CheckedIcon />
                  Onboarding increased to 12%.
                </li>
              </ul>
            </div>
          </div>
          <button className="flex items-center justify-center gap-2 hover:rotate-2 hover:scale-95 transition-all duration-300 bg-white border border-[#ffffff33] rounded-xl text-black font-semibold py-2.5 px-8 w-full md:w-fit">
            Me contacter
            <ArrowIcon color="black" />
          </button>
        </div>
        <div className="mx-auto md:h-1 mb-[-300px] md:mb-auto">
          <Image
            className="w-[300px] xl:w-[500px]"
            src="/images/iphone_preview.png"
            alt="iphone"
            width={500}
            height={350}
          />
        </div>
      </div>
    </div>
  </div>
));

Card.displayName = 'Card';

export default Card;
