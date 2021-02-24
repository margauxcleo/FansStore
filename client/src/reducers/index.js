import { combineReducers } from 'redux';

// on importe tout depuis ce nouveau fichier index.js 
// par défaut, quand on aura besoin de créer le store, on indiquera le nom du dossier reducer
// index étant un nom de fichier réservé, react ira automotiquement ici chercher le reducers
import pageTitleReducer from './pageTitleReducer';
// import isLoggedReducer from './isLoggedReducer';

// on combine nos reducers 
// combineReducers() prend toujours un objet en paramètre 
const reducers = combineReducers({ pageTitleReducer });

// ensuite, on exporte ce "gros" reducer
export default reducers;