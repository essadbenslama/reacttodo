import React from 'react';
import {Button,Form} from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './Redux/todoSlice';
import { v4 as uuidv4 } from 'uuid';

export const Add = () => {

    const dispatch=useDispatch();
    const [newTodo,setNewTodo]=useState("");
    const changeHandler=(e)=>{
setNewTodo( e.target.value)
};

const addHandler=(e)=>{
    e.preventDefault();
    dispatch(addTodo({task:newTodo , id:uuidv4() ,isEdited:false,isDone:false,}))
    setNewTodo("");
}

  return (
    <div>
 <Form  onSubmit={addHandler}> 
 <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter your to do" 
        onChange={changeHandler}
        value={newTodo}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>



    </div>
  )
}
