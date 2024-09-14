import React from 'react'
// import {Input} from 'postcss'
import { Search } from 'lucide-react'
import {Input} from './Input'
import { Button } from './button'
import { ChevronDown } from 'lucide-react';

export default function SearchSection() {
  return (
    <div>
     <div className='relative w-full '>
      <Search className='absolute left-2 top-3 h-4 w-full text-muted-foreground '/>

      <Input placeholder='Idhar Likhein..'  className='w-1/3 pl-8'/>
      </div>

      <Button className='flex items-center gap-1 m-5 p-5 bg-violet-300  dark:bg-gray-800'>
        <span>
        Aur zyaada likhein
        </span>
        <ChevronDown />

      </Button>
    </div>
  )
}
