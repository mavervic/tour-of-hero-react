import { messageAPI } from '../../api';
import './Messages.module.css';

function Msg() {
  return messageAPI.messages.map((message) => {
    return <div>{message}</div>;
  });
}

export default function Messages() {
  const hasMsg = messageAPI.messages.length > 0;
  return (
    hasMsg && (
      <>
        <div>
          <h2>Messages</h2>
          <button
            type="button"
            className="clear"
            onClick={() => messageAPI.clear()}
          >
            Clear messages
          </button>
          <Msg />
        </div>
      </>
    )
  );
}
