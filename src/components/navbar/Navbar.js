import React , {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import {useAuth} from '../../contexts/AuthContext'
function Header() {
  const {type}=useAuth();
  const {currentUser , logout} = useAuth();
  const [error, setError] = useState();

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
  // const {UserRoleList,currentUser}=useAuth();
  // const temp=UserRoleList.filter((u)=>{
  //   return u.email==currentUser.email
  // })
  // let type="0";
  // if(temp.length==0)
  // {
  //   type="-1";
  // }
  // else
  // {
  //   type=temp[0].type
  // }
  return (
    <>
{currentUser 
? <><nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm">
  <div className="container">
    <a className="navbar-brand fw-bold fs-4" >IA WORKS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
      <Link to='/'>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" >Home</a>
        </li>
      </Link>
    <Link to='/Header'>
        <li className="nav-item">
          <a className="nav-link active" >About</a>
        </li>
      </Link>
      </ul>
  
      <div className='buttons'>
        <a  >
          <i className='fa fa-user-plus me-1'></i>  
      {type=="0" && <Link to="/JobSeeker" className='btn btn-outline-light ms-2' >Profile</Link>}
      {type=="1" && <Link to="/Employer" className='btn btn-outline-light ms-2'>Profile</Link>}
      {type=="-1" && <Link to="/" className='btn btn-outline-light ms-2'>Profile</Link>}
          </a>
      </div>
      <div className='buttons'>
        <a  className='btn btn-outline-light ms-2' onClick={handleLogout}>
          <i className='fa fa-user-plus me-1'></i> Logout</a>
      </div>
    </div>
  </div>
</nav></> 
: <><nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm">
  <div className="container">
    <a className="navbar-brand fw-bold fs-4" >IA WORKS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
      <Link to='/'>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" >Home</a>
        </li>
      </Link>
    <Link to='/Header'>
        <li className="nav-item">
          <a className="nav-link active" >About</a>
        </li>
      </Link>

      </ul>
      <Link to='/login'>
      <div className='buttons'>
        <a className='btn btn-outline-light'>
          <i className='fa fa-sign-in me-1'></i> Login</a>         
      </div>
      </Link>
      <Link to="/signup" >
      <div className='buttons'>
        <a  className='btn btn-outline-light ms-2'>
          <i className='fa fa-user-plus me-1'></i> Register</a>
      </div>
      </Link>
    </div>
  </div>
</nav></>}
    </>
    // <>
    // {currentUser 
    // ? <div style={{width:"100vw"}}>
    //   <nav className="navbar navbar-expand-lg bg-dark">
    //     <div className="container-fluid">
    //     <li className="profile " style={{listStyle: "none", marginRight:"20px"}}>
    //           </li>
    //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarSupportedContent" >
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //           <li className="nav-item">
    //             {type=="0" && <Link to="/JobSeeker" className="text-decoration-none"><b>Home</b></Link>}
    //             {type=="1" && <Link to="/Employer" className="text-decoration-none"><b>Home</b></Link>}
    //             {type=="-1" && <Link to="/" className="text-decoration-none"><b>Home</b></Link>}
    //             {/* <Link to="/" className="text-decoration-none"><b>Home</b></Link> */}
    //           </li>
    //           <li className="nav-item">
    //           <Link to="/Header" className="text-decoration-none"><b>About Us</b></Link>
    //           </li>
    //         </ul>
    //         <li className="profile " style={{listStyle: "none"}}>
    //             <Link to="/"><img src="/pro.ico" alt="profile" style={{border: "5px solid grey", borderRadius: '45px', height:"50px", width:"50px"}}/></Link>
    //           </li>
    //           <li className="nav-item" >
    //           {/* <Link to="/Signup" className="text-decoration-none" style={{color:"white"}}><button style={{color:"white",backgroundColor:"green", borderRadius:"10px", marginRight:"50px"}}>Logout</button></Link> */}
    //           <div className='buttons'>
    //         <a  className='btn btn-outline-light ms-2' onClick={handleLogout}>
    //           <i className='fa fa-user-plus me-1'></i> Logout</a>
    //       </div>
    //           </li>
    //       </div>
    //     </div>
    //   </nav>
    // </div> 

    // : <div style={{width:"100vw"}}>
    //   <nav className="navbar navbar-expand-lg bg-dark">
    //     <div className="container-fluid">
    //     <li className="profile " style={{listStyle: "none", marginRight:"20px"}}>
    //           </li>
    //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarSupportedContent" >
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //           <li className="nav-item">
    //             {type=="0" && <Link to="/JobSeeker" className="text-decoration-none"><b>Home</b></Link>}
    //             {type=="1" && <Link to="/Employer" className="text-decoration-none"><b>Home</b></Link>}
    //             {type=="-1" && <Link to="/" className="text-decoration-none"><b>Home</b></Link>}
    //             {/* <Link to="/" className="text-decoration-none"><b>Home</b></Link> */}
    //           </li>
    //           <li className="nav-item">
    //           <Link to="/Header" className="text-decoration-none"><b>About Us</b></Link>
    //           </li>
    //         </ul>
    //         <li className="profile " style={{listStyle: "none"}}>
    //             <Link to="/"><img src="/pro.ico" alt="profile" style={{border: "5px solid grey", borderRadius: '45px', height:"50px", width:"50px"}}/></Link>
    //           </li>
    //           <li className="nav-item" >
    //           <Link to="/Signup" className="text-decoration-none" style={{color:"white"}}><button style={{color:"white",backgroundColor:"green", borderRadius:"10px", marginRight:"50px"}}>Register</button></Link>

    //           </li>
    //       </div>
    //     </div>
    //   </nav>
    // </div>}

    // </>
  )
}

export default Header

