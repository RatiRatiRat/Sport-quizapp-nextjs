"use client";
import { useState } from 'react';
import Navbar from './components/Navbar/navbar';
import Testimonial from './components/Testimonials/testimonial';
import React from 'react';
import Subject from './components/Subjects/subject';

const Page = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark');  
  };

  return (
    <div
      className={`${
        isDarkMode ? 'bg-[#313E51] text-white' : 'bg-white text-[#313E51]'
      } w-[375px] sm:w-[768px] lg:w-[1519px] h-[960px] m-auto transition-colors duration-500`}
    >
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} pageTitle={''} />
      <div className="block lg:flex ">
        <Testimonial />
        <Subject isDarkMode={isDarkMode}/>
      </div>
    </div>
  );
};

export default Page;
