import { useState } from "react"

export function SideBar({formIsActivated,setFormIsActivated}){
    
    const [projectList,setProjectList]=useState([])
    function handleAddProject(){
        setFormIsActivated(true)
    }
    return(
        <>
         <h1>your projects</h1>
         <button onClick={handleAddProject}>Add project</button>
         
         <ul>
           {projectList.map(project=>(
               <li key={project.name}>
               {project.name}
            </li>
           ))} 
            
         </ul>
        </>
    )
}
