import React from 'react'
import {useParams} from 'react-router-dom'
import {useData} from '../contexts/DataContext'
function ApplicantProfile() {
    const {applicant}=useParams();
    const {jobSeekers}=useData();
    const person=jobSeekers.filter((jobSeeker)=>{
        return jobSeeker.email==applicant
    })
    console.log(person[0]);
  return (
    <div>
      <h1 style={{textAlign:"center",color:"White",marginTop:"5px"}}>{person[0].name}</h1>
      <p>{person[0].age},{person[0].Education},{person[0].Experience},{person[0].Skills},{person[0].contact},{person[0].address}</p>
    </div>
  )
}

export default ApplicantProfile
