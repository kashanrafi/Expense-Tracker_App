import React from 'react'
import "./TransactionHistory.css";
import { useContext } from "react";
import { GlobalContext } from '../../context/ContextApi';
import Transaction from './Transaction';
export default function TransactionHistory() {
    const { transactions } = useContext(GlobalContext);
    console.log(transactions);
    return<>
        <h2 id="transHistory"><b>Transactions Detail</b></h2>
        <hr />
        
        {
            transactions.map((transaction) =>{
        return <>
        
        <Transaction transaction={transaction} />
        </>
    })
        }
        
    </>
}
