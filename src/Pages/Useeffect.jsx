import {useState, useEffect} from 'react'

const Info=(props)=>{
  return(
    <>
      <h1>Cout:{props.count}</h1>
    </>
  )
}

function Useeffect(){
  const [count,setcount]=useState(0)
  const [sount,setsount]=useState(0)
  useEffect(()=>{
    console.log("useeffect")
  },[])
  return(
    <>
      <Info count={count} />
      <h1>Count:{sount}</h1>
      <button onClick={()=>{
        setcount(count+1)
      }}>Increase
      </button>
      <button onClick={()=>{
        setsount(sount-1)
      }}>Decrease</button>
    </>
  )
}

export default Useeffect;