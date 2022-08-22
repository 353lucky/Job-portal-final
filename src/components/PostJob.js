// import React,{useRef} from 'react'
// import { Form, Button, Card, Alert, Dropdown} from 'react-bootstrap'
// import { useData } from '../contexts/DataContext'
// import { useAuth } from '../contexts/AuthContext'
// import {useNavigate} from 'react-router-dom'
// function PostJob() {
//     const companyRef=useRef();
//     const imageRef=useRef();
//     const jobTitleRef=useRef();
//     const jobDescriptionRef=useRef();
//     const salaryRef=useRef();
//     const elegibilityRef=useRef();
//     const {createJob}=useData();
//     const navigate=useNavigate()
//     const {currentUser}=useAuth()
//     async function handleSubmit(e){
//         e.preventDefault();
//         try{
//         console.log(typeof(elegibilityRef.current.value));
//         let obj={
//             Applications:[],
//             Eligibility:elegibilityRef.current.value,
//             Image:imageRef.current.value,
//             job_description:jobDescriptionRef.current.value,
//             Posted_by:currentUser.email,
//             Salary:salaryRef.current.value,
//             company:companyRef.current.value,
//             job_title:jobTitleRef.current.value,
//         }
//         console.log(obj)
//        await createJob(obj);
//         navigate('/JobPostedSuccessfully')
//     }
//     catch(err)
//     {
//         console.log(err);
//     }

//     }
//   return (
//     <div>
//       <>
//       <span className="d-flex" style={{marginLeft:"200px", marginRight:"200px"}}>
//             <img src="./jobpost.gif"/>
//             <Card className="mt-5 d-flex justify-content-center text-align-center" style={{width:"1500px", height:"560px"}}>
//                 <Card.Body>
//                     <h2 className="text-center mb-4">Add a Job</h2>
//                     <Form onSubmit={handleSubmit}>
//                         <Form.Group id="company">
//                             <Form.Label>
//                                 Company
//                             </Form.Label>
//                             <Form.Control type="text" ref={companyRef} required />
//                         </Form.Group>
//                         <Form.Group id="image">
//                             <Form.Label>
//                                 image
//                             </Form.Label>
//                             <Form.Control type="file" ref={imageRef} required />
//                         </Form.Group>
//                         <Form.Group id="job_title">
//                             <Form.Label>
//                                 Job Title
//                             </Form.Label>
//                             <Form.Control type="text" ref={jobTitleRef} required />
//                         </Form.Group>
//                         <Form.Group id="job_description ">
//                             <Form.Label>
//                                 Job Description
//                             </Form.Label>
//                             <Form.Control type="text" ref={jobDescriptionRef} required />
//                         </Form.Group>
//                         <Form.Group id="salary">
//                             <Form.Label>
//                                 Salary
//                             </Form.Label>
//                             <Form.Control type="text" ref={salaryRef} required />
//                         </Form.Group>
//                         <Form.Group id="Eligibility">
//                             <Form.Label>
//                                 Eligibility
//                             </Form.Label>
//                             <Form.Control type="text" ref={elegibilityRef} required />
//                         </Form.Group>
//                         {/* <Dropdown onSelect={handleSelect}>
//                             <Dropdown.Toggle variant="success" id="dropdown-basic">
//                                 Type
//                             </Dropdown.Toggle>

//                             <Dropdown.Menu>
//                                 <Dropdown.Item eventKey="0">Job Seeker</Dropdown.Item>
//                                 <Dropdown.Item eventKey="1">Employer</Dropdown.Item>
//                             </Dropdown.Menu>
//                         </Dropdown> */}
//                         <Button className="w-100 mt-3" id="bgset" type="submit">
//                             Add
//                         </Button>
//                     </Form>
//                 </Card.Body>
//             </Card>
//             </span>
//       </>
//     </div>
    
//   )
// }

// export default PostJob

import React, { useRef } from 'react'
import { Form, Button, Card, Alert, Dropdown } from 'react-bootstrap'
import { useData } from '../contexts/DataContext'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
function PostJob() {
    const companyRef = useRef();
    const imageRef = useRef();
    const jobTitleRef = useRef();
    const jobDescriptionRef = useRef();
    const salaryRef = useRef();
    const elegibilityRef = useRef();
    const { createJob } = useData();
    const navigate = useNavigate()
    const { currentUser } = useAuth()
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            console.log(typeof (elegibilityRef.current.value));
            let obj = {
                Applications: [],
                Eligibility: elegibilityRef.current.value,
                Image: imageRef.current.value,
                job_description: jobDescriptionRef.current.value,
                Posted_by: currentUser.email,
                Salary: salaryRef.current.value,
                company: companyRef.current.value,
                job_title: jobTitleRef.current.value,
            }
            console.log(obj)
            await createJob(obj);
            navigate('/JobPostedSuccessfully')
        }
        catch (err) {
            console.log(err);
        }

    }
    return (
        <div>
            <>

                <span className="d-flex" style={{ marginLeft: "50px", marginRight: "50px" }}>
                    {/* <img src="./jobpost.gif"/>  */}
                    {<img src="https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,q_auto,f_auto/v1598245577/1598245576.jpg" width="700px" height="500px"></img>}
                    <Card className="mt-5 d-flex justify-content-center text-align-center" style={{width:"1500px", height:"560px"}}>

                    <Card.Body>
                        <h2 className="text-center mb-4">Add a Job</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="company">
                                <Form.Label>
                                    Company
                                </Form.Label>
                                <Form.Control type="text" ref={companyRef} required />
                            </Form.Group>
                            <Form.Group id="image">
                                <Form.Label>
                                    image
                                </Form.Label>
                                <Form.Control type="file" ref={imageRef} required />
                                </Form.Group>
                            <Form.Group id="job_title">
                                <Form.Label>
                                    Job Title
                                </Form.Label>

                                <Form.Control type="text" ref={jobTitleRef} required />
                            </Form.Group>
                            <Form.Group id="job_description ">
                                <Form.Label>Job Domain</Form.Label>

                                <Form.Control type="text" ref={jobDescriptionRef} required />
                            </Form.Group>
                            <Form.Group id="salary">
                                <Form.Label>
                                    Salary
                                </Form.Label>
                                <Form.Control type="text" ref={salaryRef} required />
                            </Form.Group>
                            <Form.Group id="Eligibility">
                                <Form.Label>Skills Requirred</Form.Label>

                                <Form.Control type="text" ref={elegibilityRef} required />
                            </Form.Group>
                            {/* <Dropdown onSelect={handleSelect}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Type
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item eventKey="0">Job Seeker</Dropdown.Item>
                                <Dropdown.Item eventKey="1">Employer</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> */}
                            <Button className="w-100 mt-3" id="bgset" type="submit">
                                Add
                            </Button>
                        </Form>
                    </Card.Body>
                    </Card>
                </span>


            </>
        </div>

    )
}

export default PostJob

