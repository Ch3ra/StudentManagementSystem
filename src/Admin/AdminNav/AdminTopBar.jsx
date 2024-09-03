import React from "react";
import { FaBell, FaEnvelope, FaSearch } from "react-icons/fa";
import profilePic from "./../../assets/students.png"; 
import { FaUserGraduate, FaChalkboardTeacher, FaUsers, FaDollarSign } from "react-icons/fa";

const AdminTopBar = () => {
  return (
    <div className="flex flex-col">
    <div className="flex items-center justify-between h-16 w-[153vh] bg-white shadow-md px-4">
      
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-64">
        <FaSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none w-full"
        />
      </div>

    
      <div className="flex items-center space-x-4">
        <FaEnvelope className="text-red-600 text-xl cursor-pointer" />
        <FaBell className="text-red-600 text-xl cursor-pointer" />
        <div className="h-6 border-l-2 border-red-600"></div> 
        <div className="flex items-center space-x-2 cursor-pointer">
          <img
            src={profilePic}
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="text-gray-800">
          
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>


</div>
  );
};

export default AdminTopBar;
