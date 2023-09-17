import { Container } from './style';

export function BigTitle({ title, ...rest }) {
  return (
    <Container>
      <h1 {...rest}>{title}</h1>
    </Container>
  );
}
