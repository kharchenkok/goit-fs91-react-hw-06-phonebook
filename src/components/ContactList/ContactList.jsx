import React from 'react';
import { BiSolidUserRectangle, BiPhone } from 'react-icons/bi';
import style from './ContactList.module.css';

const ContactList = ({ data, onDeleteContact }) => {
  return (
    <ul className={style.contact__list}>
      {data.map(({ id, name, number }) => (
        <li key={id} className={style.contact__item}>
          <p>
            <BiSolidUserRectangle />
            {name}
          </p>
          <p>
            <BiPhone />
            {number}
          </p>
          <button
            type={'button'}
            onClick={() => onDeleteContact(id)}
            className={style.contact__button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
