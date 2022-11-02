import { FC } from 'react';

import { Container } from "./styles"

export interface TextProps {}

export const Text: FC<TextProps> = () => (
  <Container>
    <h1>Text</h1>
  </Container>
)
