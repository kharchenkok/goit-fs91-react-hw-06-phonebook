import React, { useReducer } from 'react';
import { showError, showWarning } from '../../utils/ToastNotification';

// ============== useReducer ====================================================================
const formReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return { ...state, [action.field]: action.value };
    case 'RESET':
      return { name: '', number: '' };
    default:
      return state;
  }
};

export default function ContactForm({ isContactExist, onFormSubmit }) {
  const [formData, dispatch] = useReducer(formReducer, {
    name: '',
    number: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    dispatch({ type: 'CHANGE', field: name, value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    const { name, number } = formData;

    if (name.trim() === '' || number.trim() === '') {
      showError('Make sure all fields are completed!');
      return;
    }

    if (isContactExist(name)) {
      showWarning(`${name} is already in contacts!`);
      return;
    }

    onFormSubmit({ name, number });
    dispatch({ type: 'RESET' });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="form__label">
        Name
        <input
          type="text"
          name="name"
          value={formData.name}
          required
          onChange={handleChange}
          className="form__input"
        />
      </label>
      <label className="form__label">
        Phone number
        <input
          type="tel"
          value={formData.number}
          name="number"
          required
          onChange={handleChange}
          className="form__input"
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
}

// ============== useState name and number ====================================================================

// export default function ContactForm({ isContactExist, onFormSubmit }) {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//
//   const handleSubmit = event => {
//     event.preventDefault();
//
//     if (name.trim() === '' || number.trim() === '') {
//       showError('Make sure all fields are completed!');
//       return;
//     }
//
//     if (isContactExist(name)) {
//       showWarning(`${name} is already in contacts!`);
//       return;
//     }
//
//     onFormSubmit({ name, number });
//     setName('');
//     setNumber('');
//   };
//
//   // const handleNameChange = event => {
//   //   setName(event.currentTarget.value);
//   // };
//   //
//   // const handleNumberChange = event => {
//   //   setNumber(event.currentTarget.value);
//   // };
//
//   return (
//     <form onSubmit={handleSubmit} className={'form'}>
//       <label className={'form__label'}>
//         Name
//         <input
//           type="text"
//           name={'name'}
//           value={name}
//           required
//           onChange={event => setName(event.currentTarget.value)}
//           className={'form__input'}
//         />
//       </label>
//       <label className={'form__label'}>
//         Phone number
//         <input
//           type="tel"
//           value={number}
//           name={'number'}
//           required
//           onChange={event => setNumber(event.currentTarget.value)}
//           className={'form__input'}
//         />
//       </label>
//
//       <button type={'submit'}>Add contact</button>
//     </form>
//   );
// }

// ============== useState FormData ====================================================================

// export default function ContactForm({ isContactExist, onFormSubmit }) {
//     const [formData, setFormData] = useState({ name: '', number: '' });
//
//     const handleSubmit = event => {
//         event.preventDefault();
//
//         const { name, number } = formData;
//
//         if (name.trim() === '' || number.trim() === '') {
//             showError('Make sure all fields are completed!');
//             return;
//         }
//
//         if (isContactExist(name)) {
//             showWarning(`${name} is already in contacts!`);
//             return;
//         }
//
//         onFormSubmit({ name, number });
//         setFormData({ name: '', number: '' });
//     };
//     const handleFormChange = event => {
//         const { name, value } = event.currentTarget;
//         setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
//     };
//     return (
//         <form onSubmit={handleSubmit} className={'form'}>
//             <label className={'form__label'}>
//                 Name
//                 <input
//                     type="text"
//                     name={'name'}
//                     value={formData.name}
//                     required
//                     onChange={handleFormChange}
//                     className={'form__input'}
//                 />
//             </label>
//             <label className={'form__label'}>
//                 Phone number
//                 <input
//                     type="tel"
//                     value={formData.number}
//                     name={'number'}
//                     required
//                     onChange={handleFormChange}
//                     className={'form__input'}
//                 />
//             </label>
//
//             <button type={'submit'}>Add contact</button>
//         </form>
//     );
// }
