// import React, { useState } from 'react'
// import { Card, Alert, Button } from 'react-bootstrap'
// import { useAuth } from '../contexts/AuthContext'
// import { Link, useNavigate } from 'react-router-dom'
// import { db } from '../firebase'
// import { doc, deleteDoc } from 'firebase/firestore'

// function Employer() {
//   const [error, setError] = useState();
//   const { currentUser,userRoleList } = useAuth();
//   const { type } = useAuth();
//   const { deleteUser,deleteUserType } = useAuth();
//   const navigate = useNavigate();
//   // console.log("Dashboard:", type)
//   function handleDelete() {
//     try{
//       deleteUserType();
//     }
//     catch{
//       console.log("Failed to deleteDoc");
//     }
//     try {
//       deleteUser();
//      // navigate('/');
//     }
//     catch
//     {
//       setError("Failed to Delete");
//     }
//   }
//   return (
//     <>
//       <span className="d-flex" style={{marginLeft:"50px", marginRight:"200px"}}>
//             <img src="./jobseeker.gif"/>
//             <Card className="mt-5 d-flex justify-content-center text-align-center" style={{width:"1500px", height:"450px"}}>
//         <Card.Body>
//           <h2 className="text-center mb-4">Employer's Profile</h2>
//           {error && <Alert variant="danger">{error}</Alert>}
//           <strong>Email:</strong>{currentUser.email}
//           <Link to="/update-profile" className="btn btn-primary w-100 mt-2">
//             Update Profile
//           </Link>
//           <Link to="/PostJob" className="btn btn-primary w-100 mt-2">
//             Post a Job
//           </Link>
//           <Link to="/JobPostedByMe" className="btn btn-primary w-100 mt-2">
//             My Posts
//           </Link>
//           <Button className="btn btn-primary w-100 mt-2"  onClick={handleDelete}>Delete Account</Button>
   
//         </Card.Body>
//       </Card>
      
//       </span>
//     </>
//   )
// }

// export default Employer

import React, { useState } from 'react'
import { Card, Alert, Button } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { db } from '../firebase'
import { doc, deleteDoc } from 'firebase/firestore'

function Employer() {
  const [error, setError] = useState();
  const { currentUser, logout,userRoleList } = useAuth();
  const { type } = useAuth();
  const { deleteUser,deleteUserType } = useAuth();
  const navigate = useNavigate();
  console.log("Dashboard:", type)
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
    try{
      deleteUserType();
    }
    catch{
      console.log("Failed to deleteDoc");
    }
    try {
      deleteUser();
     // navigate('/');
    }
    catch
    {
      setError("Failed to Delete");
    }
  }
  return (
    <>
      <span className="d-flex" style={{marginLeft:"50px", marginRight:"200px"}}>
            {/* <img src="./jobseeker.gif"/> */}
            {
              <img src="https://cutewallpaper.org/21/career-wallpaper/Friendship-Professionals-HD-Wallpaper-Wallpaper-Stream-.jpg"></img>
            }
            <Card className="mt-5 d-flex justify-content-center text-align-center" style={{width:"1500px", height:"450px"}}>
        <Card.Body>
          <h2 className="text-center mb-4">Employer's Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <p className="text-center"><strong>Email:</strong>{currentUser.email}</p>
          <Link to="/update-profile" className="btn btn-primary w-100 mt-4">
            Update Profile
          </Link>
          <Link to="/PostJob" className="btn btn-primary w-100 mt-2">
            Post a Job
          </Link>
          <Link to="/JobPostedByMe" className="btn btn-primary w-100 mt-2">
            My Posts
          </Link>
          <Button className="btn btn-primary w-100 mt-2"  onClick={handleDelete}>Delete Account</Button>
        </Card.Body>
      </Card>
      
      </span>
    </>
  )
}

export default Employer