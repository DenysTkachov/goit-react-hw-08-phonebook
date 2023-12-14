import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { fetchContacts } from '../redux/contacts/contactsOperations';

import  ContactForm  from '../components/ContactForm/ContactForm ';
import  ContactList  from '../components/ContactList/ContactList ';
import  Filter  from '../components/Filter/Filter';
import { selectIsLoading } from '../redux/contacts/selectors';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {/* <h1>`Телефонна книга` < /h1> */}
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactForm />
      <h2>Контакти</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
