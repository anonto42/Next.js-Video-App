
import Footer from '@/Components/Footer/Footer'
import NaveBer from '@/Components/NaveBer/NaveBer'
import React from 'react'

const Layout = ( { children } : any ) => {
  return (
    <div>
        <NaveBer />
        <div className=''>
            {
                children
            }
        </div>
        <Footer />
    </div>
  )
}

export default Layout