import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from '../redux/reducer/rootReducer';

const storeFactory = () => {
     const middleware = [thunk];
     const reduxStore = createStore(
       rootReducer,
       composeWithDevTools(
         applyMiddleware(...middleware)
         
       )
     );

     return reduxStore;
}



export default storeFactory;