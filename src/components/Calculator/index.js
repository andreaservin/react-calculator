import React from "react";
import { Container, Screen, Previous, Current } from "./Styled";

export default function Calculator() {
  return (
    <Container>
      <Screen>
        <Previous>10 +</Previous>
        <Current>100</Current>
      </Screen>
    </Container>
  );
}
