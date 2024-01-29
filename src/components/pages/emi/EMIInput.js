import React, { useState } from 'react'

const EMIInput = (props) => {

    const { handleAmount, handleRate, handleDuration } = props;



    return (
        <div>
            <h4>Loan Amount</h4>
            <input type='number' onChange={(e) => handleAmount(e.target.value)} />
            <br></br>

            <h4>Interest Rate</h4>
            <input type='number' onChange={(e) => handleRate(e.target.value)} />
            <br></br>

            <h4>Tenure</h4>
            <input type='number' onChange={(e) => handleDuration(e.target.value)} />
            <br></br>
        </div>
    )
}

export default EMIInput
