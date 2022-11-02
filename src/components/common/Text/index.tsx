import {FC} from 'react';

import {Container} from './styles';

export interface TextProps {
  text: string;
}

export const Text: FC<TextProps> = () => (
  <Container>
    <h1>Text</h1>
  </Container>
);
