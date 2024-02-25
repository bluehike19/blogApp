import React, { useState } from 'react'

const Navbar = () => {
  const [prompt, setPrompt] = useState("")
  const [menu, setMenu] = useState(false)
  const navigate = useNavigate()
  return (
    <div>Navbar</div>
  )
}

export default Navbar