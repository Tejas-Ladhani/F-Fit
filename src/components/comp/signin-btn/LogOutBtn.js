import React,{useContext, useState} from 'react'
import './style.css'
import { logout } from "../../services/auth"
import { UserContext } from '../../contexts/user'

function LogOutBtn() {
    const [user, setUser] = useContext(UserContext);

    const signOutBtnClick = async () => {
        logout();

    }
    return (
        <div onClick={signOutBtnClick}>
            <p className="btn signInBtn">Sign Out</p>
        </div>
    )
}

export default LogOutBtn;
