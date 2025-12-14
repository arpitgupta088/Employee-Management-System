import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {

  const [employees] = useContext(AuthContext);

  if (!employees || employees.length === 0) return null;

  return (
    <div className='p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl mt-6 shadow-2xl border border-slate-700'>

      <div className='bg-gradient-to-r from-indigo-500 to-purple-600 mb-3 py-3 px-5 flex justify-between rounded-lg shadow-md'>
        <h2 className='w-1/5 font-bold text-white text-lg'>Employee Name</h2>
        <h3 className='w-1/5 font-bold text-white text-lg'>New Task</h3>
        <h5 className='w-1/5 font-bold text-white text-lg'>Active Task</h5>
        <h5 className='w-1/5 font-bold text-white text-lg'>Completed</h5>
        <h5 className='w-1/5 font-bold text-white text-lg'>Failed</h5>
      </div>

      <div className='overflow-auto'>
        {employees.map((emp, idx) => (
          <div
            key={idx}
            className='bg-slate-700 hover:bg-slate-600 mb-2 py-3 px-5 flex justify-between rounded-lg'
          >
            <h2 className='w-1/5 text-white font-medium'>
              {emp.firstName}
            </h2>

            <h3 className='w-1/5 text-cyan-400 font-semibold'>
              {emp.taskStats?.newTask || 0}
            </h3>

            <h5 className='w-1/5 text-amber-400 font-semibold'>
              {emp.taskStats?.active || 0}
            </h5>

            <h5 className='w-1/5 text-emerald-400 font-semibold'>
              {emp.taskStats?.completed || 0}
            </h5>

            <h5 className='w-1/5 bg-rose-600 text-white font-semibold rounded px-2 py-1 text-center'>
              {emp.taskStats?.failed || 0}
            </h5>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AllTask;
