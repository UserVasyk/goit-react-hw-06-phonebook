import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactFrom/ContactFrom';
import { Filter } from './Filter/Filter';
import { Title, Box, TitleContacts } from './App.styled';
export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const isExist = contacts.find(contact => contact.name === name);
    if (isExist !== undefined) {
      return alert(`${name} is already in contacts`);
    } else {
      setContacts([...contacts, contact]);
    }
  };
  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  return (
    <Box>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />
      <TitleContacts>Contacts</TitleContacts>
      <Filter changeFilter={changeFilter} filter={filter} />
      <ContactList
        deleteContact={deleteContact}
        contacts={getVisibleContacts()}
      />
    </Box>
  );
};
