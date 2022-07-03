import { useState } from 'react';
import Contacts from './Contacts';
import Conversations from './Converstations';
import NewContactModal from './NewContactModal';
import NewConversationModal from './NewConversationModal';

const CONVERSTATIONS_KEY = 'conversations';
const CONTACTS_KEY = 'contacts';

const Sidebar = ({ id }) => {
  const [activeKey, setActiveKey] = useState(CONVERSTATIONS_KEY);
  const [modalOpen, setModalOpen] = useState(false);

  const handleTabClicked = (key) => {
    setActiveKey(key);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  }

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
      <button onClick={() => setModalOpen(true)}>
        {activeKey === CONVERSTATIONS_KEY
          ? 'New Conversation'
          : 'New Contact'
        }
      </button>
      {modalOpen
        ? (activeKey === CONVERSTATIONS_KEY
          ? <NewConversationModal closeModal={handleCloseModal} />
          : <NewContactModal closeModal={handleCloseModal} />)
        : <></>
      }
    </div>
  );
};

export default Sidebar;
