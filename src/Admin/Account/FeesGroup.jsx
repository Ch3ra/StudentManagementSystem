import React, { useState } from "react";
import AdminNavbar from "../AdminNav/AdminNavbar";
import AdminTopBar from "../AdminNav/AdminTopBar";
import { FaSearch, FaEdit, FaTrashAlt } from "react-icons/fa";

const initialFeesData = [
  {
    id: 1,
    name: "Creche Fees",
    feesType: "Feeding Fee - GHS200.00, Maintenance - GHS100.00, Tuition - GHS350.00",
    description: "To be paid every semester",
  },
  {
    id: 2,
    name: "Nurse Fee Group",
    feesType: "Feeding Fee - GHS150.00, Maintenance - GHS100.00, Tuition - GHS450.00",
    description: "To be paid every semester",
  },
  {
    id: 3,
    name: "Kindergarten Fee Group",
    feesType: "Feeding Fee - GHS180.00, Maintenance - GHS120.00, Tuition - GHS500.00",
    description: "To be paid every semester",
  },
  {
    id: 4,
    name: "Class 1 Fee Group",
    feesType: "Feeding Fee - GHS100.00, PTA - GHS150.00, Computer Fees - GHS150.00, Tuition - GHS500.00",
    description: "To be paid every semester",
  },
  {
    id: 5,
    name: "Class 2 Fee Group",
    feesType: "Feeding Fee - GHS100.00, PTA - GHS150.00, Computer Fees - GHS150.00, Tuition - GHS500.00",
    description: "To be paid every semester",
  },
];

const FeesGroup = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [feesData, setFeesData] = useState(initialFeesData);
  const [showAddForm, setShowAddForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedFeeGroup, setSelectedFeeGroup] = useState(null);

  const filteredFeesData = feesData.filter((fee) =>
    fee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle edit click
  const handleEditClick = (feeGroup) => {
    setSelectedFeeGroup(feeGroup);
    setIsEditing(true);
    setShowAddForm(true); // Open form for editing
  };

  // Handle delete click
  const handleDeleteClick = (id) => {
    setFeesData((prevData) => prevData.filter((fee) => fee.id !== id));
  };

  // Handle form submission for add or edit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      // Edit existing fee group
      setFeesData((prevData) =>
        prevData.map((fee) =>
          fee.id === selectedFeeGroup.id ? selectedFeeGroup : fee
        )
      );
    } else {
      // Add new fee group
      const newFeeGroup = {
        id: feesData.length + 1,
        ...selectedFeeGroup,
      };
      setFeesData([...feesData, newFeeGroup]);
    }
    setShowAddForm(false);
    setIsEditing(false);
    setSelectedFeeGroup(null);
  };

  // Cancel the form and reset state
  const handleCancel = () => {
    setShowAddForm(false);
    setIsEditing(false);
    setSelectedFeeGroup(null);
  };

  return (
    <div className="flex">
      <AdminNavbar />
      <div className="w-full">
        <AdminTopBar />
        <div className="bg-[#F5F6FA] p-6">
          <div className="text-sm text-gray-600">
            <h1 className="font-bold text-xl">Account</h1>
            <div className="flex items-center space-x-2 mb-6">
              <span>Home</span>
              <span className="text-red-500">&gt; Fees Group</span>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-6 border-b border-gray-300">
                <button
                  className={`${
                    showAddForm ? "text-gray-500" : "text-red-500"
                  } font-semibold border-b-2 pb-2 ${
                    showAddForm ? "" : "border-red-500"
                  }`}
                  onClick={() => setShowAddForm(false)}
                >
                  Fees Group List
                </button>
                <button
                  className={`${
                    showAddForm ? "text-red-500" : "text-gray-500"
                  } font-semibold pb-2 ${showAddForm ? "border-b-2 border-red-500" : ""
                    }`}
                  onClick={() => {
                    setShowAddForm(true);
                    setSelectedFeeGroup(null); // Reset for adding new group
                  }}
                >
                  Add Fees Group
                </button>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D60A0B]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FaSearch className="absolute top-2/4 left-3 transform -translate-y-2/4 text-gray-400" />
              </div>
            </div>

            {/* Fees Table */}
            {!showAddForm && (
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr className="text-left">
                      <th className="py-3 px-4 border-b font-semibold text-gray-600">No.</th>
                      <th className="py-3 px-4 border-b font-semibold text-gray-600">Name</th>
                      <th className="py-3 px-4 border-b font-semibold text-gray-600">Fees Type</th>
                      <th className="py-3 px-4 border-b font-semibold text-gray-600">Description</th>
                      <th className="py-3 px-4 border-b font-semibold text-gray-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredFeesData.length > 0 ? (
                      filteredFeesData.map((fee, index) => (
                        <tr key={fee.id} className="hover:bg-gray-100">
                          <td className="py-3 px-4 border-b text-gray-600">{index + 1}</td>
                          <td className="py-3 px-4 border-b text-gray-600">{fee.name}</td>
                          <td className="py-3 px-4 border-b text-gray-600">{fee.feesType}</td>
                          <td className="py-3 px-4 border-b text-gray-600">{fee.description}</td>
                          <td className="py-3 px-4 border-b flex space-x-2">
                            <button
                              className="text-blue-500 hover:text-blue-700"
                              onClick={() => handleEditClick(fee)}
                            >
                              <FaEdit />
                            </button>
                            <button
                              className="text-red-500 hover:text-red-700"
                              onClick={() => handleDeleteClick(fee.id)}
                            >
                              <FaTrashAlt />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="py-3 px-4 text-center text-gray-600">
                          No results found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {/* Add/Edit Fees Group Form */}
            {showAddForm && (
              <div className="p-4 mt-4 bg-gray-50 border border-gray-200 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">
                  {isEditing ? "Edit Fees Group" : "Add Fees Group"}
                </h2>
                <form onSubmit={handleFormSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D60A0B]"
                      value={selectedFeeGroup?.name || ""}
                      onChange={(e) =>
                        setSelectedFeeGroup({ ...selectedFeeGroup, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Fees Type</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D60A0B]"
                      value={selectedFeeGroup?.feesType || ""}
                      onChange={(e) =>
                        setSelectedFeeGroup({ ...selectedFeeGroup, feesType: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Description</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D60A0B]"
                      value={selectedFeeGroup?.description || ""}
                      onChange={(e) =>
                        setSelectedFeeGroup({ ...selectedFeeGroup, description: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="flex space-x-4">
                    <button
                      type="submit"
                      className="bg-[#D60A0B] text-white px-6 py-2 rounded-lg"
                    >
                      {isEditing ? "Save Changes" : "Add Group"}
                    </button>
                    <button
                      type="button"
                      className="bg-gray-500 text-white px-6 py-2 rounded-lg"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeesGroup;

// import React, { useState } from "react";
// import AdminNavbar from "../AdminNav/AdminNavbar";
// import AdminTopBar from "../AdminNav/AdminTopBar";
// import { FaSearch, FaEdit, FaTrashAlt } from "react-icons/fa";

// // Initial fees group data
// const initialFeesData = [
//   {
//     id: 1,
//     name: "Creche Fees",
//     feesType: "Feeding Fee - GHS200.00, Maintenance - GHS100.00, Tuition - GHS350.00",
//     description: "To be paid every semester",
//   },
//   {
//     id: 2,
//     name: "Nurse Fee Group",
//     feesType: "Feeding Fee - GHS150.00, Maintenance - GHS100.00, Tuition - GHS450.00",
//     description: "To be paid every semester",
//   },
//   {
//     id: 3,
//     name: "Kindergarten Fee Group",
//     feesType: "Feeding Fee - GHS180.00, Maintenance - GHS120.00, Tuition - GHS500.00",
//     description: "To be paid every semester",
//   },
//   {
//     id: 4,
//     name: "Class 1 Fee Group",
//     feesType: "Feeding Fee - GHS100.00, PTA - GHS150.00, Computer Fees - GHS150.00, Tuition - GHS500.00",
//     description: "To be paid every semester",
//   },
//   {
//     id: 5,
//     name: "Class 2 Fee Group",
//     feesType: "Feeding Fee - GHS100.00, PTA - GHS150.00, Computer Fees - GHS150.00, Tuition - GHS500.00",
//     description: "To be paid every semester",
//   },
// ];

// const FeesGroup = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [feesData, setFeesData] = useState(initialFeesData);
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [selectedFeeGroup, setSelectedFeeGroup] = useState(null);

//   // Filter fees data based on search term
//   const filteredFeesData = feesData.filter((fee) =>
//     fee.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Handle edit click
//   const handleEditClick = (feeGroup) => {
//     setSelectedFeeGroup(feeGroup);
//     setIsEditing(true);
//     setShowAddForm(true); // Open modal for edit
//   };

//   // Handle delete click
//   const handleDeleteClick = (id) => {
//     setFeesData((prevData) => prevData.filter((fee) => fee.id !== id));
//   };

//   // Handle form submission for add or edit
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (isEditing) {
//       // Edit mode
//       setFeesData((prevData) =>
//         prevData.map((fee) =>
//           fee.id === selectedFeeGroup.id ? selectedFeeGroup : fee
//         )
//       );
//     } else {
//       // Add new fee group
//       const newFeeGroup = {
//         id: feesData.length + 1,
//         ...selectedFeeGroup,
//       };
//       setFeesData([...feesData, newFeeGroup]);
//     }
//     setShowAddForm(false);
//     setIsEditing(false);
//     setSelectedFeeGroup(null);
//   };

//   return (
//     <div className="flex">
//       <AdminNavbar />
//       <div className="w-full">
//         <AdminTopBar />
//         <div className="bg-[#F5F6FA] p-6">
//           <div className="text-sm text-gray-600">
//             <h1 className="font-bold text-xl">Account</h1>
//             <div className="flex items-center space-x-2 mb-6">
//               <span>Home</span>
//               <span className="text-red-500">&gt; Fees Group</span>
//             </div>
//           </div>

//           {/* Tabs Section */}
//           <div className="bg-white p-6 rounded-lg shadow">
//             <div className="flex justify-between items-center mb-4">
//               <div className="flex items-center space-x-6 border-b border-gray-300">
//                 <button
//                   className={`${
//                     showAddForm ? "text-gray-500" : "text-red-500"
//                   } font-semibold border-b-2 pb-2 ${
//                     showAddForm ? "" : "border-red-500"
//                   }`}
//                   onClick={() => setShowAddForm(false)}
//                 >
//                   Fees Group List
//                 </button>
//                 <button
//                   className={`${
//                     showAddForm ? "text-red-500" : "text-gray-500"
//                   } font-semibold pb-2 ${showAddForm ? "border-b-2 border-red-500" : ""
//                     }`}
//                   onClick={() => {
//                     setShowAddForm(true);
//                     setSelectedFeeGroup(null); // Reset form for adding new group
//                   }}
//                 >
//                   Add Fees Group
//                 </button>
//               </div>
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className="px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D60A0B]"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//                 <FaSearch className="absolute top-2/4 left-3 transform -translate-y-2/4 text-gray-400" />
//               </div>
//             </div>

//             {/* Fees Table */}
//             {!showAddForm && (
//               <div className="overflow-x-auto">
//                 <table className="min-w-full bg-white border border-gray-200">
//                   <thead className="bg-gray-50">
//                     <tr className="text-left">
//                       <th className="py-3 px-4 border-b font-semibold text-gray-600">No.</th>
//                       <th className="py-3 px-4 border-b font-semibold text-gray-600">Name</th>
//                       <th className="py-3 px-4 border-b font-semibold text-gray-600">Fees Type</th>
//                       <th className="py-3 px-4 border-b font-semibold text-gray-600">Description</th>
//                       <th className="py-3 px-4 border-b font-semibold text-gray-600">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {filteredFeesData.length > 0 ? (
//                       filteredFeesData.map((fee, index) => (
//                         <tr key={fee.id} className="hover:bg-gray-100">
//                           <td className="py-3 px-4 border-b text-gray-600">{index + 1}</td>
//                           <td className="py-3 px-4 border-b text-gray-600">{fee.name}</td>
//                           <td className="py-3 px-4 border-b text-gray-600">{fee.feesType}</td>
//                           <td className="py-3 px-4 border-b text-gray-600">{fee.description}</td>
//                           <td className="py-3 px-4 border-b flex space-x-2">
//                             <button
//                               className="text-blue-500 hover:text-blue-700"
//                               onClick={() => handleEditClick(fee)}
//                             >
//                               <FaEdit />
//                             </button>
//                             <button
//                               className="text-red-500 hover:text-red-700"
//                               onClick={() => handleDeleteClick(fee.id)}
//                             >
//                               <FaTrashAlt />
//                             </button>
//                           </td>
//                         </tr>
//                       ))
//                     ) : (
//                       <tr>
//                         <td colSpan="5" className="py-3 px-4 text-center text-gray-600">
//                           No results found.
//                         </td>
//                       </tr>
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//             )}

//             {/* Pagination */}
//             {!showAddForm && (
//               <div className="flex justify-end items-center mt-4 mr-6 space-x-4">
//                 <button className="text-gray-500">Previous</button>
//                 <div className="flex space-x-2">
//                   <button className="bg-[#D60A0B] text-white px-3 py-1 rounded-lg">1</button>
//                   <button className="bg-white text-gray-500 px-3 py-1 border border-[#D60A0B] rounded-lg">
//                     2
//                   </button>
//                   <button className="bg-white text-gray-500 px-3 py-1 border border-[#D60A0B] rounded-lg">
//                     3
//                   </button>
//                 </div>
//                 <button className="text-gray-500">Next</button>
//               </div>
//             )}
//           </div>

//           {/* Add/Edit Fees Group Form - Modal */}
//           {showAddForm && (
//             <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30">
//               <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
//                 <h2 className="text-xl font-semibold mb-4">
//                   {isEditing ? "Edit Fees Group" : "Add Fees Group"}
//                 </h2>
//                 <form onSubmit={handleFormSubmit}>
//                   <div className="mb-4">
//                     <label className="block text-gray-700 font-medium mb-2">Name</label>
//                     <input
//                       type="text"
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D60A0B]"
//                       value={selectedFeeGroup?.name || ""}
//                       onChange={(e) =>
//                         setSelectedFeeGroup({ ...selectedFeeGroup, name: e.target.value })
//                       }
//                       required
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label className="block text-gray-700 font-medium mb-2">Fees Type</label>
//                     <input
//                       type="text"
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D60A0B]"
//                       value={selectedFeeGroup?.feesType || ""}
//                       onChange={(e) =>
//                         setSelectedFeeGroup({ ...selectedFeeGroup, feesType: e.target.value })
//                       }
//                       required
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label className="block text-gray-700 font-medium mb-2">Description</label>
//                     <input
//                       type="text"
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D60A0B]"
//                       value={selectedFeeGroup?.description || ""}
//                       onChange={(e) =>
//                         setSelectedFeeGroup({ ...selectedFeeGroup, description: e.target.value })
//                       }
//                       required
//                     />
//                   </div>
//                   <div className="flex space-x-4">
//                     <button
//                       type="submit"
//                       className="bg-[#D60A0B] text-white px-6 py-2 rounded-lg"
//                     >
//                       {isEditing ? "Save Changes" : "Add Group"}
//                     </button>
//                     {isEditing && (
//                       <button
//                         type="button"
//                         className="bg-gray-500 text-white px-6 py-2 rounded-lg"
//                         onClick={() => handleDeleteClick(selectedFeeGroup.id)}
//                       >
//                         Delete
//                       </button>
//                     )}
//                   </div>
//                 </form>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeesGroup;



// // import React, { useState } from "react";
// // import AdminNavbar from "../AdminNav/AdminNavbar";
// // import AdminTopBar from "../AdminNav/AdminTopBar";
// // import { FaSearch, FaEdit, FaTrashAlt } from "react-icons/fa";

// // // Initial fees group data
// // const initialFeesData = [
// //   {
// //     id: 1,
// //     name: "Creche Fees",
// //     feesType: "Feeding Fee - GHS200.00, Maintenance - GHS100.00, Tuition - GHS350.00",
// //     description: "To be paid every semester",
// //   },
// //   {
// //     id: 2,
// //     name: "Nurse Fee Group",
// //     feesType: "Feeding Fee - GHS150.00, Maintenance - GHS100.00, Tuition - GHS450.00",
// //     description: "To be paid every semester",
// //   },
// //   {
// //     id: 3,
// //     name: "Kindergarten Fee Group",
// //     feesType: "Feeding Fee - GHS180.00, Maintenance - GHS120.00, Tuition - GHS500.00",
// //     description: "To be paid every semester",
// //   },
// //   {
// //     id: 4,
// //     name: "Class 1 Fee Group",
// //     feesType: "Feeding Fee - GHS100.00, PTA - GHS150.00, Computer Fees - GHS150.00, Tuition - GHS500.00",
// //     description: "To be paid every semester",
// //   },
// //   {
// //     id: 5,
// //     name: "Class 2 Fee Group",
// //     feesType: "Feeding Fee - GHS100.00, PTA - GHS150.00, Computer Fees - GHS150.00, Tuition - GHS500.00",
// //     description: "To be paid every semester",
// //   },
// // ];

// // const FeesGroup = () => {
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [feesData, setFeesData] = useState(initialFeesData);
// //   const [showAddForm, setShowAddForm] = useState(false);
// //   const [isEditing, setIsEditing] = useState(false);
// //   const [selectedFeeGroup, setSelectedFeeGroup] = useState(null);

// //   // Filter fees data based on search term
// //   const filteredFeesData = feesData.filter((fee) =>
// //     fee.name.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   // Handle edit or delete click on a fee group row
// //   const handleRowClick = (feeGroup) => {
// //     setSelectedFeeGroup(feeGroup);
// //     setIsEditing(true);
// //   };

// //   // Handle form submission for add or edit
// //   const handleFormSubmit = (e) => {
// //     e.preventDefault();
// //     if (isEditing) {
// //       // Edit mode
// //       setFeesData((prevData) =>
// //         prevData.map((fee) =>
// //           fee.id === selectedFeeGroup.id ? selectedFeeGroup : fee
// //         )
// //       );
// //     } else {
// //       // Add new fee group
// //       const newFeeGroup = {
// //         id: feesData.length + 1,
// //         ...selectedFeeGroup,
// //       };
// //       setFeesData([...feesData, newFeeGroup]);
// //     }
// //     setShowAddForm(false);
// //     setIsEditing(false);
// //     setSelectedFeeGroup(null);
// //   };

// //   // Handle delete action
// //   const handleDelete = () => {
// //     setFeesData((prevData) =>
// //       prevData.filter((fee) => fee.id !== selectedFeeGroup.id)
// //     );
// //     setIsEditing(false);
// //     setSelectedFeeGroup(null);
// //   };

// //   return (
// //     <div className="flex">
// //       <AdminNavbar />
// //       <div className="w-full">
// //         <AdminTopBar />
// //         <div className="bg-[#F5F6FA] p-6">
// //           <div className="text-sm text-gray-600">
// //             <h1 className="font-bold text-xl">Account</h1>
// //             <div className="flex items-center space-x-2 mb-6">
// //               <span>Home</span>
// //               <span className="text-red-500">&gt; Fees Group</span>
// //             </div>
// //           </div>

// //           {/* Tabs Section */}
// //           <div className="bg-white p-6 rounded-lg shadow">
// //             <div className="flex justify-between items-center mb-4">
// //               <div className="flex items-center space-x-6 border-b border-gray-300">
// //                 <button
// //                   className={`${
// //                     showAddForm ? "text-gray-500" : "text-red-500"
// //                   } font-semibold border-b-2 pb-2 ${
// //                     showAddForm ? "" : "border-red-500"
// //                   }`}
// //                   onClick={() => setShowAddForm(false)}
// //                 >
// //                   Fees Group List
// //                 </button>
// //                 <button
// //                   className={`${
// //                     showAddForm ? "text-red-500" : "text-gray-500"
// //                   } font-semibold pb-2 ${showAddForm ? "border-b-2 border-red-500" : ""
// //                     }`}
// //                   onClick={() => setShowAddForm(true)}
// //                 >
// //                   Add Fees Group
// //                 </button>
// //               </div>
// //               <div className="relative">
// //                 <input
// //                   type="text"
// //                   placeholder="Search..."
// //                   className="px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D60A0B]"
// //                   value={searchTerm}
// //                   onChange={(e) => setSearchTerm(e.target.value)}
// //                 />
// //                 <FaSearch className="absolute top-2/4 left-3 transform -translate-y-2/4 text-gray-400" />
// //               </div>
// //             </div>

// //             {/* Fees Table */}
// //             {!showAddForm && (
// //               <div className="overflow-x-auto">
// //                 <table className="min-w-full bg-white border border-gray-200">
// //                   <thead className="bg-gray-50">
// //                     <tr className="text-left">
// //                       <th className="py-3 px-4 border-b font-semibold text-gray-600">No.</th>
// //                       <th className="py-3 px-4 border-b font-semibold text-gray-600">Name</th>
// //                       <th className="py-3 px-4 border-b font-semibold text-gray-600">Fees Type</th>
// //                       <th className="py-3 px-4 border-b font-semibold text-gray-600">Description</th>
// //                     </tr>
// //                   </thead>
// //                   <tbody>
// //                     {filteredFeesData.length > 0 ? (
// //                       filteredFeesData.map((fee, index) => (
// //                         <tr
// //                           key={fee.id}
// //                           className="hover:bg-gray-100 cursor-pointer"
// //                           onClick={() => handleRowClick(fee)}
// //                         >
// //                           <td className="py-3 px-4 border-b text-gray-600">{index + 1}</td>
// //                           <td className="py-3 px-4 border-b text-gray-600">{fee.name}</td>
// //                           <td className="py-3 px-4 border-b text-gray-600">{fee.feesType}</td>
// //                           <td className="py-3 px-4 border-b text-gray-600">{fee.description}</td>
// //                         </tr>
// //                       ))
// //                     ) : (
// //                       <tr>
// //                         <td colSpan="4" className="py-3 px-4 text-center text-gray-600">
// //                           No results found.
// //                         </td>
// //                       </tr>
// //                     )}
// //                   </tbody>
// //                 </table>
// //               </div>
// //             )}

// //             {/* Pagination */}
// //             {!showAddForm && (
// //               <div className="flex justify-end items-center mt-4 mr-6 space-x-4">
// //                 <button className="text-gray-500">Previous</button>
// //                 <div className="flex space-x-2">
// //                   <button className="bg-[#D60A0B] text-white px-3 py-1 rounded-lg">1</button>
// //                   <button className="bg-white text-gray-500 px-3 py-1 border border-[#D60A0B] rounded-lg">
// //                     2
// //                   </button>
// //                   <button className="bg-white text-gray-500 px-3 py-1 border border-[#D60A0B] rounded-lg">
// //                     3
// //                   </button>
// //                 </div>
// //                 <button className="text-gray-500">Next</button>
// //               </div>
// //             )}
// //           </div>

// //           {/* Add Fees Group Form */}
// //           {showAddForm && (
// //             <div className="bg-white p-6 rounded-lg shadow-lg">
// //               <h2 className="text-2xl font-semibold mb-4">Add Fees Group</h2>
// //               <form onSubmit={handleFormSubmit}>
// //                 <div className="mb-4">
// //                   <label className="block text-gray-700 font-medium mb-2">Name</label>
// //                   <input
// //                     type="text"
// //                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D60A0B]"
// //                     value={selectedFeeGroup?.name || ""}
// //                     onChange={(e) =>
// //                       setSelectedFeeGroup({ ...selectedFeeGroup, name: e.target.value })
// //                     }
// //                     required
// //                   />
// //                 </div>
// //                 <div className="mb-4">
// //                   <label className="block text-gray-700 font-medium mb-2">Fees Type</label>
// //                   <input
// //                     type="text"
// //                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D60A0B]"
// //                     value={selectedFeeGroup?.feesType || ""}
// //                     onChange={(e) =>
// //                       setSelectedFeeGroup({ ...selectedFeeGroup, feesType: e.target.value })
// //                     }
// //                     required
// //                   />
// //                 </div>
// //                 <div className="mb-4">
// //                   <label className="block text-gray-700 font-medium mb-2">Description</label>
// //                   <input
// //                     type="text"
// //                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D60A0B]"
// //                     value={selectedFeeGroup?.description || ""}
// //                     onChange={(e) =>
// //                       setSelectedFeeGroup({ ...selectedFeeGroup, description: e.target.value })
// //                     }
// //                     required
// //                   />
// //                 </div>
// //                 <div className="flex space-x-4">
// //                   <button
// //                     type="submit"
// //                     className="bg-[#D60A0B] text-white px-6 py-2 rounded-lg"
// //                   >
// //                     {isEditing ? "Save Changes" : "Add Group"}
// //                   </button>
// //                   {isEditing && (
// //                     <button
// //                       type="button"
// //                       className="bg-gray-500 text-white px-6 py-2 rounded-lg"
// //                       onClick={handleDelete}
// //                     >
// //                       Delete
// //                     </button>
// //                   )}
// //                 </div>
// //               </form>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FeesGroup;



// // // import React, { useState } from "react";
// // // import AdminNavbar from "../AdminNav/AdminNavbar";
// // // import AdminTopBar from "../AdminNav/AdminTopBar";
// // // import { FaSearch } from "react-icons/fa";

// // // // Initial fee groups data
// // // const initialFeesData = [
// // //   {
// // //     id: 1,
// // //     name: "Creche Fees",
// // //     feesType: "Feeding Fee - GHS200.00, Maintenance - GHS100.00, Tuition - GHS350.00",
// // //     description: "To be paid every semester",
// // //   },
// // //   {
// // //     id: 2,
// // //     name: "Nurse Fee Group",
// // //     feesType: "Feeding Fee - GHS150.00, Maintenance - GHS100.00, Tuition - GHS450.00",
// // //     description: "To be paid every semester",
// // //   },
// // //   {
// // //     id: 3,
// // //     name: "Kindergarten Fee Group",
// // //     feesType: "Feeding Fee - GHS180.00, Maintenance - GHS120.00, Tuition - GHS500.00",
// // //     description: "To be paid every semester",
// // //   },
// // //   {
// // //     id: 4,
// // //     name: "Class 1 Fee Group",
// // //     feesType: "Feeding Fee - GHS100.00, PTA - GHS150.00, Computer Fees - GHS150.00, Tuition - GHS500.00",
// // //     description: "To be paid every semester",
// // //   },
// // //   {
// // //     id: 5,
// // //     name: "Class 2 Fee Group",
// // //     feesType: "Feeding Fee - GHS100.00, PTA - GHS150.00, Computer Fees - GHS150.00, Tuition - GHS500.00",
// // //     description: "To be paid every semester",
// // //   },
// // // ];

// // // const FeesGroup = () => {
// // //   const [showAddForm, setShowAddForm] = useState(false);
// // //   const [searchTerm, setSearchTerm] = useState("");
// // //   const [feesData, setFeesData] = useState(initialFeesData);

// // //   // Filter fees data based on search term
// // //   const filteredFeesData = feesData.filter((fee) =>
// // //     fee.name.toLowerCase().includes(searchTerm.toLowerCase())
// // //   );

// // //   return (
// // //     <div className="flex">
// // //       <AdminNavbar />
// // //       <div className="w-full">
// // //         <AdminTopBar />
// // //         <div className="bg-[#F5F6FA] p-6">
// // //           <div className="text-sm text-gray-600">
// // //             <h1 className="font-bold text-xl">Account</h1>
// // //             <div className="flex items-center space-x-2 mb-6">
// // //               <span>Home</span>
// // //               <span className="text-red-500">&gt; Fees Group</span>
// // //             </div>
// // //           </div>

// // //           {/* Tabs Section */}
// // //           <div className="bg-white p-6 rounded-lg shadow">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <div className="flex items-center space-x-6 border-b border-gray-300">
// // //                 <button className="text-red-500 font-semibold border-b-2 border-red-500 pb-2">
// // //                   Fees Group List
// // //                 </button>
// // //                 <button
// // //                   className="text-gray-500 font-semibold pb-2"
// // //                   onClick={() => setShowAddForm(true)}
// // //                 >
// // //                   Add Fees Group
// // //                 </button>
// // //               </div>
// // //               <div className="relative">
// // //                 <input
// // //                   type="text"
// // //                   placeholder="Search..."
// // //                   className="px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D60A0B]"
// // //                   value={searchTerm}
// // //                   onChange={(e) => setSearchTerm(e.target.value)}
// // //                 />
// // //                 <FaSearch className="absolute top-2/4 left-3 transform -translate-y-2/4 text-gray-400" />
// // //               </div>
// // //             </div>

// // //             {/* Fees Table */}
// // //             <div className="overflow-x-auto">
// // //               <table className="min-w-full bg-white border border-gray-200">
// // //                 <thead className="bg-gray-50">
// // //                   <tr className="text-left">
// // //                     <th className="py-3 px-4 border-b font-semibold text-gray-600">No.</th>
// // //                     <th className="py-3 px-4 border-b font-semibold text-gray-600">Name</th>
// // //                     <th className="py-3 px-4 border-b font-semibold text-gray-600">Fees Type</th>
// // //                     <th className="py-3 px-4 border-b font-semibold text-gray-600">Description</th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                   {filteredFeesData.length > 0 ? (
// // //                     filteredFeesData.map((fee, index) => (
// // //                       <tr key={fee.id} className="hover:bg-gray-100">
// // //                         <td className="py-3 px-4 border-b text-gray-600">{index + 1}</td>
// // //                         <td className="py-3 px-4 border-b text-gray-600">{fee.name}</td>
// // //                         <td className="py-3 px-4 border-b text-gray-600">{fee.feesType}</td>
// // //                         <td className="py-3 px-4 border-b text-gray-600">{fee.description}</td>
// // //                       </tr>
// // //                     ))
// // //                   ) : (
// // //                     <tr>
// // //                       <td colSpan="4" className="py-3 px-4 text-center text-gray-600">
// // //                         No results found.
// // //                       </td>
// // //                     </tr>
// // //                   )}
// // //                 </tbody>
// // //               </table>
// // //             </div>

// // //             {/* Pagination */}
// // //             <div className="flex justify-end items-center mt-4 mr-6 space-x-4">
// // //               <button className="text-gray-500">Previous</button>
// // //               <div className="flex space-x-2">
// // //                 <button className="bg-[#D60A0B] text-white px-3 py-1 rounded-lg">1</button>
// // //                 <button className="bg-white text-gray-500 px-3 py-1 border border-[#D60A0B] rounded-lg">
// // //                   2
// // //                 </button>
// // //                 <button className="bg-white text-gray-500 px-3 py-1 border border-[#D60A0B] rounded-lg">
// // //                   3
// // //                 </button>
// // //               </div>
// // //               <button className="text-gray-500">Next</button>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Add Fees Group Form Modal */}
// // //         {showAddForm && (
// // //           <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
// // //             <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
// // //               <h2 className="text-2xl font-semibold mb-4">Add Fees Group</h2>
// // //               <form>
// // //                 <div className="mb-4">
// // //                   <label className="block text-gray-700 font-medium mb-2">Name</label>
// // //                   <input
// // //                     type="text"
// // //                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D60A0B]"
// // //                   />
// // //                 </div>
// // //                 <div className="mb-4">
// // //                   <label className="block text-gray-700 font-medium mb-2">Fees Type</label>
// // //                   <input
// // //                     type="text"
// // //                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D60A0B]"
// // //                   />
// // //                 </div>
// // //                 <div className="mb-4">
// // //                   <label className="block text-gray-700 font-medium mb-2">Description</label>
// // //                   <input
// // //                     type="text"
// // //                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D60A0B]"
// // //                   />
// // //                 </div>
// // //                 <div className="flex justify-end space-x-4">
// // //                   <button
// // //                     type="button"
// // //                     className="bg-gray-500 text-white px-4 py-2 rounded-md"
// // //                     onClick={() => setShowAddForm(false)}
// // //                   >
// // //                     Cancel
// // //                   </button>
// // //                   <button type="submit" className="bg-[#D60A0B] text-white px-4 py-2 rounded-md">
// // //                     Add
// // //                   </button>
// // //                 </div>
// // //               </form>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default FeesGroup;

// // // import React, { useState } from "react";
// // // import AdminNavbar from "../AdminNav/AdminNavbar";
// // // import AdminTopBar from "../AdminNav/AdminTopBar";
// // // import { FaSearch } from "react-icons/fa";

// // // const feesData = [
// // //   {
// // //     id: 1,
// // //     name: "Creche Fees",
// // //     feesType: "Feeding Fee - GHS200.00, Maintenance - GHS100.00, Tuition - GHS350.00",
// // //     description: "To be paid every semester"
// // //   },
// // //   {
// // //     id: 2,
// // //     name: "Nurse Fee Group",
// // //     feesType: "Feeding Fee - GHS150.00, Maintenance - GHS100.00, Tuition - GHS450.00",
// // //     description: "To be paid every semester"
// // //   },
// // //   {
// // //     id: 3,
// // //     name: "Kindergarten Fee Group",
// // //     feesType: "Feeding Fee - GHS180.00, Maintenance - GHS120.00, Tuition - GHS500.00",
// // //     description: "To be paid every semester"
// // //   },
// // //   {
// // //     id: 4,
// // //     name: "Class 1 Fee Group",
// // //     feesType: "Feeding Fee - GHS100.00, PTA - GHS150.00, Computer Fees - GHS150.00, Tuition - GHS500.00",
// // //     description: "To be paid every semester"
// // //   },
// // //   {
// // //     id: 5,
// // //     name: "Class 2 Fee Group",
// // //     feesType: "Feeding Fee - GHS100.00, PTA - GHS150.00, Computer Fees - GHS150.00, Tuition - GHS500.00",
// // //     description: "To be paid every semester"
// // //   }
// // // ];

// // // const FeesGroup = () => {
// // //   const [showAddForm, setShowAddForm] = useState(false);

// // //   return (
// // //     <div className="flex">
// // //       <AdminNavbar />
// // //       <div className="w-full">
// // //         <AdminTopBar />
// // //         <div className="bg-[#F5F6FA] p-6">
// // //           <div className="text-sm text-gray-600">
// // //             <h1 className="font-bold text-xl">Account</h1>
// // //             <div className="flex items-center space-x-2 mb-6">
// // //               <span>Home</span>
// // //               <span className="text-red-500">&gt; Fees Group</span>
// // //             </div>
// // //           </div>

// // //           {/* Tabs Section */}
// // //           <div className="bg-white p-6 rounded-lg shadow">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <div className="flex items-center space-x-6 border-b border-gray-300">
// // //                 <button className="text-red-500 font-semibold border-b-2 border-red-500 pb-2">
// // //                   Fees Group List
// // //                 </button>
// // //                 <button
// // //                   className="text-gray-500 font-semibold pb-2"
// // //                   onClick={() => setShowAddForm(true)}
// // //                 >
// // //                   Add Fees Group
// // //                 </button>
// // //               </div>
// // //               <div className="relative">
// // //                 <input
// // //                   type="text"
// // //                   placeholder="Search..."
// // //                   className="px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D60A0B]"
// // //                 />
// // //                 <FaSearch className="absolute top-2/4 left-3 transform -translate-y-2/4 text-gray-400" />
// // //               </div>
// // //             </div>

// // //             {/* Fees Table */}
// // //             <div className="overflow-x-auto">
// // //               <table className="min-w-full bg-white border border-gray-200">
// // //                 <thead className="bg-gray-50">
// // //                   <tr className="text-left">
// // //                     <th className="py-3 px-4 border-b font-semibold text-gray-600">No.</th>
// // //                     <th className="py-3 px-4 border-b font-semibold text-gray-600">Name</th>
// // //                     <th className="py-3 px-4 border-b font-semibold text-gray-600">Fees Type</th>
// // //                     <th className="py-3 px-4 border-b font-semibold text-gray-600">Description</th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                   {feesData.map((fee, index) => (
// // //                     <tr key={fee.id} className="hover:bg-gray-100">
// // //                       <td className="py-3 px-4 border-b text-gray-600">{index + 1}</td>
// // //                       <td className="py-3 px-4 border-b text-gray-600">{fee.name}</td>
// // //                       <td className="py-3 px-4 border-b text-gray-600">{fee.feesType}</td>
// // //                       <td className="py-3 px-4 border-b text-gray-600">{fee.description}</td>
// // //                     </tr>
// // //                   ))}
// // //                 </tbody>
// // //               </table>
// // //             </div>

// // //             {/* Pagination */}
// // //             <div className="flex justify-end items-center mt-4 mr-6 space-x-4">
// // //               <button className="text-gray-500">Previous</button>
// // //               <div className="flex space-x-2">
// // //                 <button className="bg-[#D60A0B] text-white px-3 py-1 rounded-lg">1</button>
// // //                 <button className="bg-white text-gray-500 px-3 py-1 border border-[#D60A0B] rounded-lg">
// // //                   2
// // //                 </button>
// // //                 <button className="bg-white text-gray-500 px-3 py-1 border border-[#D60A0B] rounded-lg">
// // //                   3
// // //                 </button>
// // //               </div>
// // //               <button className="text-gray-500">Next</button>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Add Fees Group Form Modal */}
// // //         {showAddForm && (
// // //           <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
// // //             <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
// // //               <h2 className="text-2xl font-semibold mb-4">Add Fees Group</h2>
// // //               <form>
// // //                 <div className="mb-4">
// // //                   <label className="block text-gray-700 font-medium mb-2">Name</label>
// // //                   <input
// // //                     type="text"
// // //                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D60A0B]"
// // //                   />
// // //                 </div>
// // //                 <div className="mb-4">
// // //                   <label className="block text-gray-700 font-medium mb-2">Fees Type</label>
// // //                   <input
// // //                     type="text"
// // //                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D60A0B]"
// // //                   />
// // //                 </div>
// // //                 <div className="mb-4">
// // //                   <label className="block text-gray-700 font-medium mb-2">Description</label>
// // //                   <input
// // //                     type="text"
// // //                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D60A0B]"
// // //                   />
// // //                 </div>
// // //                 <div className="flex justify-end space-x-4">
// // //                   <button
// // //                     type="button"
// // //                     className="bg-gray-500 text-white px-4 py-2 rounded-md"
// // //                     onClick={() => setShowAddForm(false)}
// // //                   >
// // //                     Cancel
// // //                   </button>
// // //                   <button type="submit" className="bg-[#D60A0B] text-white px-4 py-2 rounded-md">
// // //                     Add
// // //                   </button>
// // //                 </div>
// // //               </form>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default FeesGroup;

// // // import React from "react";
// // // import AdminNavbar from "../AdminNav/AdminNavbar";
// // // import { FaSearch } from "react-icons/fa";
// // // import AdminTopBar from "../AdminNav/AdminTopBar";

// // // // Sample data for Fees Groups
// // // const feesGroupData = [
// // //   {
// // //     id: 1,
// // //     name: "Creche Fees",
// // //     feesType: [
// // //       { type: "Feeding Fee", amount: "GHS200.00" },
// // //       { type: "Maintenance", amount: "GHS100.00" },
// // //       { type: "Tuition", amount: "GHS350.00" },
// // //     ],
// // //     description: "To be paid every semester",
// // //   },
// // //   {
// // //     id: 2,
// // //     name: "Nurse Fee Group",
// // //     feesType: [
// // //       { type: "Feeding Fee", amount: "GHS150.00" },
// // //       { type: "Maintenance", amount: "GHS100.00" },
// // //       { type: "Tuition", amount: "GHS450.00" },
// // //     ],
// // //     description: "To be paid every semester",
// // //   },
// // //   {
// // //     id: 3,
// // //     name: "Kindergarten Fee Group",
// // //     feesType: [
// // //       { type: "Feeding Fee", amount: "GHS180.00" },
// // //       { type: "Maintenance", amount: "GHS120.00" },
// // //       { type: "Tuition", amount: "GHS500.00" },
// // //     ],
// // //     description: "To be paid every semester",
// // //   },
// // //   {
// // //     id: 4,
// // //     name: "Class 1 Fee Group",
// // //     feesType: [
// // //       { type: "Feeding Fee", amount: "GHS100.00" },
// // //       { type: "PTA", amount: "GHS150.00" },
// // //       { type: "Tuition", amount: "GHS500.00" },
// // //     ],
// // //     description: "To be paid every semester",
// // //   },
// // // ];

// // // const FeesGroup = () => {
// // //   return (
// // //     <>
// // //       <div className="flex">
// // //         <AdminNavbar />
// // //         <div>
// // //           <AdminTopBar />

// // //           <div>
// // //             <div className="bg-[#E5E5E5] p-4 rounded-lg">
// // //               <h1 className="font-bold text-lg">Fees Group</h1>
// // //               <div className="text-sm text-gray-600 mb-4">
// // //                 <span className="font-semibold text-[#D60A0B]">Finance</span>{" "}
// // //                 &gt; <span className="text-gray-500">Fees Group</span>
// // //               </div>

// // //               <div className="bg-white p-6 mt-6 rounded-lg border border-gray-300">
// // //                 <h1 className="text-2xl font-semibold mb-6">All Fees Groups</h1>

// // //                 {/* Search and Filter */}
// // //                 <div className="flex items-center space-x-4 mb-6">
// // //                   <div className="relative w-1/3">
// // //                     <input
// // //                       type="text"
// // //                       placeholder="Search by group name..."
// // //                       className="px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:border-[#D60A0B] w-full"
// // //                     />
// // //                     <FaSearch className="absolute top-2/4 left-3 transform -translate-y-2/4 text-gray-400" />
// // //                   </div>
// // //                   <select className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#D60A0B] w-1/4 bg-white text-gray-700">
// // //                     <option className="text-[#D60A0B] font-semibold">
// // //                       Select Group
// // //                     </option>
// // //                     <option className="hover:bg-[#D60A0B] hover:text-white">
// // //                       Creche Fees
// // //                     </option>
// // //                     <option className="hover:bg-[#D60A0B] hover:text-white">
// // //                       Nurse Fee Group
// // //                     </option>
// // //                     <option className="hover:bg-[#D60A0B] hover:text-white">
// // //                       Kindergarten Fee Group
// // //                     </option>
// // //                     <option className="hover:bg-[#D60A0B] hover:text-white">
// // //                       Class 1 Fee Group
// // //                     </option>
// // //                   </select>
// // //                   <button className="bg-[#D60A0B] text-white px-6 py-2 rounded-md">
// // //                     SEARCH
// // //                   </button>
// // //                 </div>

// // //                 {/* Fees Group Table */}
// // //                 <div className="overflow-x-auto">
// // //                   <table className="min-w-full bg-white border rounded-lg overflow-hidden">
// // //                     <thead className="bg-gray-50">
// // //                       <tr className="text-left">
// // //                         <th className="py-3 px-4 border-b font-semibold text-gray-600">
// // //                           ID
// // //                         </th>
// // //                         <th className="py-3 px-4 border-b font-semibold text-gray-600">
// // //                           Name
// // //                         </th>
// // //                         <th className="py-3 px-4 border-b font-semibold text-gray-600">
// // //                           Fees Type
// // //                         </th>
// // //                         <th className="py-3 px-4 border-b font-semibold text-gray-600">
// // //                           Description
// // //                         </th>
// // //                       </tr>
// // //                     </thead>
// // //                     <tbody>
// // //                       {feesGroupData.map((group) => (
// // //                         <tr key={group.id} className="hover:bg-gray-100">
// // //                           <td className="py-3 px-4 border-b text-gray-600">
// // //                             {group.id}
// // //                           </td>
// // //                           <td className="py-3 px-4 border-b text-gray-600">
// // //                             {group.name}
// // //                           </td>
// // //                           <td className="py-3 px-4 border-b text-gray-600">
// // //                             {group.feesType.map((fee, index) => (
// // //                               <div key={index}>
// // //                                 {fee.type} - {fee.amount}
// // //                               </div>
// // //                             ))}
// // //                           </td>
// // //                           <td className="py-3 px-4 border-b text-gray-600">
// // //                             {group.description}
// // //                           </td>
// // //                         </tr>
// // //                       ))}
// // //                     </tbody>
// // //                   </table>
// // //                 </div>

// // //                 {/* Pagination */}
// // //                 <div className="flex justify-end items-center mt-4 mr-6 space-x-4">
// // //                   <button className="text-gray-500">Previous</button>
// // //                   <div className="flex space-x-2">
// // //                     <button className="bg-[#D60A0B] text-white px-3 py-1 rounded-lg">
// // //                       1
// // //                     </button>
// // //                     <button className="bg-white text-gray-500 px-3 py-1 border border-[#D60A0B] rounded-lg">
// // //                       2
// // //                     </button>
// // //                     <button className="bg-white text-gray-500 px-3 py-1 border border-[#D60A0B] rounded-lg">
// // //                       3
// // //                     </button>
// // //                   </div>
// // //                   <button className="text-gray-500">Next</button>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default FeesGroup;
