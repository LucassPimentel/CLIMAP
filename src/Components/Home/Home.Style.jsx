import styledComponents from "styled-components";

export const ContainerHome = styledComponents.div`
background: #017F71;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: white;
`;
export const ContainerAllInfos = styledComponents.div`
-webkit-box-shadow: 0px 0px 16px 2px #000000; 
box-shadow: 0px 0px 16px 2px #000000;
background: rgb(4,0,77);
background: linear-gradient(180deg, rgba(4,0,77,1) 4%, rgba(0,103,124,1) 82%);
border-radius: 8px;
background-size: cover;
height: 80vh;
width: 25vw;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
margin-bottom: 1em;
`;
export const ContainerTempAndState = styledComponents.div`
// background: blue;
cursor: default;
text-align: center;
height: 45vh;
width: 15vw;
padding: 1em;
`;
export const StyleInput = styledComponents.input`
border: none;
padding: 0.7em;
`;
export const StyleDivInfos = styledComponents.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 1em;

h4{
    text-transform: capitalize;
}

`;
export const StyleImg = styledComponents.img`
width: 8vw;
`;
export const StyleButton = styledComponents.button`
background-color: white;
padding: 0.7em;
border: none;
cursor: pointer;
`;
export const OtherInfosStyle = styledComponents.div`
border-bottom: 1px solid white;
cursor: default;
width: 22vw;
display: flex;
justify-content: space-around;
`;
export const TemperaturesInfosStyle = styledComponents.div`
display: flex;
width: 15vw;
align-items: center;
justify-content: end;
gap: 1em;

`;
