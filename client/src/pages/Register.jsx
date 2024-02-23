import axios from 'axios'
import React, { useState } from 'react'
import { URL } from '../url'
import { Link } from 'react-router-dom'

const Register = () => {

  const {username, setUsername} = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const handleRegister = async()=> {
    try {
      const res = await axios.post(URL+"/api/auth/register",{username,email,password})
      setUsername(res.data.username)
      setEmail(res.data.email)
      setPassword(res.data.password)
      setError(false)
      navigate("/login")
    } catch (err) {
      setError(true)
      console.log(err)
    }
  }

  return (
    <>
    <div className='flex items-center justify-between px-6 md:px-[200px] py-4'>
      <h1 className='text-lg md:text-xl font-extrabold'>Blog Market</h1>
      <h3><Link to='/login'>Login</Link></h3>
    </div>
    <div className='w-full flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]'>
        <h1>Create an account</h1>
        <input onChange={(e)=>setEmail(e.target.value)} className='w-full px-4 py-2 border-2 border-black outline-0' type="text" placeholder='Enter ' />
        <input onChange={(e)=>setEmail(e.target.value)} className='w-full px-4 py-2 border-2 border-black outline-0' type="text" placeholder='Enter ' />
        <input onChange={(e)=>setEmail(e.target.value)} className='w-full px-4 py-2 border-2 border-black outline-0' type="text" placeholder='Enter ' />
      </div>
    </div>
    </>
  )
}

export default Register