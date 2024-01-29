import React, {useEffect, useState} from 'react';
import EMIGraph from './EMIGraph';
import EMIInput from './EMIInput';
import EMIResult from './EMIResult';

const EMI = () => {

  const [amount, setAmount] = useState(0);
  const [rate, setRate] = useState(0);
  const [duration, setDuration] = useState(0);
  const [interest, setInterest] = useState(0);

  useEffect(() => {
    console.log('Amount, Rate, Duration - ', amount, rate, duration);
    let tempInterest = (amount * rate * duration)/100;
    setInterest(tempInterest);
  }, [amount, rate, duration]);


  return (
    <div>

      <div className='row'>
        <div className='col-6'>
          <EMIInput handleAmount={setAmount} handleRate={setRate} handleDuration={setDuration}/>
        </div>

        <div className='col-6'>
          <EMIResult interest={interest} duration={duration} amount={amount}/>
        </div>

        <div className='col-12'>
          <EMIGraph interest={interest} amount={amount}/>
        </div>
      </div>

    </div>
  )
}

export default EMI


//Lifting State Up
//Graph

//https://emicalculator.net/
//HW - Input Range
//Compunt Interest Calculation