import React, { useState } from "react";

function Home() {
  const [pass, setPass] = useState('password')

  function changePass(){
    if(pass ==='password'){
      setPass("text")
    } else{
      setPass('password')
    }
  }
  
  return (
    <div className="flex justify-center items-center min-h-screen text-gray-950">
      <div className="flex flex-col bg-amber-50 p-6 w-full max-w-md space-y-6 rounded-2xl shadow-2xl">
        <h1 className="text-center text-4xl">Login Screen</h1>
        <input className="p-2" type="email" placeholder="Email" />
        <input className="p-2" type={pass} placeholder="Password" />
        <div className="space-y-2 flex justify-between">
          <div className='space-x-2'>
            <input type="checkbox" name="passdisplay" id="passdisplay" onChange={changePass}/>
            <label htmlFor="passdisplay">Show Password</label>
          </div>
          <a className='hover:text-gray-700 transition duration-300' href="#">Forgot your password?</a>
        </div>
        <button className="bg-gray-950 p-3 text-amber-50 cursor-pointer rounded-md hover:bg-gray-800 transition duration-300">Login</button>
        <a className="text-center hover:text-gray-700 transition duration-300" href="#">Sign Up</a>
      </div>
    </div>
  )
}

export default Home;
