import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const PostDetails = () => {

  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState("")
  const [loader, setLoader] = useState(false)

  const postId = useParams().id
  const navigate = useNavigate()
  const {user} = useContext(UserContext)

  return (
    <div>PostDetails</div>
  )
}

export default PostDetails