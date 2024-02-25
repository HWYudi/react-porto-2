import React from 'react';

export default function Navbar() {
  return (
    <div className='fixed w-full top-0 bg-[#27313B] text-white'>
    <div className='max-w-screen-xl mx-auto py-4'>
      <div className='flex justify-between items-center'>
        <div className='w-full flex items-center justify-between'>
        <h1 className='font-bold text-lg border-r-2 border-[#2F3742] pr-16'>Yudi.</h1>
        <div className='flex gap-8'>
          <a href='#about' className='hover:border-b  active:bg-[#6957DF] p-1 active:rounded-full'>About</a>
          <a href='#services' className='hover:border-b  active:bg-[#6957DF] p-1 active:rounded-full'>Services</a>
          <a href='#experience' className='hover:border-b  active:bg-[#6957DF] p-1 active:rounded-full'>Experience</a>
          <a href='#projects' className='hover:border-b  active:bg-[#6957DF] p-1 active:rounded-full'>Project</a>
        </div>
        </div>
        <div className='flex w-full justify-end'>
          <button className='bg-[#252B39]  text-[#7AEAD1] border border-[#454B57] p-2 px-5 rounded-full'>Contact</button>
        </div>
      </div>
    </div>
    </div>
  );
}
