import React from 'react';


import {inject,observer} from 'mobx-react'

interface CounterStore{
    decrement:()=>void;
    increment: () => void;
    count:number;

}

const counter: React.FC<CounterStore> = (props) =>{
        return (
            <div>
                <button onClick={props.increment}>Increment</button>
                <span data-testid="count">
                    {props.count}
                </span>
                <button onClick={props.decrement}>Decrement</button>

            </div>
        )
}

export default inject('CounterStore')(observer(counter));