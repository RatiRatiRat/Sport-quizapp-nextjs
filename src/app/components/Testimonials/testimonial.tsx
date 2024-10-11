"use client";

const Testimonial = () => {
  return (
    <div className="w-[375px] h-[125px] mt-[32px]  ml-[24px] sm:w-[465px] sm:mt-[150px] sm:h-[182px] sm:ml-[64px] lg:w-[465px] lg:mt-[103px] lg:ml-[140px] lg:h-[214px] flex flex-col justify-center">
      <h1 className="w-full font-rubik leading-11 font-thin text-[40px] sm:text-[40px] lg:text-[64px] ">
        Welcome to the <br />
        <span className="font-medium text-[40px] sm:text-[64px] lg:text-[64px]">
          Sport-Quiz
        </span>
      </h1>
      <h2 className="w-full text-[21px] sm:text-[30px] lg:text-[30px]">
        Pick a subject to get started
      </h2>
    </div>
  );
};

export default Testimonial;
