"use client";

import { FC } from "react";
import Image from "next/image";
import Moon from "../../../public/fluent_weather-moon-16-regular.svg";
import Sun from "../../../public/fluent_weather-sunny-16-regular.svg";

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  pageTitle: string;
}

const Navbar: FC<NavbarProps> = ({ isDarkMode, toggleDarkMode, pageTitle }) => {
  return (
    <nav
      className={`${
        isDarkMode ? "bg-[#313E51] text-white" : "bg-white text-black"
      } transition-colors duration-500 h-[40px] sm:h-[56px] lg:h-[70px] w-[375px] sm:w-[768px] lg:w-[1519px] shadow-md`}
    >
      <div className="flex items-center justify-between h-full mr-5">
        <h1 className="ml-5 text-lg">{pageTitle}</h1>
        <div className="flex items-center">
          <div className="relative w-[16px] h-[16px] sm:w-[24px] sm:h-[24px] lg:w-[32px] lg:h-[32px]">
            <Image src={Sun} alt="Sun Icon" layout="fill" objectFit="contain" />
          </div>

          <label className="relative inline-block w-14 h-8 ml-4">
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={toggleDarkMode}
              className="hidden peer"
            />
            <span className="absolute inset-0 bg-purple-800 border border-purple-800 rounded-full cursor-pointer transition-all duration-500 peer-checked:bg-purple-800 peer-checked:border-purple-800"></span>
            <span className="absolute left-1 bottom-1 h-6 w-6 bg-white rounded-full transition-all duration-500 peer-checked:translate-x-6 peer-checked:bg-white"></span>
          </label>

          <div className="relative w-[16px] h-[16px] sm:w-[24px] sm:h-[24px] lg:w-[32px] lg:h-[32px] ml-3">
            <Image
              src={Moon}
              alt="Moon Icon"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
