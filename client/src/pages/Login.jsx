import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const {setUser} = useContext(UserContext)
    
    const handleLogin = async 

  return (
    <div>Login</div>
  )
}

export default Login