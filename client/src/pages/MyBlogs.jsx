import React, { useState } from 'react'

const MyBlogs = () => {
    const {search} = useLocation()
    const [posts, setPosts] = useState([])
    const [noResults, setNoResults] = useState(false)
    const [loader, setLoader] = useState(false)
  return (
    <div>MyBlogs</div>
  )
}

export default MyBlogs