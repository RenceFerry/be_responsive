import { Logo } from '../constants/Svg.tsx'
import { useState } from 'react'
import React from 'react'

// @ts-ignore
const Url: React.FC<{ setTheme: any, dimen: any, setUrl: any }> = ({setTheme, dimen, setUrl}) => {
  const [inputUrl, setInputUrl] = useState('')
  
  
  return (
    <div className='url bg-bg text-color1 py-3 w-screen flex flex-row items-center'>
      <div onClick={()=>{setTheme()}} className="w-10 p-0 mx-3 h-10 cursor-pointer">
        <Logo />
      </div>
      <input onChange={(e)=>{
        setInputUrl(e.target.value)
      }} type="text" placeholder='http://' className='border-none bg-bg2 text-color1 w-[30%] focus:outline-none h-10 px-2 rounded-tl rounded-bl border-'/>
      <button onClick={(e)=>{
        setUrl(inputUrl)
        e.target.classList.add('clicked2')
        setTimeout(()=>{
          e.target.classList.remove('clicked2')
        }, 100) 
      }} className='border-none w-[15%] h-10 rounded-tr rounded-br bg-color2 text-black'>Go!</button>
      <h2 className='text-color1 mx-3'>{dimen[0]}×{dimen[1]}</h2>
    </div>
  )
}

export default Url