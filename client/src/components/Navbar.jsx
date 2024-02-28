import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Navbar = () => {
  const [prompt, setPrompt] = useState("")
  const [menu, setMenu] = useState(false)
  const navigate = useNavigate()
  const path = useLocation().pathname

  const showMenu=()=> {
    setMenu(!menu)
  }

  const {user} = useContext(UserContext)

  return (
    <div className='flex items-center justify-between px-6 md:px-[200px] py-4'>
      <h1 className="text-lg md:text-xl font-extrabold"><Link to='/'>Blog Market</Link></h1>
      {path==="/" && <div className='flex justify-center items-center space-x-0'>
        <p onClick={()=>navigate(prompt?"?search="+prompt:navigate("/"))} className='cursor-pointer'><BsSearch /></p>
        <input onChange={(e)=>setPrompt(e.target.value)} className='outline-none px-3' placeholder='Search a post' type="text" />
        </div>}
    </div>
  )
}

export default Navbar