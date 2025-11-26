let prod_Name="Marker Pen"

class Product{
    constructor(){
        console.log("Product Class Constructor")
    }
    get_product_details(){
        console.log("Getting Details")
    }
}
/* //default export 
module.exports=prod_Name */

//named export - 
module.exports={prod_Name,Product}