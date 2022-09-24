import React from 'react'
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from '@heroicons/react/solid'
import bgImg from '../../assets/cyber-bg-1.png';


const Hero = () => {
  return (
    <>
    <div>Hero</div>
    <div className='w-full h-screen bg-zinc-280 flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
          <p className='text-2xl'>Unique Sequencing & Productions</p>
          <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud management</h1>
          <p className='text-2xl'>This is our tech brand.</p>
          <button className='py-3 px-6 sm:w-[60%] my-4'>Get started</button>
        </div>
        <div>
          <img src={bgImg} alt="/"/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero;

/*
  /   = Root directory
  .   = This location
  ..  = Up a directory
  ./  = Current directory
  ../ = Parent of current directory
  ../../ = Two directories backwards

*/