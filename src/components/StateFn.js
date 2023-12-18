import React, {useState} from "react";

const StateFn = () => {

    // let num = 0
    //syntax to create a state variable
    const [count, setCount] = useState(0)
    //usestate is hook to create a state varibale
    //count is state variable and useCount is function to update that state variable.
    // useState return an array from which we are destructuring variable and function
    //count can be just updated by setCount, nothing else
    //setCount can not update anything else
    //name and fn name can be anything
    //value passed as parameter to usestate defines the data type of that state variable, also it sets initial value
    //setCount works in async mode


    const increaseFn = () => {
        console.log('increase clicked.....')
        //console.log('Before Increment', num)
        //num = num + 1;
        setCount(count => count + 1)
        console.log(count)
        //console.log('Afrer Increment', num)
    }

    const decreaseFn = () => {
        console.log('decrease clicked.....')
        //console.log('Before Increment', num)
        //num = num - 1;
        setCount(count => count - 1)
        console.log(count)
        //console.log('Afrer Increment', num)
    }

    return(
        <>
        <h2>Functional Component - State Variables</h2>

        <h4 id='numdisplay'>Num - {count}</h4>
        <br></br>

        <button onClick={increaseFn}>Increase</button>
        <button onClick={decreaseFn}>Decrease</button>

        </>
    )
}

export default StateFn;


//Counter Implementation