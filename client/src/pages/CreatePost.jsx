import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { URL } from '../url'
import Navbar from '../components/Navbar'

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
    updatedCats.splice(i)
    setCat("")
    setCats(updatedCats)
  }

  const addCategory=(i)=>{
    let updatedCats=[...cats]
    updatedCats.push(cat)
    setCat("")
    setCats(updatedCats)
  }

  
  const handleCreate=async ()=>{
   e.preventDefault()
   const post={
    title,
    desc,
    username:user.username,
    userId:user._id,
    categories:cats
   }

   if(file){
    const data = new FormData()
    const filename=Date.now()+file.name 
    data.append("img",filename)
    data.append("file",file)
    posts.photo=filename

    try {
      const imgUpload=await axios.post(URL+"/api/upload",data)
    } catch (err) {
      console.log(err)
    }
   }

   try {
    const res =  await axios.post(URL+"/api/posts/create",post,{withCredentials:true})
    navigate("/posts/post/"+res.data._id)
   } catch (err) {
    console.log(err)
   }
  }


  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-[200px] mt-8">
        <h1 className="font-bold md-text-2xl text-xl">Create a Post</h1>
        <form className="w-full flex flex-col space-y-4 md:space-y-8 mt-4">
          <input onChange={(e)=>setTitle(e.target.value)} type="text" placeholder='Enter post title' className="px-4 py-2 outline-none" />
          <input onChange={(e)=>setFile(e.target.files[0])} type="file" className="px-4 " />
        </form>
      </div>
    </div>
  )
}

export default CreatePost