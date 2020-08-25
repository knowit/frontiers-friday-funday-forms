import styled from "styled-components";

export default styled.span`
  color: ${(props) => (props.pink ? `#FF00FF` : `#000`)};
`;
