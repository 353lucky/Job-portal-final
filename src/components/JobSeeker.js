// import React, { useState } from 'react'
// import { Card, Alert, Button } from 'react-bootstrap'
// import { useAuth } from '../contexts/AuthContext'
// import { Link, useNavigate } from 'react-router-dom'
// import { db } from '../firebase'
// import { doc, deleteDoc, connectFirestoreEmulator } from 'firebase/firestore'
// import { useData } from '../contexts/DataContext';

// function JobSeeker() {
//   const [error, setError] = useState();
//   const { currentUser } = useAuth();
//   const { type } = useAuth();
//   const { deleteUser,deleteUserType } = useAuth();
//   const navigate = useNavigate();
//   const {jobSeekers} = useData();
//   console.log("Dashboard:", type);
//   jobSeekers.map(user => {
//     if(user.email==currentUser.email){
//       const userData = user;
//     }
//   })

//   function handleDelete() {
//     try{
//       deleteUserType();
//     }
//     catch{
//       console.log("Failed to deleteDoc");
//     }
//     try {
//       deleteUser();
//       navigate('/');
//     }
//     catch
//     {
//       setError("Failed to Delete");
//     }
//   }
//   return (
//     <>
//             <span className="d-flex" style={{marginLeft:"50px", marginRight:"200px"}}>
//             <img src="./jobseeker.gif"/>
//             <Card className="mt-5 d-flex justify-content-center text-align-center" style={{width:"1500px", height:"450px"}}>
//         <Card.Body>
//           <h2 className="text-center mb-4">Job Seekers Profile </h2>
//           {error && <Alert variant="danger">{error}</Alert>}
//           <p className="text-center"><strong>Email:</strong>{currentUser.email}</p>
//           <Link to="/update-profile" className="btn btn-success w-100 mt-2" >
//             Update Password
//           </Link>
//           <Link to="/UpdateJobSeeker" className="btn btn-success w-100 mt-2" >
//             Update Details
//           </Link>
//           <Link to="/JobSeekerViewJobs" className="btn btn-success w-100 mt-2">
//             View Jobs
//           </Link>
//           <Button className="btn btn-success w-100 mt-2"  onClick={handleDelete}>Delete Account</Button>
//         </Card.Body>
//       </Card>

// </span>
//     </>
//   )
// }

// export default JobSeeker
import React, { useState } from 'react'
import { Card, Alert, Button } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { db } from '../firebase'
import { doc, deleteDoc, connectFirestoreEmulator } from 'firebase/firestore'
import { useData } from '../contexts/DataContext';

function JobSeeker() {
  const [error, setError] = useState();
  const { currentUser, logout } = useAuth();
  const { type } = useAuth();
  const { deleteUser, deleteUserType } = useAuth();
  const navigate = useNavigate();
  const { jobSeekers } = useData();
  console.log("Dashboard:", type);
  jobSeekers.map(user => {
    if (user.email == currentUser.email) {
      const userData = user;
    }
  })

  const handleLogout = async () => {
    setError('');
    try {
      await logout();
      navigate('/');
    }
    catch {
      setError("Failed to Logout");
    }

  }
  function handleDelete() {
    try {
      deleteUserType();
    }
    catch {
      console.log("Failed to deleteDoc");
    }
    try {
      deleteUser();
      navigate('/');
    }
    catch
    {
      setError("Failed to Delete");
    }
  }
  return (
    <>
      <span className="d-flex" style={{ marginLeft: "50px", marginRight: "200px" }}>
        {/* <img src="./jobseeker.gif"/>
             */}
        {<img src="https://i.pinimg.com/originals/66/b4/cf/66b4cf8521482d7d779ecedc459c5cba.gif" width="700px" height="500px"></img>}
        <Card className="mt-5 d-flex justify-content-center text-align-center" style={{ width: "1000px", height: "450px" }}>
          <Card.Body>
            <h2 className="text-center mb-4 my-4">Job Seekers Profile </h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <p className="text-center"><strong>Email:</strong>{currentUser.email}</p>
            <Link to="/update-profile" className="btn btn-success w-100 mt-2" >
              Update Profile
            </Link>
            <Link to="/UpdateJobSeeker" className="btn btn-success w-100 mt-2" >
              Update Details
            </Link>
            <Link to="/JobSeekerViewJobs" className="btn btn-success w-100 mt-2">
              View Jobs
            </Link>
            <Button className="btn btn-success w-100 mt-2" onClick={handleDelete}>Delete Account</Button>

          </Card.Body>
        </Card>

      </span>
    </>
  )
}

export default JobSeeker