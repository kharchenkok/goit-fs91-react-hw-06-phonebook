import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import NameFilter from './components/Filter';
import Section from './components/Section';

import PhoneIcon from './images/phonebook.png';

function App() {
  return (
    <>
      <ToastContainer />

      <header className={'header'}>
        <div className="container">
          <h1 className={'pageTitle'}>
            <img src={`${PhoneIcon}`} alt={''} width={'50'} height={'50'} />
            Phonebook
          </h1>
        </div>
      </header>
      <main>
        <div className={'container'}>
          <div className={'wrapper'}>
            <Section>
              <NameFilter />
              <ContactList />
            </Section>

            <Section title={'Add new contact'}>
              <ContactForm />
            </Section>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
