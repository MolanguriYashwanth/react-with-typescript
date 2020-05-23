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

  const todoDeleteHandler = (todoId:string)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter((todo)=>todo.id!==todoId);
    })
  }
  return (
    <div className="App">
      <NewTodo handler={todoHandler}/>
      <Todolist deleteHandler={todoDeleteHandler} items={todos}/>
    </div>
  );
}

export default App;
