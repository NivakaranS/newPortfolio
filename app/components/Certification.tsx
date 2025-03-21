
import React, { useEffect } from 'react';

import Image from 'next/image';
import Certificate1 from '../certificates/UC-0aeb6d1d-dc7b-4ba6-aecf-2cc774b2c29c.jpg';
import Certificate2 from '../certificates/UC-108298ba-2018-4131-b86b-70e6279377e9.jpg';
import Certificate3 from '../certificates/UC-5b27ff0d-fe45-46a9-942c-485d0a13118b.jpg';
import Certificate4 from '../certificates/UC-60242198-5929-47a6-a6c5-718a6e7b121c.jpg';
import Certificate5 from '../certificates/UC-8ba28f0a-d7e2-48dd-882e-87b73fa64021.jpg';
import Certificate6 from '../certificates/UC-da378ead-b16d-407d-b199-9f50a88d90e1.jpg';
import Certificate7 from '../certificates/UC-deb577d6-b72a-4ca6-86fc-b901dd127754.jpg';
import Certificate8 from '../certificates/UC-f40d10df-c93e-4d1e-af98-b8802f58431d.jpg'

const Certification = () => {
    useEffect(() => {
        if(typeof window !== 'undefined'){
            import('scrollreveal').then((ScrollReveal) => { 
                ScrollReveal.default().reveal('.certification1', {
                origin: 'bottom',
                distance: '20px',
                duration: 800,
                delay: 200,
                easing: 'ease-in-out',
                reset: false
            })
        })
        }
    }, [])

    useEffect(() => {
        if(typeof window !== 'undefined'){
            import('scrollreveal').then((ScrollReveal) => { 
                ScrollReveal.default().reveal('.certification2', {
                origin: 'right',
                distance: '50px',
                duration: 800,
                delay: 400,
                easing: 'ease-in-out',
                reset: false
            })
        })
        }
    }, [])

    useEffect(() => {
        if(typeof window !== 'undefined'){
            import('scrollreveal').then((ScrollReveal) => { 
                ScrollReveal.default().reveal('.certification3', {
                origin: 'left',
                distance: '50px',
                duration: 800,
                delay: 600,
                easing: 'ease-in-out',
                reset: false
            })
        })
        }
    }, [])

    return(
        <div className="bg-[#101010] min-h-[100vh] py-[80px] w-screen flex items-center justify-center">
            <div className="w-[80%]  flex flex-col ">
                <div className="leading-[64px] text-center">
                    <p className="text-[55px] certification1 bg-gradient-to-t from-[#433D3A] via-[#C6C4C3] font-bold to-[#CAC8C6] bg-clip-text text-transparent">My Certifications</p>
                    
                </div>

                <div className=" mt-[30px]">
                    <div className=" grid grid-cols-1 md:grid-cols-4 gap-[15px] items-center justify-center">
                        <div className="cursor-pointer certification2 relative group bg-[#000] overflow-hidden w-[100%] ring-[0.5px] ring-[#4d4d4d] h-[195px] rounded-[10px] flex items-center justify-center">
                            <div className='hidden group-hover:flex flex-col items-center justify-center'>
                                <Image alt="" src={Certificate1} className='h-[100%] w-[100%]'  />
                            </div>
                            <div className=' group-hover:hidden flex flex-col px-[20px]'>
                                <p>Complete Web Developer in 2023</p>
                            </div>
                        </div>

                        <div className="cursor-pointer certification2 relative group bg-[#000] overflow-hidden w-[100%] ring-[0.5px] ring-[#4d4d4d] h-[195px] rounded-[10px] flex items-center justify-center">
                            <div className='hidden group-hover:flex flex-col items-center justify-center'>
                                <Image alt="" src={Certificate2} className='h-[100%] w-[100%]'  />
                            </div>
                            <div className=' group-hover:hidden flex flex-col px-[20px]'>
                                <p>The Complete Data Structures and Algorithms in Python</p>
                            </div>
                        </div>

                        <div className="cursor-pointer certification3 relative group bg-[#000] overflow-hidden w-[100%] ring-[0.5px] ring-[#4d4d4d] h-[195px] rounded-[10px] flex items-center justify-center">
                            <div className='hidden group-hover:flex flex-col items-center justify-center'>
                                <Image alt="" src={Certificate3} className='h-[100%] w-[100%]'  />
                            </div>
                            <div className=' group-hover:hidden flex flex-col px-[20px]'>
                                <p>Learn Python & Ethial Hacking from Scratch</p>
                            </div>
                        </div>

                        <div className="cursor-pointer certification3 relative group bg-[#000] overflow-hidden w-[100%] ring-[0.5px] ring-[#4d4d4d] h-[195px] rounded-[10px] flex items-center justify-center">
                            <div className='hidden group-hover:flex flex-col items-center justify-center'>
                                <Image alt="" src={Certificate4} className='h-[100%] w-[100%]'  />
                            </div>
                            <div className=' group-hover:hidden flex flex-col px-[20px]'>
                                <p>TensorFlow for Deep Learning Bootcamp</p>
                            </div>
                        </div>

                        <div className="cursor-pointer certification2 relative group bg-[#000] overflow-hidden w-[100%] ring-[0.5px] ring-[#4d4d4d] h-[195px] rounded-[10px] flex items-center justify-center">
                            <div className='hidden group-hover:flex flex-col items-center justify-center'>
                                <Image alt="" src={Certificate5} className='h-[100%] w-[100%]'  />
                            </div>
                            <div className='group-hover:hidden flex flex-col px-[20px]'>
                                <p>Complete NodeJS Developer (GraphQL, MongoDB & more)</p>
                            </div>
                        </div>

                        <div className="cursor-pointer certification2 relative group bg-[#000] overflow-hidden w-[100%] ring-[0.5px] ring-[#4d4d4d] h-[195px] rounded-[10px] flex items-center justify-center">
                            <div className='hidden group-hover:flex flex-col items-center justify-center'>
                                <Image alt="" src={Certificate6} className='h-[100%] w-[100%]'  />
                            </div>
                            <div className='group-hover:hidden flex flex-col px-[20px]'>
                                <p>Complete Generative AI Course With Langchain and Huggingface</p>
                            </div>
                        </div>

                        <div className="cursor-pointer certification3 relative group bg-[#000] overflow-hidden w-[100%] ring-[0.5px] ring-[#4d4d4d] h-[195px] rounded-[10px] flex items-center justify-center">
                            <div className='hidden group-hover:flex flex-col items-center justify-center'>
                                <Image alt="" src={Certificate7} className='h-[100%] w-[100%]'  />
                            </div>
                            <div className=' group-hover:hidden flex flex-col px-[20px]'>
                                <p>React Native - The Practical Guide [2024]</p>
                            </div>
                        </div>

                        <div className="cursor-pointer certification3 relative group bg-[#000] overflow-hidden w-[100%] ring-[0.5px] ring-[#4d4d4d] h-[195px] rounded-[10px] flex items-center justify-center">
                            <div className='hidden group-hover:flex flex-col items-center justify-center'>
                                <Image alt="" src={Certificate8} className='h-[100%] w-[100%]'  />
                            </div>
                            <div className=' group-hover:hidden flex flex-col px-[20px]'>
                                <p>Complete AI & Machine Learning, Data Science Bootcamp</p>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certification;