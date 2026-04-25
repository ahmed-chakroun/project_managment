import { useState } from "react";
import { ProjectForm } from "./components/ProjectForm";
import { SideBar } from "./components/sidebar";
function App() {
  const [formIsActivated,setFormIsActivated]=useState(false)
  
  return (
    <div className="flex">
      <SideBar 
         formIsActivated={formIsActivated}
         setFormIsActivated={setFormIsActivated}
      />
      <ProjectForm 
      formIsActivated={formIsActivated}
      setFormIsActivated={setFormIsActivated}
      />

    </div>
  );
}

export default App;
