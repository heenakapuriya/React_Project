import { PRODUCT_LIST } from "../constants";

const cartData = (data = [], action) => {
     switch (action.type) {
          case PRODUCT_LIST:
               console.log("PRODUCT_LIST", action);
               return [action.data];
          default: return []
     }
}

export default cartData