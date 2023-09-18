import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 116px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_800};

  .title {
    font-size: 2.4rem;
    font-weight: bold;
    margin-right: 64px;
    white-space: nowrap;
    color: ${({ theme }) => theme.COLORS.ACCENT};
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  min-width: 200px;
  margin-left: 64px;

  .info {
    text-align: right;
  }

  .username {
    font-size: 1.4rem;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.WHITE};
    cursor: pointer;
  }

  .exit-link {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    cursor: pointer;
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
    margin-left: 10px;

    cursor: pointer;
  }
`;
