// import React,{useCallback,useState} from 'react';
// import Todolist from './components/Todolist';
// import NewTodo from './components/NewTodo';
// import TodoModel from "./todo.model";
// function App() {
//   const [todos,setTodos]= useState<TodoModel[]>([]);
//   const todoHandler =useCallback( (text:string)=>{
//     const newTodo = {
//       id:Math.random().toString(),
//       text:text
//     }
//     setTodos((prevTods)=>[...prevTods,newTodo])
//   },[])

//   const todoDeleteHandler = (todoId:string)=>{
//     setTodos((prevTodos)=>{
//       return prevTodos.filter((todo)=>todo.id!==todoId);
//     })
//   }
//   return (
//     <div className="App">
//       <NewTodo handler={todoHandler}/>
//       <Todolist deleteHandler={todoDeleteHandler} items={todos}/>
//     </div>
//   );
// }

// export default App;

// import React, { Component } from 'react';
// import { SetupRootStore } from "./mst/setup";
// import { Provider } from 'mobx-react';
// import Employer from "./components/Employer";
// interface Props {

// }
// interface State {
//   rootTree: any
// }
// class App extends Component<Props, State> {

//   constructor(props: Props) {
//     super(props);
//     this.state = {
//       rootTree: null
//     }
//   }

//   componentDidMount() {
//     const { rootTree } = SetupRootStore();
//     this.setState({ rootTree: rootTree })
//   }
//   render() {
//     const {rootTree} = this.state;
//     if (!rootTree) return null
//     return (
//       <Provider rootTree={rootTree}>
//         <Employer/>
//       </Provider>

//     );
//   }
// }

// export default App;


import React from 'react';
// import Counter from "./Counter";
import { TodoList } from "./mobx-react/components/TodoList";
import { TodoNew } from "./mobx-react/components/TodoNew";

const App = () => {
  return (
    <div>
      <TodoNew />
      <TodoList />
    </div>

  );
}

export default App;
