import React from 'react';
import '../src/Style/App.css';
import Session from './Session';
import {useFirebaseApp} from 'reactfire';

function App() {
  const firebase= useFirebaseApp();
  console.log(firebase);
  return (
    <>
     <Session/>
    </>
  );
}

export default App;
