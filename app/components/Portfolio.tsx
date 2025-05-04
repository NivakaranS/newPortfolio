'use client'
import PortfolioCard from "./PortfolioCard";
import PrimaryBtn from "./PrimaryBtn";
import React, {useEffect} from "react";
import { useRouter } from "next/navigation";

const Portfolio = () => {

    useEffect(() => {
        if(typeof window !== 'undefined'){
            import('scrollreveal').then((ScrollReveal) => { 
                ScrollReveal.default().reveal('.portfolio1', {
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
                ScrollReveal.default().reveal('.portfolio2', {
                origin: 'bottom',
                distance: '20px',
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
                ScrollReveal.default().reveal('.portfolio3', {
                origin: 'bottom',
                distance: '20px',
                duration: 800,
                delay: 600,
                easing: 'ease-in-out',
                reset: false
            })
        })
        }
    }, [])

    useEffect(() => {
        if(typeof window !== 'undefined'){
            import('scrollreveal').then((ScrollReveal) => { 
                ScrollReveal.default().reveal('.portfolio4', {
                origin: 'bottom',
                distance: '20px',
                duration: 800,
                delay: 800,
                easing: 'ease-in-out',
                reset: false
            })
        })
        }
    }, [])

    useEffect(() => {
        if(typeof window !== 'undefined'){
            import('scrollreveal').then((ScrollReveal) => { 
                ScrollReveal.default().reveal('.portfolio5', {
                origin: 'bottom',
                distance: '20px',
                duration: 800,
                delay: 1000,
                easing: 'ease-in-out',
                reset: false
            })
        })
        }
    }, [])

    useEffect(() => {
        if(typeof window !== 'undefined'){
            import('scrollreveal').then((ScrollReveal) => { 
                ScrollReveal.default().reveal('.portfolio6', {
                origin: 'bottom',
                distance: '20px',
                duration: 800,
                delay: 1200,
                easing: 'ease-in-out',
                reset: false
            })
        })
        }
    }, [])


    const Router = useRouter()

    const onPortfolioCard1Click = () => {
        console.log("Clicked")
    }

    const onMoreProjectsClick = () => {

        Router.push('/portfolio')
    }
    

    return(
        <div className="bg-[#000] py-[10vh] min-h-[200vh] flex items-center justify-center w-screen ">

            <div className=" w-[80%] ">
                <div className=" portfolio1 leading-[60px] text-center">
                    <p className="text-[60px] bg-gradient-to-t from-[#433D3A] via-[#C6C4C3] font-bold to-[#CAC8C6] bg-clip-text text-transparent">Explore the</p>
                    <p className="text-[60px] bg-gradient-to-t from-[#433D3A] via-[#C6C4C3] font-bold to-[#CAC8C6] bg-clip-text text-transparent">Development Journey</p>
                </div>
                <p className=" portfolio2 text-[40px] mt-[40px]">Software Engineering</p>
                <div className=" portfolio3 mt-[30px] flex flex-row space-x-[20px] items-center justify-center">
                    <PortfolioCard lang1="Python" lang2="Next.js" lang3="Node.js" lang4="MongoDB" lang5="Express.js" lang6="Docker" text2="This project is a full-stack news web application built using the MENN (MongoDB, Express.js, Next.js, Node.js) stack. It features a dual-interface system, where regular users can browse, search, and bookmark news, while admins have a dedicated panel to manage news articles, categories, and user permissions. The integrated LLM chatbot provides real-time news summeries, making articles easier to digest and enhance user experience." text="News Web App" onClick={onPortfolioCard1Click}/>
                    <PortfolioCard lang1="Python" lang2="MongoDB" lang3="Next.js" lang4="Node.js" lang5="Express.js" lang6="Docker" text2="This project is a full-stack logistics management web app (MENN: MongoDB, Express.js, Next.js, Node.js) streamlines shipment tracking, fleet, and warehouse management. It includes an admin panel for managing deliveries, drivers, and warehouses, while users track shipments in real-time. An LLM-powered chatbot enhances support with shipment updates, logistics queries, and warehouse inventory assistance, improving efficiency and automation." text="Logistics Web App" onClick={onPortfolioCard1Click}/>
                   
                </div>
                <p className=" portfolio3 text-[40px] mt-[40px]">Data Science</p>
                <div className=" portfolio4 mt-[20px] flex flex-row space-x-[20px] items-center justify-center">
                    <PortfolioCard lang1="Django" lang2="Matplotlib" lang3="Tensorflow" lang4="Pandas" lang5="" lang6="" text2="This project aims to build a Machine Learning model that predicts house prices based on various features such as location, number of bedrooms, square footage, and amenities. By analyzing historical real estate data, the model provides accurate prices estimates, helping buyers, sellers, real estate agents make data-driven solutions." text="House Price Prediction" onClick={onPortfolioCard1Click}/>
                    <PortfolioCard lang1="FastApi" lang2="Matplotlib" lang3="Tensorflow" lang4="Pandas" lang5="" lang6="" text2="This project focuses on predicting stock prices using Machine Learning & Deep Learning models. The goal is to analyze historical stock market data, identify trends, and forecast future stock prices with high accuracy. The model can be used by traders and investors to make data-driven investment decisions." text="Stock Market Prediction" onClick={onPortfolioCard1Click}/>
                    
                </div>

                <p className=" portfolio3 text-[40px] mt-[40px]">Computer Vision</p>
                <div className=" portfolio4 mt-[20px] flex flex-row space-x-[20px] items-center justify-center">
                    <PortfolioCard lang1="Django" lang2="Matplotlib" lang3="Tensorflow" lang4="Pandas" lang5="" lang6="" text2="This project aims to build a Machine Learning model that predicts house prices based on various features such as location, number of bedrooms, square footage, and amenities. By analyzing historical real estate data, the model provides accurate prices estimates, helping buyers, sellers, real estate agents make data-driven solutions." text="House Price Prediction" onClick={onPortfolioCard1Click}/>
                    <PortfolioCard lang1="FastApi" lang2="Matplotlib" lang3="Tensorflow" lang4="Pandas" lang5="" lang6="" text2="This project focuses on predicting stock prices using Machine Learning & Deep Learning models. The goal is to analyze historical stock market data, identify trends, and forecast future stock prices with high accuracy. The model can be used by traders and investors to make data-driven investment decisions." text="Stock Market Prediction" onClick={onPortfolioCard1Click}/>
                    
                </div>

                <div  className=" portfolio5 flex items-center justify-center mt-[30px]">
                    <PrimaryBtn text="More Projects" onClick={onMoreProjectsClick}/>
                </div>

            </div>
        </div>
    )
}

export default Portfolio;