'use client'
import Navigation from "../components/Navigation"
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import ContactModel from "../components/ContactModel";
import Contact from "../components/Contact";
import BlogCard from "../components/BlogCard";
import PrimaryBtn from "../components/PrimaryBtn";
import { useRouter } from "next/navigation";
import Top from "../components/Top";


const Blogs = () => {
    const [showContactModel, setShowContactModel] = useState(false);
    const [navSelection, setNavSelection] = useState('Blogs');
    
      const onContactClick = () => {
        setShowContactModel(!showContactModel);
      }
      const router = useRouter();

      const onBlog1Click = () => {
        router.push('/blogs/blog1')
      }

      useEffect(() => {
              if(typeof window !== 'undefined'){
                  import('scrollreveal').then((ScrollReveal) => { 
                      ScrollReveal.default().reveal('.blogs1', {
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
                      ScrollReveal.default().reveal('.blogs2', {
                      origin: 'right',
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
                      ScrollReveal.default().reveal('.blogs3', {
                      origin: 'left',
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
                      ScrollReveal.default().reveal('.blogs4', {
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
                    ScrollReveal.default().reveal('.blogsTitle1', {
                    origin: 'bottom',
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
                  ScrollReveal.default().reveal('.blogsTitle2', {
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
                  ScrollReveal.default().reveal('.aboutTitle1', {
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

    return(
        <div>
            <Navigation navSelection={navSelection} onContactClick={onContactClick}/>
            <ContactModel showContactModel={showContactModel} onContactClick={onContactClick}/>
            <div className="text-white bg-[url('./images/heroBackground6.png')] bg-contain bg-no-repeat bg-center space-y-[30px] bg-[#000] px-[10vw] flex flex-col items-center justify-center pt-[20vh] min-h-[100vh]">
              <div className="w-[80%] text-center leading-[85px] md:leading-[100px] h-[100%]">
                <p className=" text-[50px] md:text-[50px] aboutText4 aboutTitle1 leading-[50px] bg-gradient-to-t from-[#433D3A] via-[#C6C4C3]  to-[#CAC8C6] bg-clip-text text-transparent">Look Into</p>
                <p className=" text-[75px] md:text-[80px] bg-gradient-to-t blogsTitle1 from-[#433D3A] leading-[100px] via-[#C6C4C3] font-[600] to-[#CAC8C6] bg-clip-text text-transparent" >Blogs & Insights</p>
              </div>
              <div className="h-[30vh]">

              </div>
              <div className="w-[100%] md:w-[70%] blogsTitle2 text-center h-[100%]">
                <p>Welcome to my digital journal, a space where I share my thoughts, experiences, and learnings from the world of technology.</p>
              </div>
            </div>



            <div className=" h-[120vh] w-screen flex items-center justify-center">
                <div className="w-[80%] flex  flex-col">
                    <div className="leading-[64px] blogs1 text-center">
                        <p className="text-[55px] bg-gradient-to-t from-[#433D3A] via-[#C6C4C3] font-bold to-[#CAC8C6] bg-clip-text text-transparent">Stay Updated</p>
                        <p className="text-[55px] bg-gradient-to-t from-[#433D3A] via-[#C6C4C3] font-bold to-[#CAC8C6] bg-clip-text text-transparent">with Latest Insights</p>
                    </div>
                    <div className="flex flex-row items-center justify-center space-x-[20px] mt-[30px]">
                        <div className="blogs2 flex flex-row items-center justify-center space-x-[20px]">
                        <BlogCard text="Blog 1" text1="Blog Title" onClick={onBlog1Click}/>
                        <BlogCard text="Blog 1" text1="Blog Title" onClick={onBlog1Click}/>
                        </div>
                        <div className="blogs3 flex flex-row items-center justify-center space-x-[20px]">
                        <BlogCard text="Blog 1" text1=" Blog Title" onClick={onBlog1Click}/>
                        <BlogCard text="Blog 1" text1="Blog Title" onClick={onBlog1Click}/>
                        </div>
                        
                        
                    </div>
                    
                </div>
            </div>
            <Top/>
            <Contact onContactClick={onContactClick}/>
            <Footer/>
        </div>
    )
}

export default Blogs