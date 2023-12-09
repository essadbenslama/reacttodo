import Button from 'react-bootstrap/Button';
import React from 'react'
import { compliteTodo, deleteTodo, editTodo } from './Redux/todoSlice'
import { useDispatch } from 'react-redux'
import { UpdateTodo } from './UpdateTodo'

export const Todo = ({todoInfo}) => {

   const dispatch=useDispatch()
   const editHandler=(e)=>{
    e.preventDefault();
    dispatch(editTodo(todoInfo.id));
   };
   const deleteHandler=(e)=>{
    e.preventDefault();
    dispatch(deleteTodo(todoInfo.id))
   }
   const complitTodoHandler=(e)=>{
e.preventDefault();
dispatch(compliteTodo(todoInfo.id))
   }

  return (
    <div>

{todoInfo.isDone ? <h3 style={{textDecoration:'line-through'}}>{todoInfo.task}</h3> : <h3>{todoInfo.task}</h3>}
{todoInfo.isEdited && <UpdateTodo todoTask={todoInfo.task} todoid={todoInfo.id}/>}
<Button onClick={complitTodoHandler}>{todoInfo.isDone? "Undone": "Done"}</Button>
<Button onClick={editHandler}>Edit</Button>
<Button onClick={deleteHandler}>delete</Button>

    </div>
  )
}
