import { Product } from "./product";

export class SimpleDataSource {
    private products: Array<Product>;

    constructor() {
        this.products = new Array<Product>(
            new Product(1, "IPhone 7", "Cell Phone", 500),
            new Product(2, "IPhone 8", "Cell Phone", 600),
            new Product(3, "IPhone X", "Cell Phone", 700),
            new Product(4, "IPhone 12", "Cell Phone", 1000)
        );
    }

    getProducts(): Product[] {
        return this.products;
    }
}
