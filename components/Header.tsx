'use client';

import Link from 'next/link';
import MenuIcon from './icons/MenuIcon';
import { useState } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="flex justify-end px-5 sm:justify-center mt-3 fixed w-full z-30">
      <nav
        className={`flex flex-col w-full sm:flex-row items-center sm:w-fit sm:pl-6 bg-[#ffffff14] sm:h-[44px] sm:border border-[#4d4d4d] shadow rounded-2xl sm:rounded-full text-sm text-[#ffffffcc] font-semibold transition-all ${
          mobileOpen ? 'w-full' : '!w-[45px] sm:!w-auto'
        }`}
        style={{ backdropFilter: 'blur(10px)' }}
      >
        <MenuIcon mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        <ul
          className={`flex flex-col sm:hidden gap-5 w-full text-2xl pt-0 transition-all duration-500 ${
            mobileOpen
              ? 'opacity-100 max-h-[300px] p-5'
              : 'opacity-0 max-h-0 p-0'
          }`}
        >
          <li>
            <Link className="hover:text-[#c6fca6] transition-all px-2" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[#c6fca6] transition-all px-2"
              href="/about"
            >
              Works
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[#c6fca6] transition-all px-2"
              href="/services"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[#c6fca6] transition-all px-2"
              href="/contact"
            >
              FAQ
            </Link>
          </li>
        </ul>
        <ul className="hidden sm:flex gap-5 items-center">
          <li>
            <Link className="hover:text-[#c6fca6] transition-all px-2" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[#c6fca6] transition-all px-2"
              href="/about"
            >
              Works
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[#c6fca6] transition-all px-2"
              href="/services"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[#c6fca6] transition-all px-2"
              href="/contact"
            >
              FAQ
            </Link>
          </li>
          <li className="flex items-center mr-0.5 px-4 bg-white h-[39px] text-black rounded-full">
            <Link href="/contact">Let&apos;s talk</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
