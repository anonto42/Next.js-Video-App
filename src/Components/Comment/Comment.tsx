'use client'
import React from 'react'

const Comment = ( {comment} : any ) => {
  return (
    <h4 className='w-full h-[30px] bg-[#ffffff00] px-3 my-3 text-[14px] border-b-2 border-b-black relative'>
        <span className="italic font-semibold">
            {
                comment.userName
            } 
        </span> 
        <span className="font-bold"> : </span> 
        <span>
            {
                comment.comment
            }
        </span> .

        <span className="absolute right-3 text-[10px] font-light">4 day's</span>
    </h4>
  )
}

export default Comment