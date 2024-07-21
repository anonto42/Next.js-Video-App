import React from 'react'

const NaveBer = () => {
  return (
    <div className='bg-[#00aeff] w-full h-[70px] flex justify-center shadow-xl'>
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