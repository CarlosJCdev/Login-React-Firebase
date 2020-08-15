import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import '../src/Style/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebaseConfig from './firebase.config';
import { FirebaseAppProvider } from 'reactfire';

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={'Conectando con la app..'}>
      <App />
    </Suspense>
  </FirebaseAppProvider>
  , document.getElementById('root')

);

serviceWorker.unregister();
