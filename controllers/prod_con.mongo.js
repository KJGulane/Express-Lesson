const productModel = require("../models/prod_mod.mongo");

/*
Instructions: 

1. Create a express application (RUN THIS CODE USING POSTMAN)
2. Create a new database called products
3. Make a endpoint in express that
 - Gets all products
 - Gets product by name
 - Gets products by quantity use the $gte (greater than or equal), $lte (less than or equal)
 - Can update product name
 - Can update product quantity

if getting the specific product name, it should be supplied as a request body
if updating product product name it should be supplied as a reuqest body
*/

//get all product
function getAllProducts(req, res) {
    res.status(200).json(productModel);
};

