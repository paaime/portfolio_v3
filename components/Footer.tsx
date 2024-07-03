import Link from 'next/link';
import ArrowIcon from './icons/ArrowIcon';

export default function Footer() {
  return (
    <footer className="bg-[#081822] overflow-hidden relative">
      <div
        className="absolute h-[300px] opacity-25 bottom-[-150px] md:bottom-0 w-[1000px] md:w-full"
        style={{
          filter: 'blur(27px)',
          background:
            'radial-gradient(50% 50% at 50% 50%,var(--token-1c3ef386-e911-4d2c-b5df-a24addbef2fd, #c6fca6) 0%,rgba(7,24,34,.42) 100%)',
        }}
      />
      <div className="flex flex-col gap-6 items-start md:items-center border-t border-[#ffffff1c] mx-10 py-6">
        <ul className="flex flex-col md:flex-row text-sm font-semibold text-[#ffffffcc] gap-6 md:gap-8">
          <li className="flex gap-1 hover:gap-1.5 transition-all duration-200 hover:text-[#c6fca6]">
            <Link href="">Linkedin</Link>
            <ArrowIcon />
          </li>
          <li className="flex gap-1 hover:gap-1.5 transition-all duration-200 hover:text-[#c6fca6]">
            <Link href="">Linkedin</Link>
            <ArrowIcon />
          </li>
          <li className="flex gap-1 hover:gap-1.5 transition-all duration-200 hover:text-[#c6fca6]">
            <Link href="">Linkedin</Link>
            <ArrowIcon />
          </li>
          <li className="flex gap-1 hover:gap-1.5 transition-all duration-200 hover:text-[#c6fca6]">
            <Link href="">Linkedin</Link>
            <ArrowIcon />
          </li>
        </ul>
        <p className="text-sm text-[#999999] tracking-wide">
          © 2024 Paul-Arthur Aimé. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
