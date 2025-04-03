'use client'
import Navigation from "../components/Navigation"
import { useState } from "react";
import Footer from "../components/Footer";


const About = () => {
    const [showContactModel, setShowContactModel] = useState(false);
    
      const onContactClick = () => {
        setShowContactModel(!showContactModel);
      }

    return(
        <div>
            <Navigation onContactClick={onContactClick}/>
            <div className="h-[50vh]">

            </div>
            <Footer/>
        </div>
    )
}

export default About