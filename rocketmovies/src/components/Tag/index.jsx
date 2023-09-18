import { Container } from './style';

export function Tag({ name, ...rest }) {
  return (
    <Container>
      <span>{name}</span>
    </Container>
  );
}
