import styled from "styled-components";

export const InputWrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  & + & {
    margin-top: 2rem;
  }
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
`;

export default styled.input`
  outline: 0;
  margin: 0;
  padding: 1em 2em;
  border: ${(props) => (!!props.error ? `1px solid red` : `none`)};
  background-color: #e4e1db;
  color: #000;
  border-radius: 2em;
  transition: all 0.1s ease-in-out;
  background: #e4e1db;
  box-shadow: inset 5px 5px 10px #c2bfba, inset -5px -5px 10px #fffffc;
  opacity: ${(props) => props.opacity};
`;
