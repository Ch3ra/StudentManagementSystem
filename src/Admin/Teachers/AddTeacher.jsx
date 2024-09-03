import React, { useState } from "react";
import AdminNavbar from "../AdminNav/AdminNavbar";
import AdminTopBar from "../AdminNav/AdminTopBar";

const AddTeacherForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    bloodGroup: "",
    religion: "",
    email: "",
    phone: "",
    class: "",
    address: "",
    admissionDate: "",
    teacherPhoto: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      gender: "",
      dob: "",
      bloodGroup: "",
      religion: "",
      email: "",
      phone: "",
      class: "",
      address: "",
      admissionDate: "",
      teacherPhoto: null,
    });
  };

  return (
    <div className="flex">
        <AdminNavbar />
        <div className="flex-grow">
          <AdminTopBar />
          <div className="bg-[#E5E5E5] p-4 rounded-lg">
            <h1 className="font-bold text-lg">Students</h1>
            <div className="text-sm text-gray-600 mb-4">
              <span className="font-semibold text-[#D60A0B]">Students</span>{" "}
              &gt; <span className="text-gray-500">Add Teacher</span>
            </div>
    <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-md max-w-6xl">
      <h1 className="text-2xl font-bold mb-4">Add New Teacher</h1>
      <form>
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div>
            <label htmlFor="firstName" className="block mb-2 font-semibold">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none bg-[#DDDEEE]"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block mb-2 font-semibold">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none bg-[#DDDEEE]"
            />
          </div>

          <div>
            <label htmlFor="gender" className="block mb-2 font-semibold">
              Gender *
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none bg-[#DDDEEE]"
            >
              <option value="">Please Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <label htmlFor="dob" className="block mb-2 font-semibold">
              Date Of Birth *
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none bg-[#DDDEEE]"
            />
          </div>

          <div>
            <label htmlFor="bloodGroup" className="block mb-2 font-semibold">
              Blood Group *
            </label>
            <input
              type="text"
              id="bloodGroup"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none bg-[#DDDEEE]"
            />
          </div>

          <div>
            <label htmlFor="religion" className="block mb-2 font-semibold">
              Religion *
            </label>
            <select
              id="religion"
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none bg-[#DDDEEE]"
            >
              <option value="">Please Select Religion</option>
              <option value="islam">Islam</option>
              <option value="hindu">Hindu</option>
              <option value="christian">Christian</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none bg-[#DDDEEE]"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block mb-2 font-semibold">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none bg-[#DDDEEE]"
            />
          </div>

          <div>
            <label htmlFor="class" className="block mb-2 font-semibold">
              Class *
            </label>
            <select
              id="class"
              name="class"
              value={formData.class}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none bg-[#DDDEEE]"
            >
              <option value="">Please Select Class</option>
              <option value="class1">Class 1</option>
              <option value="class2">Class 2</option>
              <option value="class3">Class 3</option>
              <option value="class4">Class 4</option>
            </select>
          </div>

          <div>
            <label htmlFor="address" className="block mb-2 font-semibold">
              Address *
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none bg-[#DDDEEE]"
            />
          </div>

          <div>
            <label
              htmlFor="admissionDate"
              className="block mb-2 font-semibold"
            >
              Admission Date *
            </label>
            <input
              type="date"
              id="admissionDate"
              name="admissionDate"
              value={formData.admissionDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none bg-[#DDDEEE]"
            />
          </div>
        </div>

        <div className="flex  flex-col mr-[-10px]items-center justify-between gap-4">
          <div className="flex items-center">
            <div className="relative w-36 h-36 bg-[#DDDEEE] rounded-full">
              {formData.teacherPhoto && (
                <img
                  src={URL.createObjectURL(formData.teacherPhoto)}
                  alt="Teacher"
                  className="w-full h-full object-cover rounded-full"
                />
              )}
            </div>
            <div className="ml-4">
              <label className="block mb-2 font-semibold">
                Upload Teacher Photo (150px X 150px)
              </label>
              <input
                type="file"
                name="teacherPhoto"
                onChange={handleChange}
                className="w-full"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-[#D60A0B] text-white px-6 py-2 rounded-md font-semibold"
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="bg-[#0E1E63] text-white px-6 py-2 rounded-md font-semibold"
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
    </div>
    </div>
    </div>
  );
};

export default AddTeacherForm;
