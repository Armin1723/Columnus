'use client'
import React from 'react'
import { useSelector } from 'react-redux'

const page = () => {
  const theme = useSelector( (state : any) => state.theme.value )
  return (
    <div className={`${theme === 'dark' && 'bg-black text-white'} w-full`}>
      Hello World
    </div>
  )
}

export default page
