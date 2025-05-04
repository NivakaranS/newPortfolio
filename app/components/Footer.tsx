

import Image from "next/image";
import Github from '../images/github.png';
import LinkedIn from '../images/linkedin.png';
import Instagram from '../images/instagram.png';
import Mail from '../images/mail.png';
import Phone from '../images/phone.png';
import axios from "axios";
import { useState } from "react";


const Footer = () => {
    const [email, setEmail] = useState('')

    const subcribeNewsLetter = async () => {
        try {
            console.log('Email to subscribe:', email)
            const response = await axios.post('https://new-portfolio-backend-roan.vercel.app/newsletter', {
                email: email
            })
            console.log('Response from backend', response.data)
        } catch (error) {
            console.error("Error subscribing to newsletter:", error)
        }
    }

    return(
        <div className="overflow-x-hidden bg-[#101010]  w-screen">
            <div className="relative flex justify-center py-[10px] overflow-hidden">
                <p className="text-[100px] font-bold text-transparent bg-clip-text relative z-10 spotlight-text">
                    Nivakaran
                </p>
            </div>


        
            <div className="flex flex-row pb-[40px] mb-[20px] justify-center mx-[7%] ">
                <div className="w-[30%] ">
                    
                    <p className="text-[13px] leading-[20px]">I'm currently pursuing a B.Sc in Information Technology, specializing in
                        Data Science at Sri Lanka Institute of Information Technology (SLIIT). 
                        I am passionate about data science, software engineering, and AI, 
                        constantly exploring innovative solutions and building impactful projects.
                    </p>
                    <div className="text-[15.27px] ml-[20px] leading-[21px] flex flex-row space-x-[8px] items-center  mt-[20px]">
                        <Image alt="" src={Phone} height={19}/>
                        <p>+94 76 0015 755</p>
                    </div>
                    <div className="text-[15.27px] ml-[20px] leading-[21px] space-x-[8px] flex flex-row items-center  mt-[4px]">
                        <Image alt="" src={Mail} height={14}/>
                        <p>nivakaran@hotmail.com</p>
                    </div>
                </div>
                <div className="w-[20%] flex flex-col items-center  ">
                    <p className="text-[24.72px] text-[#96989A]">Quick Links</p>
                    <div className="flex flex-col space-y-[10px] mt-[10px]">
                        <p>Home</p>
                        <p>About</p>
                        <p>Portfolio</p>
                        <p>Services</p>
                        <p>Contact</p>
                    </div>
                </div>
                <div className="w-[25%] ">
                    <p className="text-[24.72px] text-[#96989A]">Services</p>
                    <div className="flex flex-col text-[15px] space-y-[10px] mt-[10px]">
                        <p>UI/UX Designing</p>
                        <p>Web App Development</p>
                        <p>Custom Software Development</p>
                        <p>Mobile App Development</p>
                        <p>Data analysis & Visualization</p>
                        <p>Machine Learning </p>
                    </div>

                </div>
                <div className="w-[30%] ">
                    <div className="bg-[#101010] mb-[20px] rounded-[15px] py-[20px] px-[20px] ring-[0.5px] ring-[#4d4d4d]">
                        <p>Subscribe to our newsletter</p>
                        <div className="flex flex-row items-center  justify-center">
                            <div className="relative mt-[20px] bg-[#727376] rounded-[5px]  w-[100%] h-[35px] flex items-center justify-center">
                                <input onChange={(e)=>setEmail(e.currentTarget.value)} className="w-[100%] text-black focus:outline-none px-[10px] placeholder-black " placeholder="Enter email "/>
                                 
                                <div onClick={subcribeNewsLetter} className="absolute cursor-pointer  right-[5px] bg-[#373435] text-[15px]  px-[10px] py-[3px] rounded ">
                                    <p>Subscribe</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="text-[18px]">Let's Connect</p>
                        <div className="flex flex-row space-x-[10px] mt-[6px] ">
                            <Image className="cursor-pointer" src={LinkedIn} alt="" height={38}/>
                            <div className="h-[38px] cursor-pointer w-[38px] overflow-hidden rounded-[5px]  ">
                                <Image src={Github} alt="" height={38}/>
                            </div>
                            <Image className="cursor-pointer" src={Instagram} alt="" height={38}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col space-y-[7px]  text-[13px] mb-[5px] items-center justify-center">
                
                <p>Nivakaran &copy; 2025 Copyright. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer;