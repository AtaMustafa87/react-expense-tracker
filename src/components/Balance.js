import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'
export const Balance = () =>{
    const {transactions} = useContext(GlobalContext);
    const transactionsAmount = transactions.map(transaction => transaction.transactionAmount);
    const balance = transactionsAmount.reduce((acc,amount)=>(acc += amount),0).toFixed(2);
    return(
        <div>
            <h4>Current Balance</h4>
            <h1 id='balance'>${balance}</h1>
        </div>
    );
}