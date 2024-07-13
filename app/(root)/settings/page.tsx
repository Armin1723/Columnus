'use client';
import React from 'react'
import { useSelector } from 'react-redux'

const page = () => {
  const theme = useSelector( (state : any) => state.theme.value )
  return (
    <div className={`${theme === 'dark' && 'bg-black text-white custom-scrollbar-dark'} w-full overflow-y-scroll`}>
      Settings Page
    </div>
  )
}

export default page
