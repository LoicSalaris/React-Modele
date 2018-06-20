/**
 * Dépendances npm : utilitaire Redux
 */
import { createStore } from 'redux';

/**
 * Dépendances locales : le reducer
 */
import reducer from './reducer';

/**
 * Création du store
 */
// https://github.com/zalmoxisus/redux-devtools-extension
const devTools = [];
if (window.devToolsExtension) {
  // On configure l'extension Redux pour Chrome/Firefox.
  devTools.push(window.devToolsExtension());
}
const store = createStore(reducer, ...devTools);

export default store;
