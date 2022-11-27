import React from 'react';
import propTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import * as SC from './ContactList.styled';
import { FcPhoneAndroid } from 'react-icons/fc';
import { removeContact } from '../../redux/contactSlice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const filterContactsList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <SC.ContactListUl>
      {filterContactsList.map(({ name, number, id }) => (
        <SC.ContactListLi key={id}>
          <SC.ContactCard>
            <FcPhoneAndroid />
            <SC.ContactTitle>
              {name}: {number}
            </SC.ContactTitle>
          </SC.ContactCard>

          <SC.ButtonDelete
            type="button"
            onClick={() => dispatch(removeContact({ id }))}
          >
            Delete
          </SC.ButtonDelete>
        </SC.ContactListLi>
      ))}
    </SC.ContactListUl>
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
};
