


//import { createStore , applyMiddleware} from 'redux';

import { createStore , applyMiddleware, compose} from 'redux';


import thunk from 'redux-thunk';

import rootReducer from './reducers/reducer';

const intialState= []; // not an object its an array

 const middleware=[thunk]; //means  middle ware is thunk
//const store = createStore( ()=> [ ] , {} , applyMiddleware() ); //without redux i.e simple react app

//const store = createStore(rootReducer , intialState , applyMiddleware(...middleware) );
//now use compose for mulyiple enhancers
const store = createStore(rootReducer ,
                 intialState ,
                 compose(
                      applyMiddleware(...middleware) 
                      //window.__REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()
                    )
                 );


                 //const composeEnhancers =
                 //typeof window === 'object' &&
                 //  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
                 //  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

export default store;