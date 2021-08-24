import axios from 'axios'
import React, { useState } from 'react'
import {  Redirect } from 'react-router-dom'

function Register() {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [redirect,setredirect] = useState(false)

    const submit=async (e)=>{
      //  const response =  await fetch("http://localhost:8000/api/register",{
      //       method:'POST',
      //       headers:{'Content-Type':'application/json'},
      //       body:JSON.stringify({
      //           name,
      //           email,
      //           password
      //       })
      //   });
      const data ={
        name,email,password
      }
      const response = axios.post("http://localhost:8000/api/register",data)
      .then(response=>{
        console.log("Successfully Done")
        console.log(response)
      })
        console.log(response)
        setredirect(true);
        console.log("hi from register 2")
    }
    if(redirect){
        return <Redirect to="/login"/>
    }
    return (
        <div>
            <form onSubmit={submit}>
   
   <h1 className="h3 mb-3 fw-normal">Please Register</h1>
   <div className="form-floating">
     <input type="name" className="form-control"  placeholder="Name"
      onChange={e=>setname(e.target.value)}/>
     <label htmlFor="floatingInput">Name</label>
   </div>
   <div className="form-floating">
     <input type="email" className="form-control"  placeholder="name@example.com" 
     onChange={e=>setemail(e.target.value)}/>
     <label htmlFor="floatingInput">Email address</label>
   </div>
   <div className="form-floating">
     <input type="password" className="form-control" placeholder="Password"
     onChange={e=>setpassword(e.target.value)}/>
     <label htmlFor="floatingPassword">Password</label>
   </div>

  
   <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
   <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
 </form>
        </div>
    )
}

export default Register
