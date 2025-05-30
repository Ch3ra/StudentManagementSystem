import React, { useState } from "react";
import AdminNavbar from "../AdminNav/AdminNavbar";
import { FaSearch } from "react-icons/fa";
import AdminTopBar from "../AdminNav/AdminTopBar";

// Sample data for student fees
const studentFeesData = [
  {
    id: 22,
    name: "Daniel Grant",
    gender: "Male",
    class: 2,
    amount: "$2,000.00",
    status: "unpaid",
    parentEmail: "arabagrant@gmail.com",
    parentPhone: "+123 9988568",
  },
  {
    id: 23,
    name: "Daniel Grant",
    gender: "Male",
    class: 3,
    amount: "$2,000.00",
    status: "paid",
    parentEmail: "arabagrant@gmail.com",
    parentPhone: "+123 9988568",
  },
  // Add more student fee records here
  // Sample pagination data for multiple pages.
];

const StudentFees = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Handle Search and Filters
  const filteredData = studentFeesData.filter((student) => {
    return (
      (searchTerm === "" ||
        student.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedClass === "" || student.class.toString() === selectedClass) &&
      (selectedStatus === "" || student.status === selectedStatus)
    );
  });

  // Pagination Logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div className="flex">
        <AdminNavbar />
        <div>
          <AdminTopBar />

          <div>
            <div className="bg-[#E5E5E5] p-4 rounded-lg">
              <h1 className="font-bold text-lg">Student Fees</h1>
              <div className="text-sm text-gray-600 mb-4">
                <span className="font-semibold text-[#D60A0B]">Account</span> &gt;{" "}
                <span className="text-gray-500">Student Fees</span>
              </div>

              <div className="bg-white p-6 mt-6 rounded-lg border border-gray-300">
                <h1 className="text-2xl font-semibold mb-6">
                  All Student Fees Data
                </h1>

                {/* Search and Filters */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative w-1/3">
                    <input
                      type="text"
                      placeholder="Search by name..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:border-[#D60A0B] w-full"
                    />
                    <FaSearch className="absolute top-2/4 left-3 transform -translate-y-2/4 text-gray-400" />
                  </div>
                  <select
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#D60A0B] w-1/4 bg-white text-gray-700"
                  >
                    <option value="">Select Class</option>
                    <option value="1">Class 1</option>
                    <option value="2">Class 2</option>
                    <option value="3">Class 3</option>
                    <option value="4">Class 4</option>
                  </select>
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#D60A0B] w-1/4 bg-white text-gray-700"
                  >
                    <option value="">Select Status</option>
                    <option value="paid">Paid</option>
                    <option value="unpaid">Unpaid</option>
                  </select>
                  <button className="bg-[#D60A0B] text-white px-6 py-2 rounded-md">
                    SEARCH
                  </button>
                </div>

                {/* Fees Table */}
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
                          Amount
                        </th>
                        <th className="py-3 px-4 border-b font-semibold text-gray-600">
                          Status
                        </th>
                        <th className="py-3 px-4 border-b font-semibold text-gray-600">
                          Parent Email
                        </th>
                        <th className="py-3 px-4 border-b font-semibold text-gray-600">
                          Parent Phone
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentData.map((student) => (
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
                            {student.amount}
                          </td>
                          <td className="py-3 px-4 border-b text-gray-600">
                            <span
                              className={`px-3 py-1 rounded-full text-white ${
                                student.status === "paid"
                                  ? "bg-[#1E90FF]"
                                  : "bg-[#FF6347]"
                              }`}
                            >
                              {student.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 border-b text-gray-600">
                            {student.parentEmail}
                          </td>
                          <td className="py-3 px-4 border-b text-gray-600">
                            {student.parentPhone}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                <div className="flex justify-end items-center mt-4 mr-6 space-x-4">
                  <button
                    className="text-gray-500"
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                  >
                    Previous
                  </button>
                  <div className="flex space-x-2">
                    {Array.from({ length: totalPages }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`px-3 py-1 rounded-lg ${
                          currentPage === index + 1
                            ? "bg-[#D60A0B] text-white"
                            : "bg-white text-gray-500 border border-[#D60A0B]"
                        }`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                  <button
                    className="text-gray-500"
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentFees;
