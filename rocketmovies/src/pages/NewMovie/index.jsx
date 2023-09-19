import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { TextArea } from '../../components/TextArea';
import { TagMovieItem } from '../../components/TagMovieItem';

import { Container, Form } from './style';

export function NewMovie() {
  return (
    <Container>
      <div className="page-header">
        <Header />
      </div>
      <header>
        <Link className="back-link" to="/">
          <HiArrowLeft />
          Voltar
        </Link>
        <h2>Novo filme</h2>
      </header>
      <main>
        <Form>
          <div className="input-group-inline">
            <Input placeholder="Título" type="text" />
            <Input
              placeholder="Sua nota (de 0 a 5)"
              type="number"
              min="0"
              max="5"
            />
          </div>
          <TextArea placeholder="Observações" />
          <h3 className="section">Marcadores</h3>
          <div className="tags">
            <TagMovieItem tagName="sci-fi" />
            <TagMovieItem tagName="action" />
            <TagMovieItem isNew placeholder="Nova tag" />
          </div>
          <div className="input-group-inline">
            <Button title="Excluir filme" muted />
            <Button title="Salvar alterações" />
          </div>
        </Form>
      </main>
    </Container>
  );
}
