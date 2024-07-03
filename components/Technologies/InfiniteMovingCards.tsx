'use client';

import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items: {
    picture: string;
    name: string;
  }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      //   containerRef.current.style.setProperty('--animation-duration', '10000s');
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] min-w-full',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          ' flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
          start && 'animate-scroll ',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item, idx) => (
          <li
            className="bg-[#071823] max-w-full relative rounded-2xl border border-[#ffffff1a] flex-shrink-0 w-[175px] h-[175px]  hover:border-[#c6fca674] hover:rotate-[-1deg] hover:bg-[#0b2332] transition-all duration-300 hover:scale-95"
            key={item.name}
          >
            <Link
              href=""
              className="flex flex-col justify-center items-center gap-3 h-full"
            >
              <div
                className="absolute w-full h-full opacity-[0.5] top-0 left-0 rounded-2xl bg-repeat bg-cover"
                style={{
                  backgroundImage: "url('/images/abstract.png')",
                }}
              ></div>
              <div className="flex items-center h-[100px]">
                <Image
                  src={`/images/technologies/${item.picture}`}
                  alt={item.name}
                  width={75}
                  height={75}
                  className="z-10"
                />
              </div>
              <p className="font-medium tracking-wide">{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
