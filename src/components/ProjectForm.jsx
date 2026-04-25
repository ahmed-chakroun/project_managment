import { useState } from "react"

export function ProjectForm({formIsActivated,setFormIsActivated}){
    function handlecancelform(){
        setFormIsActivated(false)
    }
    return(
        <div className="flex-1 flex flex-col items-center justify-center h-screen bg-stone-50">
        {formIsActivated ? 
        <div className="w-full max-w-xl px-8">
            <div className="flex justify-end gap-4 mb-6">
                <button onClick={handlecancelform} className="text-stone-500 hover:text-stone-700 text-sm font-medium transition-colors duration-200">cancel</button>
                <button className="bg-stone-800 hover:bg-stone-700 text-white text-sm font-medium py-2 px-5 rounded-lg transition-colors duration-200">save</button>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold tracking-widest text-stone-500 uppercase">title</label>
                    <input type="text" className="w-full bg-stone-200 border-b-2 border-stone-300 focus:border-stone-600 outline-none px-2 py-1 text-sm text-stone-700"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold tracking-widest text-stone-500 uppercase">description</label>
                    <textarea className="w-full bg-stone-200 border-b-2 border-stone-300 focus:border-stone-600 outline-none px-2 py-1 text-sm text-stone-700 h-24 resize-none"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold tracking-widest text-stone-500 uppercase">due date</label>
                    <input type="date" className="w-full bg-stone-200 border-b-2 border-stone-300 focus:border-stone-600 outline-none px-2 py-1 text-sm text-stone-700"/>
                </div>
            </div>
        </div>
        : 
        <div className="flex flex-col items-center gap-4">
            <img src="src/assets/no-projects.png" alt="" className="w-20 h-20 object-contain"/>
            <h1 className="text-2xl font-bold text-stone-700">No project selected</h1>
            <p className="text-stone-400 text-sm">Select a project or get started with a new one</p>
            <button className="bg-stone-800 hover:bg-stone-700 text-stone-300 text-sm font-medium py-2 px-6 rounded-lg transition-colors duration-200 mt-2">create new project</button>
        </div>
        }
        </div>
    )
}