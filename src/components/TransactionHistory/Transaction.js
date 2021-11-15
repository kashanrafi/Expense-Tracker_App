import React, { useState } from 'react'
import { useContext } from 'react';
import './TransactionHistory.css';
import { GlobalContext } from '../../context/ContextApi';

export default function Transaction({ transaction }) {

    const { delTransaction } = useContext(GlobalContext);

    let sign = transaction.TAmount > 0 ? '+' : '-';
    let type = transaction.TAmount > 0 ? 'plus' : 'minus';
    return <>

        <ul className="list">
            <li className={type} >
                {transaction.discription}
                <span>{sign}${Math.abs(transaction.TAmount)}</span>
                <i className="far fa-trash-alt  delbtn" onClick = {() => {
                  if (window.confirm("Are you sure you want to delete this transaction ")) {
                delTransaction(transaction.id)
            }
                }}></i>
            </li>
            
        </ul>

    </>
}
