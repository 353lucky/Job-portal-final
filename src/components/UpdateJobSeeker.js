import React, { useRef, useState } from 'react';
import { useData } from '../contexts/DataContext';
import { useAuth } from '../contexts/AuthContext';
import { Form, Button, Card, Alert, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function UpdateJobSeeker() {
    const nameRef = useRef();
    const imageRef = useRef();
    const ageRef = useRef();
    const contactRef = useRef();
    const educationRef = useRef();
    const experienceRef = useRef();
    const skillsRef = useRef();
    const aboutRef = useRef();
    const addressRef = useRef();
    const { jobSeekers, updateJobSeeker,setUpdateUseEffect,updateUseEffect } = useData();
    const { currentUser } = useAuth();
    const navigate = useNavigate()
    async function handleSubmit(e) {
        e.preventDefault();
        setUpdateUseEffect(!updateUseEffect);
        const tempobj = jobSeekers.filter((jobSeeker) => {
            //console.log(jobSeeker.email,"And",currentUser.email)
            return jobSeeker.email === currentUser.email;
        })
        const updateobj = {
            Education: educationRef.current.value,
            Experience: experienceRef.current.value,
            Skills: skillsRef.current.value,
            about: aboutRef.current.value,
            address: addressRef.current.value,
            age: ageRef.current.value,
            contact: contactRef.current.value,
            image: imageRef.current.value,
            name: nameRef.current.value
        }
        console.log(tempobj[0])
        updateJobSeeker(tempobj[0].id, updateobj);
        alert("Updated Successfully")
        navigate('/JobSeeker')
    }
    return (
        <div style={{width:"800px", marginLeft:"300px"}}>
            <Card className='mt-3'>
                <Card.Body>
                    <h2 className="text-center mb-4">Update Details</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="name">
                            <Form.Label>
                                Name
                            </Form.Label>
                            <Form.Control type="text" ref={nameRef} required />
                        </Form.Group>
                        <Form.Group id="image">
                            <Form.Label>
                                Image
                            </Form.Label>
                            <Form.Control type="file" ref={imageRef} required />
                        </Form.Group>
                        <Form.Group id="age">
                            <Form.Label>
                                Age
                            </Form.Label>
                            <Form.Control type="text" ref={ageRef} required />
                        </Form.Group>
                        <Form.Group id="contact">
                            <Form.Label>
                                Contact
                            </Form.Label>
                            <Form.Control type="text" ref={contactRef} required />
                        </Form.Group>
                        <Form.Group id="education">
                            <Form.Label>
                                Education
                            </Form.Label>
                            <Form.Control type="text" ref={educationRef} required />
                        </Form.Group>
                        <Form.Group id="experience">
                            <Form.Label>
                                Experience
                            </Form.Label>
                            <Form.Control type="text" ref={experienceRef} required />
                        </Form.Group>
                        <Form.Group id="skills">
                            <Form.Label>
                                Skills
                            </Form.Label>
                            <Form.Control type="text" ref={skillsRef} required />
                        </Form.Group>
                        <Form.Group id="about">
                            <Form.Label>
                                About
                            </Form.Label>
                            <Form.Control type="text" ref={aboutRef} required />
                        </Form.Group>
                        <Form.Group id="address">
                            <Form.Label>
                                Address
                            </Form.Label>
                            <Form.Control type="text" ref={addressRef} required />
                        </Form.Group>
                        <Button className="w-100 mt-3" id="bgset" type="submit">
                            Update
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default UpdateJobSeeker
