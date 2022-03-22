import React from 'react';
import { useParams } from 'react-router-dom';

export default function CountryDetail() {

    const {name} = useParams()
  return <div>Country Details : {name} </div>;

}