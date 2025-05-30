import React, { useState } from "react";
import AdminNavbar from "../AdminNav/AdminNavbar";
import AdminTopBar from "../AdminNav/AdminTopBar";

const AddExpenses = () => {
  const [name, setName] = useState("");
  const [expenseType, setExpenseType] = useState("");
  const [status, setStatus] = useState("");
  const [amount, setAmount] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, we will console.log the form data to simulate saving it
    const formData = {
      name,
      expenseType,
      status,
      amount,
      phone,
      email,
      dueDate,
    };
    console.log(formData);
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setExpenseType("");
    setStatus("");
    setAmount("");
    setPhone("");
    setEmail("");
    setDueDate("");
  };

  return (
    <>
      <div className="flex">
        <AdminNavbar />
        <div className="flex-1">
          <AdminTopBar />

          <div className="bg-[#E5E5E5] p-4 rounded-lg">
            <h1 className="font-bold text-lg">Account</h1>
            <div className="text-sm text-gray-600 mb-4">
              <span className="font-semibold">Home</span> &gt;
              <span className="text-[#D60A0B]"> Add Expense</span>
            </div>

            {/* Main content with white background */}
            <div className="bg-white p-6 mt-6 rounded-lg border border-gray-300">
              <h2 className="font-semibold text-xl mb-4">Add New Expenses</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-4 gap-6">
                  {/* Name Field */}
                  <div className="col-span-1">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Name"
                      className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#D60A0B] w-full"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  {/* Expense Type */}
                  <div className="col-span-1">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Expense Type<span className="text-red-500">*</span>
                    </label>
                    <select
                      className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#D60A0B] w-full"
                      value={expenseType}
                      onChange={(e) => setExpenseType(e.target.value)}
                      required
                    >
                      <option value="" disabled>
                        Please Select Class
                      </option>
                      <option value="Salary">Salary</option>
                      <option value="Transport">Transport</option>
                      <option value="Utilities">Utilities</option>
                    </select>
                  </div>

                  {/* Status */}
                  <div className="col-span-1">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Status<span className="text-red-500">*</span>
                    </label>
                    <select
                      className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#D60A0B] w-full"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      required
                    >
                      <option value="" disabled>
                        Please Select
                      </option>
                      <option value="Paid">Paid</option>
                      <option value="Unpaid">Unpaid</option>
                      <option value="Due">Due</option>
                    </select>
                  </div>

                  {/* Amount */}
                  <div className="col-span-1">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Amount<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Amount"
                      className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#D60A0B] w-full"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="col-span-1">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Phone
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Phone Number"
                      className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#D60A0B] w-full"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  {/* Email */}
                  <div className="col-span-1">
                    <label className="block text-gray-700 font-semibold mb-2">
                      E-Mail Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter Email Address"
                      className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#D60A0B] w-full"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  {/* Due Date */}
                  <div className="col-span-1">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Due Date
                    </label>
                    <input
                      type="date"
                      className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#D60A0B] w-full"
                      value={dueDate}
                      onChange={(e) => setDueDate(e.target.value)}
                    />
                    {/* <span className="text-gray-500 text-sm">dd/mm/yy</span> */}
                  </div>
                </div>

                {/* Save & Reset Buttons */}
                <div className="mt-6 flex space-x-4">
                  <button
                    type="submit"
                    className="bg-[#D60A0B] text-white px-6 py-2 rounded-md"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="bg-blue-500 text-white px-6 py-2 rounded-md"
                    onClick={resetForm}
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

export default AddExpenses;



// import React, { useState } from "react";
// import AdminNavbar from "../AdminNav/AdminNavbar";
// import AdminTopBar from "../AdminNav/AdminTopBar";

// const AddExpenses = ({ addExpense }) => {
//   const [name, setName] = useState("");
//   const [expenseType, setExpenseType] = useState("");
//   const [status, setStatus] = useState("");
//   const [amount, setAmount] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [dueDate, setDueDate] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newExpense = {
//       id: Math.random(),
//       name,
//       expenseType,
//       status,
//       amount,
//       parentEmail: email,
//       parentPhone: phone,
//       dueDate,
//     };
//     addExpense(newExpense); // This function saves to the expenses array in the previous code
//     resetForm();
//   };

//   const resetForm = () => {
//     setName("");
//     setExpenseType("");
//     setStatus("");
//     setAmount("");
//     setPhone("");
//     setEmail("");
//     setDueDate("");
//   };

//   return (
//     <>
//       <div className="flex">
//         <AdminNavbar />
//         <div className="flex-1">
//           <AdminTopBar />

//           <div className="bg-[#E5E5E5] p-4 rounded-lg">
//             <h1 className="font-bold text-lg">Account</h1>
//             <div className="text-sm text-gray-600 mb-4">
//               <span className="font-semibold">Home</span> &gt;
//               <span className="text-[#D60A0B]"> Add Expense</span>
//             </div>

//             {/* Main content with white background */}
//             <div className="bg-white p-6 mt-6 rounded-lg border border-gray-300">
//               <h2 className="font-semibold text-xl mb-4">Add New Expenses</h2>
//               <form onSubmit={handleSubmit}>
//                 <div className="grid grid-cols-2 gap-6">
//                   {/* Name Field */}
//                   <div>
//                     <label className="block text-gray-700 font-semibold mb-2">
//                       Name<span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Enter Name"
//                       className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#D60A0B] w-full"
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                       required
//                     />
//                   </div>

//                   {/* Expense Type */}
//                   <div>
//                     <label className="block text-gray-700 font-semibold mb-2">
//                       Expense Type<span className="text-red-500">*</span>
//                     </label>
//                     <select
//                       className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#D60A0B] w-full"
//                       value={expenseType}
//                       onChange={(e) => setExpenseType(e.target.value)}
//                       required
//                     >
//                       <option value="" disabled>
//                         Please Select Class
//                       </option>
//                       <option value="Salary">Salary</option>
//                       <option value="Transport">Transport</option>
//                       <option value="Utilities">Utilities</option>
//                     </select>
//                   </div>

//                   {/* Status */}
//                   <div>
//                     <label className="block text-gray-700 font-semibold mb-2">
//                       Status<span className="text-red-500">*</span>
//                     </label>
//                     <select
//                       className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#D60A0B] w-full"
//                       value={status}
//                       onChange={(e) => setStatus(e.target.value)}
//                       required
//                     >
//                       <option value="" disabled>
//                         Please Select
//                       </option>
//                       <option value="Paid">Paid</option>
//                       <option value="Unpaid">Unpaid</option>
//                       <option value="Due">Due</option>
//                     </select>
//                   </div>

//                   {/* Amount */}
//                   <div>
//                     <label className="block text-gray-700 font-semibold mb-2">
//                       Amount<span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Enter Amount"
//                       className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#D60A0B] w-full"
//                       value={amount}
//                       onChange={(e) => setAmount(e.target.value)}
//                       required
//                     />
//                   </div>

//                   {/* Phone */}
//                   <div>
//                     <label className="block text-gray-700 font-semibold mb-2">
//                       Phone
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Enter Phone Number"
//                       className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#D60A0B] w-full"
//                       value={phone}
//                       onChange={(e) => setPhone(e.target.value)}
//                     />
//                   </div>

//                   {/* Email */}
//                   <div>
//                     <label className="block text-gray-700 font-semibold mb-2">
//                       E-Mail Address
//                     </label>
//                     <input
//                       type="email"
//                       placeholder="Enter Email Address"
//                       className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#D60A0B] w-full"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                   </div>

//                   {/* Due Date */}
//                   <div>
//                     <label className="block text-gray-700 font-semibold mb-2">
//                       Due Date
//                     </label>
//                     <input
//                       type="date"
//                       className="px-4 py-2 border rounded-lg focus:outline-none focus:border-[#D60A0B] w-full"
//                       value={dueDate}
//                       onChange={(e) => setDueDate(e.target.value)}
//                     />
//                     <span className="text-gray-500 text-sm">dd/mm/yy</span>
//                   </div>
//                 </div>

//                 {/* Save & Reset Buttons */}
//                 <div className="mt-6 flex space-x-4">
//                   <button
//                     type="submit"
//                     className="bg-[#D60A0B] text-white px-6 py-2 rounded-md"
//                   >
//                     Save
//                   </button>
//                   <button
//                     type="button"
//                     className="bg-blue-500 text-white px-6 py-2 rounded-md"
//                     onClick={resetForm}
//                   >
//                     Reset
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddExpenses;
