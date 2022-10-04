import { useEffect, useState } from 'react'
import axios from 'axios'
import { useContext } from 'react';
import { GlobalStateContext } from './../global/globalStateContext';

export const useRequestData = (url) => {
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(undefined)
    const [error, setError] = useState(undefined)

    const token = localStorage.getItem('token')

    const { storedArray, cartArray, setCartArray } = useContext(GlobalStateContext)


    useEffect(() => {
        getData()
        storedArray.current = JSON.parse(localStorage.getItem('cart'))
        var testShipping = JSON.parse(localStorage.getItem('shipping'))
        if (token === null || testShipping === null) {
            localStorage.setItem('shipping', 0)
        }
        if (storedArray.current === null) {
            localStorage.setItem('cart', 0)
        }
        if (storedArray.current !== 0) {
            setCartArray(storedArray.current)
        }
        if (cartArray === null) {
            setCartArray([])
        }
    }, [])

    const myHeaders = {
        headers: {
            auth: token
        }
    }

    const getData = () => {
        setIsLoading(true);
        axios.get(url, myHeaders)
            .then(response => {
                setIsLoading(false)
                setData(response.data)
            }).catch(err => {
                setIsLoading(false)
                setError(err)
            })
    }

    return [data, isLoading, error];
}