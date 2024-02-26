import React from 'react'

export default function Project() {
  return (
    <div className='bg-[#252B39] text-white py-20'>
        <div className='max-w-screen-xl mx-auto'>
        <h1 className="mx-10 text-3xl font-semibold border-b-2 border-white inline-block">
          Project
        </h1>
        <div className='mt-20 flex flex-wrap md:flex-nowrap mx-10 gap-5'>
            <div className='w-full md:w-1/3 bg-[#3C454E] rounded-md'>
                <img src="images/mockupweb.png" alt="" />
                <div className='p-4 text-center'>
                <h1 className='text-2xl font-semibold'>Portfolio Website</h1>
                <p className='capitalize text-sm mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, adipisci!</p>
                </div>
            </div>
            <div className='w-full md:w-1/3 bg-[#3C454E] rounded-md'>
                <h1>wknffwnf</h1>
            </div>
            <div className='w-full md:w-1/3 bg-[#3C454E] rounded-md'>
                <h1>lorem</h1>
            </div>
        </div>
        </div>
    </div>
  )
}
