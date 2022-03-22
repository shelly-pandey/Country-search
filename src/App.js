import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './components/home/Home';
import CountryDetail from './components/details/CountryDetails';

import { useDispatch } from "react-redux";
import { fetchCountries } from './redux/reducer/action';
import { useEffect } from "react";
import Cart from './components/shopping/Cart';

import './App.css';


function App() {

  const dispatch = useDispatch();
  
  useEffect(()=> {
    dispatch(fetchCountries());
 }, [dispatch]);

 return (
    
   
    <BrowserRouter>
     <Routes>
      
       <Route path="/" element={<Home/>} />
       <Route path="/detail/:name" element={<CountryDetail />} />
       
       <Route path="/cart" element={<Cart/>} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
