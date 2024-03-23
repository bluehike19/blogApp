import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Profile = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {user, setUser} = useContext(UserContext)
  const [posts, setPosts] = useState([])
  const [updated, setUpdated] = useState(false) 
  const param = useParams().id
  const navigate = useNavigate()

  const fetchProfile = async ()=>{
    try {
      const res = await axios.get(URL+"/api/users/"+user._id)
      setUsername(res.data.username)
      setEmail(res.data.email)
      setPassword(res.data.password) 
    } catch (err) {
      console.log(err);
    }
  }

  

  return (
    <div>Profile</div>
  )
}

export default Profile    