import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Login = ({ onIdSubmit }) => {
  const idRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    onIdSubmit(idRef.current.value);
    e.target.reset();
  }

  const handleNewId = () => {
    onIdSubmit(uuidv4());
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input-id">Enter your ID</label>
        <input
          id="input-id"
          type="text"
          ref={idRef}
          required
        />
        <button type="submit">Login</button>
        <button type="button" onClick={handleNewId}>Create a new ID</button>
      </form>
    </div>
  );
};

export default Login;
