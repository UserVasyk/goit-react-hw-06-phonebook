import PropTypes from 'prop-types';
import { ListItem, List } from './ContactList.styled';
export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          {name}: {number}
          <button onClick={() => deleteContact(id)} type="button">
            Delete
          </button>
        </ListItem>
      ))}
    </List>
  );
};

ContactList.propeTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
