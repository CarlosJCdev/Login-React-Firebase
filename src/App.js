import React from 'react';
import '../src/Style/App.css';
import Session from './Session';
/* import fire from './firebase.config'; */
/* import { useFirebaseApp} from 'reactfire'; */


export default function App() {
  
  /* const firebase = useFirebaseApp(); */
  /* console.log(firebase); */

  return (
    <div className="App">
    <Session/>
    </div>
  );
}


