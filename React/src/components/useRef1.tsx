import { useRef, useState } from "react";


const TimerComponent=()=>{
      const countRef = useRef(0);
      const [renderCount,setRenderCount]= useState(0)

      const increaseRefValue =()=>{
            countRef.current += 1;
            console.log('countRef:',countRef.current);
      }
      const forceRender =()=>{
            setRenderCount(renderCount + 1);
      }

      return(
            <div style={{backgroundColor:'gray'}}>
                  <p style={{backgroundColor:'red'}}>Ref value : (does not cause re-render): {countRef.current}</p>
                  <p>Component re-renders : {renderCount}</p>
                  <button onClick={increaseRefValue}>Increase REf value</button>
                  <button onClick={forceRender}>Force Render</button>
            </div>
      )
}
export default TimerComponent