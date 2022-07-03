import { useRef } from 'react';
import { useContacts } from '../contexts/ContactsProvider';

const NewContactModal = ({ closeModal }) => {
  const idRef = useRef();
  const nameRef = useRef();
  const { createContact } = useContacts();

  const handleSubmit = (e) => {
    e.preventDefault();

    createContact(idRef.current.value, nameRef.current.value)
    closeModal();
  }

  return (
    <div>
      <button onClick={closeModal}>x</button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="contact-id">ID</label>
        <input
          id="contact-id"
          ref={idRef}
          type="text"
          required
        />
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          ref={nameRef}
          type="text"
          required
        />
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default NewContactModal;
