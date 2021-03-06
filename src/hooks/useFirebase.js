import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import initializeFirebase from "../Routes/Members/Firebase/firebase.init";



initializeFirebase();

const useFirebase = () => {



    const [admin, setAdmin] = useState({});
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const sigInUsingGoogle = () => {

        const googleprovider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleprovider)

    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])



    const logOut = () => {
        signOut(auth)
            .then(() => {

            });
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleRegistration = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password, name)

    }

    const handleSignIn = () => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    const updateName = (name, photoURL) => {

        const auth = getAuth();
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: "https://www.cornwallbusinessawards.co.uk/wp-content/uploads/2017/11/dummy450x450-300x300.jpg"
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });
    }

    useEffect(() => {
        fetch(`https://blooming-meadow-45048.herokuapp.com/user/admin/${user.email}`)
          .then((res) => res.json())
          .then((data) => setAdmin(data.admin));
      }, [user.email]);


    // save user to database 
    const saveuser = (email, password, username, photo, methods) => {
        const data = { email, password, username, photo }
        fetch('https://blooming-meadow-45048.herokuapp.com/users/res', {
            method: methods,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then()
    }
    return {
        admin,
        user,
        sigInUsingGoogle,
        logOut,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        handleSignIn,
        setIsLoading,
        isLoading,
        email,
        password,
        name,
        updateName,
        photoURL,
        saveuser
    }
}

export default useFirebase;