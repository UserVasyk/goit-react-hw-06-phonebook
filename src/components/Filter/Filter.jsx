import { FindingContact, Label } from './Filter.styled';
import PropTypes from 'prop-types';
export const Filter = ({ changeFilter, filter }) => (
  <Label>
    Find Contacts by name
    <FindingContact type="text" value={filter} onChange={changeFilter} />
  </Label>
);
Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
