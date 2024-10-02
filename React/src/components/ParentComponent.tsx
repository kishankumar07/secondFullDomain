import ChildComponent from "./ChildComponent"


const ParentComponent = () => {

      const fcall = (data:string)=>{
            console.log(data)
      }

  return (
      <ChildComponent sendFn={fcall}/>
  )
}

export default ParentComponent
