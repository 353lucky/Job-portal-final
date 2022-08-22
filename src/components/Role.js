import React from 'react'
import {Navigate} from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'
function Role() {
    const {type}=useAuth();
    if(type=="0")
    {
        return <Navigate to="/JobSeeker"/>
    }
    else if(type=="1")
    {
        return <Navigate to="/Employer"/>
    }
    else
    {
        return <Navigate to="/"/>
    }
}

export default Role
