import React, { useState } from "react";
import Group from "../assets/Home/Group.png";
import { Menu, X } from "lucide-react";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`md:hidden w-full max-w-[300px] ${
        isOpen ? "bg-black text-white rounded-lg p-4" : ""
      }`}
    >
      <div className="flex  justify-between w-full mb-3">
        {isOpen ? (
          <img src={Group} alt="Group Logo" className="w-10 h-8" />
        ) : (
          <div></div>
        )}

        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? (
            <X size={24} color="white" />
          ) : (
            <Menu size={24} color="black" />
          )}
        </button>
      </div>

      {/* Sidebar menu content */}
      {isOpen && (
        <div className="flex flex-col gap-6 text-2xl mt-[20px]">
          {["Home", "About us", "Events", "Team", "Calendar", "Contact Us"].map(
            (item) => (
              <a key={item} href="#" className="hover:underline text-sm">
                {item}
              </a>
            )
          )}

          {/* Login Button */}
          <button className="flex items-center gap-2 bg-yellow-100 text-black px-4 py-1 rounded-full mt-2 hover:bg-yellow-200 transition self-end">
            <span className="font-semibold">Login</span>
            <span className="bg-yellow-400 p-1 rounded-full">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="black"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
