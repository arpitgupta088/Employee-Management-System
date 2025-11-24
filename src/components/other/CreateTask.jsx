import React from 'react';

const CreateTask = () => {
  return (
         <div className='p-5 bg-[#1c1c1c] rounded-xl mt-10'>
        <form className='flex flex-wrap w-full items-start justify-between'>

          {/* LEFT SIDE */}
          <div className='w-[55%]'>
            <div className='mb-5'>
              <h3 className='text-sm text-gray-300 mb-1'>Task Title</h3>
              <input
                className='text-sm py-2 px-3 w-full rounded bg-transparent border border-gray-600 outline-none'
                type='text'
                placeholder='Make a UI design'
              />
            </div>

            <div className='mb-5'>
              <h3 className='text-sm text-gray-300 mb-1'>Date</h3>
              <input
                type="date"
                className='text-sm py-2 px-3 w-full rounded bg-transparent border border-gray-600 outline-none'
              />
            </div>

            <div className='mb-5'>
              <h3 className='text-sm text-gray-300 mb-1'>Assign to</h3>
              <input
                type="text"
                placeholder='employee name'
                className='text-sm py-2 px-3 w-full rounded bg-transparent border border-gray-600 outline-none'
              />
            </div>

            <div className='mb-5'>
              <h3 className='text-sm text-gray-300 mb-1'>Category</h3>
              <input
                type="text"
                placeholder='design, dev, etc'
                className='text-sm py-2 px-3 w-full rounded bg-transparent border border-gray-600 outline-none'
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className='w-[40%] flex flex-col items-start'>
            <h3 className='text-sm text-gray-300 mb-1'>Description</h3>
            <textarea
              cols="30"
              rows="10"
              className='w-full h-48 text-sm p-3 rounded bg-transparent border border-gray-600 outline-none'
            ></textarea>
          </div>

          {/* BUTTON */}
          <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-7 w-full'>
            Create Task
          </button>

        </form>
      </div>
  );
};

export default CreateTask;
