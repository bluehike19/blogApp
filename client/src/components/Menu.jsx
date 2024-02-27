import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import axios from 'axios'
import { URL } from '../url'
import { useNavigate } from 'react-router-dom'

const Menu = () => {
  const { user } = useContext(UserContext)
  const { setUser } = useContext(UserContext)
  const navigate = useNavigate()

  const handleLogout = async()=> {
    try {
      const res = await axios.get(URL+"/api/auth/logout",{withCredentials:true})
      setUser(null)
      navigate("/login")
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>Menu</div>
  )
}

export default Menu