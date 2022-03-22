
import { CountryActions } from "./action";
import { Country } from "./types";



type InitialState = {
   country : Country[]
   cartCountries : Country[]

}

const initialState : InitialState = {
    country : [],
    cartCountries : []
};




export default function cartReducer (state = initialState, action:CountryActions):InitialState {

    switch(action.type) {
      case "ADD_TO_CART": {
        let cartItems = state.cartCountries.map(country => country.name.common);
        
        return {
          ...state,
          cartCountries:  cartItems.includes(action.payload.country.name.common) ? state.cartCountries : [...state.cartCountries, action.payload.country],
        };
      }

      case "DELETE_ALL_FROM_CART":{

        return {
          ...state,
          cartCountries: [],
        };
      }
        case "DELETE_FROM_CART" :{
          let cartItems = state.cartCountries.filter(country => country.name.common !== action.payload.country.name.common);
          
          return {
            ...state,
            cartCountries: cartItems
          };

      }


      default:
        return state;
    }
    

}