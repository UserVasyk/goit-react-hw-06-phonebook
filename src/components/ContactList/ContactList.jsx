import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { ListItem, List } from './ContactList.styled';
export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
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
