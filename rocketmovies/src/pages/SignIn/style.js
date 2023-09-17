import styled from 'styled-components';
import { Link } from 'react-router-dom';

import bgImg from '../../assets/background.png';

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-columns: 637px auto;
  grid-template-areas: 'form background';
`;

export const Background = styled.div`
  background: url(${bgImg}) no-repeat center;
  background-size: cover;
  grid-area: background;
  opacity: 50%;
`;

export const Form = styled.form`
  grid-area: form;

  margin: 235px auto 0;

  p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 1.4rem;
  }

  h2 {
    margin: 48px 0;
    font-size: 2.4rem;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .btn-login {
    margin-top: 24px;
  }

  .link {
    display: block;
    width: 100%;
    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.ACCENT};
    text-align: center;
  }
`;
