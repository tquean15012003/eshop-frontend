import { baseService } from "./BaseService";

export class ProductService extends baseService {
    getAllProducts = () => {
        return this.get('products/getallproducts');
    }

    orderProducts = (products) => {
        return this.put('products/orderproduct', products);
    }
}

export const productService = new ProductService()