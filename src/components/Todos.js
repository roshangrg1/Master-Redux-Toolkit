import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'
const Todos = () => {
  const todos = useSelector(state => state.todos)
  console.log(todos)
  const dispatch= useDispatch()
  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => (
        <ul className='list-none  '>
          <li className='list-none bg-black w-[100vw] flex gap-[300px]'>
              <div className='   text-white' key={todo.id}>{todo.text}</div>
              <button onClick={()=> dispatch(removeTodo(todo.id))} className='text-white bg-red-500 rounded-lg'>X</button>
          </li>
          
        </ul>
      ) )}
    </>

  )
}

export default Todos