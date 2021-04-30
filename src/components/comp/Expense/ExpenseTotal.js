import {useEffect,useState,useContext} from 'react';
import { db } from '../../../Firebase';
import { UserContext } from '../../contexts/user';

function ExpenseTotal({ total }) {
  
  const [user, setUser] = useContext(UserContext);
  var exptotal;
  
  function  addtotal()
  {
  db.collection('user').doc(user.uid).set({
    exptotal : total
  }).then(() => alert("your data saved !")
  )
}
  
  
  return (

    <>₹{total}</>
  )
}

export default ExpenseTotal
