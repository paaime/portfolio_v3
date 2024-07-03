'use client';

import { useEffect, useRef } from 'react';
import Card from './Card';
import { animate, scroll } from 'motion';

export default function CardsList() {
  const cardsWrapperRef = useRef(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cardsWrapper = cardsWrapperRef.current;
    const cards = cardRefs.current;
    const numCards = cards.length;

    if (!cardsWrapper) return;

    cards.forEach((card, index0) => {
      const index = index0 + 1;
      const reverseIndex0 = numCards - index;

      // Extra padding per card, so you can see the other stacked cards underneath at the top
      card.style.paddingTop = `calc(${index} * 2.5em)`;

      // Scroll-Linked Animation
      scroll(
        animate(card, {
          // Earlier cards shrink more than later cards
          scale: [1, 1 - 0.1 * reverseIndex0],
          //   opacity: [1, 1 - 0.5 * reverseIndex0],
          filter: ['blur(3px)'],
        }),
        {
          // Each card should only shrink when it’s at the top.
          // We can’t use exit on the els for this (as they are sticky)
          // but can track cardsWrapper instead.
          target: cardsWrapper,
          offset: [
            `${(index0 / numCards) * 100}%`,
            `${(index / numCards) * 100}%`,
          ],
        }
      );
    });
  }, []);
  return (
    <div
      className="flex flex-col items-center  md:max-w-3xl xl:max-w-5xl w-full mx-auto"
      ref={cardsWrapperRef}
    >
      {['One', 'Two', 'Three', 'Four'].map((value, index) => (
        <Card key={index} ref={(el: any) => (cardRefs.current[index] = el)} />
      ))}
    </div>
  );
}
