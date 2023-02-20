import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { ListItem, List } from './ContactList.styled';
export const ContactList = () => {
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts.contacts);

  const dispatch = useDispatch();

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  return (
    <List>
      {filterContacts().map(({ id, name, number }) => (
        <ListItem key={id}>
          {name}: {number}
          <button onClick={() => dispatch(deleteContact(id))} type="button">
            Delete
          </button>
        </ListItem>
      ))}
    </List>
  );
};
