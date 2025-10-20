import { faLaptopCode, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import ReactLogo from "../assets/react-brands-solid-full.svg";
import VueLogo from "../assets/vuejs-brands-solid-full.svg";
import TailwindLogo from "../assets/css-brands-solid-full.svg";
import AngularLogo from "../assets/angular-brands-solid-full.svg";
import BootstrapLogo from "../assets/bootstrap-brands-solid-full.svg";

import NodeLogo from "../assets/backendLogos/node-js-brands-solid-full.svg";
import JavaLogo from "../assets/backendLogos/java-brands-solid-full.svg";
import PythonLogo from "../assets/backendLogos/python-brands-solid-full.svg";
import PhpLogo from "../assets/backendLogos/php-brands-solid-full.svg";

function SkillsCard() {
    return(<div className="h-fit w-full p-3 rounded-lg animate-fadeInDown border border-gray-300 hover:scale-[1.02] transition-transform duration-500 ease-in-out">
        {/* Skills info */} 
        <h1 className="text-[15px] font-montserrat">SKILLS</h1>
        <hr className="my-2"/>
        <div className="flex flex-col gap-5 mt-5">
            <h1 className="flex items-center gap-1.5 text-xs"><FontAwesomeIcon icon={faLaptop} className="text-xl"/> FRONTEND</h1>
            <div className="pl-2 flex flex-col gap-1 mb-2">
                <h3 className="font-montserrat text-xs flex items-center gap-1"> <img src={ReactLogo} alt="ReactLogos" className="w-6"/> React</h3>
                <h3 className="font-montserrat text-xs flex items-center gap-1"><img src={VueLogo} alt="ReactLogos" className="w-6"/> Vue</h3>
                <h3 className="font-montserrat text-xs flex items-center gap-1"><img src={TailwindLogo} alt="ReactLogos" className="w-6"/> Tailwind</h3>
                <h3 className="font-montserrat text-xs flex items-center gap-1"><img src={AngularLogo} alt="ReactLogos" className="w-6"/> Angular</h3>
                <h3 className="font-montserrat text-xs flex items-center gap-1"><img src={BootstrapLogo} alt="ReactLogos" className="w-6"/> Bootstrap</h3>
            </div>
            <h1 className="flex items-center gap-1.5 text-xs"><FontAwesomeIcon icon={faLaptopCode} className="text-xl"/> BACKEND</h1>
            <div className="pl-2 flex flex-col gap-1">
                <h3 className="font-montserrat text-xs flex items-center gap-1"><img src={NodeLogo} alt="ReactLogos" className="w-6"/> Node.js</h3>
                <h3 className="font-montserrat text-xs flex items-center gap-1"><img src={NodeLogo} alt="ReactLogos" className="w-6"/> C#</h3>
                <h3 className="font-montserrat text-xs flex items-center gap-1"><img src={PythonLogo} alt="ReactLogos" className="w-6"/> Python</h3>
                <h3 className="font-montserrat text-xs flex items-center gap-1"><img src={PhpLogo} alt="ReactLogos" className="w-6"/> PHP</h3>
                <h3 className="font-montserrat text-xs flex items-center gap-1"><img src={JavaLogo} alt="ReactLogos" className="w-6"/> Java</h3>
            </div>
        </div>
    </div>)
}

export default SkillsCard;