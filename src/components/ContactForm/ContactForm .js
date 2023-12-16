import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from '../../redux/contacts/contactsOperations';
import { selectContacts } from '../../redux/contacts/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [contact, setContact] = useState({ name: '', number: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = e => {
    setErrorMessage('');
    const { name, value } = e.target;
    setContact(prevContact => ({
      ...prevContact,
      [name]: value,
    }));
  };

    const handleAddContact = async e => {
      e.preventDefault();
      const { name, number } = contact;

    
      if (name.trim() === '' || number.trim() === '') {
        setErrorMessage('Name and number are required.');
        return;
      }

      const existingContact = contacts.find(
        c => c.name.toLowerCase() === name.toLowerCase() || c.number === number
      );
      if (existingContact) {
        setErrorMessage('Цей контакт та номер вже існує.');
        return;
      }

      dispatch(addContact({ name, number }));

      setContact({ name: '', number: '' });
    };




  return (
    <>
      <form onSubmit={handleAddContact}>
        <label>Ім'я</label>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={handleInputChange}
          required
        />
        <label>Номер</label>
        <input
          type="tel"
          name="number"
          value={contact.number}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Додати контакт</button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </>
  );
};

export default ContactForm;
