"use strict";
exports.__esModule = true;
exports.ProductManager = void 0;
var SimpleDataSource_1 = require("./SimpleDataSource");
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        var _this = this;
        this.dataSource = new SimpleDataSource_1.SimpleDataSource();
        this.products = new Array();
        this.dataSource.getProducts().forEach(function (product) { return _this.products.push(product); });
    }
    ProductManager.prototype.getById = function (id) {
        return this.products.filter(function (product) { return product.id === id; })[0];
    };
    ProductManager.prototype.getProducts = function () {
        return this.products;
    };
    ProductManager.prototype.saveProduct = function (product) {
        if (product.id == 0 || product.id == null) {
            product.id = this.generateId();
            this.products.push(product);
        }
        else {
            var index = void 0;
            for (var i = 0; i < this.products.length; i++) {
                if (this.products[i].id === product.id) {
                    index = i;
                }
            }
            this.products.splice(index, 1, product);
        }
    };
    ProductManager.prototype.deleteProduct = function (product) {
        var index = this.products.indexOf(product);
        if (index > 0) {
            this.products.splice(index, 1);
        }
    };
    ProductManager.prototype.generateId = function () {
        var key = 1;
        while (this.getById(key) != null) {
            key++;
        }
        return key;
    };
    return ProductManager;
}());
exports.ProductManager = ProductManager;
