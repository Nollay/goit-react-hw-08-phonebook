import { ContactForm } from 'components/phonebook/contactForm/ContactForm';
import { ContactList } from 'components/phonebook/contactList/ContactList';
import { Container } from 'components/phonebook/container';
import Filter from 'components/phonebook/filter/Filer';
import { Loader } from 'components/phonebook/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { fetchContacts } from 'redux/operations';
import { getContacts, getLoading } from 'redux/selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getLoading);

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
export default ContactsPage;
