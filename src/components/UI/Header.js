import Image from "next/image";
import React from "react";
import WhatsappImage from "../../assets/icons/png/whatsapp.png";
import GlobeImage from "../../assets/icons/png/globe.png";
import DownImage from "../../assets/icons/png/down.png";
import { DownArrow } from "../../assets/icons/svg/down";
import Search from "./Search";
import { ShoppingCart } from "../../assets/icons/svg/shopping-cart";
import { UserIcon } from "../../assets/icons/svg/user";
import Navlist from "../Navlist";
import { SearchIcon } from "src/assets/icons/svg/search";
import { Menu } from "src/assets/icons/svg/menu";

const Header = () => {
  return (
    <>
      <div className="grid grid-cols-[100px_minmax(250px,_1fr)_100px] md:grid-cols-[160px_minmax(900px,_1fr)_208px] md:w-full">
        <div className="flex w-[100px] md:w-[160px] h-[32px] bg-[#333]">
          <div className="m-auto flex items-center cursor-pointer">
            <Image
              src={GlobeImage}
              width={12}
              height={12}
              alt="Picture of a globe"
            />
            <p className="m-auto text-[10px] md:text-[11px] font-semibold leading-[16px] text-white mx-2">
              EN
            </p>
            <Image
              src={DownImage}
              // width={12}
              // height={12}
              alt="Picture of a globe"
            />
          </div>
        </div>
        <div className="h-[32px] bg-[#111112] text-white text-center flex">
          <p className="m-auto text-[8px] md:text-[11px] font-semibold leading-[16px]">
            SALES BEGIN • FREE SHIPPING ON ALL ORDERS
          </p>
        </div>
        <div className="flex w-[70px] md:w-[208px] h-[32px] bg-[#27B03F]">
          <div className="m-auto flex items-center cursor-pointer">
            <Image
              src={WhatsappImage}
              width={16}
              height={16}
              alt="Picture of the author"
            />
            <p className="m-auto text-[10px] md:text-[11px] font-semibold leading-[16px] text-white ml-2 hidden md:block">
              Chat with us
            </p>
            <p className="m-auto text-[10px] md:text-[11px] font-semibold leading-[16px] text-white ml-2 block md:hidden">
              Chat
            </p>
          </div>
        </div>
      </div>
      <div className=" h-[88px] hidden md:flex">
        <div className="flex-none w-[160px]  bg-[#F9DC38]"></div>
        <div className="flex-initial grow bg-white border-y border-slate-200 h-[56px]">
          <div className="grid grid-cols-[200px_minmax(900px,_1fr)_208px] divide-x h-[56px]">
            <div className="m-auto flex items-center cursor-pointer">
              <a className="text-[12px] font-semibold mr-2">All Categories</a>
              <DownArrow />
            </div>
            <div>
              <Search />
            </div>
            <div className="w-full flex">
              <div className="w-[104px] h-full border-r border-slate-200 flex justify-center items-center">
                <ShoppingCart color="#111112"/>
              </div>
              <div  className="w-[104px] h-full flex">
               <div className="m-auto flex justify-center items-center cursor-pointer">
               <UserIcon />
               <div className="ml-2">
               <DownArrow />
               </div>
               </div>
              </div>
            </div>
          </div>
          <div className="h-[32px] bg-white border-b border-slate-200 px-12 flex">
            <Navlist />
          </div>
        </div>
      </div>
      <div className="block md:hidden min-h-[72px] pl-8 pr-4 bg-white flex items-center justify-between w-full">
        <div className="flex items-center">
          <div>
            <Menu />
          </div>
          <div className="ml-4">
            <SearchIcon color="#000" />
          </div>
        </div>
        <div className="flex items-center">
          <div>
          <ShoppingCart color="#111112"/>
          </div>
          <div  className="flex ml-4">
               <div className="m-auto flex justify-center items-center cursor-pointer">
               <UserIcon />
               <div className="ml-2">
               <DownArrow />
               </div>
               </div>
              </div>
        </div>
      </div>
    </>
  );
};

export default Header;
