
import { BUY_CAKE } from "./cakeType";

const initialstate = {
    numOfCake: 10
}
const cakeReducer = (state = initialstate, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCake: state.numOfCake - 1
        }
        default: return state
    }

}
export default cakeReducer