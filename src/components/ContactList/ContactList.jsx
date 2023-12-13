import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactAction } from '../../store/contacts/contactsSlice';
import { BiSolidUserRectangle, BiPhone } from 'react-icons/bi';
import ColorFilter from '../Filter/ColorFilter';
import Notification from '../Notification';
import { showInfo } from '../../utils/ToastNotification';
import { contactsSelector } from '../../store/contacts/contactsSelectors';
import { filterSelector } from '../../store/filter/filterSelector';
import style from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(contactsSelector);
  const { nameFilter, colorFilter } = useSelector(filterSelector);

  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
      (colorFilter === '' || contact.color === colorFilter)
  );

  const handleDelete = (id, name) => {
    dispatch(deleteContactAction(id));
    showInfo(`Contact ${name} deleted`);
  };
  return (
    <div>
      {contacts.length > 0 && <ColorFilter />}
      {filteredContacts.length > 0 && contacts.length > 0 ? (
        <ul className={style.contactList}>
          {filteredContacts.map(({ id, name, number, color }) => (
            <li key={id} className={style.contactItem}>
              <p>
                <BiSolidUserRectangle
                  style={{ color: color }}
                  className={style.nameIcon}
                />
                {name}
              </p>
              <p>
                <BiPhone />
                {number}
              </p>
              <button
                type={'button'}
                onClick={() => handleDelete(id, name)}
                className={style.contactDelButton}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <Notification text={'No contacts in the list'} />
      )}
    </div>
  );
};
export default ContactList;
