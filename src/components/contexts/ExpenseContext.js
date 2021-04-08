import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer';
const initialState = {
    transactions: [{ id: 1, text: 'Flower', amount: -20 }]
}

//create context
export const ExpenseContext = createContext(initialState)

export const ExpenseProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Action 1
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    //Action 2
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }
    return (
        <ExpenseContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </ExpenseContext.Provider>
    );
}

