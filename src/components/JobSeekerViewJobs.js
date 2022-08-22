import React from 'react'
import { useData } from '../contexts/DataContext';
import { useAuth } from '../contexts/AuthContext';
import { Card, Button, Row, Container, Col } from 'react-bootstrap'
import './JobSeekerViewJobs.css'
function JobSeekerViewJobs() {
    const { jobs,updateApplication} = useData();
    const { currentUser } = useAuth();
    console.log(jobs);
    return (
        <div>
            <div className="text-center " style={{backgroundColor:"rgb(50 99 173)", color:"white"}}>
                            <h1>
                                Jobs available
                            </h1>
                            <h4>
                                <p></p>
                            </h4>
                        </div>
            {
                jobs.map((job) => {
                    return (
                       
                        <>
            <Container>
              <div className="jobs">
                <div className="job_company_title">
                  <Row>
                    <Col sm={8}>
                    <h2>{job.company}</h2>
                                    <p><strong>CTC: </strong>{job.Salary}</p>
                                    <p><strong>Eligibility: </strong>{job.Eligibility}</p>
                    </Col>
                    <Col sm={4}>
                    <button className = "btn btn-dark" onClick={() => {
                                    updateApplication(job.id)
                                }}>Apply</button>
                      <br></br>
                    </Col>
                  </Row>
                </div>
                <hr></hr>
                <p><strong>Requirement: </strong>{job.job_description}</p>
                
              </div>
            </Container>
            </>

                    )
                })
            }
         
        </div>
    )
}

export default JobSeekerViewJobs