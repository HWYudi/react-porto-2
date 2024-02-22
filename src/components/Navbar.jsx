import React from 'react';

export default function Navbar() {
  return (
    <div className='sticky top-0 max-w-screen-xl mx-auto py-4'>
      <div className='flex justify-between items-center'>
        <div className='w-full flex items-center justify-between'>
        <h1 className='font-bold text-lg'>Yudi.</h1>
        <div className='flex justify-start gap-4'>
          <h1>About</h1>
          <h1>Services</h1>
          <h1>Experience</h1>
          <h1>Project</h1>
          <h1>Contact</h1>
        </div>
        </div>
        <div className='flex w-full justify-end'>
          Contact
        </div>
      </div>
    </div>
  );
}
