import { useEffect, useState } from "react"

const UseEffectTimer = () => {

  const [count,setCount] = useState(0);

  useEffect(()=>{
    const timer = setTimeout(()=>{
        setCount(prev=>prev+1)
    },1000)
    return ()=> clearTimeout(timer);
  },[count]) 
 
  return (
    <div>
        <h1>counter :{count}</h1>
    </div>
  )
}

export default UseEffectTimer
