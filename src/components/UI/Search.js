import React from 'react'
import { SearchIcon } from "../../assets/icons/svg/search";

const Search = () => {
  return (
    <div className='h-full flex items-center pr-8'>
       <div className='grow'>
         <input type="search" placeholder='What are you looking for?' className='h-[50px] px-6 w-full focus:outline-none' />
       </div>
       <div className='w-48 flex cursor-pointer'>
        <div className=' bg-[#F9DC38] px-6 py-3 text-[12px] font-semibold'>
            Search
        </div>
        <div className='bg-black px-4 py-3 flex items-center'>
            <SearchIcon color="#fff"/>
        </div>
       </div>
    </div>
  )
}

export default Search