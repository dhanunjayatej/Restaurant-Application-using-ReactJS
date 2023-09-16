import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Orders from './Orders';
import Header from './Container/Header';
import Table from './Container/Table';
import Filter from './Container/Filter';
import Card from './Container/Card';
import Pagenotfound from './Pagenotfound';
const Home = () => {
  return (
    <div>
      <Header />
      <Table />
      <Filter />
      <Card />
      
 { /* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='*' element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
  */}
    </div>
  )
}

export default Home;
