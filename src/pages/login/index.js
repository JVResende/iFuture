import React, { useContext, useState } from 'react';
import logo from '../../img/logo.svg'
import {
    FormsPageContainer,
    FormContainer,
    FormButton,
    PasswordInput,
    GenericInput,
    SignUpButton,
    LoginImg,
    PageTitle
} from '../../components';
import { useForm } from '../../hooks/useForm'
import axios from 'axios';
import { BASE_URL } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';
import { goToAddressPage, goToFeedPage, goToSignupPage } from '../../routes/Coordinator';
import { GlobalStateContext } from '../../global/globalStateContext';

export function LoginPage() {

    const navigate = useNavigate()

    // STATES

    const { validateEmail, validatePassword, isValidated } = useContext(GlobalStateContext)

    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const [form, onChangeInputs] = useForm({
        email: '',
        password: ''
    });

    // FUNCTIONS

    const toggleLoginPassword = () => {
        setShowLoginPassword(!showLoginPassword);
    }

    const submitForm = (e) => {
        e.preventDefault();

        setIsEmailValid(validateEmail(form.email))
        setIsPasswordValid(validatePassword(form.password))

        if (validateEmail(form.email) && validatePassword(form.password)) {
            isValidated.current = true
        }

        isValidated.current && axios.post(`${BASE_URL}login`, form)
            .then(response => {
                if (response.data.user.hasAddress === true) {
                    localStorage.setItem('token', response.data.token)
                    goToFeedPage(navigate)
                } else {
                    goToAddressPage(navigate)
                }
                isValidated.current = false
            })
            .catch(err => {
                alert(err.response.data.message)
                console.log(err)
            })

    }


    return (
        <FormsPageContainer>
            <LoginImg src={logo} alt='logo' />
            <PageTitle>Entrar</PageTitle>
            <FormContainer onSubmit={submitForm} >
                <GenericInput
                    value={form.email}
                    onChange={onChangeInputs}
                    name={'email'}
                    label={'E-mail'}
                    placeHolder={'email@email.com'}
                    error={!isEmailValid}
                    helperText={'E-mail inválido.'}
                    required={true}
                />
                <PasswordInput
                    value={form.password}
                    onChange={onChangeInputs}
                    name={'password'}
                    label={'Password'}
                    placeHolder={'Mínimo 6 caracteres'}
                    showPassword={showLoginPassword}
                    togglePassword={toggleLoginPassword}
                    error={!isPasswordValid}
                    helperText={'Senha inválida.'}
                    required={true}
                />
                <FormButton type='submit'>Entrar</FormButton>
            </FormContainer>
            <SignUpButton onClick={() => goToSignupPage(navigate)} >Não possui cadastro? Clique aqui.</SignUpButton>
        </FormsPageContainer>
    );

}
