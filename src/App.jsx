import { useState } from "react";
import { ProjectForm } from "./components/ProjectForm";
import { SideBar } from "./components/sidebar";
function App() {
  const [formIsActivated,setFormIsActivated]=useState(false)
  
  return (
    <>
      <SideBar 
         formIsActivated={formIsActivated}
         setFormIsActivated={setFormIsActivated}
      />
      <ProjectForm 
      formIsActivated={formIsActivated}
      setFormIsActivated={setFormIsActivated}
      />

    </>
  );
}

export default App;
