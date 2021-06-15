import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import {TextContainerStyled,ActiveContainer,ActiveItem,TextContainerH1,TextContainerIMG} from '../Styled/Styled';

const TextContainer = ({ users }) => (
  <TextContainerStyled>
    {
      users
        ? (
          <div>
            <TextContainerH1>Çevrimiçi </TextContainerH1>
            <ActiveContainer>
              <h2>
                {users.map(({name}) => (
                  <ActiveItem key={name}>{name}
                  <TextContainerIMG alt="Online Icon" src={onlineIcon}/>
                  </ActiveItem>

                ))}
      
              </h2>
              </ActiveContainer>
          </div>
        )
        : null
    }
  </TextContainerStyled>
);

export default TextContainer;