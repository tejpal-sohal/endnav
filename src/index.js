/*
window.location.port === 8000 ? this check was put in because 
in dev mode, I was getting this warning Warning: 
Did not expect server HTML to contain a <div> in <div>. 
in browser console (production SSR build seems to be ok, but there might be supressed warning). So SSR HTML does not match HTML

Had I had more time i would have configured webPack for environment variables, however this check fixes it.
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import * as serviceWorker from './serviceWorker';

window.location.port === 8000 ?

  ReactDOM.hydrate(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  ) : (
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    )
  )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
