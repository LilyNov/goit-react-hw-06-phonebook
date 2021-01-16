import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './contacts.js/contacts-reducer';
// const fromLocalStorage = JSON.parse(window.localStorage.getItem('contacts'));

// const initialState = {
//   contacts: {
//     items: [],
//     filter: '',
//   },
// };

// const contactsInitialState = {
//   items: [],
//   filter: '',
// };

const rooReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(rooReducer, composeWithDevTools());

export default store;
