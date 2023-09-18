import { HiPlus } from 'react-icons/hi';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';

import { Container } from './style';
import { MovieListItem } from '../../components/MovieListItem';

export function Home() {
  return (
    <Container>
      <div className="page-header">
        <Header />
      </div>
      <header>
        <h2>Meus Filmes</h2>
        <div className="btn-add">
          <Button icon={HiPlus} title="Adicionar filme" />
        </div>
      </header>
      <main>
        <section className="movie-list">
          <MovieListItem
            title="Interestellar"
            rating={4}
            tags={['fiction', 'sci-fi', 'action']}
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex voluptates quasi ipsa. Deserunt, accusamus? Aliquid, quidem consequatur. Laudantium molestiae, nobis consectetur laborum sed accusantium exercitationem veritatis alias quae, blanditiis corrupti!"
          />
          <MovieListItem
            title="Interestellar"
            rating={4}
            tags={['fiction', 'sci-fi', 'action']}
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex voluptates quasi ipsa. Deserunt, accusamus? Aliquid, quidem consequatur. Laudantium molestiae, nobis consectetur laborum sed accusantium exercitationem veritatis alias quae, blanditiis corrupti!"
          />
          <MovieListItem
            title="Interestellar"
            rating={4}
            tags={['fiction', 'sci-fi', 'action']}
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex voluptates quasi ipsa. Deserunt, accusamus? Aliquid, quidem consequatur. Laudantium molestiae, nobis consectetur laborum sed accusantium exercitationem veritatis alias quae, blanditiis corrupti!"
          />
          <MovieListItem
            title="Interestellar"
            rating={4}
            tags={['fiction', 'sci-fi', 'action']}
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex voluptates quasi ipsa. Deserunt, accusamus? Aliquid, quidem consequatur. Laudantium molestiae, nobis consectetur laborum sed accusantium exercitationem veritatis alias quae, blanditiis corrupti!"
          />
          <MovieListItem
            title="Interestellar"
            rating={4}
            tags={['fiction', 'sci-fi', 'action']}
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex voluptates quasi ipsa. Deserunt, accusamus? Aliquid, quidem consequatur. Laudantium molestiae, nobis consectetur laborum sed accusantium exercitationem veritatis alias quae, blanditiis corrupti!"
          />
          <MovieListItem
            title="Interestellar"
            rating={4}
            tags={['fiction', 'sci-fi', 'action']}
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex voluptates quasi ipsa. Deserunt, accusamus? Aliquid, quidem consequatur. Laudantium molestiae, nobis consectetur laborum sed accusantium exercitationem veritatis alias quae, blanditiis corrupti!"
          />
          <MovieListItem
            title="Interestellar"
            rating={4}
            tags={['fiction', 'sci-fi', 'action']}
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex voluptates quasi ipsa. Deserunt, accusamus? Aliquid, quidem consequatur. Laudantium molestiae, nobis consectetur laborum sed accusantium exercitationem veritatis alias quae, blanditiis corrupti!"
          />
          <MovieListItem
            title="Interestellar"
            rating={4}
            tags={['fiction', 'sci-fi', 'action']}
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex voluptates quasi ipsa. Deserunt, accusamus? Aliquid, quidem consequatur. Laudantium molestiae, nobis consectetur laborum sed accusantium exercitationem veritatis alias quae, blanditiis corrupti!"
          />
        </section>
      </main>
    </Container>
  );
}
