import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cartProducts: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADDPRODUCTTOCART:
            let cartProductsCopy = [...state.cartProducts];
            let checkProductExist = cartProductsCopy.findIndex(product => product.id === action.payload.id)
            if (checkProductExist === -1) {
                action.payload.quantity = 1;
                cartProductsCopy.push(action.payload)
            }
            else {
                cartProductsCopy[checkProductExist].quantity = cartProductsCopy[checkProductExist].quantity + 1;
            }
            return {
                ...state,
                cartProducts: cartProductsCopy
            }
        case actionTypes.REMOVEPRODUCTFROMCART:
            let cartProductsToBeDeleteCopy = [...state.cartProducts];
            let productToBeDeletedIndex = cartProductsToBeDeleteCopy.findIndex(product => product.id === action.payload);
            cartProductsToBeDeleteCopy.splice(productToBeDeletedIndex, 1);
            return {
                ...state,
                cartProducts: cartProductsToBeDeleteCopy
            }
        case actionTypes.INCREASEPRODUCTQUANTITY:
            let cartProductsCopyToIncrease = [...state.cartProducts];
            let productToBeIncreasedIndex = cartProductsCopyToIncrease.findIndex(product => product.id === action.payload)
            cartProductsCopyToIncrease[productToBeIncreasedIndex].quantity = cartProductsCopyToIncrease[productToBeIncreasedIndex].quantity + 1;
            return {
                ...state,
                cartProducts: cartProductsCopyToIncrease
            }
        case actionTypes.DECREASEPRODUCTQUANTITY:
            let cartProductsCopyToDecrease = [...state.cartProducts];
            let productToBeDecreasedIndex = cartProductsCopyToDecrease.findIndex(product => product.id === action.payload)
            if (cartProductsCopyToDecrease[productToBeDecreasedIndex].quantity > 1) {
                cartProductsCopyToDecrease[productToBeDecreasedIndex].quantity = cartProductsCopyToDecrease[productToBeDecreasedIndex].quantity - 1;
            }
            else {
                cartProductsCopyToDecrease.splice(productToBeDecreasedIndex, 1)
            }
            return {
                ...state,
                cartProducts: cartProductsCopyToDecrease
            }
        case actionTypes.EMPTYCART:
            return {
                ...state,
                cartProducts: []
            }
        default:
            return state;
    }
}

export default reducer;