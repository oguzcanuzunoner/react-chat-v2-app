import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { JoinOuterContainer, JoinInnerContainer, JoinInput, H1Styled, JoinButton } from '../Styled/Styled';
const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (

            <JoinOuterContainer>
                <JoinInnerContainer>
                    <H1Styled>Sohbet İçin Kullanıcı Adı ve Oda İsmi Giriniz.</H1Styled>
                    <div><JoinInput placeholder="Kullanıcı Adı" type="text" onChange={event => setName(event.target.value)} /></div>
                    <div><JoinInput placeholder="Oda Adı" type="text" onChange={event => setRoom(event.target.value)} /></div>
                    <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                        <JoinButton type="submit">Giriş</JoinButton>
                    </Link>
                </JoinInnerContainer>
            </JoinOuterContainer>
    );
};

export default Join;