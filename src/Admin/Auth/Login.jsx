import React from "react";

const Login = () => {
  return (
    <div className="h-screen relative bg-[#0E1E63]">
      <div className="grid grid-cols-12 h-full">
        {/* Left side with image and transparent overlay */}
        <div className="col-span-7 h-full">
          <div
            style={{
              clipPath: "polygon(0 0, 100% 0, 74% 100%, 0% 100%)",
              backgroundImage:
                "url('https://global.discourse-cdn.com/pocketgems/uploads/episodeinteractive/original/3X/4/e/4e734def6fa64d409dc728bfd48d8735958febea.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-full h-full bg-[#D60A0B] opacity-60"
          >
            <div className="inset-0 flex flex-col h-full justify-center items-center text-white">
              <img
                src="https://t4.ftcdn.net/jpg/03/21/18/45/360_F_321184577_RyFPSJXBxtovE4sDlwpGxMhC0roA3RmL.jpg"
                alt="School Logo"
                className="mb-4 w-20 h-auto"
              />
              <h1 className="text-5xl font-bold">WELCOME</h1>
            </div>
          </div>
        </div>

        {/* Right side with login form */}
        <div className="col-span-5 flex items-center justify-center h-full">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
            <input
              type="text"
              placeholder="Username"
              className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <a
              href="#"
              className="text-sm text-blue-500 underline hover:text-blue-950 mb-4 block"
            >
              Forgot your password?
            </a>
            <button className="w-full bg-[#D60A0B] rounded-md text-white p-4 hover:bg-red-700 transition">
              SIGN IN
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute text-white font-bold cursor-pointer ml-[90vh] bottom-4 transform -translate-x-1/2 text-xs p-2 bg-transparent">
        © 2021 Ch3Ray School Management System
      </footer>
    </div>
  );
};

export default Login;
