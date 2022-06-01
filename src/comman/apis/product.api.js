import { getRequest } from "../request"

export const getAllProductsDetails = () => {
    return getRequest('/products');
}