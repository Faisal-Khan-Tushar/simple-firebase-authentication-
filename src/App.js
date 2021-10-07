import './App.css';

import {  getAuth, signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from './Firebase/Firebase.initialize';
initializeAuthentication();
const provider = new GoogleAuthProvider();

function App() {
const handleGoogleSignIn=()=>{
  const auth=getAuth();
  signInWithPopup(auth,provider)
  .then(result=>{
    //result er moddhei ekjon user name ache tai oita ami user variable e niye ashlam.
    const user=result.user;
    console.log(user)
  })
}
  return (
    <div className="App">
     <button onClick={handleGoogleSignIn}>Google sign in</button>
    </div>
  );
}

export default App;
