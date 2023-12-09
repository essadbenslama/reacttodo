
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { TodoList } from './todoList';
import { Add } from './add';
import { Button } from 'react-bootstrap';
import { FilterALL, FilterDONE, FilterUNDONE } from './Redux/todoSlice';


function App() {
  const {todos} = useSelector((state)=> state.todoReducer);
const dispatch=useDispatch();
const{FilterIteams}= useSelector((state)=>state.todoReducer)


console.log(todos);
  return (
    <div className="App">
<h1>To Do List</h1>
      <br/>
      <Button onClick={()=>{dispatch(FilterALL())}}>ALL</Button>
      <Button onClick={()=>{dispatch(FilterDONE())}}>DONE</Button>
      <Button on onClick={()=>{dispatch(FilterUNDONE())}}>UNDONE</Button>
      <br/>
      <br/>
      <br/>
      <br/>
<Add/>

<br/>
<br/>
<br/>

<TodoList 
 todos={
  FilterIteams==="DONE"
  ?todos.filter((el)=>el.isDone===true)
  :FilterIteams==="UNDONE"
  ?todos.filter((el)=>el.isDone===false)
  : todos

  }
  />
<br/>
<br/>
<br/>
 <br/>
    </div>
  );
};

export default App;
