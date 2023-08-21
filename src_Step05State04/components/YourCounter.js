// src/components/MyCounter.js

import React from "react"
import { useState } from "react"

let myCount = 0;

//함수형 component 
function YourCounter(){
    /*
        함수형 Component 에서 state 관리하기

        const [ 상태값, 상태값을 변화시키는 함수] = useState( 상태의 초기값 )
    */
    const [count, setCount] = React.useState(0) //hook을 이용해서 관리

    return (
        <div>
            <button onClick={()=>{
               setCount(count-1)
            }}>-</button>
            <strong>{count}</strong><br />
            <strong>{myCount}</strong>
            <button onClick={()=>{
               setCount(count+1)
               myCount = myCount+1
               console.log(myCount)
            }}>+</button>
        </div>
    )
}

export default YourCounter

