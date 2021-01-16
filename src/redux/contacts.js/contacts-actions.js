import { v1 as uuidv1 } from 'uuid';
import * as actionTypes from './contacts-types';

export const addContact = (itemsName, itemsNumber) => ({
  type: actionTypes.ADD,
  payload: {
    id: uuidv1(),
    name: itemsName,
    number: itemsNumber,
  },
});

export const deleteContact = contactId => ({
  type: actionTypes.DELETE,
  payload: contactId,
});

export const changeFilter = value => ({
  type: actionTypes.CHANGE_FILTER,
  payload: value,
});
