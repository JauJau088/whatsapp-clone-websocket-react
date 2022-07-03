
import useLocalStorage from '../hooks/useLocalStorage';
import Dashboard from './Dashboard';
import Login from './Login';

const App = () => {
  const [id, setId] = useLocalStorage('id');
  
  return (
    id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />
  );
}

export default App;
