import React from 'react';
interface TodolistProps {
    items:{id:string,text:string}[]
}
const Todolist: React.FC<TodolistProps> = React.memo((props) => {
    return (
        <ul>
            {
                props.items.map((todo) => <li key={todo.id}>{todo.text}</li>)
            }
        </ul>
    );
})

export default Todolist;