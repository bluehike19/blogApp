import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Menu = () => {
  const { user } = useContext(UserContext)
  const { setUser } = useContext(UserContext)
  return (
    <div>Menu</div>
  )
}

export default Menu