import React, { useRef, useState } from 'react'

function Login() {
    const username=useRef()
    const password=useRef()

    const handleLogin=async ()=>{
        const uname=username.current.value
        const pass=password.current.value
       
        
    }

  return (
    <div className="container">
    <div className="mb-3">
      <label className="form-label">Email address</label>
      <input type="email" className="form-control" ref={username} />
    </div>
    <div className="mb-3">
      <label  className="form-label">Password</label>
      <input type="password" className="form-control" ref={password}/>
    </div>
    
    <div className="text-center">
    <button onClick={handleLogin} className="btn btn-success w-25 my-2">Login</button>
    </div>
  </div>
  )
}

export default Login