import React from 'react';
import Footer from '@/Components/Footer/Footer';
import VideoCart from '@/Components/Video/VideoCart';
import NaveBer from '@/Components/NaveBer/NaveBer';

const page = () => {
  const data : any = [2,3,5,6,7,8,9,3,2,1] ;
  return (
    <div className='w-full h-svh'>
      <NaveBer />
      <div className='pl-5 pt-5 flex justify-center items-center w-full'> {/* Video cart's */}
        <div className='flex justify-between items-center w-[100%] h-full flex-col md:grid md:grid-cols-2 max-w-[1200px]'>
          {
            data.map((e : number)=><VideoCart />)
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page