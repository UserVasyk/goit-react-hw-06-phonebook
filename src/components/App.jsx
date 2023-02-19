import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactFrom/ContactFrom';
import { Filter } from './Filter/Filter';
import { Title, Box, TitleContacts } from './App.styled';
import { useSelector } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  const fftest = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);

  const addContactm = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const isExist = contacts.find(contact => contact.name === name);
    if (isExist !== undefined) {
      return alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact(contact));

      console.log('contactsGG: ', contacts);
    }
  };

  const getVisibleContacts = () => {
    const normalizedFilter = fftest.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Box>
      <h1>{fftest}</h1>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContactm} />
      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      <ContactList contacts={getVisibleContacts()} />
    </Box>
  );
};
