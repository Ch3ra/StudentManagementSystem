import React, { useState } from "react";
import AdminNavbar from "../AdminNav/AdminNavbar";
import AdminTopBar from "../AdminNav/AdminTopBar";

const StudentInformation = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="flex">
        <AdminNavbar />
        <div>
          <AdminTopBar />

          <div>
            <div className="bg-[#E5E5E5] p-4 rounded-lg">
              <h1 className="font-bold text-lg">Students</h1>
              <div className="text-sm text-gray-600 mb-4">
                <span className="font-semibold text-[#D60A0B]">Students</span>{" "}
                &gt; <span className="text-gray-500">All Students</span>
              </div>

              <div className="container mx-auto p-4 bg-slate-100 rounded-lg">
                <h1 className="text-2xl font-bold mb-4">Student Admit Form</h1>

                <form>
                  <div className="grid grid-cols-4 gap-4">
                    <div>
                      <label htmlFor="name" className="block mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 bg-[#DDDEEE]"
                      />
                    </div>
                    <div>
                      <label htmlFor="gender" className="block mb-1 ">
                        Gender *
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-gray-500 bg-[#DDDEEE]"
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="class" className="block mb-1 ">
                        Class *
                      </label>
                      <select
                        id="class"
                        name="class"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-gray-500 bg-[#DDDEEE]"
                      >
                        <option value="">Select Class</option>
                        <option value="class1">Class 1</option>
                        <option value="class2">Class 2</option>
                        <option value="class3">Class 3</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="bloodGroup" className="block mb-1">
                        Blood Group *
                      </label>
                      <input
                        type="text"
                        id="bloodGroup"
                        name="bloodGroup"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 bg-[#DDDEEE]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-4 mt-4">
                    <div>
                      <label htmlFor="religion" className="block mb-1">
                        Religion *
                      </label>
                      <select
                        id="religion"
                        name="religion"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 bg-[#DDDEEE]"
                      >
                        <option value="">Select Religion</option>
                        <option value="religion1">Religion 1</option>
                        <option value="religion2">Religion 2</option>
                        <option value="religion3">Religion 3</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="dateOfBirth" className="block mb-1">
                        Date Of Birth *
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          id="dateOfBirth"
                          name="dateOfBirth"
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 bg-[#DDDEEE]"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="admissionDate" className="block mb-1">
                        Admission Date *
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          id="admissionDate"
                          name="admissionDate"
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 bg-[#DDDEEE]"
                        />
                      </div>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold mt-8 mb-4">
                    Add New Parent
                  </h2>

                  <div className="grid grid-cols-4 gap-4">
                    <div>
                      <label htmlFor="fatherName" className="block mb-1">
                        Father's Name
                      </label>
                      <input
                        type="text"
                        id="fatherName"
                        name="fatherName"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 bg-[#DDDEEE]"
                      />
                    </div>
                    <div>
                      <label htmlFor="motherName" className="block mb-1">
                        Mother's Name
                      </label>
                      <input
                        type="text"
                        id="motherName"
                        name="motherName"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 bg-[#DDDEEE]"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 bg-[#DDDEEE]"
                      />
                    </div>
                    <div>
                      <label htmlFor="religion" className="block mb-1">
                        Religion
                      </label>
                      <select
                        id="religion"
                        name="religion"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 bg-[#DDDEEE]"
                      >
                        <option value="">Select Religion</option>
                        <option value="religion1">Religion 1</option>
                        <option value="religion2">Religion 2</option>
                        <option value="religion3">Religion 3</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-4 mt-4">
                    <div>
                      <label htmlFor="fatherOccupation" className="block mb-1">
                        Father's Occupation
                      </label>
                      <input
                        type="text"
                        id="fatherOccupation"
                        name="fatherOccupation"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 bg-[#DDDEEE]"
                      />
                    </div>
                    <div>
                      <label htmlFor="address" className="block mb-1">
                        Address *
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 bg-[#DDDEEE]"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 bg-[#DDDEEE]"
                      />
                    </div>
                  </div>

                  <div className="flex space-x-10 items-center mt-8">
                    <div
                      className="rounded-full bg-[#DDDEEE] flex items-center justify-center"
                      style={{ width: "150px", height: "150px" }}
                    >
                      {selectedImage ? (
                        <img
                          src={selectedImage}
                          alt="Selected"
                          className="rounded-full object-cover"
                          style={{ width: "150px", height: "150px" }}
                        />
                      ) : (
                        <span className="text-gray-500">Image Preview</span>
                      )}
                    </div>
                    <label htmlFor="studentPhoto" className="mt-4">
                      <p> Upload Student Photo (150px X 150px)</p>
                      <input
                        type="file"
                        id="studentPhoto"
                        name="studentPhoto"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="mt-2"
                      />
                    </label>
                  </div>
<div className=" flex space-x-2">
                  <button
                    type="submit"
                    className="mt-8 bg-[#D60A0B] text-white px-8 py-2 rounded-md hover:bg-red-600"
                  >
                    Save
                  </button>

                  <button
                    type="submit"
                    className="mt-8 bg-[#0E1E63] text-white px-8 py-2 rounded-md hover:bg-red-600"
                  >
                    Reset
                  </button></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentInformation;
