import React from "react";
import AdminNavbar from "../AdminNav/AdminNavbar";
import AdminTopBar from "../AdminNav/AdminTopBar";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUsers,
  FaDollarSign,
} from "react-icons/fa";
import GraphSection from "./GraphSection";

const Home = () => {
  return (
    <>
      <div className="flex">
        <AdminNavbar />

        <div>
          <AdminTopBar />
          <div>
            <div className="p-8 bg-gray-100 min-h-screen">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800">
                  Admin Dashboard
                  <div className="h-1 w-24 bg-red-600 mt-2"></div>{" "}
                  {/* Red Underline */}
                </h1>
                <p className="text-gray-600 mt-2">Home</p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-4 gap-6">
                {/* Students Card */}
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                  <FaUserGraduate className="text-green-500 text-4xl" />
                  <div className="ml-4">
                    <p className="text-gray-600">Students</p>
                    <p className="text-black text-2xl font-bold">
                      24,000
                      <span className="ml-2 text-gray-400 border-l-2 pl-2 border-red-600"></span>{" "}
                      {/* Red Vertical Line */}
                    </p>
                  </div>
                </div>

                {/* Teachers Card */}
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                  <FaChalkboardTeacher className="text-blue-500 text-4xl" />
                  <div className="ml-4">
                    <p className="text-gray-600">Teachers</p>
                    <p className="text-black text-2xl font-bold">
                      5,00
                      <span className="ml-2 text-gray-400 border-l-2 pl-2 border-red-600"></span>{" "}
                      {/* Red Vertical Line */}
                    </p>
                  </div>
                </div>

                {/* Parents Card */}
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                  <FaUsers className="text-yellow-500 text-4xl" />
                  <div className="ml-4">
                    <p className="text-gray-600">Parents</p>
                    <p className="text-black text-2xl font-bold">
                      350,000
                      <span className="ml-2 text-gray-400 border-l-2 pl-2 border-red-600"></span>{" "}
                      {/* Red Vertical Line */}
                    </p>
                  </div>
                </div>

                {/* Earnings Card */}
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                  <FaDollarSign className="text-red-500 text-4xl" />
                  <div className="ml-4">
                    <p className="text-gray-600">Earnings</p>
                    <p className="text-black text-2xl font-bold">
                      $250,000
                      <span className="ml-2 text-gray-400 border-l-2 pl-2 border-red-600"></span>{" "}
                      {/* Red Vertical Line */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GraphSection />
    </>
  );
};

export default Home;
