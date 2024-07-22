import React from 'react'
import Layout from '../video/Layout'
import NoVideo from '@/Components/Profile_your_video/NoVideo'

const page = () => {
  return (
    <Layout>
        <div className='min-h-svh w-full flex justify-center '>
            <div className="w-full h-full max-w-[1200px]">
                <div className="w-full h-auto flex justify-center">
                    <div className='w-[300px] h-[300px] bg-[#00aeff26] rounded-full border-2 border-[#00aeff] mt-12 mb-8'></div>
                </div>
                <div className="w-full h-full text-center text-white">
                    <h1 className="font-semibold text-[18px]">
                        {
                            "Name. Your Name"
                        }
                    </h1>
                    <div className="flex justify-center">
                        <h2 className="my-3 w-[60px] min-h-[40px] bg-[#00aeff] flex justify-center items-center rounded-xl">
                            {
                                "300K"
                            }
                        </h2>
                    </div>
                </div>
                <div className="flex justify-start">
                    <h2 className="ml-4 text-white italic">
                        {
                            "Your Video's : "
                        }
                    </h2>
                </div>
                <div className="w-full min-h-[500px] lg:border-l-2 lg:border-r-2 lg:rounded-lg border-t-2 border-b-2 border-[#00aeff] my-5 relative">
                    {/* add video */}
                    <div title='Click to add video' className="absolute w-[50px] h-[50px] bg-[#00aeff] rounded-full right-5 top-5 active:scale-105 duration-75 ease-linear cursor-pointer">
                        <p className='flex justify-center text-center text-[30px] text-white mt-1 shadow-md shadow-black bg-transparent'>+</p>
                    </div>
                    {/* video's option */}
                        <NoVideo />
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default page