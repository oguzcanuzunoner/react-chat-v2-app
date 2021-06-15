import React from 'react';
import { FormStyled, InputStyled, SendButton } from '../Styled/Styled';
const Input = ({ message, setMessage, sendMessage }) => {
    return (
        <FormStyled>
            <InputStyled type="text"
                placeholder="Mesajınızı giriniz..."
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null} />
            <SendButton onClick={(event) => sendMessage(event)} >Gönder</SendButton>
        </FormStyled>


    );
};

export default Input;