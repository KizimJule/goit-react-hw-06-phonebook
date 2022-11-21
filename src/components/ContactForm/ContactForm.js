import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import * as SC from './ContactForm.styled';

export function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  let NameInputId = nanoid();
  let NumberInputId = nanoid();

  const handleInputChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({ name, number });
    reset();
  };
  return (
    <SC.Form onSubmit={handleSubmit}>
      <SC.Label htmlFor={NameInputId}>
        Name
        <SC.Input
          onChange={handleInputChange}
          value={name}
          type="text"
          name="name"
          placeholder="Name"
          id={NameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </SC.Label>
      <SC.Label htmlFor={NumberInputId}>
        Number
        <SC.Input
          value={number}
          onChange={handleInputChange}
          type="tel"
          name="number"
          placeholder="Number"
          id={NumberInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </SC.Label>
      <SC.ButtonForm type="submit">Add contact</SC.ButtonForm>
    </SC.Form>
  );
}

ContactForm.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleInputChange: PropTypes.func,
};
