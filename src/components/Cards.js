import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LeftCard } from 'src/assets/icons/svg/leftside'
import { RightIcon } from 'src/assets/icons/svg/right'
import { TopCard } from 'src/assets/icons/svg/top'
import { TrackCard } from 'src/assets/icons/svg/trackcard'

export const BannerCards = ({ icon, name, label }) => {
  return (
    <div className='w-full min-h-[160px] bg-[#FEFAE1] relative px-10 py-8'>
      <div>
        <div className='absolute top-0 left-0'>
          <TopCard />
        </div>
        <div className='absolute top-0 left-0'>
          <LeftCard />
        </div>
        <div className='absolute top-8 left-8'>
          {icon}
        </div>
      </div>
      <div className='mt-14'>
        <h4 className='text-[16px] font-bold'>{name}</h4>
        <h4 className='text-[12px] font-normal mt-1'>{label}</h4>
      </div>
    </div>
  )
}


export const Popularcard = ({data}) => {

  return (
   <>
     <Link href={"/products" + "/" + data?.id}>
     <div className="min-h-[340px] border w-full cursor-pointer">
      <div className="h-[240px] relative">
        <Image src={data?.gallery[0]?.image} className="w-full h-[240px] bg-cover bg-no-repeat" width={240} height={240} alt=""/>
       <button className='text-[10px] font-semibold bg-[#23C353] px-4 py-2 text-white absolute bottom-4 left-5'>Save 67%</button>
      </div>
      <div className='px-4 py-2'>
        <h4 className='text-[14px] font-[400] my-1'>{data?.product_name}</h4>
      </div>
      <div className='px-4 pb-2 flex items-center'>
      <h4 className='text-[20px] font-[700]'>€{data?.variants[0]?.price}</h4>
      <h4 className='text-[12px] font-[400] text-[#EE503E] line-through ml-2'>€89.95</h4>
      </div>
    </div>
     </Link>
   </>
  )
}

export const CollectionCard = ({collection, bg}) => {

  return(
    <>
      <div className={`${bg} bg-no-repeat bg-cover relative min-h-[240px] w-full`}>
       <div className="absolute bottom-0 flex items-center justify-between w-full backdrop-blur bg-black/30">
        <h5 className='text-[14px] font-[600] px-6 text-white'>{collection}</h5>
        <button className='px-6 py-4 bg-yellow-500'>
          <RightIcon color="#000" />
        </button>
       </div>
      </div>
    </>
  )
}


// export const SocialCard  = () => {
//   return (
//     <div className="min-h-[400px] w-full bg-[url('../assets/images/personalization.jpg')] relative brightness-50">

//     </div>
//   )
// }

