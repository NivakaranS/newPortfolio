'use client'

import Navigation from "./components/Navigation";
import TopNavigation from "./components/TopNavigation";
import Rooms from "./pages/Rooms";
import Restuarant from "./pages/Restuarant";
import Guests from "./pages/Guests";


import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Home() {
  const [navClick, setNavClick] = useState("Portfolio Management");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const Router = useRouter();

  const handleNavClick = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    setNavClick((e.target as HTMLElement).innerText);
  };

  const renderContent = () => {
    switch (navClick) {
      case "Portfolio Management":
        return <Rooms />;
      case "Blogs Management":
        return <Restuarant />;
      case "Blogs Organization":
        return <Guests />;
      
      default:
        return <div>Home Content</div>;
    }
  };

  return (
    <div className="flex flex-row overflow-hidden">
      <Navigation navClick={navClick} handleNavClick={handleNavClick} />
      <div className="w-[83vw] h-[100vh]">
        <TopNavigation />
        {renderContent()}
      </div>
    </div>
  );
}
