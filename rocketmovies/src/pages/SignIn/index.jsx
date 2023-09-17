import { HiMail, HiLockClosed } from 'react-icons/hi';

import { Background, Container, Form } from './style';

import { BigTitle } from '../../components/BigTitle';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

export function SignIn() {
  return (
    <Container>
      <Form>
        <BigTitle title="Rocket Movies" />
        <p>Faça um registro de tudo que você já assistiu.</p>
        <h2>Faça seu login</h2>
        <div className="input-group">
          <Input icon={HiMail} placeholder="E-mail" type="email" required />
          <Input
            icon={HiLockClosed}
            placeholder="Senha"
            type="password"
            required
          />
        </div>
        <Button className="btn-login" title="Entrar" />
        <Link className="link" to="/signup">
          Criar conta
        </Link>
      </Form>
      <Background />
    </Container>
  );
}
