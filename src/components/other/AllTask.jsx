import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {

    const authData = useContext(AuthContext);

  return (
    <div className='p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl mt-6 shadow-2xl border border-slate-700' >
        <div className='bg-gradient-to-r from-indigo-500 to-purple-600 mb-3 py-3 px-5 flex justify-between rounded-lg shadow-md'>
            <h2 className='w-1/5 font-bold text-white text-lg'>Employee Name</h2>
            <h3 className='w-1/5 font-bold text-white text-lg'>New Task</h3>
            <h5 className='w-1/5 font-bold text-white text-lg'>Active Task</h5>
            <h5 className='w-1/5 font-bold text-white text-lg'>Completed</h5>
            <h5 className='w-1/5 font-bold text-white text-lg'>Failed</h5>
        </div>
        <div className='overflow-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800'>
        {authData.employees.map(function(elem, idx){
            return <div key={idx} className='bg-slate-700 hover:bg-slate-600 mb-2 py-3 px-5 flex justify-between rounded-lg shadow-sm transition-all duration-200 hover:shadow-lg'>
            <h2 className='w-1/5 text-white font-medium'>{elem.firstName}</h2>
            <h3 className='w-1/5 text-cyan-400 font-semibold'>{elem.taskStats.newTask}</h3>
            <h5 className='w-1/5 text-amber-400 font-semibold'>{elem.taskStats.active}</h5>
            <h5 className='w-1/5 text-emerald-400 font-semibold'>{elem.taskStats.completed}</h5>
            <h5 className='w-1/5 bg-rose-600 text-white font-semibold rounded px-2 py-1 text-center'>{elem.taskStats.failed}</h5>
        </div>
        })}
        </div>



    </div>
  );
};

export default AllTask;
