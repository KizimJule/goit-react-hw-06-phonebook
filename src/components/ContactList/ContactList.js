import React from 'react';
import propTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import * as SC from './ContactList.styled';
import { FcPhoneAndroid } from 'react-icons/fc';
import { removeContact } from '../../redux/contactSlice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();
  // const onDeleteContact = contactId => {
  //   dispatch(removeContact({ id: contactId }));
  // };
  return (
    <SC.ContactListUl>
      {contacts.map(({ name, number, id }) => (
        <SC.ContactListLi key={id}>
          <FcPhoneAndroid />
          {name}: {number}
          <SC.ButtonDelete
            type="button"
            // onClick={() => onDeleteContact(id)}
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
  deleteContact: propTypes.func,
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
};
