let display_Products=()=>{
    let tb=document.getElementsByTagName('tbody')[0];
    fetch('https://dummyjson.com/products')
    .then((resp)=>{return resp.json()})
    .then((product_data)=>{
        let rows=""
        for( product of product_data.products){
            rows=rows+`<tr>
                            <td>${product.id}</td>
                            <td>${product.title}</td>
                            <td>${product.price}</td>
                            <td>${product.rating}</td>
                       </tr>`
        }
        tb.innerHTML=rows
    })
    .catch((err)=>{
        tb.innerHTML="No Data"
    })
}

display_Products()