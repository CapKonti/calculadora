import Inicio from "./components/CalculadoraApp";
import React from 'react';
import './App.css';
import {store} from './redux/store'
import {Provider} from 'react-redux'
function App() {
  return (

      <React.Fragment>  
      <Provider store={store}>
      <Inicio/>  
      </Provider>
    </React.Fragment>
     
       
  );
}

export default App;
