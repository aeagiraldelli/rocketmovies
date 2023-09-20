import { HiStar, HiOutlineStar } from 'react-icons/hi';

import { Tag } from '../Tag';

import { Container } from './style';

export function MovieListItem({
  id,
  title,
  description,
  rating = 0,
  tags = [],
  ...rest
}) {
  if (rating > 5) {
    rating = 5;
  } else if (rating < 0) {
    rating = 0;
  }

  let rateElements = [];
  for (let i = 0; i < rating; i++) {
    rateElements.push(<HiStar key={Date.now()} />);
  }

  if (rateElements.length < 5) {
    for (let i = rateElements.length; i < 5; i++) {
      rateElements.push(<HiOutlineStar key={Date.now()} />);
    }
  }

  const tagElements = tags.map((tag) => {
    return <Tag name={tag} key={Date.now()} />;
  });

  return (
    <Container key={id}>
      <h3>{title}</h3>
      <div className="rating">{rateElements}</div>
      <p className="truncate">{description}</p>
      <div className="tags">{tagElements}</div>
    </Container>
  );
}
