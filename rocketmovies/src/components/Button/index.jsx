import { Container } from './style';

export function Button({ title, muted = false, icon: Icon, ...rest }) {
  return (
    <Container type="button" $muted={muted} {...rest}>
      {Icon && <Icon size={20} />}
      {title}
    </Container>
  );
}
