import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export const Header = () => {
    const next = document.getElementById('next')
    let prev = document.getElementById('prev')
    let carousel = document.getElementById('.carousel')
    let listItem = document.getElementById('.carousel .list')
    let thumbnail = document.getElementById('.carousel .thumbnail')

    next.onclick = function() {
        showSlider('next')
    }

    function showSlider(type: any) {
        let itemSlider = document.querySelectorAll('.carousel .list .item')
        let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item')
    }

    return (
        <>
            <header className="w-[1140px] max-w-[80%] m-auto h-[50px] flex items-center relative z-50">
                <nav>
                    <Link href="" className="text-[#eee] mr-10">Home</Link>
                    <Link href="" className="text-[#eee] mr-10">Contacts</Link>
                    <Link href="" className="text-[#eee] mr-10">Info</Link>
                </nav>
            </header>

            {/* Carousel */}
            <div className="w-screen h-screen overflow-hidden -mt-[50px] relative">
                {/* list item */}
                <div className="carousel-list">
                    <div className="item absolute inset-0">
                        <img src="/img1.jpg" className="w-full h-full object-cover" />
                        <div className="content absolute top-[20%] w-[1140px] max-w-[80%] left-[50%] -translate-x-[50%] pr-[30%] box-border text-white shadow-md">
                            <div className="author font-bold tracking-[10px]">LUNDEV</div>
                            <div className="title font-bold text-[5em] leading-[1.3em]">DESIGN SLIDER</div>
                            <div className="topic font-bold text-[5em] leading-[1.3em] text-[#f1683a]">ANIMAL</div>
                            <div className="des">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit facere fuga esse aspernatur labore, recusandae nobis vero mollitia illum eum voluptas voluptate enim reprehenderit et reiciendis debitis quo. Numquam facere harum accusantium, similique odit deleniti vero quo quas aut nesciunt est autem delectus dignissimos error eum aperiam reprehenderit aspernatur dolores.
                            </div>
                            <div className="buttons grid grid-cols-two grid-rows-[40px] gap-[5px] mt-5">
                                <button className="border-none bg-white text-black tracking-[3px] font-[Poppins] font-medium">SEE MORE</button>
                                <button className="bg-transparent text-white border border-white tracking-[3px] font-[Poppins] font-medium">SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                    <div className="item absolute inset-0 ">
                        <img src="/img2.jpg" className="w-full h-full object-cover" />
                        <div className="content absolute top-[20%] w-[1140px] max-w-[80%] left-[50%] -translate-x-[50%] pr-[30%] box-border text-white shadow-md">
                            <div className="author font-bold tracking-[10px]">LUNDEV</div>
                            <div className="title font-bold text-[5em] leading-[1.3em]">DESIGN SLIDER</div>
                            <div className="topic font-bold text-[5em] leading-[1.3em] text-[#f1683a]">ANIMAL</div>
                            <div className="des">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit facere fuga esse aspernatur labore, recusandae nobis vero mollitia illum eum voluptas voluptate enim reprehenderit et reiciendis debitis quo. Numquam facere harum accusantium, similique odit deleniti vero quo quas aut nesciunt est autem delectus dignissimos error eum aperiam reprehenderit aspernatur dolores.
                            </div>
                            <div className="buttons grid grid-cols-two grid-rows-[40px] gap-[5px] mt-5">
                                <button className="border-none bg-white text-black tracking-[3px] font-[Poppins] font-medium">SEE MORE</button>
                                <button className="bg-transparent text-white border border-white tracking-[3px] font-[Poppins] font-medium">SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                    <div className="item absolute inset-0 ">
                        <img src="/img3.jpg" className="w-full h-full object-cover" />
                        <div className="content absolute top-[20%] w-[1140px] max-w-[80%] left-[50%] -translate-x-[50%] pr-[30%] box-border text-white shadow-md">
                            <div className="author font-bold tracking-[10px]">LUNDEV</div>
                            <div className="title font-bold text-[5em] leading-[1.3em]">DESIGN SLIDER</div>
                            <div className="topic font-bold text-[5em] leading-[1.3em] text-[#f1683a]">ANIMAL</div>
                            <div className="des">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit facere fuga esse aspernatur labore, recusandae nobis vero mollitia illum eum voluptas voluptate enim reprehenderit et reiciendis debitis quo. Numquam facere harum accusantium, similique odit deleniti vero quo quas aut nesciunt est autem delectus dignissimos error eum aperiam reprehenderit aspernatur dolores.
                            </div>
                            <div className="buttons grid grid-cols-two grid-rows-[40px] gap-[5px] mt-5">
                                <button className="border-none bg-white text-black tracking-[3px] font-[Poppins] font-medium">SEE MORE</button>
                                <button className="bg-transparent text-white border border-white tracking-[3px] font-[Poppins] font-medium">SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                    <div className="item absolute inset-0 ">
                        <img src="/img4.jpg" className="w-full h-full object-cover" />
                        <div className="content absolute top-[20%] w-[1140px] max-w-[80%] left-[50%] -translate-x-[50%] pr-[30%] box-border text-white shadow-md">
                            <div className="author font-bold tracking-[10px]">LUNDEV</div>
                            <div className="title font-bold text-[5em] leading-[1.3em]">DESIGN SLIDER</div>
                            <div className="topic font-bold text-[5em] leading-[1.3em] text-[#f1683a]">ANIMAL</div>
                            <div className="des">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit facere fuga esse aspernatur labore, recusandae nobis vero mollitia illum eum voluptas voluptate enim reprehenderit et reiciendis debitis quo. Numquam facere harum accusantium, similique odit deleniti vero quo quas aut nesciunt est autem delectus dignissimos error eum aperiam reprehenderit aspernatur dolores.
                            </div>
                            <div className="buttons grid grid-cols-two grid-rows-[40px] gap-[5px] mt-5">
                                <button className="border-none bg-white text-black tracking-[3px] font-[Poppins] font-medium">SEE MORE</button>
                                <button className="bg-transparent text-white border border-white tracking-[3px] font-[Poppins] font-medium">SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* thumbnail */}
                <div className="thumbnail absolute bottom-[50px] left-[50%] w-max z-50 flex gap-5">
                    <div className="item w-[150px] h-[220px] shrink-0 relative">
                        <img src="/img2.jpg" className="w-full h-full object-cover rounded-[20px]" />
                        <div className="absolute bottom-[10px] left-[10px] right-[10px]">
                            <div className="font-bold">
                                Name Slider
                            </div>
                            <div className="des">
                                Description
                            </div>
                        </div>
                    </div>
                    <div className="item w-[150px] h-[220px] shrink-0 relative">
                        <img src="/img3.jpg" className="w-full h-full object-cover rounded-[20px]" />
                        <div className="absolute bottom-[10px] left-[10px] right-[10px]">
                            <div className="font-bold">
                                Name Slider
                            </div>
                            <div className="des">
                                Description
                            </div>
                        </div>
                    </div>
                    <div className="item w-[150px] h-[220px] shrink-0 relative">
                        <img src="/img4.jpg" className="w-full h-full object-cover rounded-[20px]" />
                        <div className="absolute bottom-[10px] left-[10px] right-[10px]">
                            <div className="font-bold">
                                Name Slider
                            </div>
                            <div className="des">
                                Description
                            </div>
                        </div>
                    </div>
                    <div className="item w-[150px] h-[220px] shrink-0 relative">
                        <img src="/img1.jpg" className="w-full h-full object-cover rounded-[20px]"/>
                        <div className="absolute bottom-[10px] left-[10px] right-[10px]">
                            <div className="font-bold">
                                Name Slider
                            </div>
                            <div className="des">
                                Description
                            </div>
                        </div>
                    </div>
                </div>
                {/* arrows */}
                <div className="arrows absolute top-[80%] right-[52%] w-[300px] max-w-[30%] flex gap-[10px] items-center z-50">
                    <button id="prev" className="w-10 h-10 rounded-[50%] bg-[#eee4] border-none font-mono font-bold text-lg duration-500 text-white hover:bg-[#eee] hover:text-[#555] flex justify-center items-center">
                    <ChevronLeft size={30} strokeWidth={3} />
                    </button>
                    <button id="next" className="w-10 h-10 rounded-[50%] bg-[#eee4] border-none font-mono font-bold text-lg duration-500 text-white hover:bg-[#eee] hover:text-[#555] flex justify-center items-center">
                        <ChevronRight size={30} strokeWidth={3} />
                    </button>
                </div>
                <div className="time"></div>
            </div>
        </>
    )
}