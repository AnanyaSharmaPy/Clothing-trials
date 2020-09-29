import { ADD_TO_CART, REMOVE_ITEM, SELECT_ITEM, SELECT_SIZE, REMOVE_SELECT } from './action-types/cart-actions'

export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
export const selectItem=(id)=>{
    return{
        type: SELECT_ITEM,
        id
    }
}
export const selectSize=(size)=>{
    return {
        type: SELECT_SIZE,
        size
    }
}
export const removeSelect=(id)=>{
    return {
        type: REMOVE_SELECT,
        id
    }
}