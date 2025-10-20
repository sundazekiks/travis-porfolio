
import { useEffect, useRef } from "react";

function ProfileCard({ sendDataToParent }) {

    const profileRef = useRef(null);
    
    useEffect(() =>{
        if (profileRef.current) {
            const observer = new ResizeObserver(entries => {
                for (let entry of entries){
                    sendDataToParent(entry.target.offsetHeight)
                    console.log(entry.target.offsetHeight)
                }
            })
            observer.observe(profileRef.current);
        }
    }, [sendDataToParent])
  
    return(
    <div className="md:w-full h-fit border p-3 rounded-xs border-gray-300 hover:scale-[1.02] transition-transform duration-500 ease-in-out opacity-0 animate-fadeIn1" ref={profileRef}>
        <h1 className="text-[15px] font-montserrat pl-2">PROFILE</h1>
        <hr className="mb-4 mt-2 border-gray-300"/>
        <p className="text-xs font-montserrat pl-2">
            I’m a Full Stack Developer with a strong foundation in both front-end and back-end development, passionate about building clean, scalable, and user-focused applications. My expertise spans modern frameworks, responsive UI/UX, database management, and cloud deployment, allowing me to deliver end-to-end solutions that bring ideas to life.
            <br/>
            <br />  
            I enjoy solving complex problems, optimizing performance, and writing maintainable code. Beyond technical skills, I value collaboration, continuous learning, and adaptability—whether working independently or as part of a team.
        </p>
    </div>)

}

export default ProfileCard;