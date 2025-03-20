
import Image from "next/image";
import Nivakaran from '../images/nivakaranText.png'
const ScrollReveal = typeof window !== 'undefined' ? require('scrollreveal') : null;

import React, {useEffect} from "react";


const Hero = () => {

    useEffect(() => {
        if(typeof window !== 'undefined'){
            ScrollReveal().reveal('.hero1', {
                origin: 'bottom',
                distance: '20px',
                duration: 800,
                delay: 200,
                easing: 'ease-in-out',
                reset: false
            })
        }
    }, [])

    useEffect(() => {
        if(typeof window !== 'undefined'){
            ScrollReveal().reveal('.hero2', {
                origin: 'bottom',
                distance: '20px',
                duration: 800,
                delay: 500,
                easing: 'ease-in-out',
                reset: false
            })
        }
    }, [])

    useEffect(() => {
        if(typeof window !== 'undefined'){
            ScrollReveal().reveal('.hero3', {
                origin: 'bottom',
                distance: '50px',
                duration: 800,
                delay: 800,
                easing: 'ease-in-out',
                reset: false
            })
        }
    }, [])
    
    return(
        <div className="bg-[url('./images/heroBackground3.png')] bg-[#000] w-[100vw] bg-contain bg-no-repeat bg-center h-[100vh] flex items-center justify-center">
            <div className="flex flex-col text-center">
                <p className="hero1">Hello there!</p>
                <p className=" hero2  text-[30px]">This is</p>
                <Image className="hero3" alt="Nivakaran" height={80} src={Nivakaran} />
                <p className="text-[35px]">Full Stack Developer</p>
            </div>
        </div>
    )
}

export default Hero;