import Signup from './signup/Signup'
import {Container} from 'react-bootstrap'
import {AuthProvider}  from '../contexts/AuthContext'
import {DataProvider}  from '../contexts/DataContext'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import JobSeeker from './JobSeeker'
import Employer from './Employer'
import Login from './login/Login'
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile'
import Role from './Role';
import PostJob from './PostJob';
import './App.css'
import JobPostedSuccessfully from './JobPostedSuccessfully'
import JobPostedByMe from './JobPostedByMe'
import UpdateJobSeeker from './UpdateJobSeeker'
import JobSeekerViewJobs from './JobSeekerViewJobs'
import JobDetailsEmployee from './JobDetailsEmployee'
import ApplicantProfile from './ApplicantProfile'
import Navbar from './navbar/Navbar'
import Header from './Header'
import Home from './home/Home'
import Footer from './footer/Footer'

function App() {
  return (
    
      <Router>
      {/* <Header/> */}
      <AuthProvider>
        <DataProvider>
        <Navbar/>
        <Routes>
          <Route path="/JobSeeker" element={<PrivateRoute><JobSeeker/></PrivateRoute>} />
          <Route path="/JobSeekerViewJobs" element={<JobSeekerViewJobs/>} />
          <Route path="/Employer" element={<PrivateRoute><Employer/></PrivateRoute>} />
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Header" element={<Header/>}/>
          <Route path='/Role' element={<Role/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="/update-profile" element={<PrivateRoute><UpdateProfile/></PrivateRoute>} />
          <Route path="/PostJob" element={<PostJob/>}/>
          <Route path="/JobPostedSuccessfully" element={<JobPostedSuccessfully/>}/>
          <Route path="/JobPostedByMe" element={<JobPostedByMe/>}/>
          <Route path="/JobPostedByMe/:id" element={<JobDetailsEmployee/>}/>
          <Route path="UpdateJobSeeker" element={<UpdateJobSeeker/>}/>
          <Route path='ApplicantProfile/:applicant' element={<ApplicantProfile/>}></Route>
        </Routes>
        <Footer/>
        </DataProvider>
    </AuthProvider>
      </Router>

 
    
  )
}

export default App;
