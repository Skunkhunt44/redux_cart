import React, { useState ,useReducer} from 'react'
import { Data } from './Data'

function ControlledInputs() {


const defaultState=()=>{
user:Data
}

const reducer=(state,action)=>{
if (action.type === 'Clear_ist'){
    return {...state,user:[]}
}
}



// const[user,setUser]=useState(Data)
const[state,dispatch]=useReducer(reducer,defaultState)
// const[name,setName]=useState('')
// const[email,setEmail]=useState('')

// const handleChange = (e)=>{

// setName(e.target.value)

// }
// const handleEmailChange = (e)=>{
// console.log(e)
// setName(e.target.value)

// }
// const handleSubmit=(e)=>{
//   e.preventDefault();
//     const fakeId=Date.now()
//     const newUser={id:fakeId,name:name}
//     const updatedUsers=[...user,newUser]
//     setUser(updatedUsers)
//     setName('')
// }
const clearList=()=>{
    dispatch({type:'Clear_List'})
}
const resetList=()=>{
    dispatch({type:'Reset_List'})
}



// const removeUser=(id)=>{
//     const updatedUsers = user.filter(person=> person.id !== id)
//     setUser(updatedUsers)
// }

  return (
    <div>
        <form     action="" className='flex flex-col items-center bg-gray-600 w-[400px] m-auto rounded-md justify-center'>
            <h2>Controlled Inputs</h2>
            {/* <div>
                <label htmlFor="name">Name:</label><br/>
                <input type="text" onChange={handleChange} value={name}
                placeholder='Enter your name'/>
            
                        <button type='submit' className='bg-blue-700 text-white py-1 px-1 rounded-md mt-2 '>Submit</button>
            </div> */}
            {/* <div >
                <label htmlFor="Email">Email:</label><br/>
                <input type="text" onChange={handleEmailChange} 
                placeholder='Enter your email'/>
            </div> */}
            <h1>Users:</h1>
            {
                state.user.map((item)=>{
                    return (
                    <div key={item.id}>
                        <li className='list-none'>{item.name}</li>
                        <button onClick={()=> removeUser(item.id)}
                        className='bg-blue-700 text-white p-1 rounded-md'>Remove</button>
                    </div>
                    )
                })
            }
            <button className='bg-blue-400 p-1 rounded-md text-white'
            onClick={clearList}>Clear</button>
            <button className='bg-blue-400 p-1 rounded-md text-white'
            onClick={resetList}>Clear</button>

        </form>
    </div>
  )
}

export default ControlledInputs