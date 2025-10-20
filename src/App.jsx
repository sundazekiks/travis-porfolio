import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";
import InfoCard from "./components/InfoCard";
import SkillsCard from "./components/SkillsCard";
import ProfileCard from "./components/ProfileCard";
import { useState } from "react";
import ExperienceCard from "./components/ExperienceCard";
import EducationCard from "./components/EducationCard";
import { faCalendar, faMessage } from "@fortawesome/free-solid-svg-icons";

// import { ReactComponent as circleUser } from './assets/paperIcons/circle-user-solid-full.svg'
// import schoolIcon from './assets/paperIcons/school-solid-full.svg'
// import userTieIcon from './assets/paperIcons/user-tie-solid-full.svg'

function App() {

  const [profDiv, setProfDiv] = useState(0);
  const [expDiv, setExpDiv] = useState(0);
  const [eduDiv, setEduDiv] = useState(0);



  const handleProfDivHeight = (height) => {
    setProfDiv(height);
  };
  const handleExpDivHeight = (height) => {
    setExpDiv(height);
  }
  const handleEduDivHeight = (height) => {
    setEduDiv(height);
  }

  return (
  <div className="w-full h-fit bg-black/20 px-100 py-10 md:px-40 sm:px-20">
    {/* ChatBot */}
    <button className="fixed bottom-10 right-10 text-xs flex gap-2 justify-center items-center bg-black text-white py-2 px-5 rounded-xl cursor-pointer hover:bg-white hover:text-black transition-all duration-500 hover:scale-110">
      <FontAwesomeIcon icon={faMessage}/>Chat with Travis
    </button>
    {/* Main Paper */}
    <div className="w-full bg-white h-full rounded-xl px-10">
      {/* Image Holder, Title and Name */}
      <div className="p-5 flex">
        <div className="flex items-center gap-2 px-2 py-4">
          <img src="https://scontent.fmnl13-3.fna.fbcdn.net/v/t39.30808-1/503649847_3323202864484519_1031675443097469220_n.jpg?stp=cp6_dst-jpg_s480x480_tt6&_nc_cat=106&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeHTJny2mjCQHa3VBJHL24Ubve9u2zWDmL-9727bNYOYv29L5idmMm-ujGGZyc92g5UQjh4ugwffEkTAkX4oCjBb&_nc_ohc=3dd952CaRbUQ7kNvwE9hQBl&_nc_oc=AdkKQ1dLR2AaNWiG-pyr36fr3Czht-ijStX-TevksK-XJN3tvfh0NThHZ3p-S_lp-YIp4rR8SvIKlbblUjnma7_D&_nc_zt=24&_nc_ht=scontent.fmnl13-3.fna&_nc_gid=tii5-wS8H0WggO7c3OVSog&oh=00_AfcgJN562gqXVexreNucOUiYhGRyeYZrlHJYmoNFPPsxCA&oe=68F736C0" alt="profile-picture" className="w-35 rounded-xl animate-fadeIn" />
          <div className=" animate-fadeInLeft">
            <h1 className="font-montserrat text-2xl indent-1 mt-4">TRAVIS ABUTON</h1>
            <p className="font-montserrat text-xs mt-2 indent-2">FULL STACK DEVELOPER</p>
            {/* Socials Container */}
            <div className="flex flex-row gap-1 ml-2 mt-2 text-lg">
              <a href="#" className="text-gray-400"><FontAwesomeIcon icon={faFacebook}/></a>
              <a href="#" className="text-gray-400"><FontAwesomeIcon icon={faGithub}/></a>
              <a href="#" className="text-gray-400"><FontAwesomeIcon icon={faInstagram}/></a>
              <a href="#" className="text-gray-400"><FontAwesomeIcon icon={faLinkedin}/></a>
            </div>
            {/* CTA */}
            <div className="relative top-4 flex flex-row gap-2 p-1">
                <button className=" py-0.5 px-3 rounded-xs bg-gray-900 text-white font-montserrat hover:bg-white hover:text-black transition-all duration-700 delay-200 cursor-pointer flex items-center gap-2 text-[14px]"><FontAwesomeIcon icon={faCalendar} className="text-[10px]"/> Set an appointment</button>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-1 animate-slideInLeft" />
      {/* Body Container */}
      <div className="grid grid-cols-[300px_10px_1fr] gap-3 h-fit py-10">
        {/* left side bar */}
        <div className="h-fit col-start-1 flex flex-col items-center gap-3 p-2">
          <InfoCard/>
          <SkillsCard/>
        </div>
        {/* Divider */}
        <div className="h-full flex flex-col items-center py-2 gap-2">
          <div className="w-full flex flex-col items-center pt-4 pb-2 gap-1" style={{ height: `${profDiv}px` }}>
            <div className="flex flex-col items-center h-0 justify-center animate-lineDown gap-1">
              <svg className="w-7 h-7 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor"><path d="M463 448.2C440.9 409.8 399.4 384 352 384L288 384C240.6 384 199.1 409.8 177 448.2C212.2 487.4 263.2 512 320 512C376.8 512 427.8 487.3 463 448.2zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM320 336C359.8 336 392 303.8 392 264C392 224.2 359.8 192 320 192C280.2 192 248 224.2 248 264C248 303.8 280.2 336 320 336z"/></svg>
              <hr className="w-1 border-0 h-full bg-gray-300 rounded-xl"/>
            </div>
          </div>
          <div className="w-full flex flex-col items-center pt-4 pb-2 gap-1" style={{ height: `${expDiv}px` }}>
            <div className="flex flex-col items-center h-0 justify-center animate-lineDown2 gap-1">
               <svg className="w-7 h-7 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor"><path d="M320 312C253.7 312 200 258.3 200 192C200 125.7 253.7 72 320 72C386.3 72 440 125.7 440 192C440 258.3 386.3 312 320 312zM289.5 368L350.5 368C360.2 368 368 375.8 368 385.5C368 389.7 366.5 393.7 363.8 396.9L336.4 428.9L367.4 544L368 544L402.6 405.5C404.8 396.8 413.7 391.5 422.1 394.7C484 418.3 528 478.3 528 548.5C528 563.6 515.7 575.9 500.6 575.9L139.4 576C124.3 576 112 563.7 112 548.6C112 478.4 156 418.4 217.9 394.8C226.3 391.6 235.2 396.9 237.4 405.6L272 544.1L272.6 544.1L303.6 429L276.2 397C273.5 393.8 272 389.8 272 385.6C272 375.9 279.8 368.1 289.5 368.1z"/></svg>
              <hr className="w-1 border-0 h-full bg-gray-300 rounded-xl"/>
            </div>
          </div>
          <div className="w-full flex flex-col items-center pt-4 pb-2 gap-1" style={{ height: `${eduDiv}px` }}>
            <div className="flex flex-col items-center h-0 justify-center animate-lineDown3 gap-1">
              {/* <div className="w-4 h-4 bg-amber-500 rounded-xl"></div> */}
             
              <svg className="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor"><path d="M32 256C32 220.7 60.7 192 96 192L160 192L287.9 76.9C306.2 60.5 333.9 60.5 352.1 76.9L480 192L544 192C579.3 192 608 220.7 608 256L608 512C608 547.3 579.3 576 544 576L96 576C60.7 576 32 547.3 32 512L32 256zM256 440L256 528L384 528L384 440C384 417.9 366.1 400 344 400L296 400C273.9 400 256 417.9 256 440zM144 448C152.8 448 160 440.8 160 432L160 400C160 391.2 152.8 384 144 384L112 384C103.2 384 96 391.2 96 400L96 432C96 440.8 103.2 448 112 448L144 448zM160 304L160 272C160 263.2 152.8 256 144 256L112 256C103.2 256 96 263.2 96 272L96 304C96 312.8 103.2 320 112 320L144 320C152.8 320 160 312.8 160 304zM528 448C536.8 448 544 440.8 544 432L544 400C544 391.2 536.8 384 528 384L496 384C487.2 384 480 391.2 480 400L480 432C480 440.8 487.2 448 496 448L528 448zM544 304L544 272C544 263.2 536.8 256 528 256L496 256C487.2 256 480 263.2 480 272L480 304C480 312.8 487.2 320 496 320L528 320C536.8 320 544 312.8 544 304zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"/></svg>
              <hr className="w-1 border-0 h-full bg-gray-300 rounded-xl"/>
            </div>
          </div>
        </div >
        {/* right side bar */}
        <div className="h-fit p-2 flex flex-col gap-2">
          <ProfileCard sendDataToParent={handleProfDivHeight}/>
          <ExperienceCard sendDataToParent={handleExpDivHeight}/>
          <EducationCard sendDataToParent={handleEduDivHeight}/>
        </div>
      </div>
    </div>
    <hr className="my-10 "/>
    <div className="flex flex-col items-center">
        <h1 className="text-xs font-bold">&copy; Travis Abuton 2025</h1>
    </div>
  </div>)
}

export default App;