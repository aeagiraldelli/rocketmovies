import { Container } from './style';

export function Input({ icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={25} className="icon" />}
      <input {...rest} />
    </Container>
  );
}
