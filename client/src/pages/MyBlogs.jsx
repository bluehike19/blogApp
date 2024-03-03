import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import { UserContext } from '../context/UserContext'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { URL } from '../url'

const MyBlogs = () => {
    const {search} = useLocation()
    const [posts, setPosts] = useState([])
    const [noResults, setNoResults] = useState(false)
    const [loader, setLoader] = useState(false)
    const { user } = useContext(UserContext) 

  const fetchPosts = async()=> {
    setLoader(true)
    try {
      const res = await axios.get(URL+"/api/posts/user/"+user._id)
      setPosts(res.data)
      if(res.data.length===0){
        setNoResults(true)
      } else {
        setNoResults(false)
      }
      setLoader(false)
    } catch (err) {
      console.log(err)
      setLoader(true)
    }
  }

  return (
    <div>
      <Navbar />
    </div>
  )
}

export default MyBlogs