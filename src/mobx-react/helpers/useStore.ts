import { useContext } from 'react';
import { StoreContext } from './storeProvider';
import {TodoList} from "../stores/TodoList";

export const useStore = (): TodoList => useContext(StoreContext);