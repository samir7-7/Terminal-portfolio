import React from 'react'
import Input from './Input'

const inputs = () => {
  return (
    <div className='flex flex-col gap-1 mt-4 text-[12px] md:text-lg px-3 w-full'>
        <div className='text-white flex gap-4'> <span className='text-blue-700'>Samir Nepal   </span><span> @samirnep </span><span className='text-green-600'>djf23n</span><span className='text-yellow-500'>~</span></div>
        <div className='text-white text-[15px]'>
            <p>Type <span className='italic'>"help"</span> to get commands</p>
        </div>
        <Input/>
    </div>
  )
}

export default inputs
