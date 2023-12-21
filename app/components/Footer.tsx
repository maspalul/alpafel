import Image from 'next/image'
import React from 'react'
import logo from "./../../public/assets/logo.png";


export default function Footer() {
  return (
    <div className='px-[5%] lg:px-[10%] bg-gray-900 text-gray-100 py-5'>
        <Image src={logo} alt="Logo" className="w-40 lg:w-60" />
        <div className='mt-5'>
            <div>
            <h1 className='font-bold text-xl'>Abous Us</h1>
            <div className='flex flex-col gap-1 mt-3'>
                <a href="/">Brand Story</a>
                <a href="/">Sub Brand</a>
                <a href="/">News</a>
            </div>
            </div>
        </div>
        <p className='text-xs mt-5 text-gray-600 text-right'>Copyright @ 2023 | Alpafel</p>
    </div>
  )
}
