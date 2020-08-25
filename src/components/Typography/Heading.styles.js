import styled from "styled-components";

export default styled.h1`
  text-align: ${(props) => (props.centered ? `center` : `left`)};
`;
