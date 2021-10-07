import './App.css';

import {  getAuth, signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from './Firebase/Firebase.initialize';
import { useState } from 'react';
initializeAuthentication();
const provider = new GoogleAuthProvider();

function App() {
  const [user,setUser]=useState({})
const handleGoogleSignIn=()=>{
  const auth=getAuth();
  signInWithPopup(auth,provider)
  .then(result=>{
    //result er moddhei ekjon user name ache tai oita ami user variable e niye ashlam.

    //state er user er sathe jeno kahini na kore tai ei naem ta chaneg kore looginUser dilam.
    const {displayName,email,photoURL}=result.user;
     const loggedInUser={
       name:displayName,
       email:email,
       photo:photoURL
     };
     setUser(loggedInUser);
  })
  .catch(error=>{
    console.log(error.message)
  })
}
  return (
    <div className="App">
     <button onClick={handleGoogleSignIn}>Google sign in</button>
     <br/>
     {
       user.email && <div>
         <h2>Welcome {user.name}</h2>
         <p>I know your email address:{user.email}</p>
         <img src={user.photo} alt="" />
         </div>
        
     }
    </div>
  );
}

export default App;
