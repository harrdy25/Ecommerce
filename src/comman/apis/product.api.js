import { deleteRequest, getRequest, postRequest, updateRequest } from "../request"

export const getAllProductRequest = () => {
    return getRequest('/products')
}

export const postAllProductRequest = (data) => {
    return postRequest('/products' ,data)
}

export const deleteAllProductRequest = (id) => {
    return deleteRequest('/products/' , id)
}
export const updateAllProductRequest = (id,data) => {
    return updateRequest('/products/' ,id,data)
}
