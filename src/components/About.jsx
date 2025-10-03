import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';

import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const About = () => {

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true
            }
        })

        clipAnimation.to('.mask-clip-path2', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0,
        })

    })


    return (

        <div id='about' className='min-h-screen w-screen'>
            <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
                <h2 className='font-general text-sm uppercase md:text-[10px]'>Welcome to Entry</h2>
                <div className='mt-5 text-center uppercase text-4xl  leading-[0.8] md:text-[4rem]'>Hum<b>a</b>n life powers AI <br />
                    and ai expands human potential.</div>
            </div>
            <div className='absolute bottom-[-80dvh] left-1/2 w-full max-w-96 text-center -translate-x-1/2 font-robert-regular text-lg md:max-w-[34rem]'>
                <p className='text-xl text-black font-semibold'>A programmable relaity for Human Ai co-evolution</p>
                <p className='text-gray-700'>Your journey fuels richer data, smarter agents and scalable intelligence all while rewarding you</p>
            </div>

            <div className='h-dvh w-screen ' id='clip'>
                <div className='mask-clip-path2 about-image'>
                    <img src="img/about.webp" alt="bg"
                        className='absolute left-0 top-0 size-full object-cover'
                    />
                </div>
            </div>
        </div>

    )
}

export default About