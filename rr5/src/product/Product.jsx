import React from 'react'
import {incrAction,decrAction} from '../redux/product/pr.action'
import {useDispatch,useSelector} from 'react-redux'
import { jsx } from 'react/jsx-runtime';
const Product = () => {
    let dispatch=useDispatch();
    let pr_Data=useSelector((state)=>{
        return state;
    })
    let incrHandler = ()=>{
        dispatch(incrAction())
    }
    let decrHandler =()=>{
        dispatch(decrAction())
    }
 return <div>
            <h4>Product Component</h4>
            <pre>{JSON.stringify(pr_Data)}</pre>
            <h4>Product Name:{pr_Data.product.pName}</h4>
            <h4>Price:{pr_Data.product.price}</h4>
            <h5>Total:{pr_Data.product.price * pr_Data.product.qty}</h5>
            <img src={pr_Data.product.image}/>
            <button onClick={decrHandler}>-</button>
            {pr_Data.product.qty}
            <button onClick={incrHandler}>+</button>
        </div>
}

export default Product