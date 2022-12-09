import React from 'react';
// import React, { useEffect, useState } from 'react';
// import { API_KEY, API_ID } from '../../const/api';
import instance from '../../services/services';
import './_list.scss';

function List() {
    // const [films , setFilms] = useState<any>();
    // console.log(films);
    
    // const getID = async () => {
    //     await instance.get(API_ID)
    //             .then(res => {
    //                 console.log(res);
    //                 setFilms(res)
    //                 return res
    //             })
    // }

    // const dataList = async ()  => {
    //    const data = await instance.get(`/film/303`)
    //         .then(res => {
    //             console.log(res);
    //             return res.data
    //         })
    //         setFilms(data)
    // }

    // useEffect(()=> {
    //     dataList();
    // }, [])

    return <>
        <div className='container'>
            <div className='list__block'>
                <h1>Смотрите кино бесплатно</h1>
                {/* {films.map( (items: string | undefined, id: React.Key | null | undefined) => <div key={id}>
                    <img src={items} />
                </div> 
                )} */}
            </div>
        </div>
    </>
}

export default List;
function dataList() {
    throw new Error('Function not implemented.');
}

