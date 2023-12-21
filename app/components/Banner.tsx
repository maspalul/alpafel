import React from 'react'

export default function Banner({data}: any) {
  return (
    <div className='bg-gray-400 h-screen w-full flex items-center justify-center md:h-[80vh]'>{data.nama}</div>
  )
}
