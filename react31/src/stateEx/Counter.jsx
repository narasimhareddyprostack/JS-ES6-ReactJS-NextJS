import { useState } from "react";
let Counter =()=>{
    let [counter,setCounter]  = useState(1);
    let incrHandler = ()=>{
        setCounter(counter+1)
    }
    let decrHandler =()=>{
        setCounter(counter-1)
    }
    return <div>
            <h4>Counter Example:</h4>
            <h4>{counter}</h4>
            <button onClick={incrHandler}>INCR</button>
            <button onClick={decrHandler}>DECR</button>
            </div>
}
export default Counter;