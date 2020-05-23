import React,{useRef} from 'react';
interface NewTodoProps {
    handler:(todoText:string)=>void
}
const NewTodo:React.FC<NewTodoProps> = React.memo((props) => {
    const textInputRef = useRef<HTMLInputElement>(null);
    const onSubmitHandler = (event:React.FormEvent)=>{
            event.preventDefault();
            const enteredText = textInputRef.current!.value;
            props.handler(enteredText);
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor='todo-input'>Todo Text</label>
                <input id="todo-input" type="text" ref={textInputRef}/>
            </div>
            <button type="submit">ADD TODO</button>
        </form>
    );
})

export default NewTodo;