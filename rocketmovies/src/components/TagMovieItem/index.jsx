import { HiPlus, HiX } from 'react-icons/hi';

import { Container } from './style';

export function TagMovieItem({ tagName, isNew, onClick, ...rest }) {
  return (
    <Container $isnew={isNew}>
      <input type="text" value={tagName} readOnly={!isNew} {...rest} />
      <button
        type="button"
        onClick={onClick}
        className={isNew ? 'btn-add' : 'btn-remove'}
      >
        {isNew ? <HiPlus /> : <HiX />}
      </button>
    </Container>
  );
}
