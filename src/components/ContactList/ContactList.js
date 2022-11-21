import React from 'react';
import propTypes from 'prop-types';
import * as SC from './ContactList.styled';
import { FcPhoneAndroid } from 'react-icons/fc';

export const ContactList = ({ contacts, deleteContact }) => (
  <SC.ContactListUl>
    {contacts.map((contact, id) => (
      <SC.ContactListLi key={id}>
        <FcPhoneAndroid />
        {contact.name}: {contact.number}
        <SC.ButtonDelete
          type="button"
          onClick={() => deleteContact(contact.id)}
        >
          Delete
        </SC.ButtonDelete>
      </SC.ContactListLi>
    ))}
  </SC.ContactListUl>
);
ContactList.propTypes = {
  deleteContact: propTypes.func.isRequired,
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
};
