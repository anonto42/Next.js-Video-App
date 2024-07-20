import React from 'react';

const Layout = ( {children} : any ) => {
  return (
    <div className='w-full h-svh bg-[black] text-white'>
      <div>
        {
          children
        }
      </div>
    </div>
  )
}

export default Layout;