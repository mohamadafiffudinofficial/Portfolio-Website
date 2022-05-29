import { useRef, useState } from "react";
import { SideBar } from "./components";
import { Experience,Education,Skills,About, Interest, Award } from "./views";

function App() {
   const refAbout = useRef(null)
   const refExperience = useRef(null)
   const refEducation = useRef(null)
   const refSkills = useRef(null)
   const refInterest = useRef(null)
   const refAward = useRef(null)
   const [currentView, setCurrentView] = useState('about')

   const handleScroll=(value)=>{
     if(value>=refAbout.current.offsetTop-100){
       setCurrentView('about')
     }
     if(value>=refExperience.current.offsetTop-100){
      setCurrentView('experience')
     }
     if(value>=refEducation.current.offsetTop-100){
      setCurrentView('education')
     }
     if(value>=refSkills.current.offsetTop-100){
      setCurrentView('skills')
     }
     if(value>=refInterest.current.offsetTop-100){
      setCurrentView('interest')
     }
     if(value>=refAward.current.offsetTop-100){
      setCurrentView('award')
     }
   }

   const executeScroll = (keywords) => {
    switch (keywords) {
      case 'about':
        refAbout.current.scrollIntoView()
        break;
      case 'experience':
        refExperience.current.scrollIntoView()
        break;
      case 'education':
        refEducation.current.scrollIntoView()
        break;
      case 'skills':
        refSkills.current.scrollIntoView()
        break;
      case 'interest':
        refInterest.current.scrollIntoView()
        break;
      case 'award':
        refAward.current.scrollIntoView()
        break;
      default:
        return null;
    }
  }

  return (
    <div className=" App flex flex-col w-full h-screen md:flex-row">
      <SideBar executeScroll={executeScroll} currentView={currentView} />
      <div className="w-10/12 max-h-screen overflow-y-scroll" onScroll={(e) => handleScroll( e.target.scrollTop)}>
        <About refName={refAbout}/>
        <Experience refName={refExperience} />
        <Education refName={refEducation}/>
        <Skills refName={refSkills} />
        <Interest refName={refInterest}/>
        <Award refName={refAward}/>
      </div>
    </div>
  );
}

export default App;
