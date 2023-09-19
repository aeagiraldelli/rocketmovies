import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: ${({ $muted }) => ($muted ? '54px' : '48px')};

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, $muted }) =>
    $muted ? theme.COLORS.BLACK : theme.COLORS.ACCENT};

  color: ${({ theme, $muted }) =>
    $muted ? theme.COLORS.ACCENT : theme.COLORS.BACKGROUND_900};

  border: none;
  border-radius: 5px;
  outline: none;

  svg {
    margin-right: 5px;
  }
`;
