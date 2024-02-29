import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import axios from 'axios'

const Home = () => {

  const {search} = useLocation()
  const [posts, setPosts] = useState([])
  const [noResults, setNoResults] = useState(false)
  const [loader, setLoader] = useState(false)
  const {user} = useContext(UserContext)

  const fetchPosts = async()=>{
    setLoader(true)
    try {
      const res = await axios.get(URL+"/api/posts/"+search)
      setPosts(res.data)
      if(res.data.length===0){
        setNoResults(true)
      } else{
        setNoResults(false)
      }
      setLoader(false)

    } catch(err) {
      console.log(err)
      setLoader(true)
    }
  }

  useEffect(()=> {
    fetchPosts()
  },[search])

  return (
    <>
    <Navbar />
    </>
  )
}

export default Home