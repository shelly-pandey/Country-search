import React from "react";
import CountryTab from "../countryTable/CountryTable";
import Search from "../search/Search";
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { getFilteredCountries } from "../../redux/reducer/action";



export default function Home() {

  let { keyword } = useSelector((state) => state.countryReducer);
  const dispatch = useDispatch();

  const handleChange = useCallback(
    (event) => {
      let newKeyword = event.target.value;

      dispatch(getFilteredCountries(newKeyword));
    },
    [dispatch]
  );

  return (
    <div>
      <Search handleChange={handleChange} value={keyword}  />
      <CountryTab/>
    </div>
  );
}
