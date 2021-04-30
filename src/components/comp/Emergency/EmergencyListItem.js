import React ,{useContext} from 'react'
import { Button } from 'react-bootstrap';
import { UserContext } from '../../contexts/user'
import { db } from '../../../Firebase' 

function EmergencyListItem({ title,date ,amount,comment,type,id}) {
    const [user, setUser] = useContext(UserContext);
    
 
    function deleteSaving(){
        db.collection("user").doc(user.uid).collection('emergency').doc(id).delete();
    } 
    return (
        <>
            <tr key={id} style={{textAlign:'center'}}>
             
               <td>{title}</td>
           
               <td>{comment}</td>
               <td>{amount}</td>
               <td><Button onClick={deleteSaving}>Delete</Button></td> 
            </tr>
        </>
    )
}

export default EmergencyListItem
