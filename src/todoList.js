import React from 'react'
import { Todo } from './todo'

export const TodoList = ({todos}) => {
    
  return (
    <div>
    {todos.map((el)=>( 
    <Todo todoInfo={el} key={el.id}/>
    ))} 

    </div>
  )
}
