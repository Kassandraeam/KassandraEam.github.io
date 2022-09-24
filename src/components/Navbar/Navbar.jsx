import React, {useState} from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { mail, MailIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)

    const handleEmail = () => {
        window.open('mailto:KassandraEam@gmail.com')
      }
    return (
        <div>
            <div>
            </div>
        <div className="w-screen h-[80px] bg-zinc-200 fixed drop-shadlow-lg">
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <h1 className="text-3xl font-bold mr-4 sm:text-4xl">PORTFOLIO.</h1>
                    <ul className='hidden md:flex'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Experience</li>
                        <li>GitHub</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
                <div className='hidden md:flex pr-4'>
                    {/* <button className='border-none bg-transparent text-black mr-4'>Sign In</button> */}
                    <button className='flex px-8 py-3' onClick={handleEmail}><MailIcon className='h-6 mr-2'/>Say Hello!</button>
                </div>

                <div className='md:hidden' onClick={handleClick}>
                    {!nav ? <MenuIcon className="w-5" /> : <XIcon className='w-5'/>}
                
                </div>
            </div>
            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
                <li className='border-b-2 border-zinc-300 w-full'>Home</li>
                <li className='border-b-2 border-zinc-300 w-full'>About</li>
                <li className='border-b-2 border-zinc-300 w-full'>Experience</li>
                <li className='border-b-2 border-zinc-300 w-full'>GitHub</li>
                <li className='border-b-2 border-zinc-300 w-full'>LinkedIn</li>
                <div className='flex flex-col my-4'>
                    {/* <button className='bg-transparent text-black px-8 py-3 mb-4'>Sign In</button> */}
                    <button className='px-8 py-3' onClick={handleEmail}>Let's Connect!</button>
                </div>
            </ul>
        </div>
        </div>
    )
}

export default Navbar