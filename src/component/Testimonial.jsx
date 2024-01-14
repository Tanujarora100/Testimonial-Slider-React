import React, { useState, useEffect, useCallback } from 'react';
import { reviews } from '../utils/data';
import Card from './Card';
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";
const Testimonial = () => {
    const [index, setIndex] = useState(0);

    const handleSurpriseMe = useCallback(() => {
        const randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }, [reviews]);

    useEffect(() => {
        console.log("Testimonial Re-rendered");
    }, [index]);

    const shiftHandler = useCallback(
        (shift) => {
            setIndex((prevIndex) =>
                (prevIndex + shift + reviews.length) % reviews.length
            );
        },
        [reviews]
    );

    return (
        <div className="flex flex-col items-center justify-center w-[85vw] md:w-[700px] bg-white hover:shadow-xl rounded-md transition-all duration-700 mt-10 p-10">
            <Card review={reviews[index]} />
            <div className="flex mt-6 gap-3 text-3xl mx-auto font-bold text-violet-400 ">
                <button
                    className="cursor-pointer w-fit hover:text-violet-500 mt-5"
                    onClick={() => shiftHandler(-1)}
                >
                    <FaChevronLeft />
                </button>
                <button
                    className="cursor-pointer w-fit hover:text-violet-500 mt-5"
                    onClick={() => shiftHandler(1)}
                >
                    <FaChevronRight />
                </button>
            </div>

            <div className="mt-5">
                <button
                    className="bg-violet-400 text-white font-bold px-10 py-2 rounded-md hover:bg-violet-500 transition-all duration-200 text-lg"
                    onClick={handleSurpriseMe}
                >
                    Surprise Me
                </button>
            </div>
        </div>
    );
};


export default Testimonial;
