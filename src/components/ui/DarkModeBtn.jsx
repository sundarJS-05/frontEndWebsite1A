"use client"

import React from 'react'
import { useTheme } from 'next-themes'
import {Button} from './button'

import { IoMoonSharp } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { FaComputer } from "react-icons/fa6";

export default function DarkModeBtn() {
  const { theme, setTheme } = useTheme()

  return (
         <>


        <section className='flex'>

          <button 
          onClick={ ()=> setTheme('dark') } 
          className='p-3 m-3 bg-gray-400  rounded-full transition-all  hover:text-black'>
          <IoMoonSharp />  
          </button>
 
          <button 
          onClick={ ()=> setTheme('light') } 
          className='p-3 m-3 bg-gray-400  rounded-full  hover:text-black transition-all'>
          <IoSunny />
          </button>

          <button 
          onClick={ ()=> setTheme('system') } 
          
          className='p-3 m-3 bg-gray-400  rounded-full  transition-all hover:text-black'>
          <FaComputer />
          </button>


        </section>

        </>

  )
}


