import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import {Link,useNavigate} from 'react-router-dom'
import {db} from '../firebase'
import {updateDoc,doc} from 'firebase/firestore'
function UpdateProfile() {
    const emailRef=useRef();
    const passwordRef=useRef();
    const confirmPasswordRef=useRef();
    const { currentUser, updateEmail, updatePassword,userRoleList,updateUseEffect,setUpdateUseEffect }=useAuth();
    const [error,setError]=useState();
    const [loading,setLoading]=useState(false);
    const navigate=useNavigate();
    const updateUser=async(id,newEmail)=>{
        const userDoc=doc(db,"usertype",id)
            const newFields={email:newEmail}
            await updateDoc(userDoc,newFields)
            setUpdateUseEffect(!updateUseEffect)
    }
    function handleSubmit(e)
    {
        e.preventDefault();
        if(passwordRef.current.value!==confirmPasswordRef.current.value)
        {
            return setError('Password Do Not Match');
        }
        const promises=[];
        setLoading(true)
        setError("");
        if(emailRef.current.value!==currentUser.email)
        {
            console.log("email")
            promises.push(updateEmail(emailRef.current.value));
            const x = userRoleList.filter((u) => {
                return u.email === currentUser.email;
            })
            console.log(currentUser)
            console.log(x[0].id)
            updateUser(x[0].id,emailRef.current.value);
        }
        if(passwordRef.current.value)
        {
            console.log("password")
            promises.push(updatePassword(passwordRef.current.value));
        }
        Promise.all(promises).then(()=>{
            navigate("/Employer")
        }).catch((err)=>{
            setError(err);
        }).finally(()=>{
            setLoading(false);
        })
    }
  return (
      <>
            <span className="d-flex" style={{marginLeft:"200px", marginRight:"200px"}}>
            <img src="./updateprofile.gif"/>
            <Card className="mt-5 d-flex justify-content-center text-align-center" style={{width:"1500px", height:"450px"}}>
            <Card.Body>
                <h2 className="text-center mb-4">Update Password</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                   <Form.Group id="email">
                        <Form.Label>
                            Email
                        </Form.Label>
                        <Form.Control defaultValue={currentUser.email} type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>
                            Password
                        </Form.Label>
                        <Form.Control  placeholder="Leave it blank to keep the same" type="password" ref={passwordRef}  />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>
                            Confirm Password
                        </Form.Label>
                        <Form.Control  placeholder="Leave it blank to keep the same" type="password" ref={confirmPasswordRef} />
                    </Form.Group>
                    <Button disabled={loading} className="w-100 mt-3" id="bgset" type="submit">
                        Update Profile
                    </Button>
                    <div className="w-100 text-center mt-2" ><Link to="/">Cancel</Link></div>
                </Form>
            </Card.Body>
        </Card>
       
        </span>
      </>
  )
}

export default UpdateProfile;
