import React,{useEffect, useState} from 'react'
import {useNavigate } from 'react-router-dom'
function Register(){
    const navigate = useNavigate ();
    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            navigate('dashboard')
        }
    },[])
    
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    async function signUp(){
        let item = {name,password,email}
        console.log(item);
        let result = await fetch("http://127.0.0.1:8000/api/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        });
        result = await result.json();
        console.log("result",result);
        localStorage.setItem("user-info",JSON.stringify(result));
        navigate('/dashboard')
    }

    return(
        <div className='col-sm-6 offset-sm-3'>
        <h1>User Sign Up</h1>
        <br/>
        <input type='text' value={name} placeholder="Name" onChange={(e)=>setName(e.target.value)} classname="form-control inputBox"/>
        <br/>
        <br/>
        <input type='text' value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)} classname="form-control inputBox"/>
        <br/>
        <br/>
        <input type='text' value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} classname="form-control inputBox"/>
        <br/>
        <br/>
        <button type="submit" value="Submit" onClick={signUp} className='btn btn-primary'>Sing Up</button>
        </div>
    );
}

export default Register;