import React from 'react'
import bgImg from '../../assets/vr-gaming.gif';
import TypeWriterEffect from 'react-typewriter-effect'
import { useState } from 'react'
import { MailIcon } from '@heroicons/react/solid'
import DownloadIcon from '@mui/icons-material/Download';
import { saveAs } from "file-saver";

const Hero = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav)

  /* -------------------------------- FUNCTIONS ------------------------------- */

  const handleEmail = () => {
    window.open('mailto:KassandraEam@gmail.com')
  };

  const saveFile = () => {
    saveAs(
      "https://drive.google.com/file/d/1FjhTDiy7NL3ZvroLLppqtvgmykRGkqXK/view?usp=sharing"
    );
  };

  return (
    <>
      <div className='w-full h-screen bg-zinc-280 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
          <div className='flex flex-col justify-center md:items-start w-full px-2 py-8 mb-20'>
            <p className='text-3xl justify mt-5'>Full Stack Software Engineer</p>
            <div className='py-3 text-5xl md:text-7xl font-bold'>
              <TypeWriterEffect
                startDelay={10}
                cursorColor="blue"
                text="Hi, I'm Kas!"
                typeSpeed={100}
                eraseSpeed={100}
                autoStart={true}
                loop={true}
              />
            </div>
            <p className='text-1xl'>I'm a <span className='text-indigo-600'>Full Stack Software Engineer</span> and future Kendama legend based in <span className='text-indigo-600'>Minneapolis</span>.</p>
            <p className='text-1xl'>I have a passion for science, tech, diversity and inclusion, and problem solving.</p>
            {/* <button className='py-3 px-6 sm:w-[60%] my-4'>Let's Get Started!</button> */}

            <div className='flex flex-row space-x-4 mt-4'>
              {/* <button className='flex px-8 py-3 mr-4' onClick={handleEmail}><MailIcon className='h-6 mr-2' />Say Hello!</button> */}
            {/* <button className='flex px-8 py-3' onClick={saveFile}><DownloadIcon className='h-6 mr-2' />Resume!</button> */}
            </div>

          </div>
          <div className='w-full mb-20'>
            <img src={bgImg} alt="/" />
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

