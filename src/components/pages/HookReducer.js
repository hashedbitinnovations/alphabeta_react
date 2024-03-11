import React, { useEffect, useReducer, useState } from 'react'

const HookReducer = () => {

    const initialObject = {
        balance: 0,
        numTrn: 0,
        showBalance: false
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'WITHDRAW5000':
                return {
                    balance: state.balance - 5000,
                    numTrn: state.numTrn + 1,
                    showBalance: state.showBalance
                }
            case 'WITHDRAW10000':
                return {
                    balance: state.balance - 10000,
                    numTrn: state.numTrn + 1,
                    showBalance: state.showBalance
                }

            case 'DEPOSIT5000':
                return {
                    balance: state.balance + 5000,
                    numTrn: state.numTrn + 1,
                    showBalance: state.showBalance
                }

            case 'DEPOSIT10000':
                return {
                    balance: state.balance + 10000,
                    numTrn: state.numTrn + 1,
                    showBalance: state.showBalance
                }

            case 'SHOWBALANCE':
                return {
                    balance: state.balance,
                    numTrn: state.numTrn,
                    showBalance: true
                }

            case 'HIDEBALANCE':
                return {
                    balance: state.balance,
                    numTrn: state.numTrn,
                    showBalance: false
                }

            default:
                return state;
        }
    }

    //const [state, setState] = useState(initialObject);
    const [state, dispatch] = useReducer(reducer, initialObject)

    useEffect(() => {
        console.log('Current State - ', state);
    })


    return (
        <div>

            <div className='row'>
                <div className='col-12'>
                    NetBanking - Hi Username
                </div>
            </div>

            <div className='row'>
                {state.showBalance && <div className='col-12'>
                    Your Account Balance - {state.balance}
                </div>}
                <div className='col-12'>
                    Your Num of Transactions for This session - {state.numTrn}
                </div>
            </div>

            <div className='row'>
                <div className='col-12'>
                    <button className='btn btn-primary' onClick={() => dispatch({ type: 'WITHDRAW5000', payload: 5000 })}>Withdraw 5000</button><br></br>
                    <button className='btn btn-primary' onClick={() => dispatch({ type: 'WITHDRAW10000', payload: 10000 })}>Withdraw 10000</button><br></br>
                    <button className='btn btn-primary' onClick={() => dispatch({ type: 'DEPOSIT5000', payload: 5000 })}>Deposit 5000</button><br></br>
                    <button className='btn btn-primary' onClick={() => dispatch({ type: 'DEPOSIT10000', payload: 10000 })}>Deposit 10000</button><br></br>
                    <button className='btn btn-primary' onClick={() => dispatch({ type: 'SHOWBALANCE' })}>Show Balance</button><br></br>
                    <button className='btn btn-primary' onClick={() => dispatch({ type: 'HIDEBALANCE' })}>Hide Balance</button><br></br>
                </div>
            </div>

        </div>
    )
}

export default HookReducer
