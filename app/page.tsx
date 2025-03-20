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

export default function Home() {
  const [showContactModel, setShowContactModel] = useState(false);

  const onContactClick = () => {
    setShowContactModel(!showContactModel);
  }

  return (
    <div className="flex flex-col">
    
      <Navigation onContactClick={onContactClick}/>
      <ContactModel showContactModel={showContactModel} onContactClick={onContactClick}/>
      <Hero/>
      <Top/>
      <About/>
      <Portfolio/>
      <Services/>
      <Blogs/>
      <Certification/>
      <Contact onContactClick={onContactClick}/>
      <Footer/>
    </div>
  );
}
