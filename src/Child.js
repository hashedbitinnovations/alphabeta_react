import React from "react";

const Child = (props) => {
    console.log('props - ', props);

    const {country, state, city} = props;

    return (
        <>
            <div style={{ backgroundColor: '#30d634', padding: '20px' }}>

                <h3>This is a child component</h3>

                <h4>Country - {props.country}</h4>
                <h4>State - {props.state}</h4>
                <h4>City - {props.city}</h4>

                <br></br>


                <h4>Country - {country}</h4>
                <h4>State - {state}</h4>
                <h4>City - {city}</h4>
            </div>
        </>
    )
}

export default Child;


//HW - Destructuring