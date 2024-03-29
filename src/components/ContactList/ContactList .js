import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import { selectVisibleContacts } from '../../redux/contacts/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}{' '}
          <button onClick={() => handleDeleteContact(contact.id)}>
            Видалити
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
