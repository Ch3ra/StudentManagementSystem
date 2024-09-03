import React from "react";
import AdminNavbar from "../AdminNav/AdminNavbar";
import { FaSearch } from "react-icons/fa";
import AdminTopBar from "../AdminNav/AdminTopBar";


const studentsData = [
  {
    id: 1,
    name: "Alice Johnson",
    gender: "Female",
    class: "Class 1",
    subject: "John Johnson",
    address: "123 Maple St",
    dob: "01/14/2004",
    phone: "+1 234-567-8901"
  },
  {
    id: 2,
    name: "Bob Smith",
    gender: "Male",
    class: "Class 2",
    subject: "Michael Smith",
    address: "456 Oak St",
    dob: "03/22/2005",
    phone: "+1 234-567-8902"
  },
  {
    id: 3,
    name: "Charlie Brown",
    gender: "Male",
    class: "Class 3",
    subject: "Robert Brown",
    address: "789 Pine St",
    dob: "05/30/2003",
    phone: "+1 234-567-8903"
  },
  {
    id: 4,
    name: "Daisy Lee",
    gender: "Female",
    class: "Class 1",
    subject: "David Lee",
    address: "101 Birch St,",
    dob: "07/15/2004",
    phone: "+1 234-567-8904"
  },
  
];

const TeacherInformation = () => {
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
                &gt; <span className="text-gray-500">All Teachers</span>
              </div>

             
              <div className="bg-white p-6 mt-6 rounded-lg border border-gray-300">
          
                <h1 className="text-2xl font-semibold mb-6">
                  All Teachers Data
                </h1>

            
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative w-1/3">
                    <input
                      type="text"
                      placeholder="Search by name..."
                      className="px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:border-[#D60A0B] w-full"
                    />
                    <FaSearch className="absolute top-2/4 left-3 transform -translate-y-2/4 text-gray-400" />
                  </div>
                  <select className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#D60A0B] w-1/4 bg-white text-gray-700">
                    <option className="text-[#D60A0B] font-semibold">
                      Select Class
                    </option>
                    <option className="hover:bg-[#D60A0B] hover:text-white">
                      Class 1
                    </option>
                    <option className="hover:bg-[#D60A0B] hover:text-white">
                      Class 2
                    </option>
                    <option className="hover:bg-[#D60A0B] hover:text-white">
                      Class 3
                    </option>
                  </select>
                  <button className="bg-[#D60A0B] text-white px-6 py-2 rounded-md">
                    SEARCH
                  </button>
                </div>

            
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border rounded-lg overflow-hidden">
                    <thead className="bg-gray-50">
                      <tr className="text-left">
                        <th className="py-3 px-4 border-b font-semibold text-gray-600">
                          ID
                        </th>
                        <th className="py-3 px-4 border-b font-semibold text-gray-600">
                          Name
                        </th>
                        <th className="py-3 px-4 border-b font-semibold text-gray-600">
                          Gender
                        </th>
                        <th className="py-3 px-4 border-b font-semibold text-gray-600">
                          Class
                        </th>
                        <th className="py-3 px-4 border-b font-semibold text-gray-600">
                          Subject
                        </th>
                        <th className="py-3 px-4 border-b font-semibold text-gray-600">
                          Address
                        </th>
                        <th className="py-3 px-4 border-b font-semibold text-gray-600">
                          Date of Birth
                        </th>
                        <th className="py-3 px-4 border-b text-gray-600">
                          Phone
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {studentsData.map((student) => (
                        <tr key={student.id} className="hover:bg-gray-100">
                          <td className="py-3 px-4 border-b text-gray-600">
                            {student.id}
                          </td>
                          <td className="py-3 px-4 border-b text-gray-600">
                            {student.name}
                          </td>
                          <td className="py-3 px-4 border-b text-gray-600">
                            {student.gender}
                          </td>
                          <td className="py-3 px-4 border-b text-gray-600">
                            {student.class}
                          </td>
                          <td className="py-3 px-4 border-b text-gray-600">
                            {student.subject}
                          </td>
                          <td className="py-3 px-4 border-b text-gray-600">
                            {student.address}
                          </td>
                          <td className="py-3 px-4 border-b text-gray-600">
                            {student.dob}
                          </td>
                          <td className="py-3 px-4 border-b text-gray-600">
                            {student.phone}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-end items-center mt-4 mr-6 space-x-4">
                  <button className="text-gray-500">Previous</button>
                  <div className="flex space-x-2">
                    <button className="bg-[#D60A0B] text-white px-3 py-1 rounded-lg">
                      1
                    </button>
                    <button className="bg-white text-gray-500 px-3 py-1 border border-[#D60A0B] rounded-lg">
                      2
                    </button>
                    <button className="bg-white text-gray-500 px-3 py-1 border border-[#D60A0B] rounded-lg">
                      3
                    </button>
                  </div>
                  <button className="text-gray-500">Next</button>
                </div>
              </div>
            </div>

            {/* Pagination */}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherInformation;
