import React from 'react'
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from '@heroicons/react/solid'
// import bgImg from '../../assets/futuristic-technology.gif';
import bgImg from '../../assets/vr-gaming.gif';
import TypeWriterEffect from 'react-typewriter-effect'


const Hero = () => {

  return (
    <>
    <div>😈</div>
    <div className='w-full h-screen bg-zinc-280 flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
          <p className='text-2xl justify mt-5'>Full Stack Software Engineer</p>
          <div className = 'py-3 text-5xl md:text-7xl font-bold'>
              <TypeWriterEffect
              startDelay={10}
              cursorColor="blue"
              text="Hi, I'm Kas!"
              typeSpeed={100}
              eraseSpeed={100}
              autoStart={true}
              loop = {true}
              />
          </div>
          <p className='text-1xl'>I'm a Full Stack Software Engineer and future Kendama legend based in Minneapolis.</p>
          <p className='text-1xl'>I have a passion for science, tech, diversity and inclusion, and problem solving.</p>
          <button className='py-3 px-6 sm:w-[60%] my-4'>Let's Get Started!</button>
        </div>
        <div className='w-full'>
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