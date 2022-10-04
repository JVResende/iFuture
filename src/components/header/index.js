import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/Coordinator";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import * as All from './style'

export function Header({ buttonExists, pageTitle }) {

    const navigate = useNavigate();

    return (
        <All.HeaderContainer>
            {buttonExists && 
                <button onClick={() => { goBack(navigate) }}>
                    <ArrowBackIosIcon style={{ cursor: "pointer", 
                                                width: "19px", 
                                                marginTop: "2px" }}/>
                </button>}
            {(pageTitle && buttonExists) && <All.TitleWithMargin>{pageTitle}</All.TitleWithMargin>}
            {(pageTitle && !buttonExists) && <All.Title>{pageTitle}</All.Title>}
        </All.HeaderContainer>
    )
}