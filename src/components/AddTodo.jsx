import React,{ useState} from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'

const AddTodo = () => {
    const [input, setInput]= useState('')
    const dispatch= useDispatch()

    const addTodoHandler = (e)=>{
        e.preventDefault
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <form  onSubmit={addTodoHandler}>
    <div className="mb-4">
      <label for="input" className="block text-sm font-medium text-gray-700">Input Field</label>
      <input type="text" id="input" name="input" className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300" value={input} onChange={(e)=>setInput(e.target.value)}/>
    </div>
    <button type="submit" className="w-full bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300">Submit</button>
  </form>
  )
}

export default AddTodo