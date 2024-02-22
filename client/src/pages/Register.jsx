import axios from 'axios'
import React, { useState } from 'react'
import { URL } from '../url'

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
    <div>Register</div> 
  )
}

export default Register