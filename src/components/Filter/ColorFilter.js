import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { setColorFilterAction } from '../../store/filter/filterSlice';
import { DEFAULT_COLOR } from '../../constans/ColorConstans';
import { contactsSelector } from '../../store/contacts/contactsSelectors';

import style from './Filter.module.css';

const ColorFilter = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(contactsSelector);

  const [activeColor, setActiveColor] = useState('');

  const uniqueColors = [...new Set(contacts.map(contact => contact.color))];

  const isDefaultColorContacts = contacts.some(
    contact => contact.color === DEFAULT_COLOR
  );

  const makeActiveButtonClass = color => {
    const buttonClass = [style.colorFilterButton];
    activeColor === color && buttonClass.push(style.active);
    return buttonClass.join(' ');
  };

  const handleColorFilter = event => {
    const selectedColor = event.currentTarget.value;
    setActiveColor(selectedColor);
    dispatch(setColorFilterAction(selectedColor));
  };

  return (
    <div className={style.colorFilter}>
      <button
        type={'button'}
        value={''}
        className={makeActiveButtonClass('')}
        onClick={handleColorFilter}
      >
        All
        {contacts.length > 0 && <span>({contacts.length})</span>}
      </button>

      {uniqueColors.map(
        (color, index) =>
          color !== DEFAULT_COLOR && (
            <button
              key={`${color + index}`}
              type={'button'}
              value={`${color}`}
              style={{ backgroundColor: ` ${color}` }}
              className={makeActiveButtonClass(color)}
              onClick={handleColorFilter}
            ></button>
          )
      )}
      {isDefaultColorContacts && (
        <button
          type={'button'}
          style={{ backgroundColor: DEFAULT_COLOR }}
          value={DEFAULT_COLOR}
          className={makeActiveButtonClass(DEFAULT_COLOR)}
          onClick={handleColorFilter}
        >
          Other
        </button>
      )}
    </div>
  );
};

export default ColorFilter;
