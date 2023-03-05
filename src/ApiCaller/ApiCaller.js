import { productService } from "../Services/ProductService"

export const getAllProductsAction = async (setProducts) => {
    try {
        const { data } = await productService.getAllProducts()
        setProducts(data.products)
    } catch (error) {
        console.log(error.response.data.message)
    }
}

export const orderProductsAction = async (products) => {
    try {
        const { data } = await productService.orderProducts(products)
        alert(data.message)
    } catch (error) {
        console.log(error.response.data.message)
    }

}