import Link from 'next/link'
import React from 'react'
import { BagIcon } from '../assets/icons/svg/bag'

const HeroSection = ({data}) => {
  return (
    <div className=" h-[400px] w-full bg-[url('../assets/images/hero.jpg')] bg-no-repeat bg-cover bg-center px-12 py-12 relative">
      <h1 className='text-[30px] md:text-[40px] font-bold text-white capitalize' dangerouslySetInnerHTML={{__html: data?.content}}></h1>
      {/* <h1 className='ext-[30px] md:text-[40px] font-bold text-[#FADD18] leading-[48px] -mt-2'>Club Jerseys.</h1> */}
      {
        data?.content === null && (
          <>
           <h1 className='text-[30px] md:text-[40px] font-bold text-white capitalize'>Your favorite customized</h1>
       <h1 className='ext-[30px] md:text-[40px] font-bold text-[#FADD18] leading-[48px] -mt-2'>Club Jerseys.</h1> 
          </>
        )
      }
      <Link href={data?.link}>
      <div className='absolute right-8 bottom-10 w-48 flex cursor-pointer'>
        <div className=' bg-black px-6 py-3 text-[12px] text-white font-semibold border-2 border-white capitalize'>
            {data?.btn_text}
        </div>
        <div className='bg-white px-4 py-3 flex border-2 border-white items-center'>
            <BagIcon />
        </div>
       </div>
      
      </Link>
    </div>
  )
}

export default HeroSection