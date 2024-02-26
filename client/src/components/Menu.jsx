import React, { useContext } from 'react'

const Menu = () => {
  const { user } = useContext(userContext)
  const { setUser } = useContext(userContext)
  return (
    <div>Menu</div>
  )
}

export default Menu