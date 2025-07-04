import React from "react";
import joinBg from "../../assets/Home/join.png"; // Use your correct path

import Primarybtn from "../Primarybtn";
import Thirdbtn from "../Thirdbtn";

const StudentChapterCard = () => {
  return (
    <div className=" w-[80vw] min-w-[70vw] md:max-w-[40vw] md:min-w-[35vw] bg-center relative bg-no-repeat bg-[length:100%_100%] bgimage">
      <p className="text-black absolute text-[12px] sm:text-[16px] md:text-[18px] lg:text-[20px] lg:left-7 lg:top-[2px] font-medium top-1 left-4">
        @gdsc_aitpune
      </p>

      <div className="flex flex-col gap-4 lg:mx-4 my-[3%] mt-[0%] pt-[10%] pb-[5%] justify-evenly  items-center px-5">
        <div className="flex w-full justify-start"><p className=" text-black text-base sm:text-[21px] md:text-[19px] lg:text-[22px] xl:text-[27px] text-start font-semibold">GDSC STUDENT CHAPTER</p></div>
        <div className="flex w-full justify-end text-black"><Thirdbtn label="Join Now" /></div>
      </div>
    </div>
  );
};

export default StudentChapterCard;
