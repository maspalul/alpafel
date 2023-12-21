import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Product({data}: any) {

  return (
    <div className='mb-5 mx-2 p-5 bg-gray-100 lg:p-2 lg:mx-0 rounded-sm'>
        <Image src={data.src} alt={data.title} />
        <h2 className='text-center mt-3 font-bold text-xl'>{data.title}</h2>
        <Link className='text-center bg-gray-900 text-white mt-3 p-2 rounded-md mx-auto block text-sm 
        w-10/12 lg:w-10/12' href={'/'}>See More | Rp.{data.price}</Link>
    </div>
  )
}
