import propTypes from 'prop-types';
import * as SC from './Filter.styled';

export const Filter = ({ value, onChange }) => (
  <SC.FilterLabel>
    Find contacts by Name
    <SC.FilterInput
      type="text"
      name="filter"
      placeholder="Search contact"
      value={value}
      onChange={onChange}
    />
  </SC.FilterLabel>
);

Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};
