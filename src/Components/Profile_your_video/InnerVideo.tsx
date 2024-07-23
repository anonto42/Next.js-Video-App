import React from 'react'

const InnerVideo = ({videoUrl}:any) => {
  return (
    <a href={videoUrl} className='sm:w-[200px] w-[150px] sm:h-[120px] h-[100px] mb-3 rounded-lg overflow-hidden relative'>
        <div className='w-full h-full bg-[#00aeff]'>
            <div className='absolute w-[200px] h-[30px] bottom-0'>
                <div className='ml-[115px] text-[10px] mt-[8px] font-bold italic text-[#116c96]'>
                    <p>
                        {
                            "23k"
                        }
                    </p>
                </div>
            </div>
            <video src={videoUrl} className='sm:w-[200px] w-[150px] h-[auto] ' />
        </div>
    </a>
  )
}

export default InnerVideo