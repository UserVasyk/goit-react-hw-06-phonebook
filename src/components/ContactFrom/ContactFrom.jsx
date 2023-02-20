import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

import { nanoid } from 'nanoid';
import { FieldInput, FormBox, ButtonSubmit, Label } from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const onHandleSubmit = evt => {
    evt.preventDefault();
    setName('');
    setNumber('');
    const isExist = contacts.find(contact => contact.name === name);

    if (isExist !== undefined) {
      return alert(`${name} is already in contacts`);
    }

    dispatch(addContact({ id: nanoid(), name, number }));
  };

  const handleChange = evt => {
    const target = evt.target;

    switch (target.name) {
      case 'name':
        setName(target.value);
        break;
      case 'number':
        setNumber(target.value);
        break;
      default:
        return;
    }
  };

  return (
    <FormBox onSubmit={onHandleSubmit}>
      <Label>
        Name
        <FieldInput
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </Label>
      <Label>
        Number
        <FieldInput
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </Label>
      <ButtonSubmit type="submit">Add contact</ButtonSubmit>
    </FormBox>
  );
};
