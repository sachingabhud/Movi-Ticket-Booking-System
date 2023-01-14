import React,{useState,useEffect} from 'react';
import {useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate  = useNavigate ();
    useEffect(()=>{
        if (localStorage.getItem('user-info')){
            navigate('/dashboard')
        }
    },[])

    async function login(){
        let item = {email,password}
        console.log(item);
        let result = await fetch("http://127.0.0.1:8000/api/login",{
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
        navigate ('/dashboard')
    }

    return(
        <div className='col-sm-6 offset-sm-3'>
        <h1>Login</h1>
        <br/>
        <input type='text' value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)} classname="form-control inputBox"/>
        <br/>
        <br/>
        <input type='text' value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} classname="form-control inputBox"/>
        <br/>
        <br/>
        <button type="submit" value="Submit" onClick={login} className='btn btn-primary'>Log In</button>
        <p>Don't have an account? - <Link to='/register'>Sign Up</Link> now</p>
        </div>
    );
}

export default Login;