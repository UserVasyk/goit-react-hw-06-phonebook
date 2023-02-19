import { FindingContact, Label } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <Label>
      Find Contacts by name
      <FindingContact
        type="text"
        onChange={evt => dispatch(setFilter(evt.currentTarget.value))}
      />
    </Label>
  );
};
