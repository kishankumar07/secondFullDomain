import { useReducer } from "react";

// This is to type the state parameter at reducer function
interface Todo{
      id:number,title:string,complete:boolean,
}
type State = Todo[]
//till here

// To type the action parameter at reducer function
interface actionProp{
      type:string,
      payload:Todo,
}

//Initial value
const initialTodo = [
      {id:1,title:'Todo 1',complete:false},{id:2,title:'Todo 2',complete:false}
]

const todoReducer = (state:State,action:actionProp):State =>{
      switch(action.type){
            case 'complete':
                  return state.map(item=>{
                             if(item.id === action.payload.id){
                              return {...item,complete:!item.complete}
                             }else{
                              return item;
                             }
                        })
                  
            default:
                  return state;
      }
}

const Reducer3 = () => {
      const [todo,dispatch] = useReducer(todoReducer,initialTodo)

      const handleComplete = (todo:Todo)=>{
            dispatch({type:'complete',payload:todo})
      }
  return (
    <>
      {todo.map((item)=>(

            <div>
                  <input type="checkbox" checked={item.complete} onChange={()=>handleComplete(item)}/>
                  {item.title}
            </div>
            )
      )} 
    </>
  )
}

export default Reducer3
