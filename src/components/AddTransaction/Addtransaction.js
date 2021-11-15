import React from 'react'
import "./Addtransaction.css";
import { useState, useContext } from "react";
import { GlobalContext } from '../../context/ContextApi';
export default function Addtransaction() {
    const [TAmount, setTAmount] = useState('');
    const [discription, setTdiscription] = useState('');

    const { addTransaction } = useContext(GlobalContext);
    
    const updateValue = (evt)=>{
       let value = evt.target.value;
        setTAmount(value);
        
    }

    const saveData = (evt)=>{
        evt.preventDefault();

        const newTransaction = {
            id: new Date().getTime(),
            discription,
            TAmount: +TAmount
        }
        addTransaction(newTransaction);
        setTAmount('');
        setTdiscription('');
       
    }
    return<>
        <h2 id="transHeading"><b>Add New Transaction</b></h2>
        <hr />
        <form onSubmit={saveData}>
        <div >
            <label htmlFor="box1">Description</label><br />
            <input 
            className="form-control"
            type="text"
            value={discription}
            onInput={(evt)=> setTdiscription(evt.target.value)}
             id="box1"
             placeholder="Enter Detail of Transaction"
             required

            />
            </div><br />
        <div >
            <label htmlFor="box2">Transaction Amount</label><br />
            <input className="form-control" type="number" onInput={updateValue} placeholder="Enter Amount in Dollar" value={TAmount} id="box2" required/>
            </div><br />
            <button className="btn-primary btn form-control">Add Transaction</button>
        </form>
    </>
}
