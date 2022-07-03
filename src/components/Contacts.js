import { useContacts } from '../contexts/ContactsProvider';

const Contacts = () => {
  const { contacts } = useContacts();

  return (
    <ul>
      {contacts.map((c) => {
        return <li key={c.id}>{c.name}</li>
      })}
    </ul>
  )
}

export default Contacts;
