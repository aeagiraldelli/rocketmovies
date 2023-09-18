import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-columns: 128px auto 128px;
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

    h2 {
      font-size: 3.2rem;
      font-weight: normal;
    }

    .btn-add {
      width: 200px;
    }
  }

  main {
    grid-area: content;
    overflow-y: auto;
  }
`;
