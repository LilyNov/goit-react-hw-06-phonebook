import React from 'react';
import { connect } from 'react-redux';
import * as contactsActions from '../redux/contacts.js/contacts-actions';
import s from '../Filter/Filter.module.css';

const Filter = ({ value, OnFilterContacts }) => (
  <>
    <label>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={OnFilterContacts}
        placeholder=" Fined contacts by name"
      ></input>
    </label>
  </>
);

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  OnFilterContacts: e =>
    dispatch(contactsActions.changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
