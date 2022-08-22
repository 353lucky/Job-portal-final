import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert, Dropdown , Container } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useNavigate, Navigate } from 'react-router-dom'
function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const { signup } = useAuth();
    const { type,setType, userCollectionRef, createUser } = useAuth();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const { navpath } = useAuth();
    const { createJobSeeker } = useAuth();
    // const [message,setMessage]=useState()
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const handleSelect = (e) => {
        setType(e);
    }
    async function handleSubmit(e) {
        e.preventDefault();
        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setError('Password Do Not Match');
        }
        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value);
            createUser(emailRef.current.value);
            try {
                if (type === "0") {
                    let obj = {
                        Education: "",
                        Experience: "",
                        Skills: "",
                        about: "",
                        address: "",
                        age: "",
                        contact: "",
                        email: emailRef.current.value,
                        image: "",
                        name: "",
                    }
                    createJobSeeker(obj);
                }
            }
            catch (err) {
                console.log(err);
            }
            navigate("/Role", { replace: true });
        }
        catch {
            setError('Failed To Create An Account');
        }
        setLoading(false)
    }
    return (
        <>
         <div className='bg-image loginbackground'>
           <div>
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "90vh" }}
        >
         <div className="w-100 shadow p-3 mb-5 bg-light rounded border border-primary" style={{ maxWidth: "400px" }}>
    
            <Card>
                <Card.Body>
                    <h2 className="text-center mt-2 mb-4">SignUp</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {/* {message && <Alert variant="success">{message+"\nWelcome "+currentUser.email}</Alert>} */}

                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>
                                Email
                            </Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>
                                Password
                            </Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>
                                Confirm Password
                            </Form.Label>
                            <Form.Control type="password" ref={confirmPasswordRef} required />
                        </Form.Group>
                        <Dropdown onSelect={handleSelect} className="mt-3">
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                Type
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item eventKey="0">Job Seeker</Dropdown.Item>
                                <Dropdown.Item eventKey="1">Employer</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button disabled={loading} className="w-100 mt-3" type="submit">
                            Sign Up
                        </Button>
                        
            <div className="w-100 text-center mt-2">Already Have Account? <Link to="/login">Login</Link></div>
                    </Form>
                </Card.Body>
            </Card>
            </div>
            </Container>
            </div>
            </div>
        </>
    )
}

export default Signup

    // return (
    //     <>
    //         <span className="d-flex" style={{marginLeft:"150px", marginRight:"200px"}}>
    //         <img src="./loginjob.jpeg"/>
     
    //         <Card className="mt-5 d-flex justify-content-center text-align-center" style={{width:"1500px", height:"450px"}}>
    //             <Card.Body>
    //                 <h2 className="text-center mt-2 mb-4">SignUp</h2>
    //                 {error && <Alert variant="danger">{error}</Alert>}
    //                 {/* {message && <Alert variant="success">{message+"\nWelcome "+currentUser.email}</Alert>} */}

    //                 <Form onSubmit={handleSubmit}>
    //                     <Form.Group id="email">
    //                         <Form.Label>
    //                             Email
    //                         </Form.Label>
    //                         <Form.Control type="email" ref={emailRef} required />
    //                     </Form.Group>
    //                     <Form.Group id="password">
    //                         <Form.Label>
    //                             Password
    //                         </Form.Label>
    //                         <Form.Control type="password" ref={passwordRef} required />
    //                     </Form.Group>
    //                     <Form.Group id="password">
    //                         <Form.Label>
    //                             Confirm Password
    //                         </Form.Label>
    //                         <Form.Control type="password" ref={confirmPasswordRef} required />
    //                     </Form.Group>
    //                     <Dropdown onSelect={handleSelect} className="mt-3">
    //                         <Dropdown.Toggle variant="success" id="dropdown-basic">
    //                             Type
    //                         </Dropdown.Toggle>

    //                         <Dropdown.Menu>
    //                             <Dropdown.Item eventKey="0">Job Seeker</Dropdown.Item>
    //                             <Dropdown.Item eventKey="1">Employer</Dropdown.Item>
    //                         </Dropdown.Menu>
    //                     </Dropdown>
    //                     <Button disabled={loading} className="w-100 mt-3" id="bgset" type="submit">
    //                         Sign Up
    //                     </Button>
                        
    //         <div className="w-100 text-center mt-2">Already Have Account? <Link to="/">Login</Link></div>
    //                 </Form>
    //             </Card.Body>
    //         </Card>
    //         </span>
    //     </>
    // )
// }

// export default Signup
