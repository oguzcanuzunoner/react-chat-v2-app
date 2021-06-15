import styled from 'styled-components';


// ----------------------------------> Chat Component Start

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background: #FFFFFF;
border-radius: 8px;
height: 80%;
width: 50%;
@media (max-width: 768px) {
    width: 100%;
    height: 100%;
}
@media (max-width: 768px) {
    width: 60%;
}`;

export const OuterContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-color: #1A1A1D;
@media (max-width: 768px){
    height: 100%;
}`;

// ----------------------------------> Chat Component End

// ----------------------------------> InfoBar Component Start

export const InfoBarStyled = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
background: #2979FF;
border-radius: 4px 4px 0 0;
height: 60px;
width: 100%;`;

export const LeftInnerContainer = styled.div`
flex: 0.5;
display: flex;
align-items: center;
margin-left: 5%;
color: white;`

export const RightInnerContainer = styled.div`
display: flex;
flex: 0.5;
justify-content: flex-end;
margin-right: 5%;`

export const OnlinceIcon = styled.img`margin-right:5%;`

// ----------------------------------> InfoBar Component End

// ----------------------------------> Input Component Start

export const FormStyled = styled.form`
display: flex;
border-top: 2px solid #D3D3D3;`

export const InputStyled = styled.input`
border: none;
border-radius: 0;
padding: 5%;
width: 80%;
font-size: 1.2em;
&:focus {
    outline: none;
}
`;

export const SendButton = styled.button`
color: #fff !important;
text-transform: uppercase;
text-decoration: none;
background: #2979FF;
padding:  0.25em 1em;
display: inline-block;
border: none;
width: 20%;
cursor:pointer;
@media(max-width: 768px) {
    font-size: 25%;
}
`

// ----------------------------------> Input Component End

// ----------------------------------> Join Component Start
export const JoinOuterContainer = styled.div`
display: flex;
justify-content: center;
text-align: center;
height: 100vh;
align-items: center;
background-color: #1a1a1d;
@media (min-width: 320px) and (max-width: 480px) {
    height: 100%;
}
`
export const JoinInnerContainer = styled.div`
width: 50%;
background-color: #757577;
border-radius: 5px;
@media (min-width: 320px) and (max-width: 480px) {
    height: 90%;
}`
export const H1Styled = styled.h1`
color: white;
font-size: 2.5em;
padding-bottom: 10px;
border-bottom: 2px solid white;`

export const JoinInput = styled.input`
border-radius: 3px;
padding: 15px 20px;
width: 75%;
margin: 5px 0;`

export const JoinButton = styled.button`
color: rgba(241,241,242,0.95) !important;
text-transform: uppercase;
text-decoration: none;
background: #2979FF;
padding: 20px;
border-radius: 5px;
display: inline-block;
border: none;
width: 100%;
margin-top:20px;
cursor:pointer;
margin-bottom:0;
&:focus {
    outline: 0;
}
`
// ----------------------------------> Join Component End

// ----------------------------------> TextContainer Component Start

export const TextContainerStyled = styled.div`
display: flex;
flex-direction: column;
margin-left: 10px;
border-radius: 5px;
background-color: #33383b;
color: white;
height: 80%;
width: 50%;
justify-content: space-between;
align-items: center;
overflow: auto;
@media(max-width: 768px) {
    display: none;
}`;

export const ActiveContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 50%;
`

export const ActiveItem = styled.div`
display: flex;
align-items: center;
`

export const TextContainerH1 = styled.h1`margin-bottom:0px;width:20%;`
export const TextContainerIMG = styled.img`padding-left:10px;`






// ----------------------------------> TextContainer Component End

// ----------------------------------> Messages Component Start
export const MessagesStyled = styled.div`
padding: 5% 0;
overflow: auto;
flex: auto;`
// ----------------------------------> Messages Component End

// ----------------------------------> Message Component Start
export const MessageContainerJE = styled.div`
display: flex;
justify-content: flex-end;
padding: 0 5%;
margin-top: 3px;`
export const MessageContainerJS = styled.div`
display: flex;
justify-content: flex-start;
padding: 0 5%;
margin-top: 3px;`

export const SentTextL = styled.p`
display: flex;
align-items: center;
font-family: Helvetica;
color: #828282;
letter-spacing: 0.3px;
padding-left: 10px;`

export const SentTextR = styled.p`
display: flex;
align-items: center;
font-family: Helvetica;
color: #828282;
letter-spacing: 0.3px;
padding-right: 10px;`

export const MessageBoxBlue = styled.div`
background: #F3F3F3;
border-radius: 20px;
padding: 5px 20px;
color: white;
display: inline-block;
max-width: 80%;
background: #2979FF;
`
export const MessageBoxLight = styled.div`
background: #F3F3F3;
border-radius: 20px;
padding: 5px 20px;
color: white;
display: inline-block;
max-width: 80%;
background: #F3F3F3;
`

export const MessageTextWhite = styled.p`
width: 100%;
letter-spacing: 0;
float: left;
font-size: 1.1em;
word-wrap: break-word;
color:white;`
export const MessageTextDark = styled.p`
width: 100%;
letter-spacing: 0;
float: left;
font-size: 1.1em;
word-wrap: break-word;
color:#353535;`

// ----------------------------------> Message Component End



