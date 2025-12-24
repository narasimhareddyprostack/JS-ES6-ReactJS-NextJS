import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'
const ProductAdmin = () => {
  let [products,setProducts]=useState([]);
  useEffect(()=>{
  Axios.get('http://127.0.0.1:5000/api/products')
       .then((resp)=>{setProducts(resp.data)})
       .catch()
 },[])
  return <div className='container'>
  .       <div className="row">
              <div className="col-md-4">
                <Link to="/create"><button className='btn btn-warning' >New Product</button></Link> 
              </div>
              <div className="col-md-8">
              <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse sequi sint, odio laudantium eum, aliquam at repellat ullam cumque, quia excepturi qui! Similique deserunt voluptatem optio dolorem, ut quaerat. Quia.</h5>
              </div>
          </div>
  .       <div className="row">
          <div className="col">
          <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
            products.length>0? 
            <>
            {
              products.map((product,index)=>{
                return <tr key={index}>
                       <td>{product.name}</td>
                       <td>{product.price}</td>
                       <td>{product.qty}</td>
                       <td><Link to="/update" className='btn btn-warning mr-2'>Update</Link><button className='btn btn-danger'>Delete</button></td>
                       </tr>
              })
            }
            </>:<>No Data</>
          }
          </tbody>
          </table>
          </div>
          </div>
                
            </div>
}

export default ProductAdmin