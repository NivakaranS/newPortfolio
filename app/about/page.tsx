"use client";
import Navigation from "../components/Navigation";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import ContactModel from "../components/ContactModel";
import Contact from "../components/Contact";
import Image from "next/image";
import NextImage from '../images/next.png';
import Certification from "../components/Certification";
import GroqImage from '../images/groq.png';
import PythonImage from '../images/python.png';
import KotlinImage from '../images/kotlin.png';
import JavaImage from '../images/java.png';
import JavascriptImage from '../images/javascript.png';
import PostgresqlImage from '../images/postgresql.png';
import FlaskImage from '../images/flask.png';
import FirebaseImage from '../images/firebase2.png';
import GradioImage from '../images/gradio.png';
import GraphqlImage from '../images/graphql.png';
import HuggingFaceImage from '../images/huggingface.png';
import KerasImage from '../images/keras.png';
import MongoDbImage from '../images/mongodb.png';
import MysqlImage from '../images/mysql.png';
import NodeImage from '../images/node.png';
import PytorchImage from '../images/pytorch2.png';
import ReactImage from '../images/react.png';
import ReactNativeImage from '../images/reactNative.png';
import ReduxImage from '../images/redux.png';
import ScikitlearnImage from '../images/scikitlearn.png';
import TensorFlowImage from '../images/tensorflow.png';
import TypescriptImage from '../images/typescript.png';
import DjangoImage from '../images/django.png';
import DockerImage from '../images/docker.png';
import ExpressImage from '../images/express.png';
import LangchainImage from '../images/langchain2.png';
import Seaborn from '../images/logo-tall-lightbg.svg';
import Top from "../components/Top";
import Max from "../components/Max";





const About = () => {
  const [showContactModel, setShowContactModel] = useState(false);
  const [navSelection, setNavSelection] = useState("About");

  const onContactClick = () => {
    setShowContactModel(!showContactModel);
  };

   useEffect(() => {
          if(typeof window !== 'undefined'){
              import('scrollreveal').then((ScrollReveal) => { 
                  ScrollReveal.default().reveal('.aboutTitle1', {
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
                ScrollReveal.default().reveal('.aboutTitle2', {
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
              ScrollReveal.default().reveal('.aboutTitle3', {
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
            ScrollReveal.default().reveal('.aboutText4', {
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
          ScrollReveal.default().reveal('.aboutText5', {
          origin: 'right',
          distance: '40px',
          duration: 800,
          delay: 400,
          easing: 'ease-in-out',
          reset: false
      })
  })
  }
}, [])

  return (
    <div className="flex w-[100vw] overflow-x-hidden flex-col">
      <Navigation navSelection={navSelection} onContactClick={onContactClick} />
      <ContactModel
        showContactModel={showContactModel}
        onContactClick={onContactClick}
      />
      <div className="text-white bg-[url('./images/heroBackground6.png')] bg-contain bg-no-repeat bg-center  sm:space-y-[30px] bg-[#000] px-[10vw] flex flex-col items-center justify-center sm:pt-[20vh] min-h-[100vh]">
          <div className="w-[100vw]  text-center leading-[60px] sm:leading-[70px] h-[100%]">
                <p className=" text-[40px] sm:text-[50px] md:text-[60px] aboutText4 aboutTitle1 bg-gradient-to-t from-[#433D3A] via-[#C6C4C3]  to-[#CAC8C6] bg-clip-text text-transparent">About Me</p>
                <p className=" text-[65px] sm:text-[75px] md:text-[80px] aboutTitle2 bg-gradient-to-t from-[#433D3A] via-[#C6C4C3] font-[600] to-[#CAC8C6] bg-clip-text text-transparent" >An Introduction</p>
              </div>
              <div className="w-[100%] md:w-[50%] text-center h-[10px] sm:h-[160px]">

              </div>
              <div className="w-[100%]  md:w-[50%] text-center ">
                <p className=" aboutTitle3">Welcome to the story behind the code. </p>
              </div>
            </div>
      <div className="flex items-center justify-center py-[50px]  min-h-[100vh]">
        <div className="w-[85%] h-[100%] flex flex-col md:flex-row items-center justify-center space-x-[20px] about2">
          <div className="w-[100%] md:w-[50%] h-[100%]  flex flex-col items-center justify-center">
            <p className=" text-[65px] sm:text-[80px] text-center md:text-left aboutText4 bg-gradient-to-t from-[#433D3A] via-[#C6C4C3] font-[600] to-[#CAC8C6] bg-clip-text text-transparent" >About Me</p>
          </div>
          <div className="w-[100%] md:w-[50%] aboutText5 h-[100%] flex flex-col space-y-[20px] items-center justify-center">
            <p>
              Hello! I am Nivakaran, currently pursuing a B.Sc. in Information
              Technology with a specialization in Data Science at the Sri Lanka
              Institute of Information Technology (SLIIT). My academic journey
              driven by a passion for exploring the dynamic intersection of data
              science and software engineering.
            </p>

            <p>
              In the words of Steve Jobs, "Stay hungry, stay foolish", I embrace
              a philosophy that encourages perpetual curiosity, a relentless
              pursuit of new knowledge, and a fearless approach to exploring
              uncharted territories. This mindset fuels both my personal growth
              and professional ambitions.
            </p>

            <p>
              Let's join on this exhilarating quest as we navigate the complexities
              of data science and software engineering together. Let's embrace
              curiosity, defy conventions, and forge ahead into a future where
              possibilities are limitless.
            </p>
          </div>
        </div>
      </div>
      <div className="text-white space-y-[30px] bg-[#000] px-[10vw] flex flex-col py-[60px] py-[0px] md:flex-row items-center justify-center  min-h-[50vh]">
              
              <div className="aboutText4 w-[100%] md:w-[55%] text-center h-[100%]">
                <p>To become a leading force in shaping the future of technology by blending curiosity with creativity. I envision a world where data and software empower people to solve real-world challenges, drive innovation, and unlock boundless possibilities for the generations to come.</p>
              </div>
              <div className=" w-[100%] sm:w-[45%] aboutText5 text-center leading-[60px] md:leading-[70px] h-[100%]">
                <p className="text-[40px] md:text-[50px] bg-gradient-to-t from-[#433D3A] via-[#C6C4C3] font-[600] to-[#CAC8C6] bg-clip-text text-transparent" >The</p>
                <p className=" text-[80px] md:text-[100px] bg-gradient-to-t from-[#433D3A] via-[#C6C4C3] font-[600] to-[#CAC8C6] bg-clip-text text-transparent" >Vision</p>
              </div>
      </div>
      <div className="text-white space-y-[30px]  px-[10vw] flex flex-col py-[50px] md:py-[0px] md:flex-row items-center justify-center  min-h-[50vh]">
          <div className="w-[100%] sm:w-[45%] aboutText4 text-center leading-[50px] md:leading-[70px] h-[100%]">
          <p className="text-[40px] md:text-[50px] bg-gradient-to-t from-[#433D3A] via-[#C6C4C3] font-[600] to-[#CAC8C6] bg-clip-text text-transparent" >The</p>
            <p className="text-[68px] md:text-[100px] bg-gradient-to-t from-[#433D3A] via-[#C6C4C3] font-[600] to-[#CAC8C6] bg-clip-text text-transparent" >Mission</p>
          </div>
          <div className=" w-[100%] md:w-[55%] aboutText5 text-center h-[100%]">
            <p>To leverage the power of data science and software engineering to build intelligent, impactful, and user-centric digital solutions. I strive to continuously learn, innovate, and collaborate, transforming ideas into reality through thoughtful design, clean code, and data-driven insights.</p>
          </div>
              
      </div>
      
      <div className="text-white space-y-[30px] bg-[#000] px-[10vw] flex flex-col items-center justify-center  min-h-[100vh]">
              
      <div className="md:w-[50%] w-[100%] text-center leading-[85px] h-[100%]">
                
                <p className=" text-[70px] md:text-[85px] aboutTitle1 bg-gradient-to-t from-[#433D3A] via-[#C6C4C3] font-[600] to-[#CAC8C6] bg-clip-text text-transparent" >Tech Stack</p>
              </div>
              <div className="md:w-[55%] aboutTitle2 mt-[15px] grid grid-cols-6 gap-[5px] space-x-[15px] flex flex-row  justify-center text-center h-[100%]">
                <div className="flex flex-col items-center justify-center">
                  <Image src={DjangoImage} height={75} width={75} alt="" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <Image src={DockerImage} height={80} width={80} alt="" />
                </div>
                
                <div className="flex flex-col items-center justify-center">
                  <Image src={ExpressImage} height={65} width={65} alt="" />
                </div>
                
                <div className="flex flex-col items-center justify-center">
                  <Image src={FirebaseImage} height={130} width={130} alt="" />
                </div>
                
                <div className="flex flex-col items-center justify-center">
                  <Image src={NextImage} height={55} width={55} alt="" />
                </div>
                
                <div className="flex flex-col px-[5px] rounded-[10px] items-center bg-white justify-center">
                  <Image src={FlaskImage} height={120} width={120} alt="" />
                </div>
                
                <div className="flex flex-col items-center justify-center">
                  <Image src={GradioImage} height={110} width={110} alt="" />
                </div>
                
                <div className="flex flex-col items-center justify-center">
                  <Image src={GraphqlImage} height={110} width={110} alt="" />
                </div>
                
                <div className="flex flex-col items-center justify-center">
                  <Image src={GroqImage} height={100} width={100} alt="" />
                </div>
                
                <div className="flex flex-col items-center justify-center">
                  <Image src={HuggingFaceImage} height={100} width={100} alt="" />
                </div>
                
                <div className="flex flex-col items-center justify-center">
                  <Image src={MongoDbImage} height={80} width={80} alt="" />
                </div>
                
                <div className="flex flex-col items-center justify-center">
                  <Image src={KerasImage} height={120} width={120} alt="" />
                </div>
                
                <div className="flex flex-col items-center justify-center">
                  <Image src={KotlinImage} height={80} width={80} alt="" />
                </div>
                
                <div className="flex flex-col items-center justify-center">
                  <Image src={MysqlImage} height={70} width={70} alt="" />
                </div>
                
                <div className="flex flex-col items-center justify-center">
                  <Image src={NodeImage} height={100} width={100} alt="" />
                </div>
                
                <div className="flex flex-col items-center justify-center">
                  <Image src={PostgresqlImage} height={80} width={80} alt="" />
                </div>
                
                <div className="flex flex-col items-center justify-center">
                  <Image src={PythonImage} height={55} width={55} alt="" />
                </div>
                
                <div className="flex flex-col items-center justify-center">
                  <Image src={PytorchImage} height={110} width={110} alt="" />
                </div>
                
                <div className="flex flex-col items-center justify-center">
                  <Image src={ReactImage} height={70} width={70} alt="" />
                </div>
                
                <div className="flex flex-col items-center justify-center">
                  <Image src={ReactNativeImage} height={100} width={100} alt="" />
                </div>
                
                <div className="flex flex-col items-center justify-center">
                  <Image src={ReduxImage} height={90} width={90} alt="" />
                </div>
                
                <div className="flex flex-col items-center justify-center">
                  <Image src={ScikitlearnImage} height={90} width={90} alt="" />
                </div>
                
                <div className="flex flex-col items-center justify-center">
                  <Image src={TensorFlowImage} height={100} width={100} alt="" />
                </div>
                
                <div className="flex flex-col items-center justify-center">
                  <Image src={TypescriptImage} height={60} width={60} alt="" />
                </div>
                
                <div className="flex flex-col items-center justify-center">
                  <Image src={JavaImage} height={80} width={80} alt="" />
                </div>
                
                <div className="flex flex-col items-center justify-center">
                  <Image src={JavascriptImage} height={80} width={80} alt="" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <Image src={LangchainImage} height={120} width={120} alt="" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <Image src={Seaborn} height={80} width={80} alt="" />
                </div>
                
              </div>
              
      </div>
      <div className="min-h-[100vh] bg-[#101010] flex flex-col items-center justify-center">
          <p className=" text-[70px] md:text-[85px] aboutTitle1 bg-gradient-to-t from-[#433D3A] via-[#C6C4C3] font-[600] to-[#CAC8C6] bg-clip-text text-transparent" >Education</p>
          <div className="flex flex-row  items-center min-h-[60vh] w-[100vw] justify-center">
            <div className="w-[29%] flex  flex-col space-y-[90px] ">
              
              <div className="flex aboutText4 flex-row items-center justify-end  ">
                
                
                <div className="bg-[#373435] ring-[0.5px] ring-[#727376]  px-[20px] py-[15px] rounded-[10px] ">
                  <p>B.Sc (Hons) in Information Technology</p>
                  <p>Sri Lanka Institute of Information Technology (SLIIT)</p>
                  <div className="flex flex-row px-[10px] justify-between">
                    <p className="text-[13px]">2023 - 2027</p>
                    <p className="text-[13px]">Current CGPA: 3.3</p>
                  </div>
                </div>
                <div className="w-[40px] bg-white h-[7px]">

                </div>
              
              </div>
              
              <div className="flex aboutText4 flex-row items-center  justify-end  ">
               
              
                <div className="bg-[#373435] ring-[0.5px] ring-[#727376]  px-[20px] py-[15px] rounded-[10px] ">
                  <p>Diploma in Graphic Designing</p>
                  <p>IDM Nations Campus</p>
                  <div className="flex flex-row px-[10px] justify-between">
                    <p className="text-[13px]">2015</p>
                    <p className="text-[13px]">Distinction</p>
                  </div>
                </div>
                 <div className="w-[40px] bg-white h-[7px]">

                </div>

              </div>

            </div>
            <div className="bg-white w-[7px] min-h-[70vh] rounded-full">

            </div>
            <div className="w-[30%] aboutText5 flex items-center justify-cneter flex-row">
              <div className="w-[40px] bg-white h-[7px]">

              </div>

              <div className="bg-[#373435] ring-[0.5px] ring-[#727376]  px-[20px] py-[15px] rounded-[10px] ">
                <p>G.C.E. Advanced Level (Bio stream)</p>
                <p>St.Benedict's College</p>
                <div className="flex flex-row px-[10px] justify-between">
                  <p className="text-[13px]">2021(2022)</p>
                  <p className="text-[13px]">3C's</p>
                
                </div>
              </div>

            </div>

          </div>


      </div>

      <div className="text-white bg-[#000] space-y-[30px] py-[80px]  px-[10vw] flex flex-col items-center justify-center min-h-[100vh]">            
        <div className="w-[80%] text-center leading-[60px] md:leading-[80px] h-[100%]">
          <p className="text-[65px] md:text-[85px] aboutTitle1 bg-gradient-to-t from-[#433D3A] via-[#C6C4C3] font-[600] to-[#CAC8C6] bg-clip-text text-transparent" >Work Experience</p>
        </div>
        <div className="h-[100%]  px-[200px] space-x-[50px] flex flex-row items-center justify-center">

            
            <div className="flex flex-col space-y-[30px]  "> 
              <div className="flex flex-row items-center justify-center space-x-[20px] ">
                <div className="w-[7px] min-h-[65vh] rounded-full bg-white">

                </div>     
                
              
                <div className="w-[100%] flex flex-col  items-center justify-center aboutTitle2 h-[100%]">
                  

                  <div className="flex flex-row items-center w-[100%]  space-x-[100px]">
                    <div className="leading-[30px]">
                      <p className=" text-[20px]  md:text-[25px]">+ Medical Documentation Specialist (Medical Scribe)</p>
                      <p className="text-[17px] md:text-[20px]">Medsource Healthcare LLC</p>
                    </div>

                    <div>
                    <p>2022 July - 2024 December</p>
                    </div>
                    
                  </div>
                  <div>
                    <p className="text-[17px] md:text-[18px] text-gray-300">Responsibilities</p>
                    <ul className="pl-[10px] text-[18px] mt-[5px] space-y-[2px]">
                      <li>- Was a primary scribe for a cardiologist, and have worked with multiple providers across multiple specialities, documenting real-time patient encounters, diagnoses, transcriptions and treatment plans.</li>
                      <li>- Trained and supervised junior scribes in EHR systems, cardiology-specific terminology, and efficient content capturing protocols.</li>
                      <li>- Structured and managed high-volume clinical datasets(e.g., echocardiograms, medications, lab results)</li>
                      <li>- Collaborated with doctors to summerize complex medical histories into actionable clinical notes, improving data usability.</li>
                      <li>- Optimized clinical workflow by reducing documentation time.</li>
                    </ul>
                  </div>
                  
                </div>    
              </div>  
              <div className="flex flex-row items-center justify-center space-x-[20px] ">
                <div className="w-[7px] min-h-[40vh] rounded-full bg-white">

                </div>     
                
              
                <div className="w-[100%] flex flex-col items-center justify-center aboutTitle2 h-[100%]">
                
                <div className="flex flex-row items-center justify-between w-[100%] ">
                    <div className="leading-[30px]">
                    <p className="text-[20px] md:text-[25px]">+ Customer Service Executive</p>
                    <p className="text-[17px] md:text-[20px]">Startek - Commercial bank PLC process</p>
                  </div>

                    <div className="w-[150px]">
                      <p>2022 February - 2022 June</p>
                    </div>
                    
                  </div>

                  <div>
                     <p className="text-[18px] text-gray-300">Responsibilities</p>
                    <ul className="pl-[10px] text-[18px] mt-[5px] space-y-[2px]">
                        <li>- Managed high-volume customer interactions, ensuring efficient query resolution and data accuracy.</li>
                        <li>- Processed financial transactions and account inquiries, demostrated structured problem-solving and attention to detail</li>
                        <li>- Communicated with the clients to ensure clarity and compliance strenghtening analytical documentation skills.</li>
                      </ul>
                  </div>
                  
                </div>    
              </div>  

              
            </div>
          </div>
        
      </div>  
      <Certification/>
      <Top/>
      <Max/>
      <Contact onContactClick={onContactClick} />
      <Footer />
    </div>
  );
};

export default About;


 
