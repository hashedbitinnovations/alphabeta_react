import React, { useState, useEffect } from "react";

const InputHandling = () => {

    const [name, setName] = useState('');
    const [city, setCity] = useState('');

    const submitfn = () => {
        console.log('name & city', name, city)
    }

    const changeHandler = (event) => {
        console.log(event.target.value)
        setName(event.target.value)
    }

    const changeHandlerCity = (event) => {
        console.log(event.target.value)
        setCity(event.target.value)
    }

    //componentDidMount + componentDidUpdate
    useEffect(() => {
        console.log('useEffect triggered.....every time')
    })

    //componentDidMount
    useEffect(() => {
        console.log('useEffect triggered.....just 1st time')
    }, [])

    //componentWillUnmount
    useEffect(() => {
        return () => {
            console.log('useEffect triggered..... on unmount')
        }
    }, [])

    //componentDidUpdate on condition
    useEffect(() => {
        console.log('useEffect triggered.....just on name change')
    }, [name])

    //componentDidUpdate on condition
    useEffect(() => {
        console.log(name, city)
    }, [name, city])

    return (
        <>
            <h2>Form / Input Handling</h2>

            <br></br>
            Name: <input type="text" name="" onChange={changeHandler} />
            {/* Name: <input type="text" name="" onBlur={changeHandler}/> */}
            <br></br>
            City: <input type="text" name="" onChange={changeHandlerCity} />
            <br></br>

            <button onClick={submitfn}>Submit</button>


            <div>Submitted Data - {name} & {city}</div>

            <br></br>
        </>
    )
}

export default InputHandling;

//HW - do this using single function


// componentDidMount

// componentDidUpdate

// componentWillUnmount