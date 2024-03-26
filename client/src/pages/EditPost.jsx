import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import axios from 'axios'
import { URL } from '../url'

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

    if(file){
      const data = new FormData()
      const filename = Date.now()+file.name
      data.append("img",filename)
      data.append("file",file)
      post.photo=filename

      try {
        const imgUpload = await axios.post(URL+"/api/upload",data)
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.put(URL+"/api/posts/"+postId,post,{withCredentials:true})
      navigate("/posts/post/"+res.data._id)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(()=>{
    fetchPosts()
  },[postId])

  const deleteCategory=(i)=>{
    let updatedcats=[...cats]
    updatedcats.splice(i)
    setCats(updatedcats)
  }

  const addCategory=()=>{
    let updatedcats=[...cats]
    updatedcats.push(cat)
    setCat("")
    setCats(updatedcats)
  }

  return (
    <div>
      <Navbar/>
      <div className="px-6 md:px-[200px] mt-8">
        <h1 className="font-bold md:text-2xl text-xl">Update a post</h1>
        <form className="w-full flex flex-col space-y-4 md:space-y-8 mt-4">
          <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder='Enter post title' className='px-4 py-2 outline-none' />
          <input onChange={(e)=>setFile(e.target.value)} type="file" className='px-4' />
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              <input onChange={(e)=>setCat(e.target.value)} value={cat} className='px-4 py-2 outline-none' placeholder='Enter post category' type="text" />
              <div onClick={addCategory} className="bg-black text-white px-4 py-2 font-semibold cursor-pointer">Add</div>
            </div>
            <div className="flex px-4 mt-3">
              {cats?.map((c,i)=>(
                <div className="flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md">
                  <p>{c}</p>
                  <p onClick={()=>deleteCategory(i)} className="text-white bg-black rounded-full cursor-pointer p-1 text-sm"><ImCross/></p>
                </div>
              ))}
            </div>
          </div>
          <textarea onChange={(e)=>setDesc(e.target.value)} value={desc} cols={30} rows={15} className='px-4 py-2 outline-none' placeholder='Enter post description'/>
          <button onClick={handleUpdate} className="">Update</button>
        </form>
      </div>
    </div>
  )
}

export default EditPost