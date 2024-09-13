import React from 'react'
// import {Input} from 'postcss'
import { Search } from 'lucide-react'
import {Input} from './Input'

export default function SearchSection() {
  return (
    <div className='px-7'>
     <div className='relative '>
      <Search className='absolute left-2 top-3 h-4 w-4 text-muted-foreground'/>

      <Input placeholder='Enter your search...'  className='w-1/4 m-7'/>
      </div>
    </div>
  )
}
