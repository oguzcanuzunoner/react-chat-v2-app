import React, { useRef, useEffect } from 'react';

import Message from './Message/Message';

import { MessagesStyled } from '../Styled/Styled';

const Messages = ({ messages, name }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages]);
  return (
    <MessagesStyled>
      {messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)}
      <div ref={messagesEndRef} />
    </MessagesStyled>
  );
}
export default Messages;