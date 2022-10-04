import React from 'react';
import {
    FormsPageContainer,
    Header,
    LoadingDiv,
    PrefilledAddressForm
} from '../../components';
import { BASE_URL } from '../../constants/constants';
import { useRequestData } from '../../hooks/useRequestData';
import gif from '../../img/loading-gif.gif'
import { useProtectedPage } from "../../hooks/useProtectedPage"
import * as All from './style'


export function EditAddressPage() {

    useProtectedPage();

    // GET FULL ADDRESS

    const [addressData, isLoading, error] = useRequestData(`${BASE_URL}profile/address`)

    const addressArray = [{ ...addressData }]

    const addressValues = addressData && addressArray.map(value => {
        return {
            street: value.address.street,
            number: value.address.number,
            neighbourhood: value.address.neighbourhood,
            city: value.address.city,
            state: value.address.state,
            complement: value.address.complement
        }
    })


    return (
        <FormsPageContainer>
            <Header buttonExists={true} pageTitle={'Endereço'} />
            <All.MarginDiv />
            {isLoading && <LoadingDiv><img src={gif} alt="gif" /></LoadingDiv>}
            {!isLoading && addressData && <PrefilledAddressForm defaultValues={addressValues[0]} />}
            {!isLoading && !addressData && error}

        </FormsPageContainer>
    );

}
