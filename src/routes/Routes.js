import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import {
    HomePage,
    FeedPage,
    SignUpPage,
    AddressPage,
    LoginPage,
    DetailsPage,
    CartPage,
    ProfilePage,
    EditAddressPage,
    EditUserPage
} from '../pages'


export function RoutesComponent() {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="/feed" element={<FeedPage/>}/>
                <Route path="/signup" element={<SignUpPage />}/>
                <Route path="/address" element={<AddressPage />}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/details/:id" element={<DetailsPage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="/profile" element={<ProfilePage/>}/>
                <Route path="/edit-address" element={<EditAddressPage/>}/>
                <Route path="/edit-user" element={<EditUserPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}