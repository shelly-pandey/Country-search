 import React from 'react';
 import Table from "react-bootstrap/Table";

 import { Link } from 'react-router-dom';
 import LanguagesList from '../languageList/LanguagesList'; 
 
 import './CountryTable.css';
 import { useSelector, useDispatch } from "react-redux";
 import { Button } from 'react-bootstrap';
import { addToCartCountry } from '../../redux/reducer/action';

 export default function CountryTab() {

  const dispatch = useDispatch();
 const filteredCountries = useSelector((state) => state.countryReducer.filteredCountries);
 let total = useSelector((state) => state.cartReducer.cartCountries.length);

   return ( 
  <Table striped bordered hover>
  <thead>
    <tr>
      <th>Flag</th>
      <th>Name</th>
      <th>Population</th>
      <th>Languages</th>
      <th>Region</th>
      <th><Link to={`/cart`}><Button variant="dark">Go to cart {total}</Button>{' '} </Link></th>
    </tr>
  </thead>
  <tbody>,
      {filteredCountries && filteredCountries.map((country)=> (
    <tr key={country.name.official}>
      <td> <img className='flag' src={country.flags['png']} alt=''></img> </td>
      <td>
        <Link to={`/detail/${country.name.common}`}>{country.name.common}</Link>
      </td>
      <td>{country.population}</td>
      <td><LanguagesList languages={country.languages}></LanguagesList></td>
      <td>{country.region}</td>
      <td><Button onClick={() => dispatch(addToCartCountry(country))} value={country.name.common} variant="secondary">Add to Cart</Button></td>
    </tr>
))}
  
  </tbody>
</Table>

   );
 }