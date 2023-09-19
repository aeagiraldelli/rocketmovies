import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  display: flex;
  align-items: center;

  border-radius: 5px;
  overflow: hidden;

  textarea {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: none;
    outline: none;
    width: 100%;
    height: 274px;
    padding: 12px;
    resize: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

    &::-ms-reveal {
      filter: invert(85%);
    }
  }

  .icon {
    margin-left: 12px;
  }
`;
