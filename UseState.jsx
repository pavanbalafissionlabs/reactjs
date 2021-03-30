import React,{ useState,useEffect } from 'react'

export default function UseState() {
     const [count,setCount]  = useState(1)

useEffect (()=>{
     console.log('effect count')
     document.title =`counter is ${count}`
})

function incrementCount()
{
     setCount (prevcount=> prevcount+1)
}

     return (
          <div>
               My counter value is {count}
               <button onClick={incrementCount}> counting value is {count}</button>
          </div>
     )
}
