import {useRef,useEffect,useState} from 'react'

const PreviousStateExample = ()=>{
      const [name,setName] = useState('Alice');
      const prevNameRef = useRef('');

      useEffect(()=>{
            prevNameRef.current = name
      },[name])

      return(
            <div>
                  <h2>Current name:{name}</h2>
                  <h3>Previous name:{prevNameRef.current}</h3>
                  <button onClick={()=>{setName('Bob')}}>Change name to Bob</button>
            </div>
      ) 
}
export default PreviousStateExample