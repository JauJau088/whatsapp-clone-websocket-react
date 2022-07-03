
import useLocalStorage from '../hooks/useLocalStorage';
import Login from './Login';

const App = () => {
  const [id, setId] = useLocalStorage('id');
  
  return (
    <>
      <div>{id}</div>
      <Login onIdSubmit={setId} />
    </>
  );
}

export default App;
