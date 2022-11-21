import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export function App() {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(window.localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
  );
  const [filter, setFilter] = useState('');

  const formSubmit = ({ name, number }) => {
    console.log({ name, number });
    const contact = { id: nanoid(), name, number };
    if (contacts.some(e => e.name === name)) {
      return alert(`${name} is already in contacts!`);
    }
    setContacts([contact, ...contacts]);
  };

  const filterContactsList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const filterList = evt => {
    setFilter(evt.target.value);
  };

  const deleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId)
    );
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        gap: 20,
      }}
    >
      <h1
        style={{
          display: 'none',
        }}
      >
        Phonebook
      </h1>
      <Section title="Phonebook">
        <ContactForm onSubmit={formSubmit} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={filterList} />
        <ContactList
          contacts={filterContactsList}
          deleteContact={deleteContact}
        />
      </Section>
    </div>
  );
}
