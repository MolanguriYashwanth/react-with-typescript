import React from 'react';
import {fireEvent,render,cleanup} from '@testing-library/react';
import MobCounter from './MobCounter';
import {Provider} from 'mobx-react';
import {observable,action,decorate} from 'mobx';

afterEach(cleanup);

class CounterStore {
    count = 0;
    increment = ()=>{
        this.count+1;
    }
    decrement = ()=>{
        this.count+1;
    }
}
const DecoratedCounterStore = decorate(CounterStore,{
    count:observable,
    increment:action,
    decrement:action
})
it('renders the initial count',()=>{
    const counterStore = new DecoratedCounterStore();
    const {getByTestId,getByText} = render(
        <Provider CounterStore={counterStore}>
            <MobCounter/>
        </Provider>
    )
})