import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import Image from "next/image"
import ProductLarge from "../../assets/images/product-large.jpg"
import ProductSmall from "../../assets/images/product-large.jpg"
import { RightIcon } from "src/assets/icons/svg/right"
import { LeftIcon } from "src/assets/icons/svg/left"

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active")
      })
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active")
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx)
        })
      })
    }

    slider.on("created", () => {
      if (!mainRef.current) return
      addActive(slider.track.details.rel)
      addClickEvents()
      mainRef.current.on("animationStarted", (main) => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
      })
    })
  }
}

export default function CustomCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
  })
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 6,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  )

  return (
    <>
      <div ref={sliderRef} className="keen-slider relative">
        <div className="keen-slider__slide number-slide1">
            <Image src={ProductLarge} className="w-full h-[560px] bg-cover bg-no-repeat" width="100%" alt=""/>
        </div>
        <div className="keen-slider__slide number-slide2">
        <Image src={ProductLarge} className="w-full h-[560px] bg-cover bg-no-repeat"  width="100%" alt=""/>
        </div>
        <div className="keen-slider__slide number-slide3">
        <Image src={ProductLarge} className="w-full h-[560px] bg-cover bg-no-repeat"  width="100%" alt=""/>
        </div>
        <div className="keen-slider__slide number-slide4">
        <Image src={ProductLarge} className="w-full h-[560px] bg-cover bg-no-repeat"  width="100%" alt=""/>
        </div>
        <div className="keen-slider__slide number-slide5">
        <Image src={ProductLarge} className="w-full h-[560px] bg-cover bg-no-repeat"  width="100%" alt=""/>
        </div>
        <div className="keen-slider__slide number-slide6">
        <Image src={ProductLarge} className="w-full h-[560px] bg-cover bg-no-repeat"  width="100%" alt=""/>
        </div>
        {loaded && instanceRef.current && (
          <>
           <div className="absolute bottom-6 right-6">
            <button className=" px-4 py-4 bg-black" left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}>
              <LeftIcon color="#fff"/>
            </button>
            <button className=" px-4 py-4 ml-6 bg-black" 
             onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }>
              <RightIcon color="#fff"/>
            </button>
          </div>
        
          </>
        )}
      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail mt-6">
        <div className={`keen-slider__slide number-slide1 ${currentSlide === 0 ? "opacity-none" : "opacity-40"}`}>
        <Image src={ProductSmall} width="100%" alt=""/>
        </div>
        <div className={`keen-slider__slide number-slide2 ${currentSlide === 1 ? "opacity-none" : "opacity-40"}`}>
        <Image src={ProductSmall} className="" width="100%" alt=""/>
        </div>
        <div className={`keen-slider__slide number-slide3 ${currentSlide === 2 ? "opacity-none" : "opacity-40"}`}>
        <Image src={ProductSmall} width="100%" alt=""/>
        </div>
        <div className={`keen-slider__slide number-slide4 ${currentSlide === 3 ? "opacity-none" : "opacity-40"}`}>
        <Image src={ProductSmall} width="100%" alt=""/>
        </div>
        <div className={`keen-slider__slide number-slide5 ${currentSlide === 4 ? "opacity-none" : "opacity-40"}`}>
        <Image src={ProductSmall} width="100%" alt=""/>
        </div>
        <div className={`keen-slider__slide number-slide6 ${currentSlide === 5 ? "opacity-none" : "opacity-40"}`}>
        <Image src={ProductSmall} width="100%" alt=""/>
        </div>
      </div>
    </>
  )
}
