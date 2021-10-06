import {getAuth,signInWithPopup,GoogleAuthProvider} from 'firebase/auth';
import './App.css';
import initializeAuthentication from './Firebase/Firebase.initialize';
initializeAuthentication();
const provider =new GoogleAuthProvider;

function App() {
  const handleGoogleSignIn=()=>{
    //5 number step ta dekhe dekhe kortesi.
  const auth=getAuth();
  //signInWithProvider ke amader auth ar provider ta pass kore dite hobe. 
 signInWithPopup(auth,provider)
 .then(result=>{
  const user =result.user;
  console.log(user);
 })
  }
  return (
    <div className="App">
    <button onClick={handleGoogleSignIn}>Google Sign in</button>
    </div>
  );
}

export default App;
