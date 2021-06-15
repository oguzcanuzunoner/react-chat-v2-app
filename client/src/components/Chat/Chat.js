import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import TexContainer from '../TextContainer/TextContainer'
import {Container, OuterContainer} from '../Styled/Styled';
let socket;
const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'http://localhost:5000/';
    // const ENDPOINT = '{SERVER_DOMAIN}';

    useEffect(() => {
        // const data = queryString.parse(location.search) // data is an object. came to Name and Room parameters in adress bar. name and room in data object.
        // console.log(location.search) // ?name=xxx&room=xxx
        // console.log(data)           // {name : xxx, room : xxx}
        const { name, room } = queryString.parse(location.search)
        socket = io(ENDPOINT);
        setName(name);
        setRoom(room);
        // console.log(name, room); 
        socket.emit('join', { name, room }, (error) => {
            if (error) { alert(error) };
        });
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', message => {
            setMessages(messages => [...messages, message]);
        });
        socket.on("roomData", ({ users }) => {
            setUsers(users);
        });
    }, [])

    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    // console.log(message, messages);

    return (
        <OuterContainer>
            <Container>
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </Container>
            <TexContainer users={users} />
        </OuterContainer>
    );
};

export default Chat;