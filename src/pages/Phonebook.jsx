import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Section } from '../components/Section/Section';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';

export function Phonebook() {
  const [filter, setFilter] = useState('');
  const contacts = useSelector(state => state.contacts.contacts);

  const filterContactsList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const filterList = evt => {
    setFilter(evt.target.value);
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
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={filterList} />
        <ContactList
          contacts={filterContactsList}
          // deleteContact={deleteContact}
        />
      </Section>
    </div>
  );
}
