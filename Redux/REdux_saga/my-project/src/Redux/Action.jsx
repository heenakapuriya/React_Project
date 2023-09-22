import { ADD_TO_CART , REMOVE_TO_CART , EMPTY_CART } from "./constants";

export const addToCart = (data) => {
     console.warn("action called" , data);
     return{
          type:ADD_TO_CART,
          data
     }
}

export const removeToCart = (data) => {
     console.warn("action called" , data);
     return{
          type:REMOVE_TO_CART,
          data
     }
}

export const emptyCart = (data) => {
     console.warn("action called" , data);
     return{
          type:EMPTY_CART,
          data
     }
}