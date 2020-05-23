import React,{useCallback,useState} from 'react';
import Todolist from './components/Todolist';
import NewTodo from './components/NewTodo';
import TodoModel from "./todo.model";
function App() {
  const [todos,setTodos]= useState<TodoModel[]>([]);
  const todoHandler =useCallback( (text:string)=>{
    const newTodo = {
      id:Math.random().toString(),
      text:text
    }
    setTodos((prevTods)=>[...prevTods,newTodo])
  },[])
  return (
    <div className="App">
      <NewTodo handler={todoHandler}/>
      <Todolist items={todos}/>
    </div>
  );
}

export default App;
