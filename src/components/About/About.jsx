import React from 'react'
import bgImg from '../../assets/design-and-development-process.png';
import { useRef } from 'react';
import 'animate.css';

const About = () => {

    const about = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }

    return (

        <div className='animate__fadeInUp'>
            <div>
    
                <div className='flex flex-col'>
    
                    <p className='text-3xl font-semibold text-indigo-600'>✧ ABOUT</p>
    
                    <div className='m-5'>
    
                        <div className='animate__slideInRight'>
                            <div className='flex flex-col'>
                                <p>You already know my name and what I'm passionate about, so I'll tell you about some of the technologies I've been using:</p>
                                <div className='columns-2 mt-4 ml-14'>
                                    <ul>
                                       <span> 
                                        <li><span className='text-indigo-600'>▷</span> JavaScript</li>
                                        <li><span className='text-indigo-600'>▷</span> React.JS</li>
                                        <li><span className='text-indigo-600'>▷</span> Redux</li>
                                        <li><span className='text-indigo-600'>▷</span> Redux-Sagas</li>
                                        <li><span className='text-indigo-600'>▷</span> PostgreSQL</li>
                                        <li><span className='text-indigo-600'>▷</span> Node</li>
                                        <li><span className='text-indigo-600'>▷</span> jQuery</li>
                                        <li><span className='text-indigo-600'>▷</span> Material-UI</li>
                                        </span>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
    
            </div>
        </div>

    )
}

export default About