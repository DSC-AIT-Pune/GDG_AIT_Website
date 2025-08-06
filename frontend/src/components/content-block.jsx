import React from "react"

const ContentBlock = ({ title, content, alignment = "left", className = "" }) => {
 return (
   <div className={`relative w-full ${className}`}>
     {/* Main content block */}
     <div className="relative bg-white rounded-2xl shadow-lg p-6 pt-12">
       {/* Tab/notch at the top */}
       <div
         className={`absolute -top-2 w-16 h-6 bg-white rounded-t-lg shadow-sm ${
           alignment === "right" ? "right-8" : "left-8"
         }`}
       />
       
       {/* Title */}
       <h3
         className={`font-bold text-lg sm:text-xl md:text-2xl mb-4 ${
           alignment === "right" ? "text-right" : "text-left"
         }`}
       >
         {title}
       </h3>
       
       {/* Content */}
       <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">{content}</p>
     </div>
   </div>
 )
}

export default ContentBlock