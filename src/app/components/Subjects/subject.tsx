"use client";

import Image from "next/image";
import Link from "next/link";
import race from "../../../public/race-icon.png";
import lemans from "../../../public/24h-le-mans-new-logo.png";
import ucl from "../../../public/ucl-icon.png";
import moto from "../../../public/motogp.png";

interface SubjectProps {
  isDarkMode: boolean;
}

const Subject: React.FC<SubjectProps> = ({ isDarkMode }) => {
  return (
    <div className="w-[375px] h-[320px] font-rubik mt-[40px] block sm:mt-[107px] sm:ml-[24px] lg:mt-[80px] lg:ml-[172px] sm:w-[640px] sm:h-[320px] lg:w-[564px] lg:h-[400px]">
      <Link href="/pages/formula1">
        <div
          className={`w-[327px] h-[60px] rounded-2xl ml-[24px] mt-[30px] flex items-center sm:w-[640px] sm:h-[80px] sm:mt-[24px] lg:mt-[24px] lg:w-[564px] lg:h-[96px] ${
            isDarkMode ? "bg-[#3B4D66]" : "bg-white"
          } transition-colors duration-300 cursor-pointer`}
        >
          <Image
            className="rounded-md ml-[16px]"
            src={race}
            alt="Formula 1 icon"
            width={40}
            height={40}
          />
          <h1 className="ml-[16px] sm:ml-[32px] text-[18px] sm:text-[28px] font-medium">
            FORMULA 1
          </h1>
        </div>
      </Link>

      <Link href="/pages/Lemans">
        <div
          className={`w-[327px] h-[60px] ml-[24px] mt-[30px] rounded-2xl flex items-center sm:w-[640px] sm:h-[80px] sm:mt-[24px] lg:mt-[24px] lg:w-[564px] lg:h-[96px] ${
            isDarkMode ? "bg-[#3B4D66]" : "bg-white"
          } transition-colors duration-300 cursor-pointer`}
        >
          <Image
            className="rounded-md ml-[16px]"
            src={lemans}
            alt="24H Le Mans icon"
            width={40}
            height={40}
          />
          <h1 className="ml-[16px] sm:ml-[32px] text-[18px] sm:text-[28px] font-medium">
            24H LE MANS
          </h1>
        </div>
      </Link>

      <Link href="/pages/UCL">
        <div
          className={`w-[327px] h-[60px] rounded-2xl mt-[30px] ml-[24px] flex items-center sm:w-[640px] sm:mt-[24px] lg:mt-[24px] sm:h-[80px] lg:w-[564px] lg:h-[96px] ${
            isDarkMode ? "bg-[#3B4D66]" : "bg-white"
          } transition-colors duration-300 cursor-pointer`}
        >
          <Image
            className="rounded-md ml-[16px]"
            src={ucl}
            alt="UCL icon"
            width={40}
            height={40}
          />
          <h1 className="ml-[16px] sm:ml-[32px] text-[18px] sm:text-[28px] font-medium">
            UEFA Champions League
          </h1>
        </div>
      </Link>

      <Link href="/pages/Motogp">
        <div
          className={`w-[327px] h-[60px] mt-[30px] rounded-2xl ml-[24px] flex items-center sm:w-[640px] sm:mt-[24px] lg:mt-[24px] sm:h-[80px] lg:w-[564px] lg:h-[96px] ${
            isDarkMode ? "bg-[#3B4D66]" : "bg-white"
          } transition-colors duration-300 cursor-pointer`}
        >
          <Image
            className="rounded-md ml-[16px]"
            src={moto}
            alt="MotoGP icon"
            width={40}
            height={40}
          />
          <h1 className="ml-[16px] sm:ml-[32px] text-[18px] sm:text-[28px] font-medium">
            Moto-GP
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default Subject;
