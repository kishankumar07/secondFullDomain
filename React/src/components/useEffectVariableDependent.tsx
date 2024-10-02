import { useEffect, useState } from "react"

const UseEffectVariableDependent = () => {

  const [count,setCount] = useState(0);
  const [calc,setCalc]= useState(0);

  useEffect(()=>{
      setCalc(()=>count*2)
  },[count])

  return (
    <div>
        <h3>Count:{count}</h3>
        <button onClick={()=>{setCount(c=>c+1)}}>Increase</button>
        <h2>value of calc : {calc}</h2>
    </div>
  )
}

export default UseEffectVariableDependent
