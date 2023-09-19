import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

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

  .back-link {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  header {
    grid-area: header;

    height: 92px;
    width: 100%;
    margin-top: 40px;

    h2 {
      font-size: 3.6rem;
      margin: 24px 0 40px;
    }

    a {
      color: ${({ theme }) => theme.COLORS.ACCENT};
    }
  }

  main {
    grid-area: content;
    overflow-y: auto;
    padding: 40px 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;

  .input-group-inline {
    display: flex;
    gap: 40px;
    align-items: center;
  }

  .section {
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;

    background-color: ${({ theme }) => theme.COLORS.BLACK};
    border-radius: 5px;

    padding: 40px 20px;
  }
`;
