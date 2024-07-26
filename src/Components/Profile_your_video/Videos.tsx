'use client'
import React from 'react'
import InnerVideo from './InnerVideo'

const Videos = ({videoUrl}:any) => {
  return (
    <div className='w-full h-full min-h-[500px] grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 pt-3 px-4 sm:px-4'>
        {
            videoUrl.map( (e : any) => <InnerVideo videoUrl={e.videoUrl} />)
        }
    </div>
  )
}

export default Videos