import React ,{useContext} from 'react'
import { Button } from 'react-bootstrap';
import { UserContext } from '../../contexts/user'
import { db } from '../../../Firebase' 
function ExpenseItem({ title,date , amount,id}) {
    const [user, /*setUser*/] = useContext(UserContext);
    
 
    function deleteExpense(){
        db.collection("user").doc(user.uid).collection('expense').doc(id).delete();
    } 
    return (

        <>
            <tr>
               <td>{date}</td>
               <td>{title}</td>
               <td>{amount}</td>
               <td><Button onClick={deleteExpense}>Delete</Button></td> 
            </tr>
        </>
    )
}

export default ExpenseItem
