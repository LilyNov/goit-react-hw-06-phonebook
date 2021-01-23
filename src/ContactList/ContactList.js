import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsActions from '../redux/contacts.js/contacts-actions';
import { GoOrganization } from 'react-icons/go';
import { RiDeleteBin3Fill } from 'react-icons/ri';
import s from '../ContactList/ContactList.module.css';

const filterContactsByName = (allContacts, filter) => {
  const normalizedFilter = filter.toLocaleLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLocaleLowerCase().includes(normalizedFilter),
  );
};

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state =>
    filterContactsByName(state.contacts.items, state.contacts.filter),
  );

  const ondeleteContact = id => dispatch(contactsActions.deleteContact(id));

  return (
    <>
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
          <li className={s.item} key={id}>
            <GoOrganization />
            <span className={s.text}>{name}: </span>
            <span className={s.text}>{number}</span>
            <button className={s.btn} onClick={() => ondeleteContact(id)}>
              <RiDeleteBin3Fill value={{ width: 20 }} />{' '}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

// ***Redux***

// import { connect } from 'react-redux';

// const filterContactsByName = (allContacts, filter) => {
//   const normalizedFilter = filter.toLocaleLowerCase();

//   return allContacts.filter(({ name }) =>
//     name.toLocaleLowerCase().includes(normalizedFilter),
//   );
// };

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contacts: filterContactsByName(items, filter),
// });

// const mapDispatchToProps = dispatch => ({
//   ondeleteContact: id => dispatch(contactsActions.deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
