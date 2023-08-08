import { useContext } from 'react';
import { MessageContext } from '../../contexts/MessageContext';
import './Messages.scoped.css';

const Msg = ({ msgs }: { msgs: string[] }) => {
  return msgs.map((msg, idx) => <div key={idx}>{msg}</div>);
};

const Messages = () => {
  // const [messages, setMessages] = useState<string[]>([]);

  // // FIXME - useEffect is called on every render, even if messages is not changed!
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     // mock api call
  //     const newMessages = [...MESSAGE_API.messages];
  //     if (newMessages.length !== messages.length) {
  //       console.log('Messages component is rendering');
  //       setMessages(newMessages);
  //     }
  //   }, 1000);

  //   return () => clearInterval(intervalId);
  // });

  const msgCtx = useContext(MessageContext);

  const handleButtonClick = () => {
    msgCtx.clear();
  };

  return (
    <>
      <h2>Messages</h2>
      <div>
        <button type="button" className="clear" onClick={handleButtonClick}>
          Clear messages
        </button>
        {msgCtx?.messages && <Msg msgs={msgCtx?.messages} />}
      </div>
    </>
  );
};

export default Messages;
