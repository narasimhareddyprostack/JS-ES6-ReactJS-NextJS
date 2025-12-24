import React,{useState,useEffect} from 'react'
import Axios from 'axios'
const ProductList = () => {
 let [products,setProducts]=useState([]);
 useEffect(()=>{
  Axios.get('http://127.0.0.1:5000/api/products')
       .then((resp)=>{setProducts(resp.data)})
       .catch()
 },[])
  return <React.Fragment><pre>{JSON.stringify(products)}</pre>
            <div className="container">
            <div className="row">
             {
              products.length>0?<>
              {
                products.map((product,index)=>{
                  return <div className='col-3' key={index}>
                          <div className="card">
                            <div className="card-header">
                            <img src={product.image} alt={product.name} />
                            </div>
                            <div className="card-body">
                            <ul className='list-group'>
                              <li className='list-group-item'>{product.name}</li>
                              <li className='list-group-item'>{product.price}</li>
                              <li className='list-group-item'>{product.qty}</li>
                              <li className='list-group-item'><button className='btn btn-warning'>Add Cart</button></li>
                            </ul>
                            </div>
                          </div>
                         </div>
                })
              }
              </>:<>No Data</>
             }
            </div>
            </div> 
            </React.Fragment>
}

export default ProductList