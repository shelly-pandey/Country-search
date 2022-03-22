import { CountryActions } from "./action";
import { Country } from "./types";

type InitialState = {
  countries : Country[]
  filteredCountries : Country[]

}

const initialState :InitialState= {
    countries: [],
    filteredCountries: [],
  };

  export default function countryReducer(state = initialState, action:CountryActions):InitialState {
    switch (action.type) {
      case "GET_COUNTRIES": {
        return {
          ...state,
          countries: action.payload.countries,
          filteredCountries:action.payload.countries
        };
      }

      case "GET_FILTERED_COUNTRIES": {
        let countries = state.countries.filter((country) => {
            return (          
              country.name.common.toLocaleLowerCase()
                .indexOf(action.payload.keyword.toLocaleLowerCase()) !== -1
            )});


        return {
          ...state,
          filteredCountries: countries
        };
      }
      
      default:
        return state;
    }
  }
  