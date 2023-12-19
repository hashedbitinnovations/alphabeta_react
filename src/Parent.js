import React from "react";
import Child from "./Child";

const Parent = () => {

    let countryname = 'India';
    
    return (
        <>
            <div style={{ backgroundColor: '#a07634', padding: '20px' }}>
                <h2>Parent Component</h2>

                <Child city="GGN" state="HR" country = {countryname}/>


            </div>

        </>
    )
}

export default Parent;