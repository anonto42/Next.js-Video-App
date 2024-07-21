import React from 'react'

const VideoCart = ( props : any ) => {
  return (
    <a href={"12345"} className='w-full lg:h-[260px] xl:h-[280px] md:w-[95%] lg:w-[97%] md:h-[220px] sm:h-[270px] h-[230px] bg-[black] relative rounded-xl md:mr-0 mr-5 mb-4 shadow-lg overflow-hidden'>
      {/* video sorce */}
        <video src={'/video/01.mp4'} autoPlay className='w-full h-full' />
        <div className='w-full h-[80px] bottom-0 text-white absolote absolute flex'>
            <div className='w-[80%] h-full pt-6 pl-4'>
                <h2 className='font-semibold text-[15px] md:text-[13px]'>{/* Titel */}
                  {
                    "Step Mom"
                  }
                </h2>
                <h4 className='text-[13px] md:text-[10px] font-extralight'>{/* Short Description */}
                  {
                    "In beach boy fuck his step mom"
                  }
                </h4>
            </div>
            <div className='w-[20%] h-full flex justify-center items-center overflow-clip'>
                <h2 className='text-[15px] md:text-[13px] font-semibold'>
                  {
                    "3M"
                  }
                </h2>
            </div>
        </div>
    </a>
  )
}

export default VideoCart