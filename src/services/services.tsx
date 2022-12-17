import React, { FC, useEffect, useState } from 'react'
import axios from 'axios';
import { API_URL, API_KEY} from '../const/api';
import { Main } from '../components/Main/Main';

export const instance = axios.create({
    withCredentials: false,
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});


export const Services: FC = () => {
    const [films , setFilms] = useState<any>([]);   
    const [serials , setSerials] = useState<any>([]);    
 
    
    const getFilms = async () => {
        await instance.get(`/movie?field=type&search=movie&field=year&search=2022-2022&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_KEY}`)
        .then( res => {            
            setFilms(res.data.docs)
        })
        .catch((err) => {
            console.error(err)
        })
    }
    
    const getSerials = async () => {
        await instance.get(`/movie?field=type&search=tv-series&field=year&search=2022-2022&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_KEY}`)
        .then( res => {            
            setSerials(res.data.docs)
        })
        .catch((err) => {
            console.error(err)
        })
    }


    useEffect(() => {
        getFilms();
        getSerials();
    }, [])

    return <>
        <Main itemsFilm={films} itemsSerial={serials} />
    </>
}

