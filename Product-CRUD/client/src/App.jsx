import React from 'react'
import  Navbar from './navbar/Navbar';
import Home from './navbar/Home'
import ProductAdmin from './products/ProductAdmin';
import UpdateProduct from './products/UpdateProduct';
import ProductList from './products/ProductList';
import CreateProduct from './products/CreateProduct';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
const App = () => {
 return <div>
        <Router>
                <Navbar/>
                <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/index" element={<Home/>}/>
                        <Route path="/create" element={<CreateProduct/>}/>
                        <Route path="/admin" element={<ProductAdmin/>}/>
                        <Route path="/products" element={<ProductList/>}/>
                </Routes>
        -</Router>
        </div>
}
export default App;
