'use client'

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Top from "./components/Top";
import ContactModel from "./components/ContactModel";
import React, {useState} from "react";
import Certification from "./components/Certification";
import Max from "./components/Max";

export default function Home() {
  const [showContactModel, setShowContactModel] = useState(false);
  const [navSelection, setNavSelection] = useState('Home');

  const onContactClick = () => {
    setShowContactModel(!showContactModel);
  }

  return (
    <div className="flex w-[100vw] overflow-x-hidden flex-col">
    
      <Navigation navSelection={navSelection} onContactClick={onContactClick}/>
      <ContactModel showContactModel={showContactModel} onContactClick={onContactClick}/>
      <Hero/>
      <Top/>
      <About/>
      <Portfolio/>
      <Services/>
      <Blogs/>
      <Certification/>
      <Max/>
      <Contact onContactClick={onContactClick}/>
      <Footer/>
    </div>
  );
}
