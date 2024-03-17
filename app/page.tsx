'use client'

import { useState } from "react"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"
import { RxDotFilled } from "react-icons/rx"

export default function Home() {
    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1438786657495-640937046d18?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          },
          {
            url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
          },
          {
            url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
          },
      
          {
            url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
          },
          {
            url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
          },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex)
    }
    
    return (
        <div className="max-w-[1440px] h-[780px] w-full m-auto py-14 px- relative group">
            <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
                <div className="absolute top-[20%] w-[1140px] max-w-[80%] left-[50%] -translate-x-[50%] pr-[30%] box-border text-white shadow-md">
                        <div className="text-emerald-900 font-bold tracking-[10px]">LAWN MOWER</div>
                        <div className="text-emerald-900 font-bold text-[5em] leading-[1.3em]">DESIGN SLIDER</div>
                        <div className="font-bold text-[5em] leading-[1.3em] text-transparent bg-clip-text bg-gradient-to-br from-lime-400 to-emerald-600">GRASS</div>
                        <div className="text-black text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit facere fuga esse aspernatur labore, recusandae nobis vero mollitia illum eum voluptas voluptate enim reprehenderit et reiciendis debitis quo. Numquam facere harum accusantium, similique odit deleniti vero quo quas aut nesciunt est autem delectus dignissimos error eum aperiam reprehenderit aspernatur dolores.
                        </div>
                        <div className="grid grid-cols-two grid-rows-[40px] gap-[5px] mt-5">
                            <button className="border-none bg-lime-300 text-emerald-900 tracking-[3px] font-[Poppins] font-medium">SEE MORE</button>
                            <button className="bg-transparent text-lime-300 border border-lime-300 tracking-[3px] font-[Poppins] font-medium">SUBSCRIBE</button>
                        </div>
                    </div>
            </div>

            {/* Left Arrow */}
            <div className="hidden group-hover:flex absolute top-[50%] -translate-x-0 translate-y-[-50%] left-0 text-2xl h-[668px] rounded-tl-2xl rounded-bl-2xl p-4 bg-black/20 items-center text-white cursor-pointer" onClick={prevSlide}>
                <BsChevronCompactLeft strokeWidth={1} size={30} />
            </div>
            
            {/* Right Arrow */}
            <div className="hidden group-hover:flex absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 text-2xl h-[668px] rounded-tr-2xl rounded-br-2xl p-4 bg-black/20 items-center text-white cursor-pointer" onClick={nextSlide}>
                <BsChevronCompactRight strokeWidth={1} size={30} />
            </div>

            <div className="absolute flex justify-center w-full bottom-[100px]">
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-2xl cursor-pointer hover:rounded-full hover:bg-black/20 hover:text-gray-200 duration-500">
                        <RxDotFilled />
                    </div>
                ))}
            </div>

        </div>
    )
}
