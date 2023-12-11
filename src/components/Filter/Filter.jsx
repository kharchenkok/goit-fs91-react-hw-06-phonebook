import React from 'react';
import style from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={`${style.filter} form__label`}>
    Find contacts by name
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={'form__input'}
    />
  </label>
);

export default Filter;
