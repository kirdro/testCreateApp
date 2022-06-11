import styled from "styled-components/macro";

export const DivBoxPostSC = styled.div`
    width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
`;

export const DivPostColumnSC = styled.div`
    display: grid;
  grid-template-rows: repeat(auto-fit, max-content);
  gap: 20px;
  padding-top: 20px;
`;

export const DivBoxPostItemSC = styled.div`
    width: 100%;
  height: fit-content;
  background: rgb(230, 245, 255);
  padding: 20px;
  border-radius: 20px;
  box-sizing: border-box;
`