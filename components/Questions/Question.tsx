import { Dispatch, SetStateAction } from 'react';
import ArrowUpIcon from '../icons/ArrowUpIcon';

export default function Question({
  active,
  setActive,
  index,
}: {
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
  index: number;
}) {
  return (
    <div
      className={`flex flex-col border border-[#ffffff1a] rounded-xl p-4 cursor-pointer hover:bg-[#0a1d29] transition-all duration-500 gap-3 overflow-hidden ${
        active === index ? 'max-h-[500px]' : 'max-h-[60px]'
      }`}
      onClick={() => setActive(index)}
    >
      <div className="flex justify-between items-center">
        <p className="text-base md:text-lg font-medium">
          Are you available to hier full time ?
        </p>
        <div
          className={`${
            active === index ? 'rotate-[180deg]' : 'rotate-0'
          } transition-all duration-300`}
        >
          <ArrowUpIcon />
        </div>
      </div>
      <p
        className={`transition-all duration-300 text-sm md:text-base text-[#ffffffa6] leading-[150%]`}
      >
        At the moment, I&apos;m pretty happy where I am. Currently I am not
        looking for any full-time opportunities. But that being said, I am
        always open to discuss interesting opportunities, collaborations and
        other fun stuff. If you&apos;re interested in discussing a project,
        making something great together,please fill the form above. Simply want
        to get get in touch?
      </p>
    </div>
  );
}
