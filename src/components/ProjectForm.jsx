import { useState } from "react"

export function ProjectForm({formIsActivated,setFormIsActivated}){
    function handlecancelform(){
        
    }
    return(
        <>
        {formIsActivated ? <> <button onClick={handlecancelform}>cancel</button><button>save</button>
         <label htmlFor="">title</label>
         <input type="text" name="" id="" />
         <label htmlFor="">description</label>
         <input type="text" />
         <label htmlFor="">due date</label>
         <input type="text" /></> : 
        <> 
            <img src="src/assets/no-projects.png" alt="" />
            <h1>No project selected </h1>
            <p>Select a project or get started with a new one</p>
            <button>create new project</button>
        </>
        }
        </>
    )
}
