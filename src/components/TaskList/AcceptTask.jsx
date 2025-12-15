import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AcceptTask = ({ task, index }) => {
  const [userData, setUserData]= useContext(AuthContext);
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const updateStatus = (status)=>{
    const updatedEmployees = userData.map(emp => {
      if(emp.email !== loggedInUser.data.email) return emp;

      const updatedTasks = emp.tasks.map((t,i)=>{
        if(i!==index) return t;

        return{
          ...t,
          newTask:false,
          active:false,
          completed:status === "completed",
          failed: status === "failed"
        }
      })
      return{...emp, tasks:updatedTasks};
    })
    setUserData(updatedEmployees);
  }

  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-gray-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {task.category}
        </h3>
        <h4 className="text-sm">{task.taskDate}</h4>
      </div>

      <h2 className="mt-5 text-2xl font-semibold">{task.taskTitle}</h2>

      <p className="text-sm mt-2">
        {task.taskDescription}
      </p>

      <div className='flex justify-between mt-4'>
        <button onClick={()=>updateStatus("completed")} className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
        <button onClick={()=>updateStatus("failed")} className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
      </div>
    </div>
  )
}

export default AcceptTask
