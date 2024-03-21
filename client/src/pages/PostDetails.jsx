import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import axios from 'axios'

const PostDetails = () => {

  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState("")
  const [loader, setLoader] = useState(false)

  const postId = useParams().id
  const navigate = useNavigate()
  const {user} = useContext(UserContext)

  const fetchPost = async()=> {
    try {
      const res = await axios.get(URL+"/api/posts/"+postId)
      setPost(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleDeletePost = async()=> {
    try {
      const res = await axios.delete(URL+"/api/posts/"+postId,{withCredentials:true})
      console.log(res.data)
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchPost()
  },[postId])

  

  return (
    <div>PostDetails</div>
  )
}

export default PostDetails