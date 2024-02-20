import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { URL } from '../url'
import { Link } from 'react-router-dom'


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const {setUser} = useContext(UserContext)
    
    // const handleLogin = async()=> {
    //     try {
    //         const res = await axios.post(URL+"/api/auth/login",{email,password},{withCredentials:true})
    //         setUser(res.data)
    //         NavigationPreloadManager("/")
    //     } catch (err) {
    //         setError(true)
    //         console.log(err)
    //     }
    // }

  return (
    <>
    <div className='flex items-center justify-between px-6 md:px-[200px] py-4'>
      <h1>Blog Market</h1>
      <h3><Link to='/register'>Register</Link></h3>
    </div>
    </>
  )
}

export default Login