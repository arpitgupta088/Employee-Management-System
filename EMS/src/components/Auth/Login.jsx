import React from 'react'

const Login = () => {
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Submitted")
    }
  return (
    <div className="flex h-screen w-screen items-center justify-center">
        <div className="border-2 rounded-xl border-emerald-600 p-20">
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }
            }
            className='flex flex-col items-center justify-center'>
                <input required className="text-black outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400"type="email" placeholder="Enter your email" />
                <input required className="text-black outline-none bg-transparent border-2 mt-3 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400" type="password" placeholder="Enter your password" />
                <button className="mt-5 text-white outline-none border-2 bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-black">Log in</button>
            </form>
        </div>
    </div>
  )
}
export default Login