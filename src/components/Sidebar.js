import { useState } from 'react';
import Contacts from './Contacts';
import Conversations from './Converstations';

const CONVERSTATIONS_KEY = 'conversations';
const CONTACTS_KEY = 'contacts';

const Sidebar = ({ id }) => {
  const [activeKey, setActiveKey] = useState(CONVERSTATIONS_KEY);

  const handleTabClicked = (key) => {
    setActiveKey(key);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <button
              type="button"
              onClick={() => handleTabClicked(CONVERSTATIONS_KEY)}
            >
              Conversations
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => handleTabClicked(CONTACTS_KEY)}
            >
              Contacts
            </button>
          </li>
        </ul>
      </nav>
      {activeKey === CONVERSTATIONS_KEY
        ? <Conversations />
        : <Contacts />
      }
      <div>
        Your ID: {id}
      </div>
      <button>
        {activeKey === CONVERSTATIONS_KEY
          ? 'New Conversation'
          : 'New Contact'
        }
      </button>
    </div>
  );
};

export default Sidebar;
