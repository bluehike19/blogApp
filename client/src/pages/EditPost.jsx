import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import axios from 'axios'

const EditPost = () => {

  const postId = useParams().id
  const {user} = useContext(UserContext)
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [file, setFile] = useState(null)
  const [cat, setCat] = useState("")
  const [cats, setCats] = useState([])

  const fetchPosts = async()=>{
   try {
     const res = await axios.get(URL+"/api/posts/"+postId)
   } catch (err) {
    console.log(err);
   }
  }

  const handleUpdate = async (e)=> {
    e.preventDefault()
    const post={
      title,
      desc,
      username:user.username,
      userId:user._id,
      categories:cats
    }
  }

  return (
    <div>EditPost</div>
  )
}

export default EditPost