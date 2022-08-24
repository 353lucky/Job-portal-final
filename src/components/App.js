import Signup from './signup/Signup'
import {Container} from 'react-bootstrap'
import {AuthProvider}  from '../contexts/AuthContext'
import {DataProvider}  from '../contexts/DataContext'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Login from './login/Login'
// import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword'
import Role from './Role';

import PostJob from './employer/PostJob'
import './App.css'


import Profile from './employer/profile/Profile'
import Navbar from './navbar/Navbar'
import Header from './About'
import Home from './home/Home'
import Footer from './footer/Footer'

import JobSeekerViewJobs from './jobSeeker/viewJobs/ViewJobs'
import UpdateJobSeeker from './jobSeeker/updateDetails/Update'
import JobPostedByMe from './employer/myPost/MyPost'
import JobDetailsEmployee from './employer/employeeDetail/EmployeeDetail'
import ContactUs from './ContactUs'

function App() {
  return (
    
      <Router>
      <AuthProvider>
        <DataProvider>
        <Navbar/>
        <Routes>
          
          <Route path="/JobSeekerViewJobs" element={<JobSeekerViewJobs/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Header" element={<Header/>}/>
          <Route path="/Contact" element={<ContactUs/>}/>
          
          <Route path='/Role' element={<Role/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>} />
         
          <Route path="/PostJob" element={<PostJob/>}/>
         
          <Route path="/JobPostedByMe" element={<JobPostedByMe/>}/>
          <Route path="/JobPostedByMe/:id" element={<JobDetailsEmployee/>}/>
          <Route path="UpdateJobSeeker" element={<UpdateJobSeeker/>}/>
          <Route path='ApplicantProfile/:applicant' element={<Profile/>}></Route>
        </Routes>
        <Footer/>
        </DataProvider>
    </AuthProvider>
      </Router>

 
    
  )
}

export default App;
