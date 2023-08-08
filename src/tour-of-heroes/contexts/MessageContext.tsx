import { FC, ReactNode, createContext, useState } from 'react';

const contextModel = {
  messages: [] as string[],
  add: (message: string) => {},
  clear: () => {},
};

export const MessageContext = createContext(contextModel);

export const MessageContextProvider: FC<{ children: ReactNode }> = (props) => {
  const [messages, setMessages] = useState<Array<string>>([]);

  const add = (message: string) => {
    setMessages([...messages, message]);
  };

  const clear = () => {
    setMessages([]);
  };

  return (
    <MessageContext.Provider value={{ messages, add, clear }}>
      {props.children}
    </MessageContext.Provider>
  );
};
