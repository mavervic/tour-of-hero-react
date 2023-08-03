import { useEffect, useState } from 'react';
import { MESSAGE_API } from '../../api';
import './Messages.scoped.css';

const Msg = ({ msgs }: { msgs: string[] }) => {
  return msgs.map((msg, idx) => <div key={idx}>{msg}</div>);
};

const Messages = () => {
  const [messages, setMessages] = useState<string[]>([]);

  // FIXME - useEffect is called on every render, even if messages is not changed!
  useEffect(() => {
    const intervalId = setInterval(() => {
      // mock api call
      const newMessages = [...MESSAGE_API.messages];
      if (newMessages.length !== messages.length) {
        console.log('Messages component is rendering');
        setMessages(newMessages);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  });

  const handleButtonClick = () => {
    MESSAGE_API.clear();
  };

  return (
    <>
      <h2>Messages</h2>
      <div>
        <button type="button" className="clear" onClick={handleButtonClick}>
          Clear messages
        </button>
        {messages && <Msg msgs={messages} />}
      </div>
    </>
  );
};

export default Messages;
