import React, { useEffect, useState } from 'react';
import { API_ID } from '../../const/api';
import instance from '../../services/services';
import './_list.scss';

function List() {
    const [id , setID] = useState<any>();
    const [films , setFilms] = useState<any>();
    console.log(id);
    console.log(films);
    
    const getID = async () => {
        await instance({
            method: 'get',
            url: API_ID,
            withCredentials: false,
        })
        .then(res => {
            console.log(res);
            setID(res.data.data)
        })
        .catch((err) => {
            console.error(err)
        })
    }

    const dataList = async ()  => {
        await instance({
            method: 'get',
            url: `/film/${id}`,
            withCredentials: false,
        })
        .then(res => {
            console.log(res);
            setFilms(res)
        })
        .catch((err) => {
            console.error(err);
        })
    }

    useEffect(()=> {
        getID();
        dataList();
    }, [])

    return <>
        <main className='container'>
            <div className='list__block'>
                <h1>Смотрите кино бесплатно</h1>
                {/* {films.map( (items: string | undefined, id: React.Key | null | undefined) => <div key={id}>
                    <img src={items} />
                </div> 
                )} */}
            </div>
        </main>
    </>
}

export default List;

