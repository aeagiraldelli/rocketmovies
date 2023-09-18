import {
  HiUser,
  HiMail,
  HiLockClosed,
  HiArrowLeft,
  HiCamera,
} from 'react-icons/hi';
import { Link } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Avatar, Container, Form, Header } from './style';

export function Profile() {
  return (
    <Container>
      <Header>
        <Link className="back-icon" to="/">
          <HiArrowLeft />
          Voltar
        </Link>
      </Header>
      <Avatar>
        <img
          src="https://github.com/aeagiraldelli.png"
          alt="Foto do usuário."
        />

        <label htmlFor="input-avatar">
          <HiCamera className="icon" />
          <input type="file" id="input-avatar" />
        </label>
      </Avatar>
      <Form>
        <div className="input-group">
          <Input placeholder="Nome" icon={HiUser} type="text" required />
          <Input placeholder="E-mail" icon={HiMail} type="email" required />
        </div>
        <div className="input-group">
          <Input
            placeholder="Senha atual"
            icon={HiLockClosed}
            type="password"
          />
          <Input placeholder="Nova senha" icon={HiLockClosed} type="password" />
        </div>
        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
