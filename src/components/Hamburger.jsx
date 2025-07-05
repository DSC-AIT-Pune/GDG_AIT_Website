import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import logo from "../assets/Home/Group.png";

function Hamburger({ isOpen, onClose }) {
  const menuitems = [
    "Home",
    "About Us",
    "Events",
    "Team",
    "Calender",
    "Contact Us",
  ];

  return (
    <div className={`fixed top-0 left-0 h-full bg-black z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? ' translate-x-0' : '-translate-x-full '
      }`}>
      <div className="flex flex-col  bg-black gap-y-3 h-screen w-[86vw]">
        <div className="flex flex-row px-2 pt-7 justify-between">
          <img className="h-6 pl-3 w-auto" src={logo} alt="Logo" />
          <button onClick={onClose} className="pr-3">
            <svg
              class="w-8 h-8 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18 17.94 6M18 18 6.06 6"
              />
            </svg>
          </button>
        </div>
        <div>
          <ul>
            <div className="pl-6 pt-2">
              {menuitems.map((item, index) => (
                <li
                  key={index}
                  className="text-white text-lg font-primary font-normal py-2 px-4 hover:bg-gray-700 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hamburger;
