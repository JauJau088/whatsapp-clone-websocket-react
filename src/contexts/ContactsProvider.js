import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const ContactsContext = createContext();

const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  
  const createContact = (id, name) => {
    setContacts((prevContacts) => [...prevContacts, { id, name }]);
  };
  
  return (
    <ContactsContext.Provider value={{ contacts, createContact }}>
      {children}
    </ContactsContext.Provider>
  );
};

export default ContactsProvider;

export const useContacts = () => useContext(ContactsContext);
