import { combineReducers } from "redux";
import countryReducer from "./countryReducer";
import cartReducer from "./cartReducer";


 const rootReducer = combineReducers({ countryReducer, cartReducer });
 export type rootState =  ReturnType<typeof rootReducer>
 export default rootReducer;

 