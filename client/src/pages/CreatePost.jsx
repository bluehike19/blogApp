import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [file, setFile] = useState('')
  const { user } = useContext(UserContext)
  const [cat, setCat] = useState('')
  const [cats, setCats] = useState([])

  const navigate = useNavigate()

  const deleteCategory=(i)=>{
    let updatedCats=[...cats]
    updatedCats.push(cat)
    setCat("")
    setCats(updatedCats)
  }

  return (
    <div>CreatePost</div>
  )
}

export default CreatePost