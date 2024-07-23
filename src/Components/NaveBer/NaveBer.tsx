import React from 'react'

const NaveBer = () => {
  return (
    <div className='bg-[#00aeff] w-full h-[65px] flex justify-center shadow-xl text-white'>
      <div className='flex justify-between px-5 items-center w-full h-full  max-w-[1200px]'>
        {/* logo section */}
        <div> 
          <a href='/'>
            Logo
          </a>
        </div>
        {/* navigation section */}
        <div className='flex'>
          <a href='/' className=''>
            Home
          </a>
          <a href='/serch' className='mx-7 lg:mx-14'>
            Serch
          </a>
          <a href='/profile' className=''>
            Profile
          </a>
        </div>
      </div>
    </div>
  )
}

export default NaveBer