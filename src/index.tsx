import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {TodoList} from "./mobx-react/stores/TodoList";
import {StoreProvider} from "./mobx-react/helpers/storeProvider";


const todoList = new TodoList([
  'Should Starting Writing in React',
  'Should Learn MobX',
  'Should Watch Once Piece :)'
]);

ReactDOM.render(
  <React.StrictMode>
        <StoreProvider value={todoList}>
    <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

