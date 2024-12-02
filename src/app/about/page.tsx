import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'

const About = () => {
  return (
    <>
    <div>
        <div className={styles.area}>

            <div className='py-10 text-3xl text-white text-center'>About Me</div>

        <ul className={styles.circles}>
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
    
    <div className='flex items-center mt-40 px-10'>
        <div className='flex-1'>
            <Image
            src="/about.jpg" 
            width={500}
            height={500}
            alt="hello"
            />
        </div>
        <div className='flex-1 justify-center'>
            <p className='text-black pl-10'>
                Currently pursuing a path in artificial intelligence, 
                I am a dedicated learner of new technologies with a strong foundation in frontend web development. 
                My expertise lies in WordPress, where I have developed numerous projects that reflect both technical 
                skill and creative problem-solving. In addition to my academic pursuits, I work as a freelancer, 
                consistently expanding my knowledge across emerging technologies to deliver high-quality, 
                customized solutions for clients. My approach combines technical depth with an enthusiasm for continuous
                 improvement, aiming to bridge innovative tech applications with real-world impact.
            </p>
            <button className='px-6 py-3 border-2 mt-4 ml-10 text-black border-orange-600 hover:text-white hover:bg-orange-600 hover:border-b-2 hover:border-orange-600'>Download Resume</button>
        </div>
    </div>
    </>
  )
}

export default About