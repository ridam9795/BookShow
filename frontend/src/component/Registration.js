import React, { useRef, useState } from 'react'

function Registration() {
    const username=useRef()
    const pass1=useRef()
    const pass2=useRef()
    const [errorMsg,setErrorMsg]=useState("")

    const handleRegistration=async ()=>{
        const uname=username.current.value
        const pass=pass1.current.value
        const confirmPass=pass2.current.value
        console.log("handleRegistration",uname,pass,confirmPass)
        if(pass!==confirmPass){
            setErrorMsg("Password and confirm password do not match")
            return;
        }else{
            setErrorMsg("")
        }
    }

  return (
    <div className="container">
    <div className="mb-3">
      <label  className="form-label">Email address</label>
      <input type="email" className="form-control" ref={username} />
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
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
    <button onClick={handleRegistration} className="btn btn-success w-25 my-2">Register</button>
    </div>
  </div>
  )
}

export default Registration