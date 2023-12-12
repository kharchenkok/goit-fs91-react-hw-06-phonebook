import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      {
        id: 'id-1',
        name: 'Rosie Simpson',
        number: '459-12-56',
        color: '#faae20',
      },
      {
        id: 'id-2',
        name: 'Hermione Kline',
        number: '443-89-12',
        color: '#4CAF50',
      },
      {
        id: 'id-3',
        name: 'Eden Clements',
        number: '645-17-79',
        color: '#2196F3',
      },
      {
        id: 'id-4',
        name: 'Annie Copeland',
        number: '227-91-26',
        color: '#E91E63',
      },
    ],
  },
  reducers: {
    addContactAction: {
      prepare: contact => {
        return {
          payload: {
            ...contact,
            id: nanoid(),
          },
        };
      },
      reducer: (state, action) => {
        return {
          ...state,
          contacts: [action.payload, ...state.contacts],
        };
      },
    },
    deleteContactAction: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContactAction, deleteContactAction } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
