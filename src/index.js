import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import '../src/Style/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebaseConfig from './firebase.config';
import {FirebaseAppProvider} from 'reactfire';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Suspense fallback={'Conectando con el servicio...'}>
    <App />
    </Suspense>
  </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
