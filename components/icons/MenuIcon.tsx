import { Dispatch, SetStateAction } from 'react';

export default function MenuIcon({
  mobileOpen,
  setMobileOpen,
}: {
  mobileOpen: boolean;
  setMobileOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      onClick={() => setMobileOpen((prev: boolean) => !prev)}
      className={`flex flex-col self-end items-center justify-center gap-2 h-[44px] w-[44px] cursor-pointer sm:hidden`}
    >
      <div className="rounded-lg bg-[#666666] w-[20px] h-[2px]"></div>
      <div className="rounded-lg bg-[#666666] w-[20px] h-[2px]"></div>
    </div>
  );
}
