import React, { useState } from 'react'
import { useData } from '../contexts/DataContext'
import { useParams,useNavigate } from 'react-router-dom'
import { Button,ListGroup } from 'react-bootstrap';
import './JobDetailsEmployee.css'
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardLink, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
function JobDetailsEmployee() {
    const { jobs } = useData();
    const { id } = useParams();
    const navigate=useNavigate();
    const [applicantViewStatus, setApplicantViewStatus] = useState(false);
    const job = jobs.filter((sjob) => {
        return sjob.id == id;
    })
    return (
        <div>
            <MDBCard className='card2'>
                {/* <MDBCardImage position='top' alt='...' src='https://mdbootstrap.com/img/new/standard/city/062.webp' /> */}
                <MDBCardBody>
                    <MDBCardTitle>{job[0].job_title}</MDBCardTitle>
                    <MDBCardText>
                        Job Description: {job[0].job_description}
                    </MDBCardText>
                </MDBCardBody>
                <MDBListGroup flush>
                    <MDBListGroupItem>Company: {job[0].company}</MDBListGroupItem>
                    <MDBListGroupItem>Salary: {job[0].Salary}</MDBListGroupItem>
                    <MDBListGroupItem>Number of Applicants: {job[0].Applications.length} </MDBListGroupItem>
                </MDBListGroup>
                <Button variant="success" className='btn2' onClick={() => {
                    setApplicantViewStatus(!applicantViewStatus);
                }}>{applicantViewStatus?"Hide Applicants":"View Applicants"}</Button>
                <MDBCardBody>
                    {
                        applicantViewStatus && job[0].Applications.map((applicant) => {
                            return(
                            <ListGroup defaultActiveKey="#link1">
                                <ListGroup.Item>
                                  <Button onClick={()=>{
                                    navigate(`/ApplicantProfile/${applicant}`)
                                  }}>{applicant}</Button>  
                                </ListGroup.Item>
                            </ListGroup>
                            )
                        })
                    }
                    {
                        applicantViewStatus && job[0].Applications.length==0 && <div style={{color:"Red"}}>No Applicant!</div>
                    }
                </MDBCardBody>
            </MDBCard>
        </div>
    )
}

export default JobDetailsEmployee