import React, { useState } from 'react'

const CreateProduct = () => {
  let [product,setProduct]  = useState({"pname":"","qty":0,"price":0,"info":""})
  let formHandler = (event)=>{
    console.log(event.target.value)
    setProduct({...product,[event.target.name]:event.target.value})

  }
  let submitHandler=(event)=>{
    event.preventDefault();
    //invoke rest api code 
    alert(JSON.stringify(product))
  }
  return <React.Fragment>
        <h3>Prdouct Component</h3>
        <pre>{JSON.stringify(product)}</pre>
        <form  onSubmit={submitHandler}>
            <label >Name:</label>
            <input type="text" onChange={formHandler} name="pname" value={product.pname}/> <br />
             <label >QTY:::::</label>
            <input type="number" onChange={formHandler} name="qty" value={product.qty} /> <br />
             <label >Price::::</label>
            <input type="number" onChange={formHandler} name="price" value={product.price}/> <br />
             <label > Info:::::</label>
            <input type="text" onChange={formHandler} name="info" value={product.info}/> <br />
            <input type="submit" value="Create Product" />
        </form>   
        </React.Fragment>
}

export default CreateProduct