import React, { useCallback, useState } from "react";
import Card from "./Card.jsx";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonial = (props) => {
    const { reviews } = props;
    const [index, setIndex] = useState(0);

    const handleShift = useCallback((shift) => {
        let newIndex = index + shift;
        if (newIndex < 0) newIndex = reviews.length - 1;
        if (newIndex >= reviews.length) newIndex = 0;
        setIndex(newIndex);
    });

    const surpriseShiftHandler = useCallback(() => {
        const surpriseIndex = Math.floor(Math.random() * reviews.length);
        setIndex(surpriseIndex);
    });

    return (
        <div className="flex flex-col items-center justify-center w-[85vw] md:w-[700px] bg-white hover:shadow-xl rounded-md transition-all duration-700 mt-10 p-10">
            <Card review={reviews[index]} />
            <div className="flex mt-6 gap-3 text-3xl mx-auto font-bold text-violet-400 ">
                <button
                    className="cursor-pointer w-fit hover:text-violet-500 mt-5"
                    onClick={() => handleShift(-1)}
                >
                    <FiChevronLeft />
                </button>
                <button
                    className="cursor-pointer w-fit hover:text-violet-500 mt-5"
                    onClick={() => handleShift(1)}
                >
                    <FiChevronRight />
                </button>
            </div>

            <div className="mt-5">
                <button
                    className="bg-violet-400 text-white font-bold px-10 py-2 rounded-md hover:bg-violet-500 transition-all duration-200 text-lg"
                    onClick={surpriseShiftHandler}
                >
                    Surprise Me
                </button>
            </div>
        </div>
    );
};

export default Testimonial;