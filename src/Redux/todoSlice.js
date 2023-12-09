import { createSlice } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from 'uuid';

const todoSlice=createSlice({
    name:"todos",
    initialState:{ todos: [{id:uuidv4(),task:"learn js",isEdited:false,isDone:false,}],
FilterIteams:"ALL",
},
    reducers:{
        addTodo:(state,action)=>{
            state.todos=[...state.todos,action.payload]
        },
        deleteTodo:(state,action)=>{
            state.todos=state.todos.filter((el)=>el.id!==action.payload);
        },
        editTodo:(state,action)=>{
            state.todos.map((el)=>el.id===action.payload?(el.isEdited= !el.isEdited):el.isEdited);
        },
        compliteTodo:(state,action)=>{
            state.todos.map((el)=>el.id===action.payload?(el.isDone =!el.isDone):el.isDone);
        },
        updateTodo:(state,action)=>{
            state.todos.map((el)=>el.id===action.payload.id ? (el.task=action.payload.task):el.task);
        },
        FilterALL:(state)=>{state.FilterIteams="ALL"},
        FilterDONE:(state)=>{state.FilterIteams="DONE"},  
        FilterUNDONE:(state)=>{state.FilterIteams="UNDONE"},
    },
});
export default todoSlice.reducer;
export const {addTodo,editTodo,updateTodo,deleteTodo,compliteTodo,FilterALL,FilterDONE,FilterUNDONE} =todoSlice.actions