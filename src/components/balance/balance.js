import React from 'react'
import "./balance.css";
import { useContext, useState } from 'react';
import { GlobalContext } from '../../context/ContextApi';
export default function Balance() {
    // const [balance, setbalance] = useState(0.00);
    const { transactions } = useContext(GlobalContext);

    const Tamount = transactions.map((transaction) => transaction.TAmount);
    
    let balance = Tamount.reduce((acc, curr) => {
        return acc + curr;
    }, 0).toFixed(2);

    let income = Tamount.filter((amount) => amount > 0).reduce((acc, curr) => {
        return acc + curr;
    }, 0);

    let expense = Tamount.filter((amount) => amount < 0).reduce((acc, curr) => {
        return acc + curr;
    }, 0);


    return <>
        <h4><b>Current balance</b></h4>
        <h4 id="balance">${balance}</h4>

        <div className="inc-exp-container">
            <div>
                <h6><b>INCOME</b></h6>
                <h5 className="pluss">${income}</h5>
            </div>

            <div>
                <h6><b>EXPENSE</b></h6>
                <h5 className="minuss">${Math.abs(expense)}</h5>
            </div>
        </div>
    </>
}
