//This one is not working===============================================================


import { useCallback, useState } from "react"

const expensiveCalculation = (num:number):number =>{
      console.log('expensive calculation executed');
      for(let i=0;i<100000000;i++){}
      return num * 2;
}

const UseCallback2 = () => {
      const [count,setCount] = useState<number>(0);
      const [inputValue,setInputValue] = useState<string>('');

      const memoizedCalculation = useCallback(()=>{
            return expensiveCalculation(count)
      },[count])
const calculationResult = memoizedCalculation()
  return (
    <div>
       <h2>UseCallback with expensive calculation</h2>      
       <p>Count:{count}</p>
       <p>Expensive calculation result:{calculationResult}</p>
       <button onClick={()=>setCount(count+1)}>Increase count</button>
       <br />
       <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder="Type something..."/>
    </div>
  )
}

export default UseCallback2
