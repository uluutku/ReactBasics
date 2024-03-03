import React, {useState, useEffect} from "react";

function MyComponent(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    function addCount(){
        setCount(c => c + 1);
    }

    function subCount(){
        setCount(c => c - 1);
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green");
    }

    useEffect(() => {
        document.title = "Count: " + (count) + " " + (color);
    } , [count, color])

    return(
    <>
    <p style={{color: color}}>Count: {count}</p>
    <button onClick={addCount}>Add</button>
    <button onClick={subCount}>Subtract</button><br></br>
    <button onClick={changeColor}>Change Color</button>
    </>
    );
}

export default MyComponent