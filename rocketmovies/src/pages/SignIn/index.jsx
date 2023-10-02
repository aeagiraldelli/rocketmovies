import { useState } from 'react';
import { HiMail, HiLockClosed } from 'react-icons/hi';

import { useAuth } from '../../hooks/auth';

import { BigTitle } from '../../components/BigTitle';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

import { Background, Container, Form } from './style';

export function SignIn() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignInClick() {
    if (!email || !password) {
      return alert('Por favor, preencha todos os campos.');
    }

    login({ email, password });
  }

  return (
    <Container>
      <Form>
        <BigTitle title="Rocket Movies" />
        <p>Faça um registro de tudo que você já assistiu.</p>
        <h2>Faça seu login</h2>
        <div className="input-group">
          <Input icon={HiMail} placeholder="E-mail" type="email" required onChange={(e) => setEmail(e.target.value)} />
          <Input icon={HiLockClosed} placeholder="Senha" type="password" required onChange={(e) => setPassword(e.target.value)} />
        </div>
        <Button className="btn-login" title="Entrar" onClick={handleSignInClick} />
        <Link className="link" to="/signup">
          Criar conta
        </Link>
      </Form>
      <Background />
    </Container>
  );
}
