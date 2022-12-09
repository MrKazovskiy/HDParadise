import React, { useEffect, useState } from 'react';
import { API_ID } from '../../const/api';
import instance from '../../services/services';
import './_list.scss';

function List() {
    const [id , setID] = useState<any>();
    // const [films , setFilms] = useState<any>();
    console.log(id);
    
    const getID = async () => {
        await instance.get(API_ID, {
            withCredentials: true,
        })
        .then(res => {
            console.log(res);
            setID(res)
            return res
        })
    }

    // const dataList = async ()  => {
    //    const data = await instance.get(`/film/303`)
    //         .then(res => {
    //             console.log(res);
    //             return res.data
    //         })
    // API_KEY,
    //         setFilms(data)
    // }

    useEffect(()=> {
        getID();
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
// function dataList() {
//     throw new Error('Function not implemented.');
// }

