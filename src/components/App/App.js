import React from "react";
import Form from "../Form";
import { Heading, Span } from "../Typography";
import StyledApp from "./App.styles";

const App = () => {
  return (
    <StyledApp>
      <Heading centered>
        Frontiers <Span pink>Friday Funday</Span>
      </Heading>
      <Form />
    </StyledApp>
  );
};

export default App;
