import React from 'react';
import {
    FormsPageContainer,
    Header,
    LoadingDiv,
    PrefilledUserForm
} from '../../components';
import { BASE_URL } from '../../constants/constants';
import { useRequestData } from '../../hooks/useRequestData';
import gif from '../../img/loading-gif.gif'
import { useProtectedPage } from "../../hooks/useProtectedPage"
import * as All from './style'


export function EditUserPage() {

    useProtectedPage();

    // REQUEST

    const [profileData, isLoading, error] = useRequestData(`${BASE_URL}profile`)

    const profileArray = [{...profileData}]

    const profileValues = profileData && profileArray.map(value => {
        return {
            name: value.user.name,
            email: value.user.email,
            cpf: value.user.cpf
        }
    })


    return (
        <FormsPageContainer>
            <Header buttonExists={true} pageTitle={'Editar'} />
            <All.MarginDiv />
            {isLoading && <LoadingDiv><img src={gif} alt="gif" /></LoadingDiv>}
            {!isLoading && profileData && <PrefilledUserForm defaultValues={profileValues[0]} />}
            {!isLoading && !profileData && error}

        </FormsPageContainer>
    );

}