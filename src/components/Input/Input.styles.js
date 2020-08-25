import styled from "styled-components";

export const InputWrapper = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
`;

export default styled.input`
  outline: 0;
  margin: 0;
  padding: 1em 2em;
  border: ${(props) => (!!props.isError ? `1px solid red` : `none`)};
  background-color: #e4e1db;
  color: #000;
  border-radius: 2em;
  transition: all 0.1s ease-in-out;
  background: #e4e1db;
  box-shadow: inset 5px 5px 10px #c2bfba, inset -5px -5px 10px #fffffc;
`;
