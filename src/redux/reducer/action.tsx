import { Dispatch } from "redux";
import { Country } from "./types";

type GetCountries = {

  type: "GET_COUNTRIES",
  payload: {
    countries: Country[]


  }


}

export function getCountries(countries: Country[]): GetCountries {
  console.log('2 ' + countries);
  return {
    type: "GET_COUNTRIES",
    payload: {
      countries
    }
  };
}




export function fetchCountries() {
  console.log('1 ');
  return (dispatch: Dispatch) => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => dispatch(getCountries(data)));
  };
}


export function getFilteredCountries(keyword: any): FilteredCountriesAction {
  return {
    type: "GET_FILTERED_COUNTRIES",
    payload: {
      keyword
    }
  };
}

type FilteredCountriesAction = {

  type: "GET_FILTERED_COUNTRIES",

  payload: {
    keyword: String

  }


}




export function addToCartCountry(country: Country): AddToCartAction {
  return {
    type: "ADD_TO_CART",
    payload: {
      country,

    }
  }
}
type AddToCartAction = {

  type: "ADD_TO_CART",
  payload: {
    country: Country

  }
}




export function deleteFromCart(country: Country): DeleteFromCartAction {
  return {

    type: "DELETE_FROM_CART",
    payload: { country }


  }
}


type DeleteFromCartAction = {

  type: "DELETE_FROM_CART",

  payload: { country: Country }


}

export function deleteALLFromCart(): DeleteAllFromCart {
  return {

    type: "DELETE_ALL_FROM_CART",


  }
}


type DeleteAllFromCart = {


  type: "DELETE_ALL_FROM_CART",



}

export type CountryActions = GetCountries | DeleteAllFromCart | DeleteFromCartAction | AddToCartAction | FilteredCountriesAction