import Image from 'next/image'
import Harny from '../assets/H.png'
import Link from "next/link"

import { FaLinkedinIn, FaGithub, FaYoutubeSquare } from 'react-icons/fa'


export default function Navbar () {
  return (
    <div className='navbar'>
      <div className='navbar__container'>
        <div className='navbar__logo'>
          <div className='navbar__logo__img'>
            <Image
              width={70}
            src={Harny} 
            alt="logo" />
          </div>
          <h2>Harny</h2>
          <p>Web Developer</p>
        </div>
        <div className='navbar__content'>
          <Link href='/about'> About </Link>
          <Link href='/skills'> My Skills </Link>
          <Link href='/work'> Work </Link>
          <Link href='/contact'>Contact </Link>
          <Link href='/blog' id='blog'>  Blog </Link>
          <div className='icon'>
            <a href='https://linkedin.com/in/harnylawrence'><FaLinkedinIn /></a>
            <a href='https://github.com/Nogist'><FaGithub id='icon' /></a>
            <a><FaYoutubeSquare id='icon' /></a>
          </div>
        </div>
      </div>
    </div>
  )
}