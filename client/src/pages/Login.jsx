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
      <h1 className='text-lg md:text-xl font-extrabold'><Link to='/'>Blog Market</Link></h1>
      <h3><Link to='/register'>Register</Link></h3>
    </div>
    <div className='w-full flex justify-center items-center h-[80vh]'>
      <div className='flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]'>
        <h1 className='text-xl font-bold text-left'>Log in to your account</h1>
        <input onChange={(e)=>setEmail(e.target.value)} className='w-full px-4 py-2 border-2 border-black outline-0' placeholder='Enter your email' type="text" />
        <input onChange={(e)=>setPassword(e.target.value)} className='w-full px-4 py-2 border-2 border-black outline-0' placeholder='Enter your password' type="pasword" />
      </div>
    </div>
    </>
  )
}

export default Login