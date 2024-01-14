import React, { useState } from 'react';
import { reviews } from '../utils/data';
import Card from './Card';

const Testimonial = () => {
    const [randomReview, setRandomReview] = useState('');

    const handleSurpriseMe = () => {
        const randomIndex = Math.floor(Math.random() * reviews.length);
        const randomReview = reviews[randomIndex];
        setRandomReview(randomReview);
    };

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='testimonial-container'>
                {randomReview ? (
                    <Card
                        key={randomReview.id}
                        name={randomReview.name}
                        job={randomReview.job}
                        image={randomReview.image}
                        text={randomReview.text}
                    />
                ) : (
                    reviews.map((element) => (
                        <Card
                            key={element.id}
                            name={element.name}
                            job={element.job}
                            image={element.image}
                            text={element.text}
                        />
                    ))
                )}
            </div>
            <div className='button-container'>
                <button onClick={handleSurpriseMe} className='bg-blue-500 text-white py-2 px-4 rounded-md'>
                    Surprise Me
                </button>
            </div>
        </div>
    );
};

export default Testimonial;
