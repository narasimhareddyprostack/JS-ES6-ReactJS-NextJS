let prod_Name="Marker Pen"

class Product{
    constructor(){
        console.log("Product Class Constructor")
    }
    get_product_details(){
        console.log("Getting Details")
    }
}

//default export 
//export default Product;

//named export 
export {prod_Name,Product}