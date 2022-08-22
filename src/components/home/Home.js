import React from 'react'
// import Footer from '../footer/Footer';
// import AboutUs from '../AboutUs';
import { Link} from "react-router-dom";

export default function Home() {

  const myStyle={
    marginTop:'190px',
    fontSize: '50px',
    color:'dodgerblue'
  }
  return (
    <>
    <div class="bg-dark text-white">
       <div className='bg-image homebackground'>
       <div className="container ">
      <div className='row'>
        <div className='col-sm-6'>
          <p style={myStyle}><b>Find out what you like doing,and get someone</b></p>
          <p className='big-text'><b>to pay you for doing it</b></p>
          <p class="text-dark"><b>Search the job that suits you,and apply for that job. If you are a recruiter then add the job so that u can find the best talent.<br/>Register with us to explore our features.</b></p>
          
          

        </div>
        <div className='col-sm-6'>
          <div style={{marginTop:95}}>

        {/* <img src={process.env.PUBLIC_URL+"image10.jpg"} alt="mypic"/> */}
        </div>

        </div>

      </div>
    </div>
       </div>
       </div>
    
       {/* <AboutUs/> */}
       {/* <Footer/> */}
       
    </>
  )
}