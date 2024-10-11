"use client";

import Quiz from "@/app/templates/quiz/quiz";
import { useState } from "react";
import Navbar from "@/app/components/Navbar/navbar"; 

const Formula1 = () => {
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
        pageTitle="Formula-1 QUIZ" 
      />
     <div>
      <Quiz sport="formula1"/>
     </div>
    </div>
  );
};

export default Formula1;
