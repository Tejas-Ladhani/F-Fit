import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer';
const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}

//create context
export const ExpenseContext=createContext(initialState)

export const ExpenseProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState);
    return (
        <ExpenseContext.Provider value={{
            transactions:state.transactions
        }}>
            {children}
        </ExpenseContext.Provider>
    );
}

