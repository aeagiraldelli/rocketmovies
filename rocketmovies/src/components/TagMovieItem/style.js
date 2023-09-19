import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, $isnew }) =>
    $isnew ? 'transparent' : theme.COLORS.BACKGROUND_800};

  border-radius: 10px;
  border: ${({ theme, $isnew }) =>
    $isnew ? `2px dashed ${theme.COLORS.BACKGROUND_800}` : 'none'};

  color: ${({ theme }) => theme.COLORS.WHITE};

  input {
    width: 100%;
    height: 56px;
    padding: 12px;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  button {
    border: none;
    background: none;
    padding: 16px;
    font-size: 20px;
  }

  .btn-remove {
    color: ${({ theme }) => theme.COLORS.RED};
  }

  .btn-add {
    color: ${({ theme }) => theme.COLORS.ACCENT};
  }
`;
