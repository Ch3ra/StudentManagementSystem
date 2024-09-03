import React, { useState } from "react";
import AdminNavbar from "../AdminNav/AdminNavbar";
import AdminTopBar from "../AdminNav/AdminTopBar";

const Subject = () => {
  const [formData, setFormData] = useState({
    subjectName: "",
    teacher: "",
    classes: "",
    days: "",
  });

  const [subjects, setSubjects] = useState([
    { name: "English", teacher: "Daniel Grant", classes: "1,2,6", days: "Mon, Tue and Fri" },
    { name: "Maths", teacher: "Daniel Grant", classes: "6&JHS1", days: "Mon, Tue and Fri" },
    { name: "French", teacher: "Daniel Grant", classes: "1,2,6", days: "Mon, Tue and Fri" },
    { name: "Science", teacher: "Daniel Grant", classes: "6&JHS1", days: "Mon, Tue and Fri" },
    { name: "Arts", teacher: "Daniel Grant", classes: "1,2,6", days: "Mon, Tue and Fri" },
    { name: "French", teacher: "Daniel Grant", classes: "6&JHS1", days: "Mon, Tue and Fri" },
    { name: "Science", teacher: "Daniel Grant", classes: "1,2,6", days: "Mon, Tue and Fri" },
    { name: "Arts", teacher: "Daniel Grant", classes: "6&JHS1", days: "Mon, Tue and Fri" },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleReset = () => {
    setFormData({
      subjectName: "",
      teacher: "",
      classes: "",
      days: "",
    });
  };

  return (
    <div className="flex">
      <AdminNavbar />
      <div className="flex-1">
        <AdminTopBar />
        <div className="p-6">
          <div className="bg-[#E5E5E5] p-4 rounded-lg mb-8">
            <h1 className="font-bold text-lg">Students</h1>
            <div className="text-sm text-gray-600 mb-4">
              <span className="font-semibold text-[#D60A0B]">Students</span> &gt;{" "}
              <span className="text-gray-500">All Students</span>
            </div>
          

          

            {/* Subject List Section */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-xl font-bold mb-4 text-[#171837]">All Subjects</h2>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <input
                  type="text"
                  placeholder="Search by subject name..."
                  className="w-full px-3 py-2 border rounded-md bg-[#F6F7F8] text-[#B9B9B9]"
                />
                <select className="w-full px-3 py-2 border rounded-md bg-[#F6F7F8] text-[#B9B9B9]">
                  <option>Select Class</option>
                  <option value="class1">Class 1</option>
                  <option value="class2">Class 2</option>
                </select>
                <button className="bg-[#B9272B] text-white font-semibold py-2 px-4 rounded-md">
                  SEARCH
                </button>
              </div>

              {/* Subject Table */}
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-[#F6F7F8] text-left">
                    <th className="px-4 py-2 text-[#B9272B]">Subject Name</th>
                    <th className="px-4 py-2 text-[#B9272B]">Teacher</th>
                    <th className="px-4 py-2 text-[#B9272B]">Classes</th>
                    <th className="px-4 py-2 text-[#B9272B]">Days</th>
                  </tr>
                </thead>
                <tbody>
                  {subjects.map((subject, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-4 py-2">{subject.name}</td>
                      <td className="px-4 py-2">{subject.teacher}</td>
                      <td className="px-4 py-2">{subject.classes}</td>
                      <td className="px-4 py-2">{subject.days}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Pagination */}
              <div className="flex justify-end space-x-4 items-center mt-4">
                <button className="text-gray-400">Previous</button>
                <div className="flex space-x-2">
                <button className="bg-white border-[#B9272B] px-3 py-1 rounded-md border">1</button>
                  <button className="bg-white border-[#B9272B] px-3 py-1 rounded-md border">2</button>
                  <button className="bg-white border-[#B9272B] px-3 py-1 rounded-md border">3</button>
                </div>
                <button className="text-gray-400">Next</button>
              </div>
            </div>

            {/* Add New Subject Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4 text-[#171837]">Add New Subject</h2>
              <div className="grid grid-cols-4 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Subject Name *"
                  name="subjectName"
                  value={formData.subjectName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md bg-[#DDDEEE]"
                />
                <input
                  type="text"
                  placeholder="Teacher"
                  name="teacher"
                  value={formData.teacher}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md bg-[#DDDEEE]"
                />
                <input
                  type="text"
                  placeholder="Classes"
                  name="classes"
                  value={formData.classes}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md bg-[#DDDEEE]"
                />
                <input
                  type="text"
                  placeholder="Days"
                  name="days"
                  value={formData.days}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md bg-[#DDDEEE]"
                />
              </div>

              <div className="flex gap-2">
                <button className="bg-[#B9272B] text-white px-6 py-2 rounded-md font-semibold">
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-[#0A1F6B] text-white px-6 py-2 rounded-md font-semibold"
                >
                  Reset
                </button>
              </div>
            </div>
          
        </div>
        </div>
      </div>
    </div>
  );
};

export default Subject;
