import React, {useState} from "react"

function Counter(){

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount (count + 1);
    }

    const decrement = () => {
        setCount (count - 1);
    }

    const reset = () => {
        setCount (0);
    }


return(
    <>
    <div className = "counter-container">
    <p className="counter-display">{count}</p>
    </div>
    
    <button className="counter-btn" onClick={increment}>Increase Counter</button>
    <button className="counter-btn" onClick={decrement}>Decrease Counter</button>
    <button className="counter-btn" onClick={reset}>Reset Counter</button>
    </>
);

}

export default Counter