import React from 'react'
import {useData} from '../contexts/DataContext';
import {useAuth} from '../contexts/AuthContext';
import {Card,Button, Row, Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import './JobPostedByMe.css'
function JobPostedByMe() {
   const {jobs}=useData();
   const {deleteJob}=useData();
   const {currentUser}=useAuth();
   const navigate=useNavigate();
   const myjobs=jobs.filter((job)=>{
    console.log(job.Posted_By,"and",currentUser.email);
    return job.Posted_by===currentUser.email;
   })
   console.log(myjobs);
  return (
    <div>
        {
            myjobs.map((myjob)=>{
                return(
                    <div className='jobPosted'>
                    <Card.Body>
                     <Row>
                    <Col>
                    <Card.Title>{myjob.job_title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{myjob.salary}</Card.Subtitle>
                      <Card.Text>
                        {myjob.job_description}
                      </Card.Text>
                      </Col>
                     <Col>
                     <Button  className = "btnView" variant='secondary'style={{marginRight:"5px"}} onClick={()=>{
                        navigate(`/JobPostedByMe/${myjob.id}`);
                      }}>View</Button>
                      <br></br>
                      <Button className='btnView' variant='danger' onClick={() => {
                                    deleteJob(myjob.id)
                                }}>Delete</Button>
                     </Col>
                     </Row>
                    </Card.Body>
                  </div>
                )
            })
        }
    </div>
  )
}

export default JobPostedByMe