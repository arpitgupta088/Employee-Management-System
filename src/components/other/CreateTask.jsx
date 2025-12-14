import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const taskObj = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false
    };

    const updatedData = userData.map(emp => {
      if (emp.firstName === assignTo) {
        return {
          ...emp,
          tasks: [...emp.tasks, taskObj],
          taskStats: {
            ...emp.taskStats,
            newTask: emp.taskStats.newTask + 1
          }
        };
      }
      return emp;
    });

    setUserData(updatedData);
    localStorage.setItem('employees', JSON.stringify(updatedData));

    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
    setAssignTo('');
    setCategory('');
  };

  return (
    <div className='p-5 bg-[#1c1c1c] rounded-xl mt-10'>
      <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between'>

        <div className='w-[55%]'>
          <div className='mb-5'>
            <h3 className='text-sm text-gray-300 mb-1'>Task Title</h3>
            <input
              value={taskTitle}
              onChange={e => setTaskTitle(e.target.value)}
              className='text-sm py-2 px-3 w-full rounded bg-transparent border border-gray-600 outline-none'
              type='text'
            />
          </div>

          <div className='mb-5'>
            <h3 className='text-sm text-gray-300 mb-1'>Date</h3>
            <input
              value={taskDate}
              onChange={e => setTaskDate(e.target.value)}
              type="date"
              className='text-sm py-2 px-3 w-full rounded bg-transparent border border-gray-600 outline-none'
            />
          </div>

          <div className='mb-5'>
            <h3 className='text-sm text-gray-300 mb-1'>Assign to</h3>
            <input
              value={assignTo}
              onChange={e => setAssignTo(e.target.value)}
              type="text"
              className='text-sm py-2 px-3 w-full rounded bg-transparent border border-gray-600 outline-none'
            />
          </div>

          <div className='mb-5'>
            <h3 className='text-sm text-gray-300 mb-1'>Category</h3>
            <input
              value={category}
              onChange={e => setCategory(e.target.value)}
              type="text"
              className='text-sm py-2 px-3 w-full rounded bg-transparent border border-gray-600 outline-none'
            />
          </div>
        </div>

        <div className='w-[40%] flex flex-col items-start'>
          <h3 className='text-sm text-gray-300 mb-1'>Description</h3>
          <textarea
            value={taskDescription}
            onChange={e => setTaskDescription(e.target.value)}
            className='w-full h-48 text-sm p-3 rounded bg-transparent border border-gray-600 outline-none'
          />
        </div>

        <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-7 w-full'>
          Create Task
        </button>

      </form>
    </div>
  );
};

export default CreateTask;
