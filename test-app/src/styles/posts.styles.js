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
  display: grid;
  grid-template-rows: 30px 30px max-content 20px;
  justify-items: left;
  p{
    text-align: left;
    background: rgb(60, 79, 101);
    color:rgb(230, 245, 255);
  }
`;

export const DivBoxCreatePostSC = styled.div`
  width: 100%;
  height: max-content;
  display: grid;
  grid-template-rows: repeat(4,minmax(30px, max-content));
  gap: 20px;
  background: rgb(131, 76, 105);
  padding: 20px;
  box-sizing: border-box;
  border-radius: 20px;
`;

export const InputCreatePostSC = styled.input`
    background: initial;
  border: none;
  border-bottom: 1px solid rgb(121, 66, 95);
  color:rgb(230, 245, 255);
  :focus{
    border: none;
    border-bottom: 1px solid rgb(161, 106, 135);
    outline: none;
  }
  ::placeholder{
    color:rgb(200, 215, 235);
  }
`;

export const TextAreaCreatePostSC = styled.textarea`
    background: initial;
  border: none;
  border-bottom: 1px solid rgb(121, 66, 95);
  color:rgb(230, 245, 255);
  min-height:30px;
  font-family: 'Source Code Pro', monospace;
  :focus{
    border: none;
    border-bottom: 1px solid rgb(161, 106, 135);
    outline: none;
  }
  ::placeholder{
    color:rgb(200, 215, 235);
  }
`;

export const ButtonPostSC = styled.button`
   background: rgb(60, 79, 101);
  border: none;
  color:rgb(230, 245, 255);
  border-radius: 15px;
  cursor: pointer;
  :hover{
    background: rgb(50, 69, 91);
  }
  :active{
    background: rgb(40, 59, 81);
  }
`;

export const SpanTimeSC = styled.span`
  font-size: 12px;
  text-decoration: underline;
`

