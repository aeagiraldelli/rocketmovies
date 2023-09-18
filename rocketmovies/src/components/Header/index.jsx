import { Link } from 'react-router-dom';

import { Input } from '../Input';

import { Container, Profile } from './style';

export function Header() {
  return (
    <Container>
      <h2 className="title">Rocket Movies</h2>
      <Input placeholder="Pesquisar pelo título do filme" />
      <Profile>
        <div className="info">
          <Link to="/profile" className="username">
            Ademir Giraldelli
          </Link>
          <div>
            <p className="exit-link">sair</p>
          </div>
        </div>
        <Link to="/profile">
          <img
            src="https://github.com/aeagiraldelli.png"
            alt="Foto do usuário."
          />
        </Link>
      </Profile>
    </Container>
  );
}
