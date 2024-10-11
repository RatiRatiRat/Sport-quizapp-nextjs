"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar/navbar"; 
import Quiz from "@/app/templates/quiz/quiz";

const Motogp = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <div
      className={`${
        isDarkMode ? "bg-[#313E51] text-white" : "bg-white text-[#313E51]"
      } w-[375px] sm:w-[768px] lg:w-[1519px] h-[960px] m-auto transition-colors duration-500`}
    >
      <Navbar
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        pageTitle="Motogp-Quiz" 
      />
     <div>
      <Quiz sport={"motogp"}/>
     </div>
    </div>
  );
};

export default Motogp;
