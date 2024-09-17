import React, { useState } from "react";
import AdminNavbar from "../AdminNav/AdminNavbar";
import { FaSearch } from "react-icons/fa";
import AdminTopBar from "../AdminNav/AdminTopBar";

const Expenses = () => {
  const [searchName, setSearchName] = useState("");
  const [searchType, setSearchType] = useState("");
  const [searchStatus, setSearchStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const expensesPerPage = 10;

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      name: "Daniel Grant",
      expenseType: "Salary",
      amount: "$2,000.00",
      status: "unpaid",
      parentEmail: "arabagrant@gmail.com",
      parentPhone: "+123 9988568",
      dueDate: "02/02/2019",
    },
    {
      id: 2,
      name: "Daniel Grant",
      expenseType: "Transport",
      amount: "$2,000.00",
      status: "Paid",
      parentEmail: "arabagrant@gmail.com",
      parentPhone: "+123 9988568",
      dueDate: "02/02/2019",
    },
    {
      id: 3,
      name: "Daniel Grant",
      expenseType: "Utilities",
      amount: "$2,000.00",
      status: "Due",
      parentEmail: "arabagrant@gmail.com",
      parentPhone: "+123 9988568",
      dueDate: "02/02/2019",
    },
    // Add more entries as per requirement...
  ]);

  const filteredExpenses = expenses.filter((expense) => {
    return (
      (searchName === "" || expense.name.toLowerCase().includes(searchName.toLowerCase())) &&
      (searchType === "" || expense.expenseType.toLowerCase().includes(searchType.toLowerCase())) &&
      (searchStatus === "" || expense.status.toLowerCase() === searchStatus.toLowerCase())
    );
  });

  // Pagination logic
  const indexOfLastExpense = currentPage * expensesPerPage;
  const indexOfFirstExpense = indexOfLastExpense - expensesPerPage;
  const currentExpenses = filteredExpenses.slice(indexOfFirstExpense, indexOfLastExpense);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredExpenses.length / expensesPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (number) => setCurrentPage(number);

  return (
    <>
      <div className="flex">
        <AdminNavbar />
        <div className="flex-1">
          <AdminTopBar />

          <div className="bg-[#E5E5E5] p-4 rounded-lg">
            <h1 className="font-bold text-lg">Account</h1>
            <div className="text-sm text-gray-600 mb-4">
              <span className="font-semibold ">Home</span> &gt;
              <span className="text-[#D60A0B]">Expenses</span>
            </div>

            <div className="bg-white p-6 mt-6 rounded-lg border border-gray-300">
              <h2 className="font-semibold text-xl mb-4">All Expenses</h2>

              <div className="flex items-center space-x-4 mb-6">
                <input
                  type="text"
                  placeholder="Search by name..."
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#D60A0B] w-full"
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Search by expense type..."
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#D60A0B] w-full"
                  value={searchType}
                  onChange={(e) => setSearchType(e.target.value)}
                />
                <select
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#D60A0B]"
                  value={searchStatus}
                  onChange={(e) => setSearchStatus(e.target.value)}
                >
                  <option value="">Select Status...</option>
                  <option value="paid">Paid</option>
                  <option value="unpaid">Unpaid</option>
                  <option value="due">Due</option>
                </select>
                <button
                  className="bg-[#D60A0B] text-white px-6 py-2 rounded-md"
                  onClick={() => { /* Trigger search */ }}
                >
                  SEARCH
                </button>
              </div>

              <table className="min-w-full bg-white border rounded-lg overflow-hidden">
                <thead className="bg-white">
                  <tr className="text-left">
                    <th className="py-3 px-4 text-[#D60A0B]">Name</th>
                    <th className="py-3 px-4 text-[#D60A0B]">Expense Type</th>
                    <th className="py-3 px-4 text-[#D60A0B]">Amount</th>
                    <th className="py-3 px-4 text-[#D60A0B]">Status</th>
                    <th className="py-3 px-4 text-[#D60A0B]">Parent Email</th>
                    <th className="py-3 px-4 text-[#D60A0B]">Parent Phone</th>
                    <th className="py-3 px-4 text-[#D60A0B]">Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  {currentExpenses.map((expense, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="py-3 px-4">{expense.name}</td>
                      <td className="py-3 px-4">{expense.expenseType}</td>
                      <td className="py-3 px-4">{expense.amount}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-white ${
                            expense.status.toLowerCase() === "paid"
                              ? "bg-blue-500"
                              : expense.status.toLowerCase() === "unpaid"
                              ? "bg-red-500"
                              : "bg-orange-500"
                          }`}
                        >
                          {expense.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">{expense.parentEmail}</td>
                      <td className="py-3 px-4">{expense.parentPhone}</td>
                      <td className="py-3 px-4">{expense.dueDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Pagination */}
              <div className="flex justify-between items-center mt-4">
                <button
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === 1 ? "bg-gray-200 cursor-not-allowed" : "bg-white border"
                  }`}
                  onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>

                <div className="flex space-x-2">
                  {pageNumbers.map((number) => (
                    <button
                      key={number}
                      className={`px-4 py-2 rounded-lg ${
                        currentPage === number ? "bg-red-500 text-white" : "bg-white border"
                      }`}
                      onClick={() => handleClick(number)}
                    >
                      {number}
                    </button>
                  ))}
                </div>

                <button
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === pageNumbers.length
                      ? "bg-gray-200 cursor-not-allowed"
                      : "bg-white border"
                  }`}
                  onClick={() =>
                    currentPage < pageNumbers.length && setCurrentPage(currentPage + 1)
                  }
                  disabled={currentPage === pageNumbers.length}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expenses;



// import React, { useState } from "react";
// import AdminNavbar from "../AdminNav/AdminNavbar";
// import { FaSearch } from "react-icons/fa";
// import AdminTopBar from "../AdminNav/AdminTopBar";

// const Expenses = () => {
//   const [searchName, setSearchName] = useState("");
//   const [searchType, setSearchType] = useState("");
//   const [searchStatus, setSearchStatus] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [expensesPerPage] = useState(10);

//   const [expenses, setExpenses] = useState([
//     { id: 1, name: "Daniel Grant", expenseType: "Salary", amount: "$2,000.00", status: "unpaid", parentEmail: "arabagrant@gmail.com", parentPhone: "+123 9988568", dueDate: "02/02/2019" },
//     { id: 2, name: "Daniel Grant", expenseType: "Transport", amount: "$2,000.00", status: "Paid", parentEmail: "arabagrant@gmail.com", parentPhone: "+123 9988568", dueDate: "02/02/2019" },
//     { id: 3, name: "Daniel Grant", expenseType: "Utilities", amount: "$2,000.00", status: "Due", parentEmail: "arabagrant@gmail.com", parentPhone: "+123 9988568", dueDate: "02/02/2019" },
//     { id: 4, name: "Daniel Grant", expenseType: "Salary", amount: "$2,000.00", status: "Paid", parentEmail: "arabagrant@gmail.com", parentPhone: "+123 9988568", dueDate: "02/02/2019" },
//     { id: 5, name: "Daniel Grant", expenseType: "Utilities", amount: "$2,000.00", status: "unpaid", parentEmail: "arabagrant@gmail.com", parentPhone: "+123 9988568", dueDate: "02/02/2019" },
//     // Additional entries here...
//   ]);

//   // Filter logic
//   const filteredExpenses = expenses.filter((expense) => {
//     return (
//       (searchName === "" || expense.name.toLowerCase().includes(searchName.toLowerCase())) &&
//       (searchType === "" || expense.expenseType.toLowerCase().includes(searchType.toLowerCase())) &&
//       (searchStatus === "" || expense.status.toLowerCase() === searchStatus.toLowerCase())
//     );
//   });

//   // Pagination logic
//   const indexOfLastExpense = currentPage * expensesPerPage;
//   const indexOfFirstExpense = indexOfLastExpense - expensesPerPage;
//   const currentExpenses = filteredExpenses.slice(indexOfFirstExpense, indexOfLastExpense);

//   const handleClick = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <>
//       <div className="flex">
//         <AdminNavbar />
//         <div className="flex-1">
//           <AdminTopBar />

//           <div className="bg-[#E5E5E5] p-4 rounded-lg">
//             <h1 className="font-bold text-lg">Account</h1>
//             <div className="text-sm text-gray-600 mb-4">
//               <span className="font-semibold ">Home</span> &gt;
//               <span className="text-[#D60A0B]">Expenses</span>
//             </div>

//             {/* Search Section */}
//             <div className="bg-white p-6 mt-6 rounded-lg border border-gray-300">
//               <h2 className="font-semibold mb-4">All Expenses</h2>

//               <div className="flex items-center space-x-4 mb-6">
//                 <input
//                   type="text"
//                   placeholder="Search by name..."
//                   className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#D60A0B] w-full"
//                   value={searchName}
//                   onChange={(e) => setSearchName(e.target.value)}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Search by expense type..."
//                   className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#D60A0B] w-full"
//                   value={searchType}
//                   onChange={(e) => setSearchType(e.target.value)}
//                 />
//                 <select
//                   className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#D60A0B]"
//                   value={searchStatus}
//                   onChange={(e) => setSearchStatus(e.target.value)}
//                 >
//                   <option value="">Select Status...</option>
//                   <option value="paid">Paid</option>
//                   <option value="unpaid">Unpaid</option>
//                   <option value="due">Due</option>
//                 </select>
//                 <button className="bg-[#D60A0B] text-white px-6 py-2 rounded-md">
//                   <FaSearch />
//                 </button>
//               </div>

//               {/* Table Section */}
//               <table className="min-w-full bg-white border rounded-lg overflow-hidden">
//                 <thead className="bg-white">
//                   <tr className="text-left">
//                     <th className="py-3 px-4 text-[#D60A0B]">Name</th>
//                     <th className="py-3 px-4 text-[#D60A0B]">Expense Type</th>
//                     <th className="py-3 px-4 text-[#D60A0B]">Amount</th>
//                     <th className="py-3 px-4 text-[#D60A0B]">Status</th>
//                     <th className="py-3 px-4 text-[#D60A0B]">Parent Email</th>
//                     <th className="py-3 px-4 text-[#D60A0B]">Parent Phone</th>
//                     <th className="py-3 px-4 text-[#D60A0B]">Due Date</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {currentExpenses.map((expense, index) => (
//                     <tr key={index} className="hover:bg-gray-100">
//                       <td className="py-3 px-4">{expense.name}</td>
//                       <td className="py-3 px-4">{expense.expenseType}</td>
//                       <td className="py-3 px-4">{expense.amount}</td>
//                       <td className="py-3 px-4">
//                         <span
//                           className={`px-3 py-1 rounded-full text-white ${
//                             expense.status === "paid"
//                               ? "bg-blue-500"
//                               : expense.status === "unpaid"
//                               ? "bg-red-500"
//                               : "bg-orange-500"
//                           }`}
//                         >
//                           {expense.status}
//                         </span>
//                       </td>
//                       <td className="py-3 px-4">{expense.parentEmail}</td>
//                       <td className="py-3 px-4">{expense.parentPhone}</td>
//                       <td className="py-3 px-4">{expense.dueDate}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>

//               {/* Pagination Section */}
//               <div className="flex justify-between items-center mt-6">
//                 <button
//                   disabled={currentPage === 1}
//                   onClick={() => handleClick(currentPage - 1)}
//                   className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
//                 >
//                   Previous
//                 </button>
//                 <div className="flex space-x-2">
//                   {[1, 2, 3].map((page) => (
//                     <button
//                       key={page}
//                       onClick={() => handleClick(page)}
//                       className={`px-4 py-2 rounded-md ${
//                         currentPage === page
//                           ? "bg-[#D60A0B] text-white"
//                           : "bg-gray-300 text-gray-700"
//                       }`}
//                     >
//                       {page}
//                     </button>
//                   ))}
//                 </div>
//                 <button
//                   disabled={currentPage === 3}
//                   onClick={() => handleClick(currentPage + 1)}
//                   className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
//                 >
//                   Next
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Expenses;



// // import React, { useState } from "react";
// // import AdminNavbar from "../AdminNav/AdminNavbar";
// // import { FaSearch } from "react-icons/fa";
// // import AdminTopBar from "../AdminNav/AdminTopBar";

// // const Expenses = () => {
// //   const [searchName, setSearchName] = useState("");
// //   const [searchType, setSearchType] = useState("");
// //   const [searchStatus, setSearchStatus] = useState("");
// //   const [expenses, setExpenses] = useState([
// //     {
// //       id: 1,
// //       name: "Daniel Grant",
// //       expenseType: "Salary",
// //       amount: "$2,000.00",
// //       status: "unpaid",
// //       parentEmail: "arabagrant@gmail.com",
// //       parentPhone: "+123 9988568",
// //       dueDate: "02/02/2019",
// //     },
// //     {
// //       id: 2,
// //       name: "Daniel Grant",
// //       expenseType: "Transport",
// //       amount: "$2,000.00",
// //       status: "Paid",
// //       parentEmail: "arabagrant@gmail.com",
// //       parentPhone: "+123 9988568",
// //       dueDate: "02/02/2019",
// //     },
// //     // Additional entries here...
// //   ]);

// //   const filteredExpenses = expenses.filter((expense) => {
// //     return (
// //       (searchName === "" || expense.name.toLowerCase().includes(searchName.toLowerCase())) &&
// //       (searchType === "" || expense.expenseType.toLowerCase().includes(searchType.toLowerCase())) &&
// //       (searchStatus === "" || expense.status.toLowerCase() === searchStatus.toLowerCase())
// //     );
// //   });

// //   return (
// //     <>
// //       <div className="flex">
// //         <AdminNavbar />
// //         <div className="flex-1">
// //           <AdminTopBar />

// //           <div className="bg-[#E5E5E5] p-4 rounded-lg">
// //             <h1 className="font-bold text-lg">Account</h1>
// //             <div className="text-sm text-gray-600 mb-4">
// //               <span className="font-semibold ">Home</span> &gt;
// //               <span className="text-[#D60A0B]">Expenses</span>
// //             </div>

// //             <div className="bg-white p-6 mt-6 rounded-lg border border-gray-300">
// //               <div className="flex items-center space-x-4 mb-6">
// //                 <input
// //                   type="text"
// //                   placeholder="Search by name..."
// //                   className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#D60A0B] w-full"
// //                   value={searchName}
// //                   onChange={(e) => setSearchName(e.target.value)}
// //                 />
// //                 <input
// //                   type="text"
// //                   placeholder="Search by expense type..."
// //                   className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#D60A0B] w-full"
// //                   value={searchType}
// //                   onChange={(e) => setSearchType(e.target.value)}
// //                 />
// //                 <select
// //                   className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#D60A0B]"
// //                   value={searchStatus}
// //                   onChange={(e) => setSearchStatus(e.target.value)}
// //                 >
// //                   <option value="">Select Status...</option>
// //                   <option value="paid">Paid</option>
// //                   <option value="unpaid">Unpaid</option>
// //                 </select>
// //                 <button
// //                   className="bg-[#D60A0B] text-white px-6 py-2 rounded-md"
// //                   onClick={() => { /* Trigger search */ }}
// //                 >
// //                   SEARCH
// //                 </button>
// //               </div>

// //               <table className="min-w-full bg-white border rounded-lg overflow-hidden">
// //                 <thead className="bg-white">
// //                   <tr className="text-left">
// //                     <th className="py-3 px-4 text-[#D60A0B]">Name</th>
// //                     <th className="py-3 px-4 text-[#D60A0B]">Expense Type</th>
// //                     <th className="py-3 px-4 text-[#D60A0B]">Amount</th>
// //                     <th className="py-3 px-4 text-[#D60A0B]">Status</th>
// //                     <th className="py-3 px-4 text-[#D60A0B]">Parent Email</th>
// //                     <th className="py-3 px-4 text-[#D60A0B]">Parent Phone</th>
// //                     <th className="py-3 px-4 text-[#D60A0B]">Due Date</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {filteredExpenses.map((expense, index) => (
// //                     <tr key={index} className="hover:bg-gray-100">
// //                       <td className="py-3 px-4">{expense.name}</td>
// //                       <td className="py-3 px-4">{expense.expenseType}</td>
// //                       <td className="py-3 px-4">{expense.amount}</td>
// //                       <td className="py-3 px-4">
// //                         <span
// //                           className={`px-3 py-1 rounded-full text-white ${
// //                             expense.status === "paid"
// //                               ? "bg-blue-500"
// //                               : "bg-red-500"
// //                           }`}
// //                         >
// //                           {expense.status}
// //                         </span>
// //                       </td>
// //                       <td className="py-3 px-4">{expense.parentEmail}</td>
// //                       <td className="py-3 px-4">{expense.parentPhone}</td>
// //                       <td className="py-3 px-4">{expense.dueDate}</td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Expenses;



// // // import React, { useState } from "react";
// // // import AdminNavbar from "../AdminNav/AdminNavbar";
// // // import AdminTopBar from "../AdminNav/AdminTopBar";
// // // import { FaSearch, FaEdit, FaTrashAlt } from "react-icons/fa";

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
// // //   const [searchTerm, setSearchTerm] = useState("");
// // //   const [feesData, setFeesData] = useState(initialFeesData);
// // //   const [showAddForm, setShowAddForm] = useState(false);
// // //   const [isEditing, setIsEditing] = useState(false);
// // //   const [selectedFeeGroup, setSelectedFeeGroup] = useState(null);

// // //   const filteredFeesData = feesData.filter((fee) =>
// // //     fee.name.toLowerCase().includes(searchTerm.toLowerCase())
// // //   );

// // //   // Handle edit click
// // //   const handleEditClick = (feeGroup) => {
// // //     setSelectedFeeGroup(feeGroup);
// // //     setIsEditing(true);
// // //     setShowAddForm(true); // Open form for editing
// // //   };

// // //   // Handle delete click
// // //   const handleDeleteClick = (id) => {
// // //     setFeesData((prevData) => prevData.filter((fee) => fee.id !== id));
// // //   };

// // //   // Handle form submission for add or edit
// // //   const handleFormSubmit = (e) => {
// // //     e.preventDefault();
// // //     if (isEditing) {
// // //       // Edit existing fee group
// // //       setFeesData((prevData) =>
// // //         prevData.map((fee) =>
// // //           fee.id === selectedFeeGroup.id ? selectedFeeGroup : fee
// // //         )
// // //       );
// // //     } else {
// // //       // Add new fee group
// // //       const newFeeGroup = {
// // //         id: feesData.length + 1,
// // //         ...selectedFeeGroup,
// // //       };
// // //       setFeesData([...feesData, newFeeGroup]);
// // //     }
// // //     setShowAddForm(false);
// // //     setIsEditing(false);
// // //     setSelectedFeeGroup(null);
// // //   };

// // //   // Cancel the form and reset state
// // //   const handleCancel = () => {
// // //     setShowAddForm(false);
// // //     setIsEditing(false);
// // //     setSelectedFeeGroup(null);
// // //   };

// // //   // Pagination state (optional, you can use it for more advanced pagination)
// // //   const [currentPage, setCurrentPage] = useState(1);
// // //   const itemsPerPage = 3;
// // //   const totalPages = Math.ceil(filteredFeesData.length / itemsPerPage);
// // //   const currentData = filteredFeesData.slice(
// // //     (currentPage - 1) * itemsPerPage,
// // //     currentPage * itemsPerPage
// // //   );

// // //   const handlePageChange = (page) => {
// // //     if (page >= 1 && page <= totalPages) {
// // //       setCurrentPage(page);
// // //     }
// // //   };

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
// // //                 <button
// // //                   className={`${
// // //                     showAddForm ? "text-gray-500" : "text-red-500"
// // //                   } font-semibold border-b-2 pb-2 ${
// // //                     showAddForm ? "" : "border-red-500"
// // //                   }`}
// // //                   onClick={() => setShowAddForm(false)}
// // //                 >
// // //                   Fees Group List
// // //                 </button>
// // //                 <button
// // //                   className={`${
// // //                     showAddForm ? "text-red-500" : "text-gray-500"
// // //                   } font-semibold pb-2 ${
// // //                     showAddForm ? "border-b-2 border-red-500" : ""
// // //                   }`}
// // //                   onClick={() => {
// // //                     setShowAddForm(true);
// // //                     setSelectedFeeGroup(null); // Reset for adding new group
// // //                   }}
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
// // //             {!showAddForm && (
// // //               <div className="overflow-x-auto">
// // //                 <table className="min-w-full bg-white border border-gray-200">
// // //                   <thead>
// // //                     <tr className="text-left">
// // //                       <th className="py-3 px-4 border-b font-semibold text-red-500">No.</th>
// // //                       <th className="py-3 px-4 border-b font-semibold text-red-500">Name</th>
// // //                       <th className="py-3 px-4 border-b font-semibold text-red-500">Fees Type</th>
// // //                       <th className="py-3 px-4 border-b font-semibold text-red-500">Description</th>
// // //                       <th className="py-3 px-4 border-b font-semibold text-red-500">Actions</th>
// // //                     </tr>
// // //                   </thead>
// // //                   <tbody>
// // //                     {currentData.length > 0 ? (
// // //                       currentData.map((fee, index) => (
// // //                         <tr key={fee.id} className="hover:bg-gray-100">
// // //                           <td className="py-3 px-4 border-b text-gray-600">
// // //                             {(currentPage - 1) * itemsPerPage + index + 1}
// // //                           </td>
// // //                           <td className="py-3 px-4 border-b text-gray-600">{fee.name}</td>
// // //                           <td className="py-3 px-4 border-b text-gray-600">{fee.feesType}</td>
// // //                           <td className="py-3 px-4 border-b text-gray-600">{fee.description}</td>
// // //                           <td className="py-3 px-4 border-b flex space-x-2">
// // //                             <button
// // //                               className="text-blue-500 hover:text-blue-700"
// // //                               onClick={() => handleEditClick(fee)}
// // //                             >
// // //                               <FaEdit />
// // //                             </button>
// // //                             <button
// // //                               className="text-red-500 hover:text-red-700"
// // //                               onClick={() => handleDeleteClick(fee.id)}
// // //                             >
// // //                               <FaTrashAlt />
// // //                             </button>
// // //                           </td>
// // //                         </tr>
// // //                       ))
// // //                     ) : (
// // //                       <tr>
// // //                         <td colSpan="5" className="py-3 px-4 text-center text-gray-600">
// // //                           No data found.
// // //                         </td>
// // //                       </tr>
// // //                     )}
// // //                   </tbody>
// // //                 </table>

// // //                 {/* Pagination */}
// // //                 <div className="flex justify-between items-center mt-4">
// // //                   <button
// // //                     className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
// // //                     onClick={() => handlePageChange(currentPage - 1)}
// // //                     disabled={currentPage === 1}
// // //                   >
// // //                     Previous
// // //                   </button>
// // //                   <div className="flex space-x-2">
// // //                     {Array.from({ length: totalPages }, (_, i) => (
// // //                       <button
// // //                         key={i}
// // //                         className={`px-4 py-2 ${
// // //                           currentPage === i + 1
// // //                             ? "bg-red-500 text-white"
// // //                             : "bg-gray-300 text-gray-700"
// // //                         } rounded-md`}
// // //                         onClick={() => handlePageChange(i + 1)}
// // //                       >
// // //                         {i + 1}
// // //                       </button>
// // //                     ))}
// // //                   </div>
// // //                   <button
// // //                     className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
// // //                     onClick={() => handlePageChange(currentPage + 1)}
// // //                     disabled={currentPage === totalPages}
// // //                   >
// // //                     Next
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             )}

// // //             {/* Add/Edit Fees Group Form */}
// // //             {showAddForm && (
// // //               <div className="mt-6">
// // //                 <h2 className="text-xl font-semibold mb-4">
// // //                   {isEditing ? "Edit Fees Group" : "Add Fees Group"}
// // //                 </h2>
// // //                 <form onSubmit={handleFormSubmit}>
// // //                   <div className="mb-4">
// // //                     <label className="block text-gray-700">Name</label>
// // //                     <input
// // //                       type="text"
// // //                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D60A0B]"
// // //                       value={selectedFeeGroup?.name || ""}
// // //                       onChange={(e) =>
// // //                         setSelectedFeeGroup({
// // //                           ...selectedFeeGroup,
// // //                           name: e.target.value,
// // //                         })
// // //                       }
// // //                       required
// // //                     />
// // //                   </div>
// // //                   <div className="mb-4">
// // //                     <label className="block text-gray-700">Fees Type</label>
// // //                     <textarea
// // //                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D60A0B]"
// // //                       value={selectedFeeGroup?.feesType || ""}
// // //                       onChange={(e) =>
// // //                         setSelectedFeeGroup({
// // //                           ...selectedFeeGroup,
// // //                           feesType: e.target.value,
// // //                         })
// // //                       }
// // //                       required
// // //                     />
// // //                   </div>
// // //                   <div className="mb-4">
// // //                     <label className="block text-gray-700">Description</label>
// // //                     <textarea
// // //                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D60A0B]"
// // //                       value={selectedFeeGroup?.description || ""}
// // //                       onChange={(e) =>
// // //                         setSelectedFeeGroup({
// // //                           ...selectedFeeGroup,
// // //                           description: e.target.value,
// // //                         })
// // //                       }
// // //                       required
// // //                     />
// // //                   </div>
// // //                   <div className="flex justify-end space-x-4">
// // //                     <button
// // //                       type="button"
// // //                       className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
// // //                       onClick={handleCancel}
// // //                     >
// // //                       Cancel
// // //                     </button>
// // //                     <button
// // //                       type="submit"
// // //                       className="px-4 py-2 bg-red-500 text-white rounded-md"
// // //                     >
// // //                       {isEditing ? "Update" : "Add"}
// // //                     </button>
// // //                   </div>
// // //                 </form>
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default FeesGroup;



// // // // import React, { useState } from "react";

// // // // const Expenses = () => {
// // // //   const [searchName, setSearchName] = useState("");
// // // //   const [searchType, setSearchType] = useState("");
// // // //   const [searchStatus, setSearchStatus] = useState("");
// // // //   const [expenses, setExpenses] = useState([
// // // //     {
// // // //       name: "Daniel Grant",
// // // //       expenseType: "Salary",
// // // //       amount: "$2,000.00",
// // // //       status: "unpaid",
// // // //       parentEmail: "arabagrant@gmail.com",
// // // //       parentPhone: "+123 9988568",
// // // //       dueDate: "02/02/2019",
// // // //     },
// // // //     {
// // // //       name: "Daniel Grant",
// // // //       expenseType: "Transport",
// // // //       amount: "$2,000.00",
// // // //       status: "Paid",
// // // //       parentEmail: "arabagrant@gmail.com",
// // // //       parentPhone: "+123 9988568",
// // // //       dueDate: "02/02/2019",
// // // //     },
// // // //     {
// // // //       name: "Daniel Grant",
// // // //       expenseType: "Utilities",
// // // //       amount: "$2,000.00",
// // // //       status: "Due",
// // // //       parentEmail: "arabagrant@gmail.com",
// // // //       parentPhone: "+123 9988568",
// // // //       dueDate: "02/02/2019",
// // // //     },
// // // //     // Additional rows here...
// // // //   ]);

// // // //   // Function to handle search (adjust to filter based on one or more fields)
// // // //   const handleSearch = () => {
// // // //     // Implement filtering logic based on any filled search inputs
// // // //     const filteredExpenses = expenses.filter((expense) => {
// // // //       return (
// // // //         (searchName === "" || expense.name.toLowerCase().includes(searchName.toLowerCase())) &&
// // // //         (searchType === "" || expense.expenseType.toLowerCase().includes(searchType.toLowerCase())) &&
// // // //         (searchStatus === "" || expense.status.toLowerCase() === searchStatus.toLowerCase())
// // // //       );
// // // //     });
// // // //     setExpenses(filteredExpenses);
// // // //   };

// // // //   return (
// // // //     <div className="flex">
// // // //       {/* Sidebar Section */}
// // // //       <div className="w-1/5 bg-[#2B2D42] h-screen p-6">
// // // //         <h2 className="text-white text-2xl mb-6">Dashboard</h2>
// // // //         <ul>
// // // //           <li className="mb-4 text-white">Students</li>
// // // //           <li className="mb-4 text-white">Parents</li>
// // // //           <li className="mb-4 text-white">Teachers</li>
// // // //           <li className="mb-4 text-white">Account</li>
// // // //           <li className="ml-6 text-white">Fees Group</li>
// // // //           <li className="ml-6 text-white">Student Fees</li>
// // // //           <li className="ml-6 text-white">Expenses</li>
// // // //           <li className="ml-6 text-white">Add Expenses</li>
// // // //           <li className="mb-4 text-white">Subject</li>
// // // //           <li className="mb-4 text-white">Settings</li>
// // // //         </ul>
// // // //       </div>

// // // //       {/* Main Content Section */}
// // // //       <div className="w-4/5 bg-gray-100 p-6">
// // // //         <header className="flex justify-between mb-4">
// // // //           <h1 className="text-xl font-bold">Account</h1>
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Search"
// // // //             className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D60A0B]"
// // // //           />
// // // //         </header>

// // // //         {/* Expenses Section */}
// // // //         <div className="bg-white p-4 rounded-lg shadow-md">
// // // //           {/* Header Section */}
// // // //           <div className="mb-4">
// // // //             <h2 className="text-xl font-semibold mb-2">
// // // //               Account
// // // //             </h2>
// // // //             <div className="text-sm text-gray-500">
// // // //               Home <span className="text-[#D60A0B]"> &gt; Expenses</span>
// // // //             </div>
// // // //           </div>

// // // //           {/* Search Section */}
// // // //           <div className="flex space-x-4 mb-4">
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Search by name..."
// // // //               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D60A0B]"
// // // //               value={searchName}
// // // //               onChange={(e) => setSearchName(e.target.value)}
// // // //             />
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Search by expense type..."
// // // //               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D60A0B]"
// // // //               value={searchType}
// // // //               onChange={(e) => setSearchType(e.target.value)}
// // // //             />
// // // //             <select
// // // //               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D60A0B]"
// // // //               value={searchStatus}
// // // //               onChange={(e) => setSearchStatus(e.target.value)}
// // // //             >
// // // //               <option value="">Select Status...</option>
// // // //               <option value="Paid">Paid</option>
// // // //               <option value="unpaid">Unpaid</option>
// // // //               <option value="Due">Due</option>
// // // //             </select>
// // // //             <button
// // // //               className="bg-[#D60A0B] text-white px-6 py-2 rounded-lg"
// // // //               onClick={handleSearch}
// // // //             >
// // // //               SEARCH
// // // //             </button>
// // // //           </div>

// // // //           {/* Expenses Table */}
// // // //           <table className="min-w-full table-auto">
// // // //             <thead>
// // // //               <tr className="bg-white">
// // // //                 <th className="px-4 py-2 text-[#D60A0B]">Name</th>
// // // //                 <th className="px-4 py-2 text-[#D60A0B]">Expense Type</th>
// // // //                 <th className="px-4 py-2 text-[#D60A0B]">Amount</th>
// // // //                 <th className="px-4 py-2 text-[#D60A0B]">Status</th>
// // // //                 <th className="px-4 py-2 text-[#D60A0B]">Parent Email</th>
// // // //                 <th className="px-4 py-2 text-[#D60A0B]">Parent Phone</th>
// // // //                 <th className="px-4 py-2 text-[#D60A0B]">Due Date</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {expenses.map((expense, index) => (
// // // //                 <tr key={index} className="border-b">
// // // //                   <td className="px-4 py-2">{expense.name}</td>
// // // //                   <td className="px-4 py-2">{expense.expenseType}</td>
// // // //                   <td className="px-4 py-2">{expense.amount}</td>
// // // //                   <td className="px-4 py-2">
// // // //                     <span
// // // //                       className={`px-3 py-1 rounded-full text-white ${
// // // //                         expense.status === "Paid"
// // // //                           ? "bg-blue-500"
// // // //                           : expense.status === "unpaid"
// // // //                           ? "bg-red-500"
// // // //                           : "bg-yellow-500"
// // // //                       }`}
// // // //                     >
// // // //                       {expense.status}
// // // //                     </span>
// // // //                   </td>
// // // //                   <td className="px-4 py-2">{expense.parentEmail}</td>
// // // //                   <td className="px-4 py-2">{expense.parentPhone}</td>
// // // //                   <td className="px-4 py-2">{expense.dueDate}</td>
// // // //                 </tr>
// // // //               ))}
// // // //             </tbody>
// // // //           </table>

// // // //           {/* Pagination */}
// // // //           <div className="flex justify-between mt-4">
// // // //             <button className="px-4 py-2 bg-gray-200 rounded-lg">Previous</button>
// // // //             <div className="flex space-x-2">
// // // //               <button className="px-4 py-2 bg-[#D60A0B] text-white rounded-lg">
// // // //                 1
// // // //               </button>
// // // //               <button className="px-4 py-2 bg-gray-200 rounded-lg">2</button>
// // // //               <button className="px-4 py-2 bg-gray-200 rounded-lg">3</button>
// // // //             </div>
// // // //             <button className="px-4 py-2 bg-gray-200 rounded-lg">Next</button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Expenses;



// // // // // import React, { useState } from "react";

// // // // // const Expenses = () => {
// // // // //   const [searchName, setSearchName] = useState("");
// // // // //   const [searchType, setSearchType] = useState("");
// // // // //   const [searchStatus, setSearchStatus] = useState("");
// // // // //   const [expenses, setExpenses] = useState([
// // // // //     {
// // // // //       name: "Daniel Grant",
// // // // //       expenseType: "Salary",
// // // // //       amount: "$2,000.00",
// // // // //       status: "unpaid",
// // // // //       parentEmail: "arabagrant@gmail.com",
// // // // //       parentPhone: "+123 9988568",
// // // // //       dueDate: "02/02/2019",
// // // // //     },
// // // // //     {
// // // // //       name: "Daniel Grant",
// // // // //       expenseType: "Transport",
// // // // //       amount: "$2,000.00",
// // // // //       status: "Paid",
// // // // //       parentEmail: "arabagrant@gmail.com",
// // // // //       parentPhone: "+123 9988568",
// // // // //       dueDate: "02/02/2019",
// // // // //     },
// // // // //     {
// // // // //       name: "Daniel Grant",
// // // // //       expenseType: "Utilities",
// // // // //       amount: "$2,000.00",
// // // // //       status: "Due",
// // // // //       parentEmail: "arabagrant@gmail.com",
// // // // //       parentPhone: "+123 9988568",
// // // // //       dueDate: "02/02/2019",
// // // // //     },
// // // // //     // Additional rows here...
// // // // //   ]);

// // // // //   // Function to handle search
// // // // //   const handleSearch = () => {
// // // // //     // Implement search/filter logic here based on searchName, searchType, searchStatus
// // // // //   };

// // // // //   return (
// // // // //     <div className="p-6">
// // // // //       <div className="bg-white p-4 rounded-lg shadow-md">
// // // // //         {/* Header Section */}
// // // // //         <div className="mb-4">
// // // // //           <h2 className="text-xl font-semibold mb-2">
// // // // //             Account <span className="text-[#D60A0B]">| Expenses</span>
// // // // //           </h2>
// // // // //           <div className="text-sm text-gray-500">
// // // // //             Home <span className="text-[#D60A0B]"> &gt; Expenses</span>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Search Section */}
// // // // //         <div className="flex space-x-4 mb-4">
// // // // //           <input
// // // // //             type="text"
// // // // //             placeholder="Search by name..."
// // // // //             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D60A0B]"
// // // // //             value={searchName}
// // // // //             onChange={(e) => setSearchName(e.target.value)}
// // // // //           />
// // // // //           <input
// // // // //             type="text"
// // // // //             placeholder="Search by expense type..."
// // // // //             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D60A0B]"
// // // // //             value={searchType}
// // // // //             onChange={(e) => setSearchType(e.target.value)}
// // // // //           />
// // // // //           <select
// // // // //             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D60A0B]"
// // // // //             value={searchStatus}
// // // // //             onChange={(e) => setSearchStatus(e.target.value)}
// // // // //           >
// // // // //             <option value="">Select Status...</option>
// // // // //             <option value="Paid">Paid</option>
// // // // //             <option value="unpaid">Unpaid</option>
// // // // //             <option value="Due">Due</option>
// // // // //           </select>
// // // // //           <button
// // // // //             className="bg-[#D60A0B] text-white px-6 py-2 rounded-lg"
// // // // //             onClick={handleSearch}
// // // // //           >
// // // // //             SEARCH
// // // // //           </button>
// // // // //         </div>

// // // // //         {/* Expenses Table */}
// // // // //         <table className="min-w-full table-auto">
// // // // //           <thead>
// // // // //             <tr className="bg-[#D60A0B] text-white">
// // // // //               <th className="px-4 py-2">Name</th>
// // // // //               <th className="px-4 py-2">Expense Type</th>
// // // // //               <th className="px-4 py-2">Amount</th>
// // // // //               <th className="px-4 py-2">Status</th>
// // // // //               <th className="px-4 py-2">Parent Email</th>
// // // // //               <th className="px-4 py-2">Parent Phone</th>
// // // // //               <th className="px-4 py-2">Due Date</th>
// // // // //             </tr>
// // // // //           </thead>
// // // // //           <tbody>
// // // // //             {expenses.map((expense, index) => (
// // // // //               <tr key={index} className="border-b">
// // // // //                 <td className="px-4 py-2">{expense.name}</td>
// // // // //                 <td className="px-4 py-2">{expense.expenseType}</td>
// // // // //                 <td className="px-4 py-2">{expense.amount}</td>
// // // // //                 <td className="px-4 py-2">
// // // // //                   <span
// // // // //                     className={`px-3 py-1 rounded-full text-white ${
// // // // //                       expense.status === "Paid"
// // // // //                         ? "bg-blue-500"
// // // // //                         : expense.status === "unpaid"
// // // // //                         ? "bg-red-500"
// // // // //                         : "bg-yellow-500"
// // // // //                     }`}
// // // // //                   >
// // // // //                     {expense.status}
// // // // //                   </span>
// // // // //                 </td>
// // // // //                 <td className="px-4 py-2">{expense.parentEmail}</td>
// // // // //                 <td className="px-4 py-2">{expense.parentPhone}</td>
// // // // //                 <td className="px-4 py-2">{expense.dueDate}</td>
// // // // //               </tr>
// // // // //             ))}
// // // // //           </tbody>
// // // // //         </table>

// // // // //         {/* Pagination */}
// // // // //         <div className="flex justify-between mt-4">
// // // // //           <button className="px-4 py-2 bg-gray-200 rounded-lg">Previous</button>
// // // // //           <div className="flex space-x-2">
// // // // //             <button className="px-4 py-2 bg-[#D60A0B] text-white rounded-lg">
// // // // //               1
// // // // //             </button>
// // // // //             <button className="px-4 py-2 bg-gray-200 rounded-lg">2</button>
// // // // //             <button className="px-4 py-2 bg-gray-200 rounded-lg">3</button>
// // // // //           </div>
// // // // //           <button className="px-4 py-2 bg-gray-200 rounded-lg">Next</button>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Expenses;
