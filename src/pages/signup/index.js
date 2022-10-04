import React, { useContext, useState } from 'react';
import logo from '../../img/logo.svg'
import {
    FormsPageContainer,
    FormContainer,
    FormButton,
    PasswordInput,
    GenericInput,
    Header,
    SignUpImg,
    PageTitle,
    CpfInput

} from '../../components';
import { useForm } from '../../hooks/useForm'
import { GlobalStateContext } from '../../global/globalStateContext';
import axios from 'axios';
import { BASE_URL } from '../../constants/constants';
import { goToAddressPage } from '../../routes/Coordinator';
import { useNavigate } from 'react-router-dom';

export function SignUpPage() {

    const navigate = useNavigate();

    // STATES

    const { validateWords, validateEmail, validatePassword, validateCPF, isValidated } = useContext(GlobalStateContext)

    const [isNameValid, setIsNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isCPFValid, setIsCPFValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);

    const [showSignUpPassword, setShowSignUpPassword] = useState(false);
    const [showSignUpPasswordConfirm, setShowSignUpPasswordConfirm] = useState(false);
    const [form, onChangeInputs] = useForm({
        name: '',
        email: '',
        cpf: '',
        password: '',
        confirmpsw: ''
    });

    // FUNCTIONS

    const toggleSignUpPassword = () => {
        setShowSignUpPassword(!showSignUpPassword);
    }
    const toggleSignUpPasswordConfirm = () => {
        setShowSignUpPasswordConfirm(!showSignUpPasswordConfirm);
    }

    const submitForm = (e) => {
        e.preventDefault();

        setIsNameValid(validateWords(form.name))
        setIsEmailValid(validateEmail(form.email))
        setIsCPFValid(validateCPF(form.cpf))
        setIsPasswordValid(validatePassword(form.password))

        if (form.password === form.confirmpsw) {
            setIsConfirmPasswordValid(true)
        } else {
            setIsConfirmPasswordValid(false)
        }

        if (validateWords(form.name) && validateEmail(form.email) && validateCPF(form.cpf) && validatePassword(form.password) && (form.password === form.confirmpsw)) {
            isValidated.current = true
        }

        isValidated.current && axios.post(`${BASE_URL}signup`, form)
            .then(response => {
                console.log(response)
                localStorage.setItem('identification', response.data.token)
                goToAddressPage(navigate)
                isValidated.current = false
            })
            .catch(err => {
                alert(err.response.data.message)
                console.log(err)
            })        
    }


    return (
        <FormsPageContainer>
            <Header buttonExists={true} />
            <SignUpImg src={logo} alt='logo' />
            <PageTitle>Cadastrar</PageTitle>
            <FormContainer onSubmit={submitForm}>
                <GenericInput
                    value={form.name}
                    onChange={onChangeInputs}
                    name={'name'}
                    label={'Nome'}
                    placeHolder={'Nome e sobrenome'}
                    error={!isNameValid}
                    helperText={'Digite um nome com pelo menos 2 letras.'}
                    required={true}
                />
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
                <CpfInput
                    value={form.cpf}
                    onChange={onChangeInputs}
                    name={'cpf'}
                    label={'CPF'}
                    placeHolder={'000.000.000-00'}
                    error={!isCPFValid}
                    helperText={'CPF inválido.'}
                    required={true}
                />
                <PasswordInput
                    value={form.password}
                    onChange={onChangeInputs}
                    name={'password'}
                    label={'Senha'}
                    placeHolder={'Mínimo 6 caracteres'}
                    showPassword={showSignUpPassword}
                    togglePassword={toggleSignUpPassword}
                    error={!isPasswordValid}
                    helperText={'Senha inválida.'}
                    required={true}
                />
                <PasswordInput
                    value={form.confirmpsw}
                    onChange={onChangeInputs}
                    name={'confirmpsw'}
                    label={'Confirmar'}
                    placeHolder={'Confirme a senha anterior'}
                    showPassword={showSignUpPasswordConfirm}
                    togglePassword={toggleSignUpPasswordConfirm}
                    error={!isConfirmPasswordValid}
                    helperText={'A confirmação de senha não confere.'}
                    required={true}
                />
                <FormButton type='submit'>Criar</FormButton>
            </FormContainer>
        </FormsPageContainer>
    );

}
