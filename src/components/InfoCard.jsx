import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function InfoCard() {
    return(<div className="h-fit w-full p-3 rounded-lg animate-fadeInDown border border-gray-300 hover:scale-[1.02] transition-transform duration-500 ease-in-out">
        {/* Personal info */} 
        <h1 className="text-[15px] font-monserrat">CONTACT</h1>
        <hr className="my-2"/>
        <div className="flex flex-col gap-2 mt-5">
            <h3 className="font-montserrat text-xs"><FontAwesomeIcon icon={faEnvelope}/> travis@gowork.com</h3>
            <h3 className="font-montserrat text-xs"><FontAwesomeIcon icon={faPhone} /> +63 951 164 8445</h3>
            <h3 className="font-montserrat text-xs"><FontAwesomeIcon icon={faLocationDot}/> Oroquieta City, Misamis Occidental, Philippines</h3>
        </div>
    </div>)
}

export default InfoCard;