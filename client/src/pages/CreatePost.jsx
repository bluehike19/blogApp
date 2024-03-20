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
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              <input value={cat} onChange={(e)=>setCat(e.target.value)} className='px-4 py-2 outline-none' placeholder='Enter post category' type="text" />
              <div className="bg-black text-white px-4 py-2 font-semibold cursor-pointer">Add</div>
            </div>
            <div className="flex px-4 mt-3">
              {cat?.map((c,i)=> (
                <div className="flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md">
                  <p>{c}</p>
                  <p onClick={()=>deleteCategory(i)} className='text-white bg-black rounded-full cursor-pointer p-1 text-sm'><ImCross/></p>
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreatePost