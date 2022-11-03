"use client";

import CustomCarousel from "@/components/UI/CustomCarousel";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HeartOutline } from "src/assets/icons/svg/HeartOutline";
import { RewardsBadge } from "src/assets/icons/svg/RewardsBadge";
import { ShoppingCart } from "src/assets/icons/svg/shopping-cart";
import qs from 'qs';


export default function Page({params}) {
  const [details, setDetails] = useState(null)

  const productId = qs.stringify({
    filters: {
        products: {
          id: {
            $eq: params?.id,
          },
        }
       },
        populate: '*',
 }, {
   encodeValuesOnly: true,
 });

  async function getProductDetails() {
    const res = await fetch("https://camiestas-futbol.effectstudios.co/api/v1/popular-products" + `?${productId}`);
    const data = await res.json();
    setDetails(data?.products?.data)
  }

  useEffect(() => {
    getProductDetails()
  }, [])


  console.log(details)
  
  return (
    <>
      <div className="min-h-[500px] px-4 md:px-40 py-12">
        <div className="flex flex-wrap items-center">
          <h5 className="text-[12px] font-medium text-[#1256DB]">Home</h5>
          <span className="text-[12px] font-medium text-[#111112] mx-2">
            &gt;
          </span>
          <h5 className="text-[12px] font-medium text-[#1256DB]">
            England — Premier League
          </h5>
          <span className="text-[12px] font-medium text-[#111112]] mx-2">
            &gt;
          </span>
          <h5 className="text-[12px] font-medium text-[#111112] mt-2 md:mt-0">
            Manchester United 21-22 Home Shirt
          </h5>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-10">
          <div>
            <div className="w-full">
              <CustomCarousel />
            </div>
          </div>

          <div>
            <h1 className="text-[24px] font-[700] text-[#111112]">
              Manchester United 21-22 Home Shirt
            </h1>
            <div className="py-3 flex flex-wrap items-center space-y-2 md:space-y-0">
              <h4 className="text-[40px] font-[700]">€30.00</h4>
              <h4 className="text-[12px] font-[400] text-[#EE503E] line-through mx-3">
                €89.95
              </h4>
              <button className="text-[10px] font-semibold bg-[#23C353] px-4 py-2 text-white ">
                Save 67%
              </button>
              <div className="text-[12px] font-[400px]  md:ml-20 border px-4 py-2 flex items-center">
                <HeartOutline />
                <h5 className="ml-2">Add to Favorites</h5>
              </div>
            </div>

            <h5 className="text-[14px] font-[400px] my-6 opacity-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque euismod <br /> lacinia aliquam. Morbi est nis, at
              lacus. Donec ornare, dui vel facilisis luctus, metus <br /> mi
              ttitor erat sapien scelerisque nunc. Pellentesque ornare elit
              tellus... <strong>Read More</strong>
            </h5>

            <div class="grid grid-cols-1 md:grid-cols-[120px_minmax(200px,_1fr)] gap-4 md:gap-10 mt-12 items-center">
              <div>
                <h5 className="text-[12px] font-[600px]">
                  Size <sup className="text-red-600">*</sup>
                </h5>
              </div>
              <div>
                <select
                  className="py-2 w-full md:w-[280px] text-[12px] border px-4"
                  placeholder="Select a shirt size"
                >
                  <option value="1">Select a shirt size</option>
                </select>
                <button className="text-[12px] border px-2 py-2 font-[600px] bg-[#EAEAEC] mt-2 md:mt-0 ml-4">
                  View Size Chart
                </button>
              </div>
              <div>
                <h5 className="text-[12px] font-[600px]">Name</h5>
              </div>
              <div>
                <input
                  className="py-2 w-full  md:w-[400px] text-[12px] border px-4"
                  placeholder="What name would you want in the shirt?"
                />
              </div>
              <div>
                <h5 className="text-[12px] font-[600px]">Number on Shirt</h5>
              </div>
              <div>
                <input
                  type="number"
                  className="py-2 w-full md:w-[400px] text-[12px] border px-4"
                  placeholder="Enter a number between 0 and 99"
                />
              </div>
              <div>
                <h5 className="text-[12px] font-[600px]">Patch</h5>
              </div>
              <div>
                <select
                  className="py-2 w-full md:w-[400px] text-[12px] border px-4"
                  placeholder="Select a patch"
                >
                  <option value="1">Select a patch</option>
                </select>
              </div>
              <div>
                <h5 className="text-[12px] font-[600px]">Quantity</h5>
              </div>
              <div className="w-full">
                <input
                  type="number"
                  className="py-2 w-full md:w-[100px] text-[12px] border px-4"
                />
              </div>
              <div className="md:w-[550px] flex cursor-pointer mt-8 md:mt-0">
                <div className=" bg-[#F9DC38] px-6 py-3 text-[12px]  grow font-semibold">
                  Add to Cart
                </div>
                <div className="bg-black px-4 py-3 flex items-center">
                  <ShoppingCart color="#fff" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <section className="relative pb-20">
        <RewardsBadge />
      </section>
    </>
  );
}
