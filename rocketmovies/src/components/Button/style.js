import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.ACCENT};
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  outline: none;

  svg {
    margin-right: 5px;
  }
`;
