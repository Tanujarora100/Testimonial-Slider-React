import React from 'react'
import { FaQuoteLeft, FaQuoteRight, FaAngleLeft, FaAngleRight } from "react-icons/fa";
const Card = ({ name, job, image, text }) => {
    return (
        <div className='flex flex-col md:relative'>

            <div className="absolute -top-[7rem] z-10">
                <img src={image} alt="image" className='w-[140px] h-[140px] rounded-full aspect-ratio z-25' />
                <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>
            </div>

            <div>
                {name}
                {job}
            </div>

            <div>
                <FaQuoteLeft />
            </div>
            <div>
                <p>{text}</p>
            </div>
            <div>
                <FaQuoteRight />
            </div>
            <div>
                <button>
                    <FaAngleLeft />

                </button>
                <button>
                    <FaAngleRight />
                </button>
            </div>

        </div>
    )
}

export default Card
