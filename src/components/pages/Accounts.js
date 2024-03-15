import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {withdraw5000, withdraw10000, deposit5000, deposit10000, showbalance, hidebalance} from '../pages/redux/actions/accountActions';

const Accounts = () => {
    const dispatch = useDispatch();

    const accountsData = useSelector((state) => state.accounts);

    useEffect(() => {
        console.log('accountsData', accountsData);
    })
    return (
        <div>

            <div>

                <div className='row'>
                    <div className='col-12'>
                        NetBanking - Hi Username
                    </div>
                </div>

                <div className='row'>
                    {accountsData.showBalance && <div className='col-12'>
                        Your Account Balance - {accountsData.balance}
                    </div>}
                    <div className='col-12'>
                        Your Num of Transactions for This session - {accountsData.numTrn}
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12'>
                        <button className='btn btn-primary' onClick={() => dispatch(withdraw5000())}>Withdraw 5000</button><br></br>
                        <button className='btn btn-primary' onClick={() => dispatch(withdraw10000())}>Withdraw 10000</button><br></br>
                        <button className='btn btn-primary' onClick={() => dispatch(deposit5000())}>Deposit 5000</button><br></br>
                        <button className='btn btn-primary' onClick={() => dispatch(deposit10000())}>Deposit 10000</button><br></br>
                        <button className='btn btn-primary' onClick={() => dispatch(showbalance())}>Show Balance</button><br></br>
                        <button className='btn btn-primary' onClick={() => dispatch(hidebalance())}>Hide Balance</button><br></br>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Accounts
