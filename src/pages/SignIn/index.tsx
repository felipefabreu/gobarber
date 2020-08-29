import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import LogoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './style';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={LogoImg} alt="GoBarber" />

      <form>
        <h1>Faça seu logon</h1>
        <input placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
        <a href="forgot">Esqueci a senha</a>
      </form>

      <a href="create">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
