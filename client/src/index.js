import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// V.1.4 pour le moment, on met le store de Redux en stand-by parce qu'on ne s'en sert pas
// combineReducers : permet de combiner plusieurs reducers 
// import { createStore } from 'redux';
// import { Provider } from "react-redux";

// import reducers from "./reducers";
// // par défaut, react ira dans le fichier index.js du dossier reducers
// // on créé ensuite notre store avec ce gros reducer
// const store = createStore(
//   reducers,
//   // on ajoute cette ligne de code (github react redux) pour que les infos s'affichent dans la console 
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

ReactDOM.render(
  <React.StrictMode>
    {/* permet de lier le store à App */}
    {/* toute modification d'un state contenu dans store, va update le render */}
    {/* <Provider store={store}>
      <App />
    </Provider> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
