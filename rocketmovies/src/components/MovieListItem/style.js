import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 32px;
  margin-top: 36px;

  /* background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800}; */
  background: rgba(255, 133, 155, 0.05);
  border-radius: 10px;
  h3 {
    font-size: 2.4rem;
    margin-bottom: 8px;
  }

  p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    line-height: 1.6;
    width: 80ch;
  }

  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .rating {
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.ACCENT};
    margin-bottom: 16px;
  }

  .tags {
    display: flex;
    gap: 20px;

    margin-top: 30px;
  }
`;
