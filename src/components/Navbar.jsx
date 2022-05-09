import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import {FaBars, FaTimes} from 'react-icons/fa' 



function Navbar() {

  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div className='fixed items-center flex justify-between w-full h-[80px] bg-[#0a192f] px-4 text-gray-300'>
        <div>
            <img src={Logo} alt="logo" style={{width:'70px'}} />            
        </div>
        {/* menus */}
          <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        {/* hamburger */}
        
        <div className='md:hidden z-10' onClick={handleNav}>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* mobile menus */}
        <ul className={!nav? 'hidden':'bg-[#0a192f] w-full h-screen top-0 absolute left-0 flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Work</li>
            <li className='py-6 text-4xl'>Contact</li>
          </ul>
        {/* social icons */}
        <div className='hidden'>

        </div>
    </div>
    
  )
}

export default Navbar