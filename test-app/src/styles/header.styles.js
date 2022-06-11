import styled from "styled-components/macro";

export const CustomHeader = styled.header`
  position: fixed;
  width: 100vw;
`

export const DivBoxHeaderSC = styled.div`
  
    height: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 100px);
  background: rgba(60, 79, 101, 0.6);
`;


export const DivBackHeaderSC = styled.div`
    background: rgb(60, 79, 101);
  width: 100vw;
`;

export const ButtonHeaderSC = styled.button`
  font-family: 'Source Sans Pro', sans-serif;
  background: initial;
  border: none;
  border-right: 1px solid rgb(50, 69, 91);
  color: rgb(230, 245, 255);
`