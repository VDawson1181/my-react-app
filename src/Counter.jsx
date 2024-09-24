// using updater functions -- that's the "c" in the setter functions.
import React, {useState} from "react";

function Counter(){
    const [count, setCount] = useState(0);
    const [buttonsDisabled, setDisable] = useState(false);

    const increment = () => {
        setCount(c => c + 1);
        // setCount(c => c + 1);
        // setCount(c => c + 1);
    }
    const decrement = () => {
        if(count === 0) return;
        
        setCount(c => c - 1);
        // setCount(c => c - 1);
        // setCount(c => c - 1);
    }
    const reset = () => {
        setCount(c => c = 0);
    }
    const disable = (e) => {

        setDisable(!buttonsDisabled);
    }

    return(
        <div className="counter-container">
            <h1 className="count-display">{count}</h1>
            <h2>{buttonsDisabled ? "Buttons Disabled" : "Buttons Enabled"}</h2>
            <button className="counter-button" onClick={buttonsDisabled ? (e) => {} : decrement}>-</button>
            <button className="counter-button" onClick={buttonsDisabled ? (e) => {} : reset}>Reset</button>
            <button className="counter-button" onClick={buttonsDisabled ? (e) => {} : increment}>+</button>
            <button className="counter-button" onClick={disable}>{buttonsDisabled ? "Enable":"Disable"}</button>
        </div>
    )
}

export default Counter;