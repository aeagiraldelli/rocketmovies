import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Header = styled.div`
  height: 144px;
  background-color: ${({ theme }) => theme.COLORS.BROWN};

  display: flex;
  align-items: center;

  .back-icon {
    color: ${({ theme }) => theme.COLORS.ACCENT};
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: 124px;
  }
`;

export const Avatar = styled.div`
  --size: 186px;
  position: relative;

  width: var(--size);
  height: var(--size);
  margin: -100px auto 32px;

  img {
    width: var(--size);
    border-radius: 50%;
  }

  label {
    width: 48px;
    height: 48px;

    font-size: 48px;
    border-radius: 50%;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: 7px;
    bottom: 7px;

    input {
      display: none;
    }

    .icon {
      color: ${({ theme }) => theme.COLORS.ACCENT};
    }
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  max-width: 350px;

  display: flex;
  flex-direction: column;
  gap: 24px;

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;
