
import { useRef, useEffect } from "react";
import education from "../json data/education.json"

function EducationCard({ sendDataToParent }) {

    const expRef = useRef(null);

    useEffect(() => {
    if (expRef.current) {
        const observer = new ResizeObserver(entries => {
        for (let entry of entries) {
            sendDataToParent(entry.target.offsetHeight);
        }
        });
        observer.observe(expRef.current);

        return () => observer.disconnect();
        }
    }, [sendDataToParent]);
  
    return(
    <div className="w-full h-fit border p-3 rounded-xs border-gray-300 hover:scale-[1.02] transition-transform duration-500 ease-in-out opacity-0 animate-fadeIn3" ref={expRef}>
        <h1 className="text-[15px] font-montserrat pl-2">EDUCATION</h1>
        <hr className="mb-4 mt-2 border-gray-300"/>
        <div className="w-full h-fit flex flex-col gap-5 p-5">
            {education.length > 0 ? education.map((item, index) => (<div key={index}>
                <h3 className="text-[13px] font-bold font-montserrat">{item.school}</h3>
                <p className="text-xs indent-5 mt-1 font-light">{item.describe}</p>
            </div>)) : <div></div>}
        </div>
    </div>)

}

export default EducationCard;