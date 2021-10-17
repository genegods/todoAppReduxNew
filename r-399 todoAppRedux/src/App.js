import React from 'react';
import './App.css';
import TodoApp from './components/TodoApp'
import {store} from './redux/store'
import {Provider} from 'react-redux'


function App() {
  return (

    <React.Fragment >
      <Provider store={store}>
      <TodoApp/>
      </Provider>
 
      
    </React.Fragment>
     
       
  
  );
}

export default App;
