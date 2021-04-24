import { useEffect,createContext, useState } from 'react'
import {firebaseApp} from '../../Firebase';

export const UserContext = createContext();
export const UserContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [pending, setPending] = useState(true);
    
  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      setUser(user)
      setPending(false)
    });
  }, []);

  if(pending){
    return <>Loading...</>
  }
    return (
        <UserContext.Provider value={ [user,setUser] }>
            {props.children}
        </UserContext.Provider>
    )
}