import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import CompleteTask from './CompleteTask';

const NewTask = ({ task, index }) => {

  const [userData, setUserData] = useContext(AuthContext);
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const acceptTask = () => {
    const updatedEmployees = userData.map(emp => {
      if(emp.email !== loggedInUser.data.email) return emp;

      const updatedTasks = emp.tasks.map((t,i)=>{
        if(i !== index) return t;

        return{
          ...t,
          newTask:false,
          active: true,
          completed: false,
          failed: false
        }
    })
    return{...emp,tasks: updatedTasks};
  });
  setUserData(updatedEmployees);
  };

  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{task.category}</h3>
          <h4 className="text-sm">{task.taskDate}</h4>
        </div>

        <h2 className="mt-5 text-2xl font-semibold">{task.taskTitle}</h2>

        <p className="text-sm mt-2">{task.taskDescription}</p>

        <div className='mt-4'>
            <button onClick={acceptTask} className='bg-black text-white px-3 py-1'>Accept Task</button>
        </div>
    </div>
  )
}

export default NewTask
