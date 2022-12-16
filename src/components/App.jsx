import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from './phonebook/contactForm/ContactForm';
import { ContactList } from './phonebook/contactList/ContactList';
import { Container } from './phonebook/container';
import Filter from './phonebook/filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operation';
import { Loader } from './phonebook/Loader/Loader';

export const App = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Container>
        <h2>Phonebook</h2>
        <ContactForm />
        <h2>Contacts</h2>
        {isLoading && <Loader />}
        {contacts.length > 1 && <Filter />}
        {contacts.length > 0 ? (
          <ContactList />
        ) : (
          <p
            style={{
              marginBottom: '25px',
              lineHeight: '1.15',
            }}
          >
            You have no contacts saved
          </p>
        )}
      </Container>
    </>
  );
};
