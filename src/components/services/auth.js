import { auth, gAuthProvider } from "../../Firebase";
export const signInWithGoogle = async () => {
    let user;
    await auth.signInWithPopup(gAuthProvider)
        .then((res) => {
          
            user = res.user;
        })
        .catch((error) => {
            console.log(error.message);
        });
    /**
     * await & async : return user only when auth is done(that is wait until the process is done then retun user)
     */
    return user;
}


export const logout = async () => {
    let logout_success;
    await auth.signOut()
        .then(() => {
            logout_success = true;
        })
        .catch((error) => {
            console.log(error.message)

        }
        )

    return logout_success;
}