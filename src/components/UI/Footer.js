import Image from "next/image";
import React from "react";
import { Facebook } from "src/assets/icons/svg/facebook";
import { Instagram } from "src/assets/icons/svg/instagram";
import { Plane } from "src/assets/icons/svg/plane";
import { Twitter } from "src/assets/icons/svg/twitter";
import PaymentIcons from "src/assets/images/payment-partners.png"

const Footer = () => {
  return (
    <footer className="min-h-[560px] bg-[#F5F5F6] relative">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-12 py-16">
        <div>
          <h5 className="text-[16px] font-[700]">Main Menu</h5>
          <div>
          <ul className=' space-y-4 mt-6'>
        <li className='text-[14px] font-[400] opacity-50'>
            <a href="#" >Home</a>
        </li>
        <li className='text-[14px] font-[400] opacity-50'>
            <a href="#" className='mr-2' >T-Shirts</a>
        </li>
        <li className='text-[14px] font-[400] opacity-50'>
            <a href="#" >NBA</a>
        </li>
        <li className='text-[14px] font-[400] opacity-50'>
            <a href="#" className='mr-2' >Tracksuits</a>
        </li>
        <li className='text-[14px] font-[400] opacity-50'>
            <a href="#" >Products Delivery  •  1 – 2 days</a>
        </li>
        <li className='text-[14px] font-[400] opacity-50'>
            <a href="#" >Contact</a>
        </li>
        <li className='text-[14px] font-[400] opacity-50'>
            <a href="#" >Reviews</a>
        </li>
      </ul>
          </div>
        </div>

        <div>
          <h5 className="text-[16px] font-[700]">Secondary Menu</h5>
          <ul className=' space-y-4 mt-6'>
        <li className='text-[14px] font-[400] opacity-50'>
            <a href="#" >Search</a>
        </li>
        <li className='text-[14px] font-[400] opacity-50'>
            <a href="#" className='mr-2' >Privacy policy</a>
        </li>
        <li className='text-[14px] font-[400] opacity-50'>
            <a href="#" >Shipping Policy</a>
        </li>
        <li className='text-[14px] font-[400] opacity-50'>
            <a href="#" className='mr-2' >Returns Policy</a>
        </li>
        <li className='text-[14px] font-[400] opacity-50'>
            <a href="#" >Terms of Service</a>
        </li>
      </ul>
        </div>
        <div>
          <h5 className="text-[16px] font-[700]">Subscribe</h5>
          <div className="mt-6">
            <p className='text-[14px] font-[400] opacity-50'>Subscribe to our mailing list to <br /> receive the latest news.</p>
            <div className="mt-4 flex items-center">
                <input type="email" placeholder="Email Address" className=" bg-white py-2 px-4 focus:outline-none text-[12px]"/>
                <button className="bg-yellow-400 px-4 py-3">
                    <Plane />
                </button>
            </div>
          </div>
        </div>
        <div className="mb-12">
          <h5 className="text-[16px] font-[700]">Follow Us</h5>
          <div className="flex mt-6">
            <button className="bg-black px-4 py-2">
              <Facebook color="#fff" />
            </button>
            <button className="bg-black px-3 py-2 mx-4">
              <Twitter color="#fff" />
            </button>
            <button className="bg-black px-3 py-2">
              <Instagram color="#fff" />
            </button>
          </div>
          <div className="block md:hidden">
          <Image src={PaymentIcons} alt="Payment" className="mt-6" />
          </div>
        </div>
      </div>
      <div className="px-12 py-4 border-t absolute  bottom-0 w-full flex justify-between items-center ">
        <p className="text-[12px] font-[400]">© 2021 Jambulani  •  All rights reserved</p>

        <Image src={PaymentIcons} alt="Payment" className="hidden md:block" />
      </div>
    </footer>
  );
};

export default Footer;
