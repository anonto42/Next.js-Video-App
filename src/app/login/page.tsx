
import React from 'react';
import Layout from "./Layout";

const page = () => { 
  return (
    <Layout>
        <div className='w-full h-full'>
          <div className="h-[35vh] w-full px-5">
            <div className='relative h-[60px] pt-5 mb-5'>

              <a href='/'>
                <div title='Click for return' className="border-[2px] absolute right-0 rounded-full w-[30px] h-[30px] cursor-pointer"></div>
              </a>

            </div>
            <div className='flex justify-center items-center'>
              <div>
                <input placeholder='Email' className='h-[40px] mb-6 text-[#0f1836] w-full max-w-[700px] outline-none px-3 rounded-[5px] overflow-hidden' type="email" />
                <input placeholder='password' className='h-[40px] mb-6 text-[#0f1836] w-full max-w-[700px] outline-none px-3 rounded-[5px] overflow-hidden' type="password"  />
              </div>
            </div>
          </div>
          <div className="h-[35vh] w-full flex justify-center text-center">
            <div>
              <button className='w-[100px] h-[40px] rounded-[5px] bg-[#f84865] active:scale-105 duration-100 shadow-md ease-in-out'>Signin</button>
              <h2 className='mt-3 mb-3'>OR</h2>
              <div className='flex justify-between w-[250px]'>
                <button className='w-[100px] h-[40px] rounded-[5px] bg-[#0fa576] active:scale-105 duration-100 shadow-md ease-in-out'>Google</button>
                <button className='w-[100px] h-[40px] rounded-[5px] bg-[#4877f8] active:scale-105 duration-100 shadow-md ease-in-out'>Facebook</button>
              </div>
              <div>
                <h2 className='text-[10px] mt-3'><span className='underline text-[#272963]'>You don't have any account ?</span> <br /> Then Register </h2>
                <a href="/register">
                  <button className='w-[100px] h-[40px] mt-3 rounded-[5px] bg-[#e101b1] active:scale-105 duration-100 shadow-md ease-in-out'>Register</button>
                </a>
              </div>
            </div>
          </div>
          <div className="h-[30vh] w-full"></div>
        </div>
    </Layout>
  )
}

export default page;