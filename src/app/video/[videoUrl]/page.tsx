"use client"

import React from 'react'
import Layout from '../Layout'
import Comment from '@/Components/Comment/Comment'
import { videoRef , comments } from '../../../../data_backend'
import MiniVideoCart from '@/Components/Video/MiniVideoCart'


const page = ({videoUrl}: any) => {

    console.log(videoUrl);
    
  return (
    <Layout>
        <div className='w-full min-h-svh flex justify-center'>
            <div className='w-full h-full p-4 max-w-[1200px] lg:flex'>
                <div className='w-full h-full'>
                    {/* video section */}
                    <video src={`/video/${videoUrl}.mp4`} controls className='w-full h-[280px] sm:h-[300px] md:h-[330px] lg:w-[600px] bg-[black] rounded-xl shadow-xl' />
                    <div className='w-full h-[80px] overflow-hidden bg-[#00aeff] mt-3 rounded-xl shadow-lg flex lg:w-[600px]'>
                        <div className='w-[50%] h-full bg-[#00000000] flex justify-start items-center pl-4'>
                            {/* like */}
                            <div className='w-[40px] h-[40px] rounded-full border hover:mb-3 duration-150 ease-in-out hover:scale-105 active:scale-95 active:blur-sm cursor-pointer'></div>
                            {/* un-like */}
                            <div className='w-[40px] h-[40px] rounded-full border ml-3 hover:mt-3 duration-150 ease-in-out hover:scale-105 active:scale-95 active:blur-sm cursor-pointer'></div>
                        </div>
                        <div className='w-[50%] h-full relative'>
                            {/* sub section */}
                            <div className='absolute w-[70px] h-[45px] right-5 top-4 hover:right-4 bg-[pink] rounded-full ease-in-out flex justify-center items-center hover:mb-3 duration-150 hover:scale-105 active:scale-95 active:blur-sm cursor-pointer hover:shadow-lg'>
                                <h2 className='text-[13px] font-semibold'>300k</h2>
                            </div>
                        </div>
                    </div>
                    {/* comment box */}
                    <div className='w-full h-[280px] sm:h-[300px] md:h-[330px] lg:w-[600px] bg-[#b5d7fb] rounded-xl shadow-xl mt-4 overflow-hidden'>
                    <div className='w-full h-[85%] overflow-y-auto'>
                        {/* all comments */}
                        {
                            comments.map((e : any , i : number) : any => <Comment comment={e} key={i} /> )
                        }
                    </div>
                    <div className='w-full h-[15%] bg-[white]'>
                        <input type="text" className='h-full w-[87%] outline-none px-3' placeholder='Write comment hear' />
                        <input type="supmit" value='send' className='h-full w-[13%] bg-[#00aeff] text-white font-semibold text-center cursor-pointer' />
                    </div>
                    </div>
                </div>
                <div className='w-full h-full lg:-mr-10 lg:h-[800px] lg:overflow-y-scroll bar-aaa'>
                    {
                        videoRef.map( (e : any) => <MiniVideoCart videoData={e} /> )   
                    }
                </div>
            </div>
            
        </div>
    </Layout>
  )
}

export default page