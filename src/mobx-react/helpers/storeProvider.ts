
import { createContext } from 'react';
import {TodoList} from "../stores/TodoList";

export const StoreContext = createContext<TodoList>({} as TodoList);
export const StoreProvider = StoreContext.Provider;