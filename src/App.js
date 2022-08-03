import { useState, useEffect } from "react";
// import ScrollTest from "./components/ScrollTest"
import AboutMe from "./components/AboutMe";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProfileContainer from "./components/ProfileContainer";
import Skills from "./components/Skills";

function App() {
  const [titleDisplay, setTitleDisplay] = useState(1);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    if(position>100){
      setTitleDisplay(1.5)
      
    }
    else{
      setTitleDisplay(1)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      
    };
  }, []);





  return (
    <>
      <Navbar />
    <div className={` flex flex-col lg:flex-row justify-center`} >
      <div className={`leftSide relative lg:flex-1 lg:sticky lg:top-[15px] lg:max-w-[50vw] lg:w-[50vw] flex justify-center h-screen  lg:items-center pt-[148px] transition-all duration-1000 ease-in-out`}>
        <ProfileContainer
          titleDisplay={titleDisplay}
          setTitleDisplay={setTitleDisplay}
          scrollPosition = {scrollPosition}
        />

      </div>
      <div className={`rightSide flex-[${titleDisplay}] lg:pt-[50px]  lg:w-[50vw] px-5 lg:px-20 overflow-hidden lg:border-l-2 border-[#1A1914]/50 transition-all duration-1000 ease-in-out h-full` } >
           <HeroSection />
          <AboutMe />
          <Skills />
      </div>
    </div>

    </>
  );
}

export default App;
