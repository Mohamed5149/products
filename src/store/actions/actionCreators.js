import * as actionTypes from './actionTypes';


export const addProductToCart = (product) => {
    return {
        type: actionTypes.ADDPRODUCTTOCART,
        payload: product
    }
}

export const removeProductFromcart = (productId) => {
    return {
        type: actionTypes.REMOVEPRODUCTFROMCART,
        payload: productId
    }
}

export const increaseQuantity = (productId) => {
    return {
        type: actionTypes.INCREASEPRODUCTQUANTITY,
        payload: productId
    }
}

export const decreaseQuantity = (productId) => {
    return {
        type: actionTypes.DECREASEPRODUCTQUANTITY,
        payload: productId
    }
}