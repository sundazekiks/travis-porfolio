
import { useRef, useEffect} from "react";
import data from '../json data/experience.json'
import keyProjects from '../json data/keyProjects.json'

function ExperienceCard({ sendDataToParent }) {

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

  
    return(<div className="w-full h-fit border p-3 rounded-xs border-gray-300 hover:scale-[1.02] transition-transform duration-500 ease-in-out opacity-0 animate-fadeIn2" ref={expRef}>
        <h1 className="text-[15px] font-montserrat pl-2">EXPERIENCE</h1>
        <hr className="mb-4 mt-2 border-gray-300"/>
        {/* Frontend Experience */}
        <div className="w-full h-fit p-2">
            <h1 className="text-xs font-bold">Frontend Developer | Freelance / Personal Projects</h1>
            <h2 className="text-[10px] mt-1">Jan 2023 - Present</h2>
            {/* List of Items for  Frontend Exp */}
            <div className="py-3 px-4 flex flex-col gap-3">
                <ul className="flex flex-col gap-2">
                    {data.length > 0 ? data.map((item, index) => <li key={index} className={`text-[11px] px-2 font-montserrat opacity-0 animate-fadeIn animation-delay-${index * 1000}`}> {item.listItem}</li>) : <div></div>}
                </ul>
                <h3 className="text-xs font-bold">Key Projects</h3>
                <ul className="flex flex-col gap-2">
                    {keyProjects.length > 0 ? keyProjects.map((item, index) => (<li key={index} className="text-[11px] px-2 font-montserrat">{item.item}</li>)) : <div></div>}
                </ul>
            </div>
        </div>
    </div>)

}

export default ExperienceCard;