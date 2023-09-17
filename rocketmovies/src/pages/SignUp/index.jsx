import { HiArrowLeft, HiMail, HiLockClosed, HiUser } from 'react-icons/hi';

import { Background, Container, Form } from './style';

import { BigTitle } from '../../components/BigTitle';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

export function SignUp() {
  return (
    <Container>
      <Form>
        <BigTitle title="Rocket Movies" />
        <p>Faça um registro de tudo que você já assistiu.</p>
        <h2>Crie sua conta</h2>
        <div className="input-group">
          <Input icon={HiUser} placeholder="Nome" type="text" required />
          <Input icon={HiMail} placeholder="E-mail" type="email" required />
          <Input
            icon={HiLockClosed}
            placeholder="Senha"
            type="password"
            required
          />
        </div>
        <Button className="btn-login" title="Cadastrar" />
        <Link className="link" to="/">
          <HiArrowLeft size={20} />
          Voltar para a tela de login
        </Link>
      </Form>
      <Background />
    </Container>
  );
}
