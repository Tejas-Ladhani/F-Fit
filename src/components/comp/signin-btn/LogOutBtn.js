
import './style.css'
import { logout } from "../../services/auth"

function LogOutBtn() {

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
