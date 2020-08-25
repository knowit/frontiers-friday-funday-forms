import styled from "styled-components";

export default styled.div`
  max-width: ${(props) => (props.narrow ? `16rem` : `auto`)};
  margin: 0 auto;
`;
