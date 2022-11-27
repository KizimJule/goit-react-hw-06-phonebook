// import propTypes from 'prop-types';
import * as SC from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';

import { filterList } from '../../redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  return (
    <SC.FilterLabel>
      Find contacts by Name
      <SC.FilterInput
        type="text"
        name="filter"
        placeholder="Search contact"
        value={filter}
        onChange={evt => dispatch(filterList(evt.target.value))}
      />
    </SC.FilterLabel>
  );
};
