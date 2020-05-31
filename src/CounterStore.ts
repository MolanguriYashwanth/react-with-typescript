import {createContext} from 'react';
import { observable } from 'mobx';

class CounterStore {
    @observable counter =0;   
}

export const CounterStoreContext = createContext(new CounterStore());