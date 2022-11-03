import { useKeenSlider } from "keen-slider/react"
import { LeftIcon } from "src/assets/icons/svg/left"
import { RightIcon } from "src/assets/icons/svg/right"
import { Popularcard } from "../Cards"
import React, { useState } from "react"

export const PopularSection = ({data}) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        breakpoints: {
            "(min-width: 400px)": {
              slides: { perView: 2, spacing: 5 },
            },
            "(max-width: 767px)": {
                slides: { perView: 1, spacing: 5 },
              },
            "(min-width: 1000px)": {
              slides: { perView: 5, spacing: 15 },
            },
          },
        slides: {
          perView: 5,
          spacing: 15,
        },
        initial: 0,
        slideChanged(slider) {
          setCurrentSlide(slider.track.details.rel)
        },
        created() {
          setLoaded(true)
        },
      })
  return (
    <>
     <div className="px-12 py-6 flex justify-between items-center">
          <h1 className="text-[18px] w-[100px] md:w-1/2 md:text-[32px] font-[800]">MOST POPULAR T-SHIRTS</h1>
          <div>
          <button className="border px-4 py-4">
              <LeftIcon color="#000"/>
            </button>
            <button className="border px-4 py-4 ml-6">
              <RightIcon color="#000"/>
            </button>
        
          </div>
        </div>
        <div className="pl-12 pr-12 md:pr-0 py-8 min-h-[500px]">
        <div className="grid gird-cols-1 md:grid-cols-5 gap-10">
        {
            data?.map((product, i) => (
              <React.Fragment key={i}>
                <div>
                <Popularcard data={product}/>
          </div>
              </React.Fragment>
            ))
          }
    </div>
        </div>
    
    </>
  )
}
