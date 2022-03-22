import { useSelector, useDispatch } from "react-redux";
import { Table } from "react-bootstrap";
import { Button } from 'react-bootstrap';  
import React from 'react';
import { deleteALLFromCart } from "../../redux/reducer/action";
import { deleteFromCart } from "../../redux/reducer/action";
  export default function Cart() {

    const cart = useSelector((state) => state.cartReducer.cartCountries);
    const dispatch = useDispatch();

    return (
      <div>
        
   <Table striped bordered hover>
  <thead>
    <tr>
      <th> Name</th>
      <th> Flag</th>
      <th> <Button onClick={() => dispatch(deleteALLFromCart())}variant="secondary">Delete All</Button> </th>
    </tr>
  </thead>
  <tbody>
  { cart && cart.map((country) => (
          
    <tr key={country.name.official}>
      <td>{country.name.common}</td>
      <td><img className='flag' src={country.flags['png']} alt=''></img></td>
      <td><Button onClick={() => dispatch(deleteFromCart(country))} value={country.name.common} variant="secondary">Delete Country</Button></td>
    </tr>
   ))}
  </tbody>
</Table>
  </div>
    );
  }