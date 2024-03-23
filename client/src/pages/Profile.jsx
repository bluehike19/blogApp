import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { URL } from '../url'
import axios from 'axios'

const Profile = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {user, setUser} = useContext(UserContext)
  const [posts, setPosts] = useState([])
  const [updated, setUpdated] = useState(false) 
  const param = useParams().id
  const navigate = useNavigate()

  const fetchProfile = async ()=>{
    try {
      const res = await axios.get(URL+"/api/users/"+user._id)
      setUsername(res.data.username)
      setEmail(res.data.email)
      setPassword(res.data.password) 
    } catch (err) {
      console.log(err);
    }
  }

  const handleUserUpdate= async ()=> {
    setUpdated(false)
    try {
      const res = await axios.put(URL+"/api/users/"+user._id,{username,email,password},
      {withCredentials:true})
      setUpdated(true)
    } catch (err) {
      
    }
  }

  const handleUserDelete = async()=>{
    try {
      const res = await axios.delete(URL+"/api/users/"+user._id,{withCredentials:true})
      setUser(null)
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  }

  const fetchUserPosts = async ()=> {
    try {
      const res = await axios.get(URL+"/api/posts/user/"+user._id)
      setPosts(res.data)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(()=>{
    fetchProfile()
  },[param])

  useEffect(()=>{
    fetchUserPosts()
  },[param])

  return (
    <div>Profile</div>
  )
}

export default Profile    