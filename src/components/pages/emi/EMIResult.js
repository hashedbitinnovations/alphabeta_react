import React from 'react'

const EMIResult = (props) => {
    const { interest, duration, amount } = props;
    return (
        <div>
            <h4>Monthly EMI</h4>
            <div>{Math.ceil((parseInt(interest) + parseInt(amount)) / (duration * 12))}</div>
            <br></br>

            <h4>Total Interst</h4>
            <div>{interest}</div>
            <br></br>

            <h4>Pricipal + Interest</h4>
            <div>{parseInt(interest) + parseInt(amount)}</div>
            <br></br>

        </div>
    )
}

export default EMIResult
