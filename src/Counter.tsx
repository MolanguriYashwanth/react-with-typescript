import React,{useState,useContext} from 'react';
import {observer} from 'mobx-react';
import {CounterStoreContext} from './CounterStore';
const Counter = observer(() => {
    // const [count,setCount] = useState(0);
    // return (
    //     <div>
    //         <button onClick={()=>setCount((prevValue)=>prevValue-1)}>SUBTRACT</button>
    //         <p>{count}</p>
    //         <button onClick={()=>setCount((prevValue)=>prevValue+1)}>ADD</button>
    //     </div>
    // );
    const counterStore = useContext(CounterStoreContext); 
    return(
        <div>
            <button onClick={()=>counterStore.counter--}>SUBTRACT</button>
            <p>{counterStore.counter}</p>
            <button onClick={()=>counterStore.counter++}>ADD</button>
        </div>
    )

})

export default Counter;