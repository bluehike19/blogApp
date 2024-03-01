import React from 'react'
import { IF } from '../url'

const ProfilePost = () => {
  return (
    <div className='w-full flex mt-8 space-x-4'>
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img src={IF+p.photo} alt="" className='h-full w-full object-cover' />
      </div>
      <div className="flex flex-col w-[65%]">
        <h1></h1>
      </div>
    </div>
  )
}

export default ProfilePost