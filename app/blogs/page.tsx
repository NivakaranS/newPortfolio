'use client'
import Navigation from "../components/Navigation"
import { useState } from "react";
import Footer from "../components/Footer";


const Blogs = () => {
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

export default Blogs