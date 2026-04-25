import { useState } from "react"

export function SideBar({formIsActivated,setFormIsActivated}){
    
    const [projectList,setProjectList]=useState([])
    function handleAddProject(){
        setFormIsActivated(true)
    }
    return(
        <div className="w-72 h-screen bg-stone-900 text-white flex flex-col p-6 gap-6">
         <h1 className="text-sm font-bold tracking-widest text-stone-300 uppercase">your projects</h1>
         <button onClick={handleAddProject} className="bg-stone-700 hover:bg-stone-600 text-stone-300 text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200 w-fit">+ Add project</button>
         
         <ul className="flex flex-col gap-2">
           {projectList.map(project=>(
               <li key={project.name} className="text-sm text-stone-300 hover:bg-stone-700 px-3 py-2 rounded-lg cursor-pointer">
               {project.name}
            </li>
           ))} 
         </ul>
        </div>
    )
}