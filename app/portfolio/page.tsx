'use client'
import Navigation from "../components/Navigation"
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import ContactModel from "../components/ContactModel";
import Contact from "../components/Contact";
import PortfolioCard from "../components/PortfolioCard";
import PrimaryBtn from "../components/PrimaryBtn";
import Top from "../components/Top";


const Portfolio = () => {
    const [showContactModel, setShowContactModel] = useState(false);
    const [navSelection, setNavSelection] = useState('Portfolio');

    useEffect(() => {
        if(typeof window !== 'undefined'){
            import('scrollreveal').then((ScrollReveal) => { 
                ScrollReveal.default().reveal('.portfolioTitle1', {
                origin: 'left',
                distance: '40px',
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
              ScrollReveal.default().reveal('.portfolioTitle2', {
              origin: 'bottom',
              distance: '40px',
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
            ScrollReveal.default().reveal('.portfolioTitle3', {
            origin: 'bottom',
            distance: '40px',
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

    
      const onContactClick = () => {
        setShowContactModel(!showContactModel);
      }

      const onPortfolioCard1Click = () => {
        console.log("Portfolio Card 1 Clicked")
      }

    return(
        <div>
            <Navigation navSelection={navSelection} onContactClick={onContactClick}/>
            <ContactModel showContactModel={showContactModel} onContactClick={onContactClick}/>
            <div className="text-white bg-[url('./images/heroBackground6.png')] bg-contain bg-no-repeat bg-center space-y-[30px] bg-[#000] px-[10vw] flex flex-col items-center justify-center pt-[20vh] min-h-[100vh]">
              <div className="w-[80%] text-center leading-[53px]  h-[100%]">
                
              <p className="text-[50px] bg-gradient-to-t  from-[#433D3A] via-[#C6C4C3]  to-[#CAC8C6] bg-clip-text text-transparent portfolioTitle1 ">Explore </p>
              <p className="text-[85px] bg-gradient-to-t leading-[95px]  from-[#433D3A] via-[#C6C4C3] font-[600] to-[#CAC8C6] portfolioTitle2 bg-clip-text text-transparent" >My Projects</p>
              </div>
              <div className="h-[25vh]">

              </div>
              <div className="w-[100%] md:w-[70%] portfolioTitle3 text-center h-[100%]">
                <p>Welcome to a showcase of my work, a curated collection of projects that reflect my passion for building smart, user-focused, and scalable digital solutions. </p>
              </div>
            </div>
            <div className=" py-[15vh] min-h-[200vh] flex items-center justify-center w-screen ">

            <div className=" w-[80%] ">
                <div className=" portfolio1 leading-[60px] text-center">
                    <p className="text-[60px] bg-gradient-to-t from-[#433D3A] via-[#C6C4C3] font-bold to-[#CAC8C6] bg-clip-text text-transparent">Explore the</p>
                    <p className="text-[60px] bg-gradient-to-t from-[#433D3A] via-[#C6C4C3] font-bold to-[#CAC8C6] bg-clip-text text-transparent">Development Journey</p>
                </div>
               

                <p className=" portfolio2 text-[40px] mt-[40px]">Software Engineering</p>
                <div className=" portfolio3 mt-[30px] flex md:flex-row flex-col space-y-[40px] md:space-y-[0px] md:space-x-[20px] items-center justify-center">
                    <PortfolioCard lang1="Python" lang2="Next.js" lang3="Node.js" lang4="MongoDB" lang5="Express.js" lang6="Docker" text2="This project is a full-stack news web application built using the MENN (MongoDB, Express.js, Next.js, Node.js) stack. It features a dual-interface system, where regular users can browse, search, and bookmark news, while admins have a dedicated panel to manage news articles, categories, and user permissions. The integrated LLM chatbot provides real-time news summeries, making articles easier to digest and enhance user experience." text="News Web App" onClick={onPortfolioCard1Click}/>
                    <PortfolioCard lang1="Python" lang2="MongoDB" lang3="Next.js" lang4="Node.js" lang5="Express.js" lang6="Docker" text2="This project is a full-stack logistics management web app (MENN: MongoDB, Express.js, Next.js, Node.js) streamlines shipment tracking, fleet, and warehouse management. It includes an admin panel for managing deliveries, drivers, and warehouses, while users track shipments in real-time. An LLM-powered chatbot enhances support with shipment updates, logistics queries, and warehouse inventory assistance, improving efficiency and automation." text="Logistics Web App" onClick={onPortfolioCard1Click}/>
                   
                </div>
                <p className=" portfolio3 text-[40px] mt-[40px]">Data Science</p>
                <div className=" portfolio3 mt-[30px] flex md:flex-row flex-col space-y-[40px] md:space-y-[0px] md:space-x-[20px] items-center justify-center">
                    <PortfolioCard lang1="Django" lang2="Matplotlib" lang3="Tensorflow" lang4="Pandas" lang5="" lang6="" text2="This project aims to build a Machine Learning model that predicts house prices based on various features such as location, number of bedrooms, square footage, and amenities. By analyzing historical real estate data, the model provides accurate prices estimates, helping buyers, sellers, real estate agents make data-driven solutions." text="House Price Prediction" onClick={onPortfolioCard1Click}/>
                    <PortfolioCard lang1="FastApi" lang2="Matplotlib" lang3="Tensorflow" lang4="Pandas" lang5="" lang6="" text2="This project focuses on predicting stock prices using Machine Learning & Deep Learning models. The goal is to analyze historical stock market data, identify trends, and forecast future stock prices with high accuracy. The model can be used by traders and investors to make data-driven investment decisions." text="Stock Market Prediction" onClick={onPortfolioCard1Click}/>
                    
                </div>


                <p className=" portfolio3 text-[40px] mt-[40px]">Computer Vision</p>
                <div className=" portfolio4 mt-[30px] flex md:flex-row flex-col space-y-[40px] md:space-x-[20px] md:space-y-[0px] items-center justify-center">
                    <PortfolioCard lang1="Django" lang2="Matplotlib" lang3="Tensorflow" lang4="Pandas" lang5="" lang6="" text2="This project aims to build a Machine Learning model that predicts house prices based on various features such as location, number of bedrooms, square footage, and amenities. By analyzing historical real estate data, the model provides accurate prices estimates, helping buyers, sellers, real estate agents make data-driven solutions." text="House Price Prediction" onClick={onPortfolioCard1Click}/>
                    <PortfolioCard lang1="FastApi" lang2="Matplotlib" lang3="Tensorflow" lang4="Pandas" lang5="" lang6="" text2="This project focuses on predicting stock prices using Machine Learning & Deep Learning models. The goal is to analyze historical stock market data, identify trends, and forecast future stock prices with high accuracy. The model can be used by traders and investors to make data-driven investment decisions." text="Stock Market Prediction" onClick={onPortfolioCard1Click}/>
                    
                </div>

               

            </div>
        </div>
        <Top/>
            <Contact onContactClick={onContactClick}/>
            <Footer/>
        </div>
    )
}

export default Portfolio