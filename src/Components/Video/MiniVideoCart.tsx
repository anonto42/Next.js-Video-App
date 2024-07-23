import React from 'react'

const MiniVideoCart = ( { videoData } : any) => {
  return (
    <a href={videoData.videoUrl} className='lg:w-[80%] lg:h-[150px] w-full h-[200px] rounded-xl mb-4 bg-[#394fce6c] flex justify-start border-2 border-[#00aeff] lg:ml-12 overflow-hidden mt-10 lg:mt-0'>
        <div className='flex w-full h-full'>
            <div className='w-[340px] h-full border-r-2 border-[#00aeff]'>
                <video src={videoData.videoUrl} className='w-full h-auto' />
            </div>
            <div className='text-white w-[60%] h-full p-2'>
                <h3 className="text-[13px] py-2">
                    {
                        videoData.title
                    }
                </h3>
                <h5 className='text-[10px] font-[200]'>
                    {
                        videoData.shortDescription
                    }
                </h5>
            </div>
        </div>
    </a>
  )
}

export default MiniVideoCart