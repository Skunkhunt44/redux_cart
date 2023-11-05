import React, { useState } from 'react'

function MultipleInputs() {

const[user,setUsers]=useState({
    name:'',
    email:'',
    password:'',
})


const handleChange=(e)=>{
    setUsers({...user,[e.target.name]:e.target.value})
}

const handleSubmit=(e)=>{[
e.preventDefault()
]}


  return (
    <div className='bg-white'>
        <form action="" className='bg-gray-300 w-[300px] m-auto p-10' onSubmit={handleSubmit}>
        <h1>Multiple Inputs</h1>
            <label  htmlFor="name" className='block'>Name:</label>
            <input className='w-full' type="text" value={user.name} name='name'
            onChange={handleChange}/>
            <label htmlFor="Email" className='block'>Email:</label>
            <input className='w-full' value={user.email} name='email'
             onChange={handleChange}
             type="email" />
            <label htmlFor="password" className='block'>Password</label>
            <input className='w-full' value={user.password} name='password'
            onChange={handleChange}
             type="password" id="" />


            <button type='submit' className='bg-blue-700 text-white py-1 w-full px-2 block rounded-md mt-5'>Submit</button>
        </form>
    </div>
  )
}

export default MultipleInputs