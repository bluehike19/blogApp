import React, { useState } from 'react'

const MyBlogs = () => {
    const {search} = useLocation()
    const [posts, setPosts] = useState([])
  return (
    <div>MyBlogs</div>
  )
}

export default MyBlogs