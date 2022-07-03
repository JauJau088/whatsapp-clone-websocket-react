import { useRef } from 'react';

const NewContactModal = ({ closeModal }) => {
  const idRef = useRef();
  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

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
