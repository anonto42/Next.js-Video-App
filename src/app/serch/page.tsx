import React from 'react'
import Layout from '../video/Layout'
import Serch_History_info from '@/Components/serchHistory/Serch_History_info'

const page = () => {
  return (
    <Layout>
        <div className="w-full min-h-svh">
            <div className="h-[10%] w-full px-6 flex justify-center">
                <div className="w-full h-[50px] max-w-[1200px] flex rounded-xl overflow-hidden mt-4 shadow-lg">
                    <input type='text' className="w-full h-full px-6 placeholder:text-[#00aeff]" placeholder="Serch" />
                    <div className='w-[90px] h-full bg-[blue] active:bg-[#00aeff] duration-75 ease-linear'></div>
                </div>
            </div>
            <div className="h-[10%] w-full px-6 flex justify-center">
                <div className="w-full max-w-[1200px] rounded-xl overflow-hidden mt-4">
                    <Serch_History_info />
                    <Serch_History_info />
                    <Serch_History_info />
                    <Serch_History_info />
                    <Serch_History_info />
                    <Serch_History_info />
                    <Serch_History_info />
                    <Serch_History_info />
                    <Serch_History_info />
                    <Serch_History_info />
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default page