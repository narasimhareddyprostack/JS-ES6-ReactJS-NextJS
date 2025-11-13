/* //default import - ES5
let prod_Name=require('./product')
console.log(prod_Name) */
//named export 
let {prod_Name,Product}= require('./product') 
new Product();