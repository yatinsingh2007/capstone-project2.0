import React from 'react'
import {Link} from 'react-router-dom'
const Name = () => {
  return (
   <>
        <div className='flex flex-col items-center justify-center h-screen bg-white'>
            <form className='flex flex-col border-2 border-gray-300 rounded-2xl shadow-lg p-8 md:p-20' onSubmit={(e) => {
                e.preventDefault();
            }}>
                <label className='text-cyan-500 mb-1' style={{fontFamily : '"Lexend Zetta"'}}>What Should We Call You ?</label>
                <br/>
                <input type = 'text' placeholder='Enter Your Name' className='rounded-lg bg-gray-100 p-2 text-black border border-gray-300 text-center w-full'/>
            </form> 
        </div>
   </>
  )
}

export default Name
