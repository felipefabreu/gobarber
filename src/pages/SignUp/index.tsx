import React from "react";
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web'


import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {Container, Content, Background} from './styles';

const SignUp: React.FC = () => {

    function handleSubmit(data: any):void {
        console.log(data);
    }

    return (
        <Container>
            <Background/>

            <Content>
                <img src={logoImg} alt="GoBarber" />

                <Form onSubmit={handleSubmit}>

                    <h1>Faça seu logon</h1>

                    <Input icon={FiUser} name="name" placeholder="Nome" />
                    <Input icon={FiMail} name="email" placeholder="E-mail" />
                    <Input icon={FiLock} name="senha" type="password" placeholder="Senha" />

                    <Button type="submit">Cadastrar</Button>

                </Form>

                <a href="login">
                    <FiArrowLeft/>
                    Voltar para logon
                </a>

            </Content>
        </Container>

    );
};

export default SignUp;
