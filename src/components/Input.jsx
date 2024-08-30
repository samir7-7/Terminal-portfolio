import React from 'react'

const Input = () => {
  return (
    <div className='text-white flex w-full'>
      <label htmlFor="command">$</label>
      <input className='bg-transparent border-none pl-3 focus:outline-none w-full' autoFocus type="text" id='command' />
    </div>
  )
}

export default Input
