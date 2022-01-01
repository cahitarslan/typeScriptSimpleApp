import { Product } from "./product";
import { ProductManager } from "./ProductManager";

let result;

let _productService = new ProductManager();

result = _productService.getProducts();
result = _productService.getById(2);

let product = new Product();
product.name = "IPhone 13";
product.price = 1200;
product.category = "Cell Phone";
_productService.saveProduct(product);
result = _productService.getProducts();

_productService.deleteProduct(product);
result = _productService.getProducts();

product.id = 4;
product.name = "IPhone 12";
product.price = 1100;
product.category = "Cell Phone";
_productService.saveProduct(product);

console.log(result);
