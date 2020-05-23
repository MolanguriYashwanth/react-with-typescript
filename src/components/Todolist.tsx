import React from 'react';
import './Todolist.css';
interface TodolistProps {
    items: { id: string, text: string }[],
    deleteHandler: (todoId: string) => void;
}
const Todolist: React.FC<TodolistProps> = React.memo((props) => {
    return (
        <ul>
            {
                props.items.map((todo) => 
                <li key={todo.id}>
                    <span>{todo.text}</span>
                    <button onClick={()=>props.deleteHandler(todo.id)}>Delete</button>
                </li>)
            }
        </ul>
    );
})

export default Todolist;