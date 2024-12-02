"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Header = () => {
    const router = useRouter()
    const redirectTo = () => {
        router.push("/")
    }
  return (
    <div className='flex justify-between items-center py-5 px-10'> 
        <div onClick={redirectTo} className='text-2xl font-bold'>Zuhaib Ahmed</div>
        <div className='flex gap-5 items-center text-1xl'>
            <Link className='hover:text-orange-600 delay-450'  href="/home">Home</Link>
            <Link className='hover:text-orange-600 delay-450'  href="/about">About Me</Link>
            <Link className='hover:text-orange-600 delay-450'  href="/services">Services</Link>
            <Link className='hover:text-orange-600 delay-450'  href="/projects">Projects</Link>
            <Link className='hover:text-orange-600 delay-450'  href="/testimonials">Testimonials</Link>
            <Link className='hover:text-orange-600 delay-450'  href="/contact">Contact</Link>
            {/* <button className='bg-orange-600 text-white px-4 border-2 border-x-orange-600 delay-350 hover:border-y-orange-600 py-2' onClick={redirectTo}>Download CV</button> */}
            <Link href="/profile.pdf" legacyBehavior>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-600 text-white px-4 border-2 border-x-orange-600 delay-350 hover:border-y-orange-600 py-2"
        >
          Download CV
        </a>
      </Link>
        </div>
    </div>
  )
}

export default Header