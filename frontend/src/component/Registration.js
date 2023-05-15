import React, { useRef, useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { SiteState } from '../Context/BookShowProvider';

function Registration() {
    const username=useRef()
    const pass1=useRef()
    const pass2=useRef()
    const [errorMsg,setErrorMsg]=useState("")
    const [emailErrorMsg,setEmailErrorMsg]=useState("")

    const [isUserExist,setIsUserExist]=useState(false)
    const [userExistMessage,setUserExistMessage]=useState("")
    const [isRegistered,setIsRegistered]=useState(false)
 
    axios.defaults.baseURL = "http://localhost:8000";
    const navigate=useNavigate()

    const validateEmail = (email) => {
      return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    };
    const handleRegistration=async ()=>{
        const uname=username.current.value
        const pass=pass1.current.value
        const confirmPass=pass2.current.value
        console.log("handleRegistration",uname,pass,confirmPass)
        let validEmail=false;
        let validPass=false;
        if(!validateEmail(uname)){
          setEmailErrorMsg("Please enter a valid email id")
            
        }else{
          validEmail=true

          setEmailErrorMsg("")
        }
        if(pass!==confirmPass){
            setErrorMsg("Password and confirm password do not match")
            
        }else{
          validPass=true;
          setErrorMsg("")
        }
        
         if(validEmail && validPass){
          try{
            let registerUser=await axios.post('/register/',{
              username:uname,
              password:pass
            })
            console.log(registerUser.data)
            if(registerUser.data.status==200){
              console.log(registerUser.data.message)
              navigate('/')
              setIsRegistered(true)
              username.current.value=""
              pass1.current.value=""
              pass2.current.value=""
              setIsUserExist(false)
              setUserExistMessage("")
             
          //    window.location.reload()

              
            }else{
              setIsUserExist(true)
              setUserExistMessage("User already exists")
              console.log("User already exist")
              setIsRegistered(false)

            }
          }catch(err){
            console.log(err)


          }
         }
            
            
        
    }

  return (
    <div className="container">
    <div className="mb-3">
      <label  className="form-label">Email address</label>
      <input type="email" className="form-control" ref={username} />
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      <p className='text-danger'>{emailErrorMsg}</p>
    </div>
    <div className="mb-3">
      <label  className="form-label">Password</label>
      <input type="password" className="form-control" ref={pass1}  />
    </div>
    <div className="mb-3">
      <label  className="form-label">Confirm Password</label>
      <input type="password" className="form-control" ref={pass2} />
    </div>
    <p className='text-danger'>{errorMsg}</p>
    
    <div className="text-center">
    <p className='text-danger'>{userExistMessage}</p>
 <button onClick={handleRegistration}  className="btn btn-success w-25 my-2">Register</button>
 <p className='text-success font-weight-bold'>{isRegistered?(<>You should successfully registered ,<p> <a type="button"  className="text-decoration-none text-danger" data-bs-toggle="modal" data-bs-target="#loginModal">
  click here
              </a>
               <span> to login.</span></p></>):(<></>)}</p>
    </div>
  </div>
  )
}

export default Registration