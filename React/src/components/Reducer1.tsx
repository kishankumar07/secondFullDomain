// Counter + and - 

import { useReducer } from "react"

interface stateProp{
      count:number;
}
interface actionProp{
      type:string
}
const initialState = {count:0}
const reducer = (state:stateProp,action:actionProp)=>{
      switch(action.type){
            case 'increment':
                  return{
                        ...state,count:state.count + 1
                  }
            case 'decrement':
                  return{
                        ...state,count:state.count - 1
                  }
            default :
                  return state;
      }
}

const Reducer1 = () => {
      const [state,dispatch] = useReducer(reducer,initialState);
  return (
    <div>
       <p>Count:{state.count}</p>
       <button onClick={()=>{dispatch({type:'increment'})}}>+</button>      
       <button onClick={()=>{dispatch({type:'decrement'})}}>-</button>
    </div>
  )
}

export default Reducer1


