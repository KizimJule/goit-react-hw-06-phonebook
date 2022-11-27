import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactSlice';
import * as SC from './ContactForm.styled';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts.contacts);

  let NameInputId = nanoid();
  let NumberInputId = nanoid();
  const dispatch = useDispatch();

  const handleInputChange = evt => {
    const { name, value } = evt.target;
    // console.log(name, value);
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
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const newContact = { id: nanoid(), name, number };
    dispatch(addContact(newContact));
    reset();
  };
  return (
    <SC.Screen>
      <SC.ScreenContent>
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
      </SC.ScreenContent>
      <SC.ScreenBackground>
        <SC.ScreenBackgroundShape4></SC.ScreenBackgroundShape4>
        <SC.ScreenBackgroundShape3></SC.ScreenBackgroundShape3>
        <SC.ScreenBackgroundShape2></SC.ScreenBackgroundShape2>
        <SC.ScreenBackgroundShape1></SC.ScreenBackgroundShape1>
      </SC.ScreenBackground>
    </SC.Screen>
  );
}

ContactForm.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleInputChange: PropTypes.func,
};
