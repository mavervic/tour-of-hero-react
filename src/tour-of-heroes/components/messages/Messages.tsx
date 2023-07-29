import { messageAPI } from '../../api';
import './Messages.scoped.css';

const Msg = ({ msgs }: { msgs: string[] }) => {
  return msgs.map((msg) => <div>{msg}</div>);
};

const Messages = () => {
  const msgs = messageAPI.messages;
  const hasMsg = msgs.length > 0;

  return (
    <>
      <h2>Messages</h2>
      <div>
        <button
          type="button"
          className="clear"
          onClick={() => messageAPI.clear()}
        >
          Clear messages
        </button>
        {hasMsg && <Msg msgs={msgs} />}
      </div>
    </>
  );
};

export default Messages;
