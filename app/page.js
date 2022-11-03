"use client"

import {
  BannerCards,
  CollectionCard,
  Popularcard,
  SocialCard,
} from "@/components/Cards";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { LeftIcon } from "src/assets/icons/svg/left";
import { RewardsBadge } from "src/assets/icons/svg/RewardsBadge";
import { RightIcon } from "src/assets/icons/svg/right";
import { Telephone } from "src/assets/icons/svg/Telephone";
import { TrackCard } from "src/assets/icons/svg/trackcard";
import { Verified } from "src/assets/icons/svg/verified";
import { Whatsapp } from "src/assets/icons/svg/whatsapp";
import ChampionsLeague from "src/assets/images/country-leagues/champions-league.jpg";
import EuropaLeague from "src/assets/images/country-leagues/europa-league.jpg";
import CopaAmerica from "src/assets/images/country-leagues/copa-america.jpg";
import Caf from "src/assets/images/country-leagues/caf.jpg";
import AsianCup from "src/assets/images/country-leagues/asian-cup.jpg";
import { Facebook } from "src/assets/icons/svg/facebook";
import { Twitter } from "src/assets/icons/svg/twitter";
import { Instagram } from "src/assets/icons/svg/instagram";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { PopularSection } from "@/components/UI/PopularSection";


const infos = [
  {
    id: 1,
    name: "Secure Shipping",
    label: "on all orders",
    icon: <TrackCard />,
  },
  {
    id: 2,
    name: "Telephone",
    label: "+1 23 456 7890",
    icon: <Telephone />,
  },
  {
    id: 3,
    name: "Chat WhatsApp",
    label: "Mon – Fri: 9:00 – 21:00  •  Sat – Sun: 9:00 – 17:00",
    icon: <Whatsapp />,
  },
  {
    id: 4,
    name: "Quality Guarantee",
    label: "erified Purchase Reviews",
    icon: <Verified />,
  },
];



export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [banners, setBanners] = useState(null)
  const [products, setProducts] = useState(null)
  const [collections, setCollections] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [options,setOptions] = useState({});
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  async function getBanner() {
    const res = await fetch('https://camiestas-futbol.effectstudios.co/api/v1/banner');
    const data = await res.json();
    setBanners(data?.banners?.data)
  }

  async function getProducts() {
    const res = await fetch('https://camiestas-futbol.effectstudios.co/api/v1/popular-products');
    const data = await res.json();
    setProducts(data?.products?.data)
  }

  async function getCollections() {
    const res = await fetch('https://camiestas-futbol.effectstudios.co/api/v1/product-category');
    const data = await res.json();
    setCollections(data?.categories?.data)
  }

  useEffect(() => {
    getBanner()
    getProducts()
    getCollections()
  }, [])
  

  return (
    <>
      <section className="w-full md:px-12 md:py-12 relative">
      <div ref={sliderRef} className="keen-slider">
          {
            banners?.map((banner, i) => (
              <React.Fragment key={i}>
                <div className={`keen-slider__slide number-slide${i + 1}`}>
            <HeroSection data={banner}/>
          </div>
              </React.Fragment>
            ))
          }
          {/* <div className="keen-slider__slide number-slide2">
            <HeroSection />
          </div>
          <div className="keen-slider__slide number-slide3">
            <HeroSection />
          </div> */}
        </div>
        {loaded && instanceRef?.current && (
        <div className="absolute bottom-20 left-[100px] hidden md:block">
          {[
            ...Array(instanceRef?.current?.track?.details?.slides?.length)?.keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef?.current?.moveToIdx(idx)
                }}
                className={"w-[80px] h-[4px] bg-gray-500  mx-2" + (currentSlide === idx ? " bg-yellow-400" : " opacity-50")}
              ></button>
            )
          })}
          </div>)
}
      </section>
      <section className="px-12 py-12 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {infos?.map((item) => (
            <React.Fragment key={item.id}>
              <BannerCards
                icon={item.icon}
                name={item.name}
                label={item.label}
              />
            </React.Fragment>
          ))}
        </div>
      </section>
      <section className="relative py-12">
        <RewardsBadge />
      </section>
      <section className="w-full">
       <PopularSection data={products}/>
      </section>
      <section className="w-full">
        <div className="px-12 py-6">
          <h1 className="text-[25px] md:text-[32px] font-[800]">Country Leagues</h1>
        </div>
        <div className="px-12 py-8 min-h-[450px]">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {
              collections?.map((collection, i) => (
                <React.Fragment key={i}>
                   <div>
              <Image src={collection?.image} alt="" className="w-full" width={275} height={275} />
              <h4 className="text-[16px] font-[700] mt-4">{collection?.title}</h4>
            </div>
                </React.Fragment>  
              ))
            }
            {/* <div>
              <Image src={EuropaLeague} alt="" className="w-full" width="100%" height="275px" />
              <h4 className="text-[16px] font-[700] mt-4">Europe League</h4>
            </div>
            <div>
              <Image src={CopaAmerica} alt="" className="w-full" width="100%" height="275px" />
              <h4 className="text-[16px] font-[700] mt-4">Copa America</h4>
            </div>
            <div>
              <Image src={Caf} alt="" className="w-full" width="100%" height="275px" />
              <h4 className="text-[16px] font-[700] mt-4">Asian Cup</h4>
            </div>
            <div>
              <Image src={AsianCup} alt="" className="w-full" width="100%" height="275px" />
              <h4 className="text-[16px] font-[700] mt-4">
                African Nations Cup
              </h4>
            </div> */}
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="px-12 py-6">
          <h1 className="text-[25px] md:text-[32px] font-[800]">Other Collections</h1>
        </div>
        <div className="px-12 py-8 min-h-[600px]">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
            <div>
              <CollectionCard
                bg={`bg-[url('../assets/images/other-collections/kids.jpg')]`}
                collection="Kids"
              />
            </div>
            <div>
              <CollectionCard
                bg={`bg-[url('../assets/images/other-collections/large-sizes.jpg')]`}
                collection="Large sizes"
              />
            </div>
            <div>
              <CollectionCard
                bg={`bg-[url('../assets/images/other-collections/goalkeeper.jpg')]`}
                collection="Goalkeeper"
              />
            </div>
            <div>
              <CollectionCard
                bg={`bg-[url('../assets/images/other-collections/pro-player.jpg')]`}
                collection="Authentic / Pro Player"
              />
            </div>
            <div>
              <CollectionCard
                bg={`bg-[url('../assets/images/other-collections/shorts.jpg')]`}
                collection="Shorts"
              />
            </div>
            <div>
              <CollectionCard
                bg={`bg-[url('../assets/images/other-collections/socks.jpg')]`}
                collection="Socks"
              />
            </div>
          </div>
        </div>
        <div className="px-12 py-8  min-h-[530px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="min-h-[400px] w-full bg-[url('../assets/images/personalization.jpg')] bg-no-repeat bg-cover relative  ">
              <div className="absolute top-0 botton-0 left-0 right-0 h-full w-full bg-black/60"></div>
              <div className="absolute bottom-10 left-2 md:left-10 text-white z-40">
                <h1 className="text-[24px] font-[700] px-6 md:px-0">PERSONALIZATION</h1>
                <h5 className="text-[12px] font-[400] my-4 px-6 md:px-0">
                  Put a custom print on the football shirt of your choice with
                  our <br /> Personalization service.
                </h5>
                <h5 className="text-[12px] font-[400] px-6 md:px-0">
                  Tell us what name, what number and we put it.{" "}
                  <strong>FREE!!!</strong>
                </h5>
              </div>
            </div>
            <div className="min-h-[400px] w-full bg-[url('../assets/images/social-networks.jpg')] bg-no-repeat bg-cover relative">
              <div className="absolute top-0 botton-0 left-0 right-0 h-full w-full bg-black/60"></div>
              <div className="absolute bottom-10 left-2 md:left-10 text-white z-40">
                <h1 className="text-[24px] font-[700] px-6 md:px-0">SOCIAL NETWORKS</h1>
                <h5 className="text-[12px] font-[400] my-4 px-6 md:px-0">
                  Share your shirts with us with the #CamisetasFutbolSpainnn
                </h5>
                <div className="flex px-6 md:px-0">
                  <button className="bg-white px-4 py-2">
                    <Facebook color="#000" />
                  </button>
                  <button className="bg-white px-3 py-2 mx-4">
                    <Twitter color="#000" />
                  </button>
                  <button className="bg-white px-3 py-2">
                    <Instagram color="#000" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
