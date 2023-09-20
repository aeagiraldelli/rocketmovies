import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-columns: auto 1200px auto;
  grid-template-rows: 116px auto;
  grid-template-areas:
    '. search .'
    '. header .'
    '. content .';

  .page-header {
    grid-area: search;
  }

  header {
    grid-area: header;
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 48px 0 10px;

    .btn-add {
      width: 200px;
    }

    .back-link {
      display: flex;
      gap: 10px;
      align-items: center;

      color: ${({ theme }) => theme.COLORS.ACCENT};
    }
  }

  main {
    grid-area: content;
    overflow-y: auto;

    .title {
      display: flex;
      align-items: baseline;
      gap: 10px;

      h2 {
        font-size: 3.6rem;
      }

      .rate-stars {
        color: ${({ theme }) => theme.COLORS.ACCENT};
        font-size: 24px;
        display: flex;
        gap: 5px;
      }
    }

    .tags {
      display: flex;
      gap: 15px;
      margin: 40px 0;
    }

    .movie-description {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 1.8rem;
      font-weight: normal;
      line-height: 1.6;

      p {
        margin-top: 3rem;
        text-align: justify;
        letter-spacing: 1px;
      }
    }
  }
`;

export const Author = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  margin: 24px 0;

  img {
    width: 30px;
    height: 30px;

    border-radius: 50%;
  }

  .inline {
    display: flex;
    align-items: center;
  }

  .record-author,
  .record-date {
    gap: 8px;
  }

  .record-author {
    h3 {
      font-weight: normal;
      font-size: 1.6rem;
      &::before {
        content: 'Por ';
      }
    }
  }

  .record-date {
    .icon {
      color: ${({ theme }) => theme.COLORS.ACCENT};
      font-size: 22px;
    }
  }
`;
