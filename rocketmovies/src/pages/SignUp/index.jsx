import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiArrowLeft, HiMail, HiLockClosed, HiUser } from 'react-icons/hi';

import { api } from '../../services/api';

import { BigTitle } from '../../components/BigTitle';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

import { Background, Container, Form } from './style';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navitate = useNavigate();

  function handleSignUpClick() {
    if (!name || !email || !password) {
      return alert('Por favor, preencha todos os campos.');
    }

    console.debug(name, email, password);

    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('Cadastro realizado com sucesso.');
        navitate('/');
      })
      .catch((error) => {
        if (error.response) {
          return alert(error.response.data.message);
        } else {
          return alert(
            'Não foi possível realizar o cadastro. Tente novamente mais tarde.'
          );
        }
      });
  }

  return (
    <Container>
      <Form>
        <BigTitle title="Rocket Movies" />
        <p>Faça um registro de tudo que você já assistiu.</p>
        <h2>Crie sua conta</h2>
        <div className="input-group">
          <Input
            icon={HiUser}
            placeholder="Nome"
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            icon={HiMail}
            placeholder="E-mail"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={HiLockClosed}
            placeholder="Senha"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          className="btn-login"
          title="Cadastrar"
          onClick={handleSignUpClick}
        />
        <Link className="link" to="/">
          <HiArrowLeft size={20} />
          Voltar para a tela de login
        </Link>
      </Form>
      <Background />
    </Container>
  );
}
