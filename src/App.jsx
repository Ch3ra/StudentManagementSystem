import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminNavbar from './Admin/AdminNav/AdminNavbar'
import Home from './Admin/AdminHome/Home'
import TopBar from './Admin/AdminNav/AdminTopBar'
import StudentInformation from './Admin/Students/StudentInfromation'
import Parents from './Admin/Parents/Parents'
import TeacherInformation from './Admin/Teachers/TeacherInfromation'
import AddStudents from './Admin/Students/AddStudents'
import StudentPromotions from './Admin/Students/StudentPromotions'
import AddTeacher from './Admin/Teachers/AddTeacher'
import Subject from './Admin/Subject/Subject'
import Settings from './Admin/Setting/Setting'
import Login from './Admin/Auth/Login'
import FeesGroup from './Admin/Account/FeesGroup'
import StudentFees from './Admin/Account/StudentFees'
import Expenses from './Admin/Account/Expenses'
import AddExpenses from './Admin/Account/AddExpenses'



const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/adminNav' element={<AdminNavbar/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    
    <Route path='/topbar' element={<TopBar/>}/>
    <Route path='/studentInfo' element={<StudentInformation/>}/>
    <Route path='/addStudent' element={<AddStudents/>}/>
    <Route path='/studentPromotion' element={<StudentPromotions/>}/>
    <Route path='/teacherInfo' element={<TeacherInformation/>}/>
    <Route path='/addTeacher' element={<AddTeacher/>}/>
    <Route path='/parentInfo' element={<Parents/>}/>
    <Route path='/subject' element={<Subject/>}/>
    <Route path='/setting' element={<Settings/>}/>

    <Route path="/FeesGroup" element={<FeesGroup />} />
    <Route path="/StudentFees" element={<StudentFees />} />
    <Route path="/Expenses" element={<Expenses />} />
    <Route path="/AddExpenses" element={<AddExpenses />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App