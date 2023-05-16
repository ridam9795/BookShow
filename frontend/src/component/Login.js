import React, { useRef, useState } from 'react'
import axios from 'axios';
function Login() {
    const username=useRef()
    const password=useRef()
    axios.defaults.baseURL = "http://localhost:8000";
    const [invalidUserMessage,setInvalidUserMessage]=useState("")

    const handleLogin=async(e)=>{
      e.preventDefault();
      const uname=username.current.value
        const pass=password.current.value
        try{
          const loginUser=await axios.post('/login/',{
            username:uname,
            password:pass
          }, { withCredentials: true })
          if(loginUser.data){
            setInvalidUserMessage("")
            let currUser={username:loginUser.data.data.name.split(" ")[0]}
            localStorage.setItem("user",JSON.stringify(currUser))
            window.location.reload()

          }else{
            setInvalidUserMessage("Invalid credentials")
          }

        }catch(err){
          setInvalidUserMessage("Invalid credentials")
          console.log("Error occurred ",err)
        }
        
    }

  return (
    <div className="container">
      <form onSubmit={handleLogin} method="post">
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" ref={username} />
        </div>
        <div className="mb-3">
          <label  className="form-label">Password</label>
          <input type="password" className="form-control" ref={password}/>
        </div>
        
        <div className="text-center">
          <p className='text-danger'>{invalidUserMessage}</p>
          <button type='submit' className="btn btn-success w-25 my-2" >Login</button>
        </div>
    </form>
  </div>
  )
}

export default Login