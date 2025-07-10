import React from "react";

function EventBtn({label}) {
  return (
    <div className="flex-shrink-0 ml-4">
      <button className="flex items-center gap-2 bg-white border-2 border-black rounded-full px-4 py-2 hover:bg-gray-50 transition-colors group">
        <span className="text-black text-nowrap font-medium text-lg md:text-xl">
          {label}
        </span>
        <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center group-hover:bg-yellow-500 transition-colors">
          <svg
            className="w-4 h-4 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}

export default EventBtn;
