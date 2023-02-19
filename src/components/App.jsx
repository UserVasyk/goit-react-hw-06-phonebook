import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactFrom/ContactFrom';
import { Filter } from './Filter/Filter';
import { Title, Box, TitleContacts } from './App.styled';

export const App = () => {
  return (
    <Box>
      <Title>Phonebook</Title>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      <ContactList />
    </Box>
  );
};
