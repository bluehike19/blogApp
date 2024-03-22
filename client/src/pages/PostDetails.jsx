import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Loader from '../components/Loader'

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

  const fetchPostComments = async()=> {
    setLoader(true)
    try {
      const res = await axios.get(URL+"/api/comments/post/"+postId)
      setComments(res.data)
      setLoader(false)
    } catch (err) {
      setLoader(true)
      console.log(err)
    }
  }

  useEffect(()=> {
    fetchPostComments()
  },[postId])

  const postComment = async(e)=> {
    e.preventDefault()
    try {
      const res= await axios.post(URL+"/api/comments/create",
      {comment:comment,author:user.username,postId:postId,userId:user._id},
      {withCredentials:true}
      )
      window.location.reload(true)
    }
    catch(err) {
      console.log(err)
    }
  }

  return (
    <div>
    <Navbar />
    {loader?<div className='h-[80vh] flex justify-center items-center w-full'><Loader/></div>:<div className='px-8 md:px-[200px] mt-8'>
      <div className="flex justify-between items-center">
      <h1 className='text-2xl font-bold text-black md:text-3xl'>{post.title}</h1>
      {user?._id===post?.userId && <div className='flex items-center justify-center space-x-2'>
        <p className="cursor-pointer" onClick={()=>navigate("/edit/"+postId)}><BiEdit/></p>
        <p className="cursor-pointer" onClick={handleDeletePost}><MdDelete/></p>
        </div>}
        </div>
        <div className='flex items-center justify-between mt-2 md:mt-4'>
          <p>@{post.username}</p>
          <div className="flex space-x-2">
            <p>{new Date(post.updatedAt).toString().slice(0,15)}</p>
            <p>{new Date(post.updatedAt).toString().slice(16,24)}</p>
          </div>
        </div>
        <img src={IF+post.photo} className='w-full mx-auto mt-8' alt="" />
      </div>}
    </div>
  )
}

export default PostDetails