import React from 'react';
import Footer from '@/Components/Footer/Footer';
import VideoCart from '@/Components/Video/VideoCart';
import NaveBer from '@/Components/NaveBer/NaveBer';
import { videoRef } from '../../data_backend';

const page = () => {
  return (
    <div className='w-full h-svh'>
      <NaveBer />
      <div className='pl-5 pt-5 flex justify-center items-center w-full'> {/* Video cart's */}
        <div className='flex justify-between items-center w-[100%] h-full flex-col md:grid md:grid-cols-2 max-w-[1200px]'>
          {
            videoRef.map((element : any , index : number)=><VideoCart videoInfo={element} key={index}/>)
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page