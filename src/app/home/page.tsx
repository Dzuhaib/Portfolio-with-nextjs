import React from 'react'
import Image from 'next/image'
import { SocialIcon } from 'next-social-icons/SocialIcon'

const Hero = () => {
  return (
    <>
		<div className="area">
			
		
    <div className='flex py-0 justify-between items-center align-middle px-10 bg-black h-[100vh]'>
        <div className='text-white gap-3 flex flex-col'>
            <h3 className='text-2xl'>Hi I'm</h3>
            <h1 className='text-4xl'>Zuhaib Ahmed</h1>
            <h2 className='text-5xl font-bold'>Front-end Developer <br/> and WordPress specialist</h2>
            <p>I'm a front-end developer with a passion for creating beautiful and functional websites.</p>
            <div className='flex gap-2'>
                <SocialIcon size={64} platform="twitter"/>
                <SocialIcon size={64} platform="github"/>
                <SocialIcon size={64} platform="discord"/>
            </div>
        </div>

        <div className='flex items-center'>
            <div className='bg-orange-600 h-[48vh] w-[48vh] rounded-full'></div>
            <Image className='mb-[140px] ml-2 absolute rounded-full' src="/zuhaib1.png" height={300} width={300} alt="Zuhaib" />
             
        </div>

        <ul className="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>

    </div>
   
    </div>
    </>
  )
}

export default Hero