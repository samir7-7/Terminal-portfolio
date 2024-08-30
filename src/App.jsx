import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Inputs from './components/Inputs'

function App() {
  

  return (
    <>
     <div className='bg-black w-[100vw] h-[100vh] flex justify-center items-center'>
        <div className="screen bg-gray-800 border-[4px] border-gray-50 h-[60%] w-[90%] md:h-[90%] rounded-xl">
            <Navbar/>
            <Inputs/>
        </div>
     </div>
    </>
  )
}

export default App
