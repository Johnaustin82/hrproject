import { useState } from 'react'
// import LoginForm from './components/Login'
import Home from './components/Homepage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LoginForm from './components/Login';
import Notices from './components/Notications/NotificationPage';
import TeamDirectory from './components/Notications/TeamDirectory';
import EmployeeLeave from './components/Employees/EmployeeLeave';
import AdminDashboard from './components/MainPage';
import AdminLeaveManagement from './components/AdminLeaveManagement';
import AddNotification from './components/Notications/AddNotications';
import AboutUs from './components/Aboutus';


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/login'element={<LoginForm/>}/>
        <Route path='/dashboard'element={<Dashboard/>}/>
        <Route path='/Notice'element={<Notices/>}/>
        <Route path='/directory'element={<TeamDirectory/>}/>
        <Route path='/leave' element={<EmployeeLeave/>}/>
        <Route path='/Dash'element={<AdminDashboard/>}/>
        <Route path='/Addnotice'element={<AddNotification/>}/>
        <Route path='/Adminleave' element={<AdminLeaveManagement/>}/>
        <Route path='/About'element={<AboutUs/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
