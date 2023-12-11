import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import shortid from 'shortid';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Section from './components/Section';
import Notification from './components/Notification';
import useLocalStorage from './hooks/useLocalStorage';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', initialContacts);
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    setContacts(prevContacts => [contact, ...prevContacts]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const isContactExist = name => {
    return contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const visibleContacts = getVisibleContacts();
  return (
    <div className="container">
      <ToastContainer />

      <Section title="Phonebook">
        <ContactForm
          onFormSubmit={addContact}
          isContactExist={isContactExist}
        />
      </Section>
      <Section title={'Contacts'}>
        {contacts.length > 0 ? (
          <>
            <Filter value={filter} onChange={changeFilter} />
            {visibleContacts.length > 0 ? (
              <ContactList
                data={visibleContacts}
                onDeleteContact={deleteContact}
              />
            ) : (
              <Notification text={'No contacts found'} />
            )}
          </>
        ) : (
          <Notification text={'No contacts in the list'} />
        )}
      </Section>
    </div>
  );
}

export default App;
