import React, { useState, useEffect } from 'react';
import useReadingProgress from "../TestComponent/useReadingProgress"
import '../TestComponent/TestComponent.css'

const TestComponent = () => {

    const completion = useReadingProgress();

    return (
        <nav className="py-6 sticky top-0 z-10">
            <div className="flex items-center justify-between container mx-auto text-xl">
                <a href="/" className='text-white'>Kas Eam</a>
                <div className="flex gap-8">
                </div>
            </div>
            <span
                style={{ transform: `translateX(${completion - 100}%)` }}
                className="absolute h-full w-full bottom-0"
                id='bar'
            />
        </nav>
    )
}

export default TestComponent