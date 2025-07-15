import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";

const Login1 = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [FormSubmitted, SetFormSubmitted] = useState(false);

  const Validation = (e) => {
    e.preventDefault()
    console.log(e);
    if (email.includes(".", "@") && password.length > 6) {
      SetFormSubmitted(true)
      setTimeout(() => {
        SetFormSubmitted(false)
      }, 4000);
    } else {
      alert("Invalid Input Value")
    }
  }

  return (
    <div className='flex-col flex items-center m-3 p-3 rounded-xl shadow-2xl shadow-gray-500'>
      <form onSubmit={Validation} className='h-[180px] flex flex-col items-center text-center gap-3'>
        <div className='flex-col flex items-start'>
          <div className='font-extralight'>
            Email:{" "}
          </div>
          <input required type="email" placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} className='border p-1 shadow-md shadow-gray-500 outline-none rounded-md' />
        </div>
        <div className='flex flex-col  items-start'>
          <div className='font-extralight'>
            Password:{" "}
          </div>
          <input required type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} className='border p-1 shadow-md shadow-gray-500 outline-none rounded-md' />
        </div>
        {
          email.length > 5 && password.length > 1 &&
          <button type='submit' className='border shadow-md p-1 shadow-gray-500 font-semibold rounded hover:'>Login</button>
        }
      </form>
      <AnimatePresence>
        {
          FormSubmitted &&
          <motion.div className='p-1 shadow-md shadow-gray-500 rounded-md font-semibold text-pink-500 bg-gray-200 '
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 40 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4, }}
          >
            Form Submitted
          </motion.div>
        }
      </AnimatePresence>
    </div >
  )
}

export default Login1