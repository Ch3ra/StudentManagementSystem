import React, { useState } from "react";
import { FaChevronDown, FaChevronRight, FaTachometerAlt, FaUserGraduate, FaChalkboardTeacher, FaUsers, FaBook, FaCog, FaMoneyBillWave } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  const [isStudentsOpen, setIsStudentsOpen] = useState(false);
  const [isTeachersOpen, setIsTeachersOpen] = useState(false);
  const [isAccountsOpen, setIsAccountsOpen] = useState(false);

  const toggleStudentsMenu = () => {
    setIsStudentsOpen(!isStudentsOpen);
  };

  const toggleTeachersMenu = () => {
    setIsTeachersOpen(!isTeachersOpen);
  };

  const toggleAccountsMenu = () => {
    setIsAccountsOpen(!isAccountsOpen);
  };

  return (
    <div className="h-[150vh] w-64 bg-[#14238A] text-white">
      <div className="flex items-center justify-between bg-[#D60A0B] h-16 px-4">
      <Link to ='/'>  <FaTachometerAlt className="w-8 h-8 cursor-pointer" /> </Link>
        <GiHamburgerMenu className="w-6 h-6 cursor-pointer" />
      </div>

      <nav className="mt-4">
        <ul className="space-y-0">
          <li className="border-b border-[#0E1E63]">

            <Link to ='/'>
            <span
              
              className="flex items-center p-3 hover:bg-[#0E1E63]"
            >
              <FaTachometerAlt className="w-6 h-6" />
              <span className="ml-4">Dashboard</span>
            </span></Link>
          </li>
          <li className="border-b border-[#0E1E63]">
            <div
              className="p-3 hover:bg-[#0E1E63] cursor-pointer flex items-center justify-between"
              onClick={toggleStudentsMenu}
            >
              <div className="flex items-center">
                <FaUserGraduate className="w-6 h-6" />
                <span className="ml-4">Students</span>
              </div>
              {isStudentsOpen ? <FaChevronDown /> : <FaChevronRight />}
            </div>
            {isStudentsOpen && (
              <ul className="pl-8 mt-2 space-y-2">
                <div className="flex">
                  <div className="mt-3">
                    <FaChevronRight />
                  </div>
                  <li>
                    <Link to ='/studentInfo'>
                    <span className="block p-2 ">
                      All Students
                    </span>
                    </Link>
                  </li>
                </div>
                <div className="flex">
                  <div className="mt-3">
                    <FaChevronRight />
                  </div>
                  <li>
                    <Link to ='/addStudent'>
                    <span className="block p-2 ">
                      Add Students
                    </span>
                    </Link>
                  </li>
                </div>
                <div className="flex">
                  <div className="mt-3">
                    <FaChevronRight />
                  </div>
                  <li>
                    <Link to ='/studentPromotion'>
                    <span className="block p-2 ">
                      Students Promotion
                    </span>
                    </Link>
                  </li>
                </div>
              </ul>
            )}
          </li>
          <li className="border-b border-[#0E1E63]">
            <div
              className="p-3 hover:bg-[#0E1E63] cursor-pointer flex items-center justify-between"
              onClick={toggleTeachersMenu}
            >
              <div className="flex items-center">
                <FaChalkboardTeacher className="w-6 h-6" />
                <span className="ml-4">Teachers</span>
              </div>
              {isTeachersOpen ? <FaChevronDown /> : <FaChevronRight />}
            </div>
            {isTeachersOpen && (
              <ul className="pl-8 mt-2 space-y-2">
                <div className="flex">
                  <div className="mt-3">
                    <FaChevronRight />
                  </div>
                  <li>
                    <Link to ='/teacherinfo'>
                    <span className="block p-2 ">
                      All Teachers
                    </span>
                    </Link>
                  </li>
                </div>
                <div className="flex">
                  <div className="mt-3">
                    <FaChevronRight />
                  </div>
                  <li>
                    <Link to ='/addTeacher'>
                    <span className="block p-2 ">
                      Add Teacher
                    </span>
                    </Link>
                  </li>
                </div>
              </ul>
            )}
          </li>
          <li className="border-b border-[#0E1E63]">
            <div
              className="p-3 hover:bg-[#0E1E63] cursor-pointer flex items-center justify-between"
              onClick={toggleAccountsMenu}
            >
              <div className="flex items-center">
                <FaMoneyBillWave className="w-6 h-6" />
                <span className="ml-4">Account</span>
              </div>
              {isAccountsOpen ? <FaChevronDown /> : <FaChevronRight />}
            </div>
            {isAccountsOpen && (
              <ul className="pl-8 mt-2 space-y-2">
                <div className="flex">
                  <div className="mt-3">
                    <FaChevronRight />
                  </div>
                  <li>
                    <a href="#" className="block p-2 ">
                      Fees Group
                    </a>
                  </li>
                </div>
                <div className="flex">
                  <div className="mt-3">
                    <FaChevronRight />
                  </div>
                  <li>
                    <a href="#" className="block p-2 ">
                      Student Fees
                    </a>
                  </li>
                </div>

                <div className="flex">
                  <div className="mt-3">
                    <FaChevronRight />
                  </div>
                  <li>
                    <a href="#" className="block p-2 ">
                      Expenses
                    </a>
                  </li>
                </div>

                <div className="flex">
                  <div className="mt-3">
                    <FaChevronRight />
                  </div>
                  <li>
                    <a href="#" className="block p-2 ">
                      Add Expenses
                    </a>
                  </li>
                </div>
              </ul>
            )}
          </li>
          <li className="border-b border-[#0E1E63]">
            <Link to ='/parentInfo'>
            <span
              href="#"
              className="flex items-center p-3 hover:bg-[#0E1E63]"
            >
              <FaUsers className="w-6 h-6" />
              <span className="ml-4">Parents</span>
            </span></Link>
          </li>
          <li className="border-b border-[#0E1E63]">
            <Link to ='/subject'>
            <p
              href="#"
              className="flex items-center p-3 hover:bg-[#0E1E63]"
            >
              <FaBook className="w-6 h-6" />
              <span className="ml-4">Subjects</span>
            </p></Link>
          </li>
          <li className="border-b border-[#0E1E63]">
            <Link to ='/subject'>
            <p
              href="#"
              className="flex items-center p-3 hover:bg-[#0E1E63]"
            >
              <FaCog className="w-6 h-6" />
              <span className="ml-4">Subjects</span>
            </p></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminNavbar;
