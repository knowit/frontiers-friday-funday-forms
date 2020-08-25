import styled from "styled-components";

export default styled.button`
  display: inline-flex;
  outline: 0;
  margin: 3rem 0 1rem;
  padding: 1em 2em;
  border: none;
  background-color: #e4e1db;
  text-align: center;
  color: #000;
  border-radius: 2em;
  cursor: pointer;
  line-height: 1em;
  transition: all 0.1s ease-in-out;
  box-shadow: 5px 5px 10px #c2bfba, -5px -5px 10px #fffffc;

  &:hover {
    text-decoration: underline;
  }

  &:active {
    background: #e4e1db;
    box-shadow: inset 5px 5px 10px #c2bfba, inset -5px -5px 10px #fffffc;
  }
`;
