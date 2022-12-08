import axios from 'axios';
import React, { useEffect, useState } from 'react'

function List() {
    const [list, setList] = useState<Object>({});
    console.log(list);
    
    const getFilms = async () => {
        try{
            const res = await axios.get('https://kinobd.ru/api/films', {
                headers: {Accept: 'application/json', 'Content-Type': 'application/json',}
            })            
            .then(res => {
                const film  = res.data.data;            
                setList(film);
                console.log(film);
            })
        }    
        catch (error){
            throw new Error(`Error ${error}`);
            
        }  
    }
    
     useEffect( () => {
        getFilms();
    }, [])
    
    return <>
        {Array.isArray(list) ?
            list.map( (item) => <div key={item.id}>
                <video width='150' height='300'>
                    <source src={item.trailer} type='video/mp4' />
                </video>    
            </div>) : null
        }
    </>
}

export default List;
