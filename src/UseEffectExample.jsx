import React, { useState, useEffect } from "react";

function UseEffectEx(){
    // useEffect(() => {}) -- Runs after every re-render
    // useEffect(() => {}, []) -- Runs only on mount;
    // useEffect(() => {}, [value]) -- Runs only on mount + when value changes;

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    
    useEffect(() => {
        document.title = `Count: ${count} | ${color} | ${width} x ${height}`;

        return () => {
            // Some Cleanup Code....
        }
    },[count,color,width,height]);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event Listener added");

        return() => {
            window.removeEventListener("resize", handleResize);
            console.log("Event Listener removed");
        }
    },[]);



    function addCount(){
        setCount(c => c + 1);
    }
    function subCount(){
        setCount(c => c - 1);
    }
    function changeColor(){
        setColor(c => c === "Green" ? "Red" : "Green");
    }
    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }


    return(
        <div>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subCount}>Subtract</button><br />
            <button onClick={changeColor}>Change Color</button><br />
            <br />
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
        </div>
    )

}
export default UseEffectEx;