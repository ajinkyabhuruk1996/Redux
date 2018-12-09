import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './views/MainView';
import MainView from './views/MainView';
import {Provider} from 'react-redux';
import store from './Store';
//import { applyMiddleware } from 'C:/Users/User/AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
//import { createStore } from 'C:/Users/User/AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
//import { createStore , applyMiddleware} from 'redux';
 
//const store = createStore( ()=> [ ] , {} , applyMiddleware() );


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
            <MainView />
      </div>
      </Provider>
    );
  }
}

export default App;
