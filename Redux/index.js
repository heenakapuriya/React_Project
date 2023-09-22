const redux=require('redux')
const createStore =redux.createStore
const combineReducer =redux.combineReducers

const BUY_CAKE="BUY_CAKE"
const BUY_CHOCO="BUY_CHOCO"

function buyCake(){
    return{
        type:BUY_CAKE,
        info:"first redux Action"
    }
}

function buyChoco(){
    return{
        type:BUY_CHOCO,
        info:"second redux Action"
    }
}

// const initialState={
//     numofCake:10,
//     numofChoco:20
// }


const initialCakeState={
    numofCake:10,

}


const initialChocoState={
    numofChoco:20
}

// const reducer =(state=initialState,action)=>{
//     switch(action.type){
//         case BUY_CAKE:return{
//             ...state,
//             numofCake:state.numofCake-1
//         }
//         case BUY_CHOCO:return{
//             ...state,
//             numofChoco:state.numofChoco-1
//         }
//       default:return state  

//     }
// }

const Cakereducer =(state=initialCakeState,action)=>{
        switch(action.type){
            case BUY_CAKE:return{
                ...state,
                numofCake:state.numofCake-1
            }
            
          default:return state  
    
        }
    }

    const Chocoreducer =(state=initialChocoState,action)=>{
            switch(action.type){
                
                case BUY_CHOCO:return{
                    ...state,
                    numofChoco:state.numofChoco-1
                }
              default:return state  
        
            }
        }

        const RootReducer=combineReducer({
            cake:Cakereducer,
            choco:Chocoreducer
        })


const store=createStore(RootReducer)
console.log("initial state",store.getState())
const unsubscribe=store.subscribe(()=>console.log("update state",store.getState()))

store.dispatch(buyCake())
store.dispatch(buyChoco())
unsubscribe()