import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operation';
import { getContacts, getFiler } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFiler);
  const dispatch = useDispatch();
  const deleteSelectedContact = contactID => dispatch(deleteContact(contactID));
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.phone}
          <button
            type="button"
            onClick={() => deleteSelectedContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
