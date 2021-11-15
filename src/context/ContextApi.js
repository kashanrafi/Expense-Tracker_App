import { createContext, useReducer } from "react"
import React from 'react'
import AppReducer from "./AppReducer";

let initialState = {
    transactions: []
}


export const GlobalContext = createContext(initialState);

export const Provider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function addTransaction(transaction){
        dispatch({
            type:"ADD-TRANSACTION",
            payload:transaction
        });
    }
    function delTransaction(id){
        dispatch({
            type:"DEL-TRANSACTION",
            payload:id
        })
    }


    return <GlobalContext.Provider value = {{transactions: state.transactions, addTransaction, delTransaction}}>
        {children}
        
    </GlobalContext.Provider>
}
