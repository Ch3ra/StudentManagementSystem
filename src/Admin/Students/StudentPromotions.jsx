import React, { useState } from "react";
import AdminNavbar from "../AdminNav/AdminNavbar";
import AdminTopBar from "../AdminNav/AdminTopBar";

const StudentPromotions = () => {
  const [formData, setFormData] = useState({
    name: "",
    currentClass: "",
    promotionFromClass: "",
    promotionToClass: "",
  });

  const handleReset = () => {
    setFormData({
      name: "",
      currentClass: "",
      promotionFromClass: "",
      promotionToClass: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="flex">
        <AdminNavbar />
        <div className="flex-grow">
          <AdminTopBar />
          <div className="bg-[#E5E5E5] p-4 rounded-lg">
            <h1 className="font-bold text-lg">Students</h1>
            <div className="text-sm text-gray-600 mb-4">
              <span className="font-semibold text-[#D60A0B]">Students</span>{" "}
              &gt; <span className="text-gray-500">All Students</span>
            </div>
            <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-md max-w-6xl">
              <h1 className="text-2xl font-bold mb-4">Student Promotion</h1>
              <form>
                <div className="grid grid-cols-4 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-semibold">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300 bg-[#DDDEEE]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="currentClass"
                      className="block mb-2 font-semibold"
                    >
                      Current Class
                    </label>
                    <select
                      id="currentClass"
                      name="currentClass"
                      value={formData.currentClass}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 bg-[#DDDEEE]"
                    >
                      <option value="">Please Select Class</option>
                      <option value="class1">Class 1</option>
                      <option value="class2">Class 2</option>
                      <option value="class3">Class 3</option>
                      <option value="class4">Class 4</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="promotionFromClass"
                      className="block mb-2 font-semibold"
                    >
                      Promotion From Class *
                    </label>
                    <select
                      id="promotionFromClass"
                      name="promotionFromClass"
                      value={formData.promotionFromClass}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300 bg-[#DDDEEE]"
                    >
                      <option value="">Please Select</option>
                      <option value="class1">Class 1</option>
                      <option value="class2">Class 2</option>
                      <option value="class3">Class 3</option>
                      <option value="class4">Class 4</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="promotionToClass"
                      className="block mb-2 font-semibold"
                    >
                      Promotion To Class *
                    </label>
                    <select
                      id="promotionToClass"
                      name="promotionToClass"
                      value={formData.promotionToClass}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300 bg-[#DDDEEE]"
                    >
                      <option value="">Please Select</option>
                      <option value="class1">Class 1</option>
                      <option value="class2">Class 2</option>
                      <option value="class3">Class 3</option>
                      <option value="class4">Class 4</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="bg-red-600 text-white px-4 py-2 rounded-md font-semibold"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold"
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentPromotions;
