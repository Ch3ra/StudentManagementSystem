import React from "react";
import AdminNavbar from "../AdminNav/AdminNavbar";
import { FaSearch } from "react-icons/fa";
import AdminTopBar from "../AdminNav/AdminTopBar";

const parentsData = [
  {
    id: 1,
    name: "John Doe",
    gender: "Male",
    occupation: "Engineer",
    address: "123 Main St, Anytown, USA",
    email: "john.doe@example.com",
    phone: "+1 234-567-8901"
  },
  {
    id: 2,
    name: "Jane Smith",
    gender: "Female",
    occupation: "Teacher",
    address: "456 Elm St, Othertown, USA",
    email: "jane.smith@example.com",
    phone: "+1 234-567-8902"
  },
  {
    id: 3,
    name: "Robert Brown",
    gender: "Male",
    occupation: "Doctor",
    address: "789 Oak St, Sometown, USA",
    email: "robert.brown@example.com",
    phone: "+1 234-567-8903"
  },
  {
    id: 4,
    name: "Emily Davis",
    gender: "Female",
    occupation: "Nurse",
    address: "101 Pine St, Anycity, USA",
    email: "emily.davis@example.com",
    phone: "+1 234-567-8904"
  },
  // Add more entries as needed
];

const Parents = () => {
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
                &gt; <span className="text-gray-500">All Parents</span>
              </div>

              {/* Content Container */}
              <div className="bg-white p-6 mt-6 rounded-lg border border-gray-300">
                {/* Title */}
                <h1 className="text-2xl font-semibold mb-6">All Parents Data</h1>

                {/* Search and Filter */}
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

                {/* Table */}
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
                          Occupation
                        </th>
                        <th className="py-3 px-4 border-b font-semibold text-gray-600">
                          Address
                        </th>
                        <th className="py-3 px-4 border-b font-semibold text-gray-600">
                          Email
                        </th>
                        <th className="py-3 px-4 border-b font-semibold text-gray-600">
                          Phone
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {parentsData.map((parent) => (
                        <tr key={parent.id} className="hover:bg-gray-100">
                          <td className="py-3 px-4 border-b text-gray-600">
                            {parent.id}
                          </td>
                          <td className="py-3 px-4 border-b text-gray-600">
                            {parent.name}
                          </td>
                          <td className="py-3 px-4 border-b text-gray-600">
                            {parent.gender}
                          </td>
                          <td className="py-3 px-4 border-b text-gray-600">
                            {parent.occupation}
                          </td>
                          <td className="py-3 px-4 border-b text-gray-600">
                            {parent.address}
                          </td>
                          <td className="py-3 px-4 border-b text-gray-600">
                            {parent.email}
                          </td>
                          <td className="py-3 px-4 border-b text-gray-600">
                            {parent.phone}
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

export default Parents;
