import React, { useContext, useState } from 'react'

const MyBlogs = () => {
    const {search} = useLocation()
    const [posts, setPosts] = useState([])
    const [noResults, setNoResults] = useState(false)
    const [loader, setLoader] = useState(false)
    const { user } = useContext(userContext) 
  return (
    <div>MyBlogs</div>
  )
}

export default MyBlogs