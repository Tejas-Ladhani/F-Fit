import React,{useContext} from 'react'
import './style.css'
import { signInWithGoogle } from "../../services/auth"
import { UserContext } from '../../contexts/user'

function SignInBtn() {
    const [/*user*/, setUser] = useContext(UserContext);

    const signInBtnClick = async () => {
        let userBySignIn = await signInWithGoogle()
        if (userBySignIn) setUser(userBySignIn);

    }
    return (
        <div onClick={signInBtnClick}>
            <p className="btn signInBtn">Sign In with Google</p>
        </div>
    )
}

export default SignInBtn;
