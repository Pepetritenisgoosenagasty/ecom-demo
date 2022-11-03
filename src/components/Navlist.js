import Link from 'next/link'
import React from 'react'
import { DownArrow } from '../assets/icons/svg/down'

const Navlist = () => {

  return (
    <div className='my-auto'>
      <ul className='flex space-x-12'>
        <Link href={"/"}>
        <li className='text-[12px] font-bold border-b-2 border-yellow-400 py-[6px]'>
            <a href="#" >Home</a>
        </li>
        </Link>
        <li className='text-[12px] font-bold opacity-50 flex items-center py-[6px]'>
            <a href="#" className='mr-2' >T-Shirts</a>
            <DownArrow />
        </li>
        <li className='text-[12px] font-bold opacity-50 flex items-center py-[6px]'>
            <a href="#" className='mr-2' >NBA</a>
            <DownArrow />
        </li>
        <li className='text-[12px] font-bold opacity-50 flex items-center py-[6px]'>
            <a href="#" className='mr-2' >Tracksuits</a>
            <DownArrow />
        </li>
        <li className='text-[12px] font-bold opacity-50 py-[6px]'>
            <a href="#" >Products Delivery  •  1 – 2 days</a>
        </li>
        <li className='text-[12px] font-bold opacity-50 py-[6px]'>
            <a href="#" >Contact</a>
        </li>
        <li className='text-[12px] font-bold opacity-50 py-[6px]'>
            <a href="#" >Reviews</a>
        </li>
      </ul>
    </div>
  )
}

export default Navlist