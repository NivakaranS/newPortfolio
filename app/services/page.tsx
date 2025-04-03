'use client'
import Navigation from "../components/Navigation"
import { useState } from "react";
import Footer from "../components/Footer";


const Services = () => {
    const [showContactModel, setShowContactModel] = useState(false);
    const [navSelection, setNavSelection] = useState('Services');
    
      const onContactClick = () => {
        setShowContactModel(!showContactModel);
      }

    return(
        <div>
            <Navigation navSelection={navSelection} onContactClick={onContactClick}/>
            <div className="h-[50vh]">

            </div>
            <Footer/>
        </div>
    )
}

export default Services