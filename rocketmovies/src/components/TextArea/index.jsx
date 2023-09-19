import { Container } from './style';

export function TextArea({ icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={25} className="icon" />}
      <textarea {...rest} />
    </Container>
  );
}
