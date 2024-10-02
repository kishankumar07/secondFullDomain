
interface functionProps{
      sendFn:(data:string)=>void
}


const ChildComponent = ({sendFn}:functionProps) => {

      const val = 'hello world'
      const handleClick = ()=>{
            sendFn(val);
      }

  return (
    <div>
            <button onClick={()=>{handleClick()}}>Click</button>
    </div>
  )
}

export default ChildComponent
