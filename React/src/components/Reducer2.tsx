import { useReducer } from "react"



interface stateProp{
      items:Array<object>,
      totalAmount:number
}
interface actionProp{
      type:string,
      payload?:payloadType
}
interface payloadType{
      id:number,name:string,price:number,
}



let newState;
const initialState = {
      items: [],
      totalAmount : 0
}

function cartReducer(state:stateProp,action:actionProp):stateProp{
      switch(action.type){
            case 'Addcart':
                  return{
                        ...state,
                        items:[...state.items,action.payload],
                        totalAmount:state.totalAmount + action.payload.price
                  }
            case 'removeItem' : 
                   newState = state.items.filter(item=>item.id !== action.payload.id);
                  return {
                        ...state,
                        items:newState,
                        totalAmount: state.totalAmount - action.payload.price,
                  }
            case 'clear':
                  return initialState;
            default :
                  return state;
      }
}

const Reducer2 = () => {
      const [state,dispatch] = useReducer(cartReducer,initialState)

      const handleAddCart = ()=>{
            const newItem = {id:1,name:'Diary Milk',price: 1};
            dispatch({type:'Addcart',payload: newItem})
      }
      const handleRemoveCart =()=>{
            const newItem = {id:1,price:1}
            dispatch({type:'removeItem',payload:newItem })
      }
      const handleClearCart = ()=>{
            dispatch({type:'clear'})
      }
  return (
    <div>
      <h2>Shopping cart</h2>
      <ul>
           {state.items.map(x=>(
            <li key={x.id}>{x.name}</li>
           ))}
      </ul>
      <button onClick={()=>{handleAddCart()}}>Add to cart</button>      
      <button onClick={()=>{handleRemoveCart()}}>Remove from cart</button>
      <button onClick={()=>{handleClearCart()}}>Clear cart</button>
    </div>
  )
}

export default Reducer2
