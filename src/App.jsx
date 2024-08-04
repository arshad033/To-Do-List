import React, { useState } from "react";
import Task from "./components/Task";
function App() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState("");
  const handleclick = () => {
    setTasks((prev) => {
      return currentTask === ''?[...prev]:[...prev, { currentTask, check: false }];
    });
    setCurrentTask("");
  };
const handleCheck = (currentIndex)=>{
  return setTasks(()=>{
    return tasks.map((item, index)=> index === currentIndex ?{...item, check: !item.check} :item)
  })
}
const deleteTask = (ind)=>{
    return setTasks(()=> tasks.filter((item, index)=> index !== ind))  
}

  return (
    <div
      style={{
        backgroundImage: `url(${"https://i.redd.it/g4crddfnmt9a1.jpg"})`,
      }}
      className="text-white h-screen w-full flex items-center justify-center bg-no-repeat bg-cover bg-center"
    >
      <div className="p-5 h-4/5  shadow-2xl border-2 backdrop-blur-md rounded-xl flex flex-col items-center justify-center">
        <div className="h-1/3 w-full flex flex-col items-center">
          <h1 className="text-white drop-shadow-3xl font-bold p-5 text-2xl">
            What's the plan for today
          </h1>
          <div className="mt-2 w-fit border-2 border-indigo-400 rounded-sm">
            <input
              value={currentTask}
              onChange={(event) => {
                setCurrentTask((event.target.value));
              }}
              type="text"
              className="py-2 px-5 text-black placeholder:italic placeholder:text-slate-400"
              placeholder="Add a task..."
            />
            <button
              onClick={handleclick}
              className="bg-indigo-400 text-white py-2 px-5 font-bold"
            >
              Add
            </button>
          </div>
        </div>
        <div className="w-full h-3/5 rounded-xl mt-5 overflow-y-auto overflow-x-hidden text-black flex flex-col items-center scrollbar-hide">
          <Task task={tasks} handleCheck={handleCheck} deleteTask={deleteTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
