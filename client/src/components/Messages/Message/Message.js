import React from 'react';
import { MessageContainerJE, SentTextR, MessageBoxBlue, MessageTextWhite, MessageContainerJS, MessageBoxLight, MessageTextDark, SentTextL } from '../../Styled/Styled';
import ReactEmoji from 'react-emoji';

const Message = ({ message: { user, text }, name }) => {
    let isSentByCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName) {
        isSentByCurrentUser = true;
    }
    return (
        isSentByCurrentUser
            ?
            (
                <MessageContainerJE>
                    <SentTextR>{trimmedName}</SentTextR>
                    <MessageBoxBlue>
                        <MessageTextWhite>{ReactEmoji.emojify(text)}</MessageTextWhite>
                    </MessageBoxBlue>
                </MessageContainerJE>

            )
            :
            (<MessageContainerJS>
                <MessageBoxLight>
                    <MessageTextDark>{ReactEmoji.emojify(text)}</MessageTextDark>
                </MessageBoxLight>
                <SentTextL>{user}</SentTextL>
            </MessageContainerJS>

            )
    )
};

export default Message;