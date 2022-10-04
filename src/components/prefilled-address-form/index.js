import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FormContainer,
    FormButton,
    GenericInput,
} from '..';
import { GlobalStateContext } from '../../global/globalStateContext';
import { useForm } from '../../hooks/useForm'
import { goToProfilePage } from '../../routes/Coordinator';
import { BASE_URL } from '../../constants/constants';


export function PrefilledAddressForm({ defaultValues }) {

    const navigate = useNavigate()

    const token = localStorage.getItem('token')

    // STATES

    const { validateWords, validateNumber, isValidated } = useContext(GlobalStateContext)

    const [isStreetValid, setIsStreetValid] = useState(true);
    const [isNumberValid, setIsNumberValid] = useState(true);
    const [isNeighbourhoodValid, setIsNeighbourhoodValid] = useState(true);
    const [isCityValid, setIsCityValid] = useState(true);
    const [isStateValid, setIsStateValid] = useState(true);

    const [form, onChangeInputs] = useForm(defaultValues);


    // FUNCTIONS

    const submitForm = (e) => {
        e.preventDefault();

        setIsStreetValid(validateWords(form.street))
        setIsNumberValid(validateNumber(form.number))
        setIsNeighbourhoodValid(validateWords(form.neighbourhood))
        setIsCityValid(validateWords(form.city))
        setIsStateValid(validateWords(form.state))


        if (validateWords(form.street) && validateNumber(form.number) && validateWords(form.neighbourhood) && validateWords(form.city) && validateWords(form.state)) {
            isValidated.current = true
        }

        isValidated.current && axios.put(`${BASE_URL}address`, form, { headers: { auth: token } })
            .then(response => {
                goToProfilePage(navigate)
                isValidated.current = false
            })
            .catch(err => {
                alert(err.response.data.message)
                console.log(err)
            })
    }

    return (
        <FormContainer onSubmit={submitForm}>
            <GenericInput
                value={form.street}
                onChange={onChangeInputs}
                name={'street'}
                label={'Logradouro'}
                placeHolder={'Rua / Av.'}
                required={true}
                error={!isStreetValid}
                helperText={'Digite um endereço com pelo menos 3 letras.'}
            />
            <GenericInput
                value={form.number}
                onChange={onChangeInputs}
                name={'number'}
                label={'Número'}
                placeHolder={'Número'}
                required={true}
                error={!isNumberValid}
                helperText={'Digite apenas números.'}
            />
            <GenericInput
                value={form.complement}
                onChange={onChangeInputs}
                name={'complement'}
                label={'Complemento'}
                placeHolder={'Apto. / Bloco'}
                required={false}
                error={false}
            />
            <GenericInput
                value={form.neighbourhood}
                onChange={onChangeInputs}
                name={'neighbourhood'}
                label={'Bairro'}
                placeHolder={'Bairro'}
                required={true}
                error={!isNeighbourhoodValid}
                helperText={'Digite um bairro com pelo menos 3 letras.'}
            />
            <GenericInput
                value={form.city}
                onChange={onChangeInputs}
                name={'city'}
                label={'Cidade'}
                placeHolder={'Cidade'}
                required={true}
                error={!isCityValid}
                helperText={'Digite uma cidade com pelo menos 3 letras.'}
            />
            <GenericInput
                value={form.state}
                onChange={onChangeInputs}
                name={'state'}
                label={'Estado'}
                placeHolder={'Estado'}
                required={true}
                error={!isStateValid}
                helperText={'Digite um estado com pelo menos 3 letras.'}
            />
            <FormButton type='submit'>Salvar</FormButton>
        </FormContainer>
    );

}
