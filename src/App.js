import './App.css';

import {  getAuth, signInWithPopup,GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";
import initializeAuthentication from './Firebase/Firebase.initialize';
import { useState } from 'react';
initializeAuthentication();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

function App() {
  const [user,setUser]=useState({})
  const auth=getAuth();
const handleGoogleSignIn=()=>{
 
  signInWithPopup(auth,googleProvider)
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
const handleGithubSignIn=()=>{
 signInWithPopup(auth,githubProvider)
 .then(result=>{
   const {displayName,photoURL,email}=result.user;
   const loggedInUser={
     name:displayName,
     email:email,
     photo:photoURL
   }
   setUser(loggedInUser)
   console.log(user)
 })
}
const buttonStyles={
  backgroundColor:'orange',padding:'10px',border:'2px solid gray',borderRadius:'5px',marginTop:'10px',cursor:'pointer'
};
  return (
    <div className="App">
     <button style={buttonStyles} onClick={handleGoogleSignIn}>Google sign in</button> <br/>
     <button style={buttonStyles} onClick={handleGithubSignIn}>Github sign in</button>
     <br/>
     {
       user.name && <div>
         <h2>Welcome {user.name}</h2>
         <p>I know your email address: {user.email}</p>
         <img style={{borderRadius:'50%'}} src={user.photo} alt="" />
         </div>
        
     }
    </div>
  );
}

export default App;
