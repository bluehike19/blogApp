import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='mt-8 w-full bg-black px-8 md:px-[300px] flex md:flex-row flex-col space-y-6 md:space-y-0 items-start md:justify-between text-sm md:text-md py-8'>
        <div className="flex flex-col text-white">
            <p>Featured Blogs</p>
            <p>Most Viewed</p>
            <p>Readers choice</p>
        </div>
        
    </div>
    </>
  )
}

export default Footer