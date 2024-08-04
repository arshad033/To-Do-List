import React, { useState } from "react";
import { ImCross } from "react-icons/im";

function Tasks({task, handleCheck, deleteTask}) {

  return (
    <>
      {task.map((items, index) => (
        <div className="bg-indigo-100 h-10 w-72 rounded-xl flex p-3 mt-3 relative items-center gap-4 backdrop-blur-3xl " key={index}>
          <input type="checkbox" onChange={()=>handleCheck(index)} className="scale-150"/>
          <div className="w-48 h-6 overflow-x-auto overflow-y-hidden scrollbar-hide hover:border-r-2 rounded-sm">
          <h1 className={` w-max text-md ${items.check?'line-through':''} font-semibold text-black`}>{items.currentTask}</h1>
          </div>
          <button className="absolute right-5" onClick={()=>deleteTask(index)}>
            <ImCross />
          </button>
        </div>
      ))}
    </>
  );
}

export default Tasks;
