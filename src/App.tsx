import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom"
import Navbar from "./components/navbar/navbar";
import './App.css';
const CurrencyConverter = React.lazy(()=> import('./pages/currency-converter'));
const ExchangeRates = React.lazy(()=> import('./pages/exchange-rates'));



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
         <Route index element={ <React.Suspense fallback={<div style={{marginTop: '10%'}}>
          loading...</div>}>
           <CurrencyConverter /> 
         </React.Suspense> }  />          
         <Route path="/exchange" element={<React.Suspense fallback={<div  style={{marginTop: '10%'}}>Loading...</div>}>
            <ExchangeRates />
         </React.Suspense>  }  />
      </Switch>
    </Router >
  );
}

export default App;
