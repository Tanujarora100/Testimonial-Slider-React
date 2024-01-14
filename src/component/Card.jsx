import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
const Card = ({ name, job, image, text }) => {
    return (
        <div className='flex flex-col md:relative'>

            <div className="absolute -top-[7rem] z-10">
                <img src={image} alt="image" className='w-[140px] h-[140px] rounded-full aspect-ratio z-25' />
                <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>
            </div>

            <div className=' align-center'>
                <div className='text-2xl font-bold mt-7'>
                    <p className="font-bold text-2xl tracking-wider capitalize">{name}</p>
                </div>
                <div>
                    <p className="uppercase text-sm text-violet-400">{job}</p>
                </div>
            </div>

            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteLeft />
            </div>
            <div className="text-center mt-4 text-slate-500">
                <p>{text}</p>
            </div>
            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteRight />
            </div>
            

        </div>
    )
}

export default Card
