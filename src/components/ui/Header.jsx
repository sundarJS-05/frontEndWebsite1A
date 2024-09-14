import React from 'react'
import Image from 'next/image'
import { FaRegBell } from "react-icons/fa";

import { FaEquals } from "react-icons/fa6";
import { Button } from './button';

let pages = [
  {
    title: 'Pehli page',
    active: true
  },
  {
    title: 'Doosra Panna',
    active: false
  },
  {
    title: 'Jaankaari',
    active: false
  },
  {
    title: 'Ajeeb Kissey',
    active: false
  },
  {
    title: 'Chal Kya Raha Hai?',
    active: false
  },
  {
    title: 'Ok Bye!',
    active: false
  },


]


export default function Header() {
  return (
    <div>
      {/* first section */}
      <section className='flex justify-between border overflow-auto'>
      <div className='flex items-center '>

        {/* left half */}
        <img 
        className='w-11 flex p-1 m-2 '
        src="https://images.pexels.com/photos/8832766/pexels-photo-8832766.jpeg?auto=compress&cs=tinysrgb&w=400" >
        </img>

        <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...  p-6 m-4 h-5 transition-all">
          Avatar
        </div>

      </div>

      {/* right half */}

      <div>

        {/* bell icon */}
        <button 
        className='border p-3 m-2 dark:border-gray-700 rounded-full dark:bg-blue-700  bg-gray-400  hover:text-lime-900'>
        <FaRegBell />
        </button>


        <button 
        className='border p-3 m-3 dark:border-gray-700 rounded-full dark:bg-blue-700  bg-gray-400  hover:text-lime-900'>
        <FaEquals />
        </button>


        {/* equal sign ICON */}


      </div>



      </section>


      {/* second  section */}
      <section className='flex gap-6 border w-10/12 m-4 p-5'>
      {pages.map( (data, index)=>{
              return (<Button  key={index} >
              {data.title}
              </Button>)
      } ) }
      </section>

    </div>
  )
}
