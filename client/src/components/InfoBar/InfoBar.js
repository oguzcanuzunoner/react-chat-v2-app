import React from 'react';
import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';
import { InfoBarStyled, LeftInnerContainer, RightInnerContainer,OnlinceIcon } from '../Styled/Styled'
const InfoBar = ({ room }) => {
    return (
        <InfoBarStyled>
            <LeftInnerContainer>
                <OnlinceIcon src={onlineIcon} alt="online" />
                <h3>{room}</h3>
            </LeftInnerContainer>
            <RightInnerContainer>
                <a href="/"><img src={closeIcon} alt="close" /></a>
            </RightInnerContainer>
        </InfoBarStyled>
    );
};

export default InfoBar;