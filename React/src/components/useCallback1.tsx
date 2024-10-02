import React, { useCallback, useState } from "react"

const ItemListChild = React.memo(({items,addItem}:{items:string[],addItem:()=>void})=>{
      console.log('child component rendered');
      return(
            <div style={{backgroundColor:'green'}}>
                  <h2>Items list</h2>
                  <ul>
                        {items.map((item,index)=>(
                              <li key={index}>{item}</li>
                        ))}
                  </ul>
                  <button onClick={addItem}>Add Item</button>
            </div>
      )
})

const UseCallbackParent = () => {
      const [count,setCount] = useState<number>(0);
      const [items,setItems] = useState<string[]>(['item 1','item 2'])

      const addItem = useCallback(()=>{
            setItems((prev)=>[...prev,`item ${prev.length+1}`])
      },[setItems])
console.log('parent rendered')
  return (
    <div style={{backgroundColor:'red'}}>
      <h1>useCallback example</h1>      
      <p>Count : {count}</p>
      <button onClick={()=>setCount(count+1)}>increment count</button>
      <ItemListChild items={items} addItem={addItem}/>
    </div>
  )
}

export default UseCallbackParent
