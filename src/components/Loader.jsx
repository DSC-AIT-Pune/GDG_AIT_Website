const Loader = () => {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="flex items-center justify-center space-x-8">
          {/* Left Chevron */}
          <div className="relative">
            <div className="flex flex-col space-y-1 animate-pulse">
              <div
                className="w-16 h-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 transform rotate-45 animate-bounce"
                style={{ animationDelay: "0s", animationDuration: "1.5s" }}
              ></div>
              <div
                className="w-16 h-4 rounded-full bg-gradient-to-r from-red-500 to-red-600 transform -rotate-45 animate-bounce"
                style={{ animationDelay: "0.2s", animationDuration: "1.5s" }}
              ></div>
            </div>
          </div>
  
          {/* Loading Text */}
          <div className="text-white text-xl font-semibold animate-pulse">Loading...</div>
  
          {/* Right Chevron */}
          <div className="relative">
            <div className="flex flex-col space-y-1 animate-pulse">
              <div
                className="w-16 h-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 transform -rotate-45 animate-bounce"
                style={{ animationDelay: "0.4s", animationDuration: "1.5s" }}
              ></div>
              <div
                className="w-16 h-4 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 transform rotate-45 animate-bounce"
                style={{ animationDelay: "0.6s", animationDuration: "1.5s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Loader
  