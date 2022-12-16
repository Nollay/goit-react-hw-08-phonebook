import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from './ContactFormStyled';
import { useState } from 'react';
import { getContacts } from 'redux/selectors';
import { notify } from 'components/service';
import { addNewContact } from 'redux/operation';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const handleChange = e => {
    const { name, value } = e.currentTarget;
    name === 'name' ? setName(value) : setPhoneNumber(value);
  };
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name,
      phone,
    };
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      notify(name);
    } else {
      dispatch(addNewContact(contact));
    }
    setName('');
    setPhoneNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Name</p>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        onChange={handleChange}
        required
      />
      <p>Number</p>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={phone}
        onChange={handleChange}
        required
      />
      <Button type="submit">Add contact</Button>
    </form>
  );
};
