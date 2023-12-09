import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {editTodo, updateTodo } from './Redux/todoSlice'

export const UpdateTodo = ({todoTask,todoid}) => {
    const [updatedtask,setUpdatedTask]=useState(todoTask);
    const dispatch=useDispatch()
const changeHandler=(e)=>{ 
setUpdatedTask(e.target.value);
};
const updatedHandler=()=>{
    dispatch(updateTodo( {id:todoid,task:updatedtask}));
    dispatch(editTodo(todoid))
}

  return (
    <div>

<Form onSubmit={updatedHandler}> 
 <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text"
        defaultValue={todoTask}
        onChange={changeHandler}
       />
      </Form.Group>

      <Button  type="submit" variant="dark" >
        Update
      </Button>

    </Form>

    <Button onClick={()=>{dispatch(editTodo(todoid));
    }} variant="dark">
    Cancel
      </Button>

    </div>
  )
}
