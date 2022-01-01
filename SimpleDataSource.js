"use strict";
exports.__esModule = true;
exports.SimpleDataSource = void 0;
var product_1 = require("./product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new product_1.Product(1, "IPhone 7", "Cell Phone", 500), new product_1.Product(2, "IPhone 8", "Cell Phone", 600), new product_1.Product(3, "IPhone X", "Cell Phone", 700), new product_1.Product(4, "IPhone 12", "Cell Phone", 1000));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
